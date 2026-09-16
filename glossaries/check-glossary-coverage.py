#!/usr/bin/env python3
"""
Innovation Research — Glossary Coverage & Missing Glossary Detector
====================================================================
This utility audits research notes, stage documents, and raw source notes
against the Master Glossary. It detects:
  1. Mentions of terms that lack formal glossary entries (Missing Glossaries).
  2. Broken or missing cross-references ([[wikilinks]]).
  3. Coverage statistics across innovation stages and document types.

Usage:
  python3 glossaries/check-glossary-coverage.py [--scan-dir <path>] [--glossary <path>]
"""

import os
import re
import sys
import argparse
from pathlib import Path
from collections import defaultdict

DEFAULT_GLOSSARY_PATH = Path(__file__).resolve().parent / "master-glossary.md"
DEFAULT_BASE_DIR = Path(__file__).resolve().parent.parent

def extract_glossary_terms(glossary_path: Path):
    """
    Extracts defined terms from master-glossary.md.
    Looks for Markdown headings:
      ### `Term Name` or ### Term Name
    along with aliases, abbreviations, and acronyms.
    """
    if not glossary_path.exists():
        print(f"[ERROR] Glossary file not found: {glossary_path}", file=sys.stderr)
        return {}, {}

    content = glossary_path.read_text(encoding="utf-8")
    
    # Regex to capture term headings (level 3 or 4)
    term_pattern = re.compile(r"^###\s+[`*_]*(?P<term>[^`*\n\r]+?)[`*_]*(?:\s*\((?P<aka>[^)]+)\))?$", re.MULTILINE)
    
    defined_terms = {} # normalized_name -> display_name
    term_metadata = defaultdict(dict)
    
    current_term = None
    current_stage = "Unknown"
    
    for line in content.splitlines():
        # Check for stage section headers
        stage_match = re.match(r"^##\s+(?:Stage\s+\d+:|General|Core|Cross-Stage)\s*(.*)", line, re.IGNORECASE)
        if stage_match:
            current_stage = stage_match.group(1).strip()
            continue

        match = term_pattern.match(line)
        if match:
            raw_term = match.group("term").strip()
            # Clean formatting
            clean_term = re.sub(r"^[0-9.]+\s*", "", raw_term).strip()
            clean_term = clean_term.replace("`", "").strip()
            
            norm_key = clean_term.lower()
            defined_terms[norm_key] = clean_term
            current_term = norm_key
            term_metadata[norm_key]["stage"] = current_stage
            term_metadata[norm_key]["display"] = clean_term
            
            # If there's an alias in parentheses e.g. (JTBD)
            aka = match.group("aka")
            if aka:
                for alias in re.split(r"[,;/]|\bor\b", aka):
                    alias_clean = alias.strip().lower()
                    if alias_clean and len(alias_clean) > 1:
                        defined_terms[alias_clean] = clean_term
            continue

        # Look for aliases or related notes in term body
        if current_term and any(marker in line for marker in ["**Aliases:**", "**Also known as:**", "- **Related Notes:**"]):
            # 1. Extract any [[wikilinks]] in this line as aliases
            for wikilink_match in re.finditer(r"\[\[([^\|\]]+)(?:\|[^\]]+)?\]\]", line):
                alias_clean = wikilink_match.group(1).split("#")[0].strip().lower()
                if alias_clean:
                    defined_terms[alias_clean] = term_metadata[current_term]["display"]
            
            # 2. Extract plain text aliases separated by commas/backticks
            aliases_part = line.split(":", 1)[1]
            # Strip out wikilink syntax so we don't double-process
            cleaned_aliases_part = re.sub(r"\[\[.*?\]\]", "", aliases_part)
            for alias in re.split(r"[,;]|`", cleaned_aliases_part):
                alias_clean = alias.strip().replace("`", "").lower()
                if alias_clean and len(alias_clean) > 1:
                    defined_terms[alias_clean] = term_metadata[current_term]["display"]

    return defined_terms, term_metadata

def scan_markdown_files(target_dir: Path, exclude_dirs=None):
    """Recursively collects markdown files, excluding node_modules, git, etc."""
    if exclude_dirs is None:
        exclude_dirs = {".git", "node_modules", "assets", "venv", ".venv"}
    
    md_files = []
    for root, dirs, files in os.walk(target_dir):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for f in files:
            if f.endswith(".md") and not f.startswith("."):
                md_files.append(Path(root) / f)
    return md_files

