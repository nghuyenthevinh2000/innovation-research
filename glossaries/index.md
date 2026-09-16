# Glossaries & Lexicon Management

> **The Central Terminology & Semantic Architecture Hub for Technology Entrepreneurship**

---

## Overview

Precise language is the bedrock of disciplined technology commercialization. In deep-tech and laboratory-to-market ventures, conflating concepts—such as confusing an *invention* with an *innovation*, or mistaking a *prototype* for an *MVP*—leads to premature capital deployment and venture failure.

This directory houses the complete semantic registry, detection tools, and governance standards for innovation terminology.

---

## Navigation & Artifacts

| Document | Purpose | Audience |
|---|---|---|
| [**`master-glossary.md`**](./master-glossary.md) | The definitive catalog of 60+ core innovation terms, mathematical formulas, axioms, originators, and anti-patterns. | Researchers, Founders, Investors |
| [**`glossary-detection-guide.md`**](./glossary-detection-guide.md) | Step-by-step protocol for detecting missing terminology, applying the 3-question filter, and registering new entries. | Editors, Curators, Agents |
| [**`check-glossary-coverage.py`**](./check-glossary-coverage.py) | Automated Python CLI linter that audits markdown notes, reports broken wikilinks, and extracts candidate missing terms. | Automation, CI/CD, Local Audits |

---

## Quick Lookups by Innovation Stage

- [**Core Foundations**](./master-glossary.md#core-foundations): Valley of Death, Emergent Innovation, Reasonableness Trap, Five Big Ideas.
- [**Stage 1 & 2: Representation & Search**](./master-glossary.md#stage-1--2-problem-representation--cognitive-search): Perspective-Heuristic Pairs, Magic Square, Cognitive Diversity, Crowdsourced Search.
- [**Stage 3: Needs-Seeds & Functional Analysis**](./master-glossary.md#stage-3-needs-seeds-synchronization--functional-analysis): Functional Analysis, Main Parameters of Value (MPV), S-A-O Triad, Jobs-to-Be-Done (JTBD), Outcomes-Driven Innovation (ODI).
- [**Stage 4: Business Architecture**](./master-glossary.md#stage-4-business-architecture--model-alignment): Business Model, Value Creation, Value Capture, Operating Model (Structure, Capabilities, Assets).
- [**Stage 5: Technology Readiness**](./master-glossary.md#stage-5-technology-readiness--cloverleaf-due-diligence): Technology Readiness Levels (TRL 1–9), Cloverleaf Framework, Freedom to Operate (FTO), Market Antibodies.
- [**Stage 6: Validation & MVPs**](./master-glossary.md#stage-6-customer-discovery--deep-tech-mvp-prototyping): 100-Interview Funnel, Mom Test, Disconfirming Evidence, Simulated MVP (Wizard of Oz).
- [**Stage 7: Venture De-Risking & Capital**](./master-glossary.md#stage-7-venture-de-risking--capital-architecture): Cash Engine, Cash Conversion Cycle (CCC), Lemonade Stand Model, Discriminating Experiments, Staged Financing.
- [**Stage 8: Scaling & Governance**](./master-glossary.md#stage-8-scaling-spin-offs-syndicates--standards): Power Law, 10-Year LP Fund Lifecycle, TTO Pitfalls, Signaling Risk, Standards Wars.

---

## How to Run a Glossary Coverage Check

Verify the entire repository for terminology completeness:
```bash
python3 glossaries/check-glossary-coverage.py
```
