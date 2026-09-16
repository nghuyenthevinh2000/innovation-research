# How-To Guide: Audit & Expand the Master Glossary

> **Diátaxis How-To Guide:** Step-by-step instructions for running the glossary audit tool, detecting missing innovation concepts in notes, and adding new entries to the master repository.

---

## Prerequisites & Goal

- **Prerequisites:** Python 3.8+ installed; terminal access within the repository.
- **Goal:** Audit markdown notes for terminology coverage, identify broken wikilinks or undefined terms, and register new concepts with zero semantic errors in under 10 minutes.

---

## Step 1: Run the Automated Audit Script

Navigate to the root directory and run:

```bash
# Scan the local repository
python3 glossaries/check-glossary-coverage.py

# Scan a specific directory of external or newly authored research notes
python3 glossaries/check-glossary-coverage.py --scan-dir /path/to/notes
```

---

## Step 2: Review the Audit Diagnostic Output

The scanner reports three sections:
1. **Validated Glossary Cross-References:** Total number of indexed terms and aliases recognized across documentation.
2. **Unindexed Terms & Gaps:** Any concept that was referenced in notes but lacks an entry or alias in `master-glossary.md`.
3. **Frequent Candidate Terms:** Recurring bolded concepts that appear across multiple notes and may warrant formal glossary definitions.

---

## Step 3: Apply the 3-Question Glossary Filter

For each candidate phrase reported by the tool, ask:
1. **Is it a domain mechanism?** (e.g., *Negative Working Capital*, *Wizard of Oz MVP*, *FTO Clearance* vs. generic business talk).
2. **Does it exist under another alias?** (Check if the term is already covered under a synonym in `master-glossary.md`).
3. **Will misunderstanding it cause a venture failure?** If yes, it must be added.

---

## Step 4: Add the New Glossary Entry

Open `glossaries/master-glossary.md` and insert the entry under the appropriate Innovation Stage section:

```markdown
### `Canonical Term Name` (Acronym)
- **Aliases:** `Alternative Name 1`, `Synonym 2`
- **Definition:** Precise 2–3 sentence operational definition explaining what the mechanism is and its commercial importance.
- **Formula / Axiom (if applicable):** LaTeX equation or ratio.
- **Originators:** Key researchers or founders who formalized it.
- **Stage:** Stage 1 through Stage 8 where the term is most active.
- **Common Trap:** The specific cognitive or operational error founders commit.
- **Related Terms:** Cross-links to other defined terms (e.g., Term Name 1, Term Name 2).
```

---

## Step 5: Verify Coverage

Re-run the audit script:

```bash
python3 glossaries/check-glossary-coverage.py
```

Verify that:
- Broken / Unindexed Wikilinks count is **0**.
- Total Validated Glossary Cross-References has increased.