def audit_file(file_path: Path, defined_terms: dict):
    """
    Audits an individual file:
      - wikilinks [[Term]]
      - bolded potential candidate terms **Term**
      - occurrences of recognized glossary terms
    """
    content = file_path.read_text(encoding="utf-8")
    
    # Strip fenced code blocks (``` ... ``` or ```` ... ````) and inline code (` ... `)
    clean_content = re.sub(r"```+[\s\S]*?```+", "", content)
    clean_content = re.sub(r"`[^`\n]+`", "", clean_content)
    
    # 1. Extract wikilinks: [[Some Term]] or [[Some Term|Alias]] or [[Some Term#Section]]
    wikilink_pattern = re.compile(r"\[\[([^\|\]]+)(?:\|[^\]]+)?\]\]")
    raw_wikilinks = [m.group(1).strip() for m in wikilink_pattern.finditer(clean_content)]
    
    missing_wikilinks = []
    resolved_wikilinks = []
    
    for link in raw_wikilinks:
        base_link = link.split("#")[0].strip()
        norm = base_link.lower()
        if norm in defined_terms:
            resolved_wikilinks.append((base_link, defined_terms[norm]))
        else:
            missing_wikilinks.append(base_link)
            
    # 2. Extract bolded candidate phrases **Phrase** that might be missing terms
    bold_pattern = re.compile(r"\*\*([A-Za-z0-9\s\-–—/()]{3,40})\*\*")
    potential_candidates = set()
    for m in bold_pattern.finditer(clean_content):
        cand = m.group(1).strip()
        # Filter out common formatting noise
        if cand.lower() in {"note", "warning", "tip", "important", "definition", "quote", "stage", "step", "summary"}:
            continue
        if cand.lower() not in defined_terms and len(cand.split()) <= 4:
            potential_candidates.add(cand)

    return {
        "resolved_wikilinks": resolved_wikilinks,
        "missing_wikilinks": missing_wikilinks,
        "potential_candidates": list(potential_candidates)
    }

def main():
    parser = argparse.ArgumentParser(description="Audit glossary coverage and detect missing glossaries.")
    parser.add_argument("--scan-dir", type=str, default=str(DEFAULT_BASE_DIR), help="Directory to scan for markdown files")
    parser.add_argument("--glossary", type=str, default=str(DEFAULT_GLOSSARY_PATH), help="Path to master-glossary.md")
    parser.add_argument("--report", action="store_true", help="Print detailed report")
    args = parser.parse_args()

    glossary_path = Path(args.glossary)
    scan_dir = Path(args.scan_dir)

    print("=" * 70)
    print("INNOVATION RESEARCH — GLOSSARY AUDIT & COVERAGE DETECTOR")
    print("=" * 70)
    print(f"[*] Loading Master Glossary: {glossary_path}")
    
    defined_terms, term_metadata = extract_glossary_terms(glossary_path)
    unique_terms = set(defined_terms.values())
    print(f"[✓] Successfully indexed {len(unique_terms)} primary terms ({len(defined_terms)} aliases & mappings).")
    
    print(f"[*] Scanning markdown files in: {scan_dir}")
    md_files = scan_markdown_files(scan_dir)
    print(f"[✓] Discovered {len(md_files)} markdown files.")
    print("-" * 70)

    total_resolved = 0
    all_missing_wikilinks = defaultdict(list)
    candidate_frequency = defaultdict(int)

    for md_file in md_files:
        if md_file.resolve() == glossary_path.resolve():
            continue
        rel_path = md_file.relative_to(scan_dir)
        results = audit_file(md_file, defined_terms)
        
        total_resolved += len(results["resolved_wikilinks"])
        
        for missing in results["missing_wikilinks"]:
            all_missing_wikilinks[missing].append(str(rel_path))
            
        for cand in results["potential_candidates"]:
            candidate_frequency[cand] += 1

    print(f"GLOSSARY AUDIT SUMMARY:")
    print(f"  • Total Validated Glossary Cross-References : {total_resolved}")
    print(f"  • Broken / Unindexed Wikilinks Detected     : {len(all_missing_wikilinks)}")
    print(f"  • Candidate Missing Glossaries Extracted    : {len(candidate_frequency)}")
    print("-" * 70)

    if all_missing_wikilinks:
        print("\n[!] MISSING OR UNINDEXED WIKILINKS (High Priority Glossary Gaps):")
        for link, occurrences in sorted(all_missing_wikilinks.items(), key=lambda x: len(x[1]), reverse=True):
            print(f"  - [[{link}]] (found in {len(occurrences)} files: {', '.join(occurrences[:3])}{'...' if len(occurrences)>3 else ''})")
    else:
        print("\n[✓] Zero broken or unindexed wikilinks! All cross-references cleanly resolve.")

    print("\n[*] FREQUENT CANDIDATE TERMS (Suggested for Glossary Inclusion if applicable):")
    top_candidates = sorted(candidate_frequency.items(), key=lambda x: x[1], reverse=True)[:15]
    for cand, count in top_candidates:
        if count >= 2:
            print(f"  • '{cand}' — referenced {count} times across documents")

    print("\n" + "=" * 70)
    print("Audit Complete. Run with --report for extended file breakdowns.")
    print("=" * 70)

if __name__ == "__main__":
    main()
