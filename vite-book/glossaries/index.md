# Glossaries & Lexicon Management

> **The Central Terminology & Semantic Architecture Hub for Technology Entrepreneurship**  
> *Source: HarvardX LBTechX1 — Technology Entrepreneurship: Lab to Market*

---

## Overview

Precise language is the bedrock of disciplined technology commercialization. In deep-tech and laboratory-to-market ventures, conflating concepts—such as confusing an *invention* with an *innovation*, or mistaking a *prototype* for an *MVP*—leads to premature capital deployment and venture failure.

This directory houses the complete semantic registry, detection tools, and governance standards for innovation terminology.

---

## Navigation & Artifacts

| Document | Purpose | Audience |
|---|---|---|
| [**`master-glossary.md`**](./master-glossary.md) | The definitive catalog of 87+ core innovation terms, mathematical formulas, axioms, originators, and anti-patterns. | Researchers, Founders, Investors |
| [**`glossary-detection-guide.md`**](./glossary-detection-guide.md) | Step-by-step protocol for detecting missing terminology, applying the 3-question filter, and registering new entries. | Editors, Curators, Agents |
| [**`check-glossary-coverage.py`**](./check-glossary-coverage.py) | Automated Python CLI linter that audits markdown notes, reports unindexed terms, and extracts candidate missing terms. | Automation, CI/CD, Local Audits |

---

## Quick Lookups by Innovation Stage

- [**Core Foundations & Stage 1**](./master-glossary.md#core-foundations): Invention, Innovation, Valley of Death, Emergent Innovation, Reasonableness Trap, Five Big Ideas, Pre-Mortem.
- [**Stage 2: Technology-Market Fit & Needs-Seeds Synchronization**](./master-glossary.md#stage-2-technology-market-fit--needs-seeds-synchronization): Perspective, Heuristic, Perspective-Heuristic Pairs, Magic Square, Cognitive Diversity, Crowdsourced Search, Open Innovation, Solver Profile, Technology Seed, Customer Need, Accelerated Innovation, Functional Analysis, MPV, S-A-O Triad, Jobs-to-Be-Done (JTBD), Outcomes-Driven Innovation (ODI), Customer Activity Chain.
- [**Stage 3: Business Architecture & Model Alignment**](./master-glossary.md#stage-3-business-architecture--model-alignment): Business Architecture, Business Model, Value Creation, Value Capture, Operating Model (Structure, Capabilities, Assets).
- [**Stage 4: Market Assessment, Due Diligence & MVPs**](./master-glossary.md#stage-4-market-assessment-due-diligence--deep-tech-mvps): TRL (1–9), Cloverleaf Framework, Freedom to Operate (FTO), Blocking Patents, Market Antibodies, 10x Imperative, 100-Interview Funnel, Customer Validation, Mom Test, Disconfirming Evidence, Conceptual MVP, Simulated MVP (Wizard of Oz), Prototypical MVP, Think-Aloud Protocol.
- [**Stage 5: Venture De-Risking & Capital Architecture**](./master-glossary.md#stage-5-venture-de-risking--capital-architecture): Cash Engine, Cash Conversion Cycle (CCC), Working Capital Architecture, Customer Financing, Lemonade Stand Model, Discriminating Experiments, Staged Financing, Debt Capital, Equity, Equity Capital, Dilutive Capital, Non-Dilutive Capital.
- [**Stage 6: Scaling, Spin-Offs, Syndicates & Standards**](./master-glossary.md#stage-6-scaling-spin-offs-syndicates--standards): Angel Investors, Family Office, Venture Capital Funds (VC), Seed Funds, Illiquid Investment, Exit, Power Law, 10-Year Fund Lifecycle, Investor Syndicates, Signaling Risk, TTO Pitfalls, Accelerators, Platforms, Venture Acceleration, Standards Wars, Go-to-Market Foundations.

---

## Quick-Scan Directory by Topic

### Core Foundations

| Term | Quick-Scan Definition |
|---|---|
| [**`Invention`**](./master-glossary.md#invention) | The creation of a novel, non-obvious technical capability, scientific discovery, physical mechanism, or proprietary algorithm. |
| [**`Innovation`**](./master-glossary.md#innovation) | The successful commercial translation and deployment of a technical capability or invention into captured economic and societal value in the marketplace. |
| [**`The Valley of Death`**](./master-glossary.md#the-valley-of-death) | The perilous funding and operational chasm between laboratory proof-of-concept (TRL 3–4) and self-sustaining commercial revenue (TRL 8–9). |
| [**`Emergent Innovation (Emergence)`**](./master-glossary.md#emergent-innovation-emergence) | The operational paradigm positing that breakthrough ideas are not invented by heroic individuals in sudden "aha" moments; they emerge algorithmically through continuous variation, extreme selection pressure, and iterative survival. |
| [**`The Reasonableness Trap`**](./master-glossary.md#the-reasonableness-trap) | The systemic institutional bias in academia, venture capital, and corporate committees that systematically filters out transformative breakthroughs because they sound "unreasonable" against current orthodoxies. |
| [**`Expert-Free Zone`**](./master-glossary.md#expert-free-zone) | A structured psychological and organizational environment where teams can formulate audacious, seemingly absurd "what-if" hypotheses without reputational risk or immediate dismissal by incumbent domain specialists. |
| [**`The Five Big Ideas`**](./master-glossary.md#the-five-big-ideas) | The foundational curriculum architecture of Harvard's Technology Entrepreneurship program: (1) Solve a real problem; (2) Generate lots of ideas; (3) Innovate on models; (4) Test with customers; (5) Use money as a tool. |
| [**`The Late-Joiner Trap`**](./master-glossary.md#the-late-joiner-trap) | An organizational dilemma occurring when a team member joins mid-stream and proposes a compelling alternative hypothesis that challenges sunk investments, causing analytical deadlock. |
| [**`Pre-Mortem Protocol`**](./master-glossary.md#pre-mortem-protocol) | A structured risk-mitigation exercise developed by psychologist Gary Klein where, prior to committing capital or launching an initiative, the team assumes the venture has failed catastrophically in the future and works backward to identify the most probable failure modes and systemic vulnerabilities. |

### Stage 2: Technology-Market Fit & Needs-Seeds Synchronization

| Term | Quick-Scan Definition |
|---|---|
| [**`Perspective`**](./master-glossary.md#perspective) | An internal coordinate system, mental model, or representational frame that dictates how a problem space is categorized, visualized, and decomposed. |
| [**`Heuristic`**](./master-glossary.md#heuristic) | A search algorithm, rule of thumb, or navigational strategy applied to a problem space once it has been framed through a specific perspective to locate an optimal solution. |
| [**`Perspective-Heuristic Pair (P-H Pair)`**](./master-glossary.md#perspective-heuristic-pair-p-h-pair) | The coupled combination of a representation (coordinate frame) and a search rule (algorithm). |
| [**`Magic Square Analogy`**](./master-glossary.md#magic-square-analogy) | The demonstration by Herbert Simon that the "Number 15" game (players alternately choosing numbers 1–9 to sum to 15) is mathematically isomorphic to Tic-Tac-Toe. |
| [**`Representational Trap (Functional Fixedness)`**](./master-glossary.md#representational-trap-functional-fixedness) | The cognitive failure mode where innovators stare at a problem in its native domain representation, attempting to brute-force a solution through optimization rather than importing a superior coordinate system from another field. |
| [**`Cognitive Diversity`**](./master-glossary.md#cognitive-diversity) | Differences in perspectives, heuristics, interpretations, and mental representations across a group of problem solvers. |
| [**`Cross-Domain Transfer`**](./master-glossary.md#cross-domain-transfer) | The systematic importation of a mature perspective or mathematical heuristic from an unrelated scientific discipline into a novel problem space (e.g., Brownian motion and thermodynamics applied to Black-Scholes option pricing; electrical circuit oscillation applied to deep-brain stimulation). |
| [**`Crowdsourced Search (Broadcast Search)`**](./master-glossary.md#crowdsourced-search-broadcast-search) | The organizational practice of broadcasting a stripped, abstract functional formulation of an internal technical bottleneck to an open, global, multidisciplinary solver network to discover uncorrelated perspective-heuristic pairs. |
| [**`Open Innovation`**](./master-glossary.md#open-innovation) | The commercial and organizational paradigm establishing that firms can and should use external as well as internal ideas, technologies, and paths to market. |
| [**`The Boundary Problem`**](./master-glossary.md#the-boundary-problem) | The structural limitation of corporate and academic R&D departments where hiring homogeneity results in internal teams sharing identical mental models, domain jargon, and cognitive blind spots. |
| [**`Solver Profile`**](./master-glossary.md#solver-profile) | The empirical demographic and cognitive profile of individuals who successfully solve broadcast search innovation challenges. |
| [**`Technology Seed (Supply Push)`**](./master-glossary.md#technology-seed-supply-push) | A novel laboratory discovery, material property, proprietary algorithm, or technological capability seeking commercial applications. |
| [**`Customer Need (Demand Pull)`**](./master-glossary.md#customer-need-demand-pull) | A validated, quantified point of friction, workflow bottleneck, economic loss, or unmet operational objective experienced by end-users in the market. |
| [**`Accelerated Innovation`**](./master-glossary.md#accelerated-innovation) | The continuous, closed-loop synchronization of supply-side technology seeds with demand-side customer needs. |
| [**`Functional Analysis (Functional Thinking)`**](./master-glossary.md#functional-analysis-functional-thinking) | A systematic deconstruction methodology that strips away proprietary domain jargon and physical components to articulate what a technology *does* at an elementary physical level. |
| [**`Main Parameters of Value (MPV)`**](./master-glossary.md#main-parameters-of-value-mpv) | The critical 1–2 quantifiable performance or economic metrics that govern customer purchase decisions in a specific application. |
| [**`Subject-Action-Object (S-A-O) Triad`**](./master-glossary.md#subject-action-object-s-a-o-triad) | The semantic syntax used in functional analysis to define technological capabilities without domain bias: an active verb applied to a target object (e.g., *"separates liquid"*, *"stops impurities"*, *"directs heat"*). |
| [**`Jobs-to-Be-Done (JTBD)`**](./master-glossary.md#jobs-to-be-done-jtbd) | The fundamental task, operational progress, or emotional outcome a customer is trying to accomplish in a specific circumstance. |
| [**`Outcomes-Driven Innovation (ODI)`**](./master-glossary.md#outcomes-driven-innovation-odi) | A structured customer discovery methodology that defines customer requirements as discrete metrics measuring how users assess value when getting a job done. |
| [**`Customer Activity Chain`**](./master-glossary.md#customer-activity-chain) | The sequential end-to-end journey of operational actions a customer executes to achieve an outcome (e.g., Search → Evaluate → Purchase → Install → Integrate → Operate → Maintain → Dispose). |

### Stage 3: Business Architecture & Model Alignment

| Term | Quick-Scan Definition |
|---|---|
| [**`Business Architecture`**](./master-glossary.md#business-architecture) | The comprehensive system design of a venture consisting of two interdependent pillars: the **Business Model** (value creation and capture) and the **Operating Model** (value delivery engine). |
| [**`Business Model`**](./master-glossary.md#business-model) | The architectural pillar detailing why customers choose the offering (**Value Creation**) and how the enterprise captures a share of that economic value as sustainable revenue (**Value Capture**). |
| [**`Value Creation`**](./master-glossary.md#value-creation) | The mechanism by which an offering delivers economic, operational, or emotional surplus to the customer. |
| [**`Value Capture`**](./master-glossary.md#value-capture) | The monetization mechanism by which an enterprise extracts a portion of the value surplus it creates. |
| [**`Operating Model`**](./master-glossary.md#operating-model) | The delivery engine that operationalizes what was promised in the business model. |
| [**`Structure (Operating Model)`**](./master-glossary.md#structure-operating-model) | The organizational and commercial form of the venture: a **Product Firm** (software/hardware widget), a **Service Firm** (bespoke consulting/engineering), or a **Platform / Matchmaker** (multi-sided marketplace). |
| [**`Capabilities (Operating Model)`**](./master-glossary.md#capabilities-operating-model) | The specialized knowledge, technical proficiencies, and organizational processes that enable a venture to execute its value proposition and maintain competitive differentiation (e.g., regulatory engineering, supply-chain choreography, rapid AI fine-tuning). |
| [**`Assets (Operating Model)`**](./master-glossary.md#assets-operating-model) | The unique tangible, informational, and intellectual property resources controlled by the venture (e.g., patents, proprietary longitudinal datasets, clinical trials, production tooling). |
| [**`Architectural Misalignment`**](./master-glossary.md#architectural-misalignment) | A fatal venture flaw where the promises made in the business model cannot be delivered by the structure, capabilities, or assets of the operating model (e.g., promising ultra-low-cost commodity pricing while operating a high-touch, bespoke consulting labor force). |

### Stage 4: Market Assessment, Due Diligence & Deep-Tech MVPs

| Term | Quick-Scan Definition |
|---|---|
| [**`Technology Readiness Levels (TRL)`**](./master-glossary.md#technology-readiness-levels-trl) | A 9-level milestone metric originally developed by NASA and DoD to assess the maturity and operational robustness of a technology from basic principles (TRL 1) to flight-proven commercial deployment (TRL 9). |
| [**`The Cloverleaf Framework`**](./master-glossary.md#the-cloverleaf-framework) | A multidimensional diagnostic tool used to stress-test technology commercialization across four interdependent leaves: **Technology & IP Readiness**, **Market Need & Customer Value**, **Business Model Defensibility**, and **Execution & Operational Feasibility**. |
| [**`Freedom to Operate (FTO)`**](./master-glossary.md#freedom-to-operate-fto) | The legal determination that practicing, manufacturing, or commercializing a technology will not infringe upon valid, active third-party patent claims or regulatory exclusivity rights. |
| [**`Blocking Patents`**](./master-glossary.md#blocking-patents) | An active patent whose broad claims cover a foundational mechanism, preventing competitors or even secondary improvers from making, using, or selling a downstream commercial application without an explicit license. |
| [**`Market Antibodies`**](./master-glossary.md#market-antibodies) | The aggressive defensive mechanisms deployed by entrenched incumbents, legacy channel partners, and regulatory bodies to suppress, delay, or kill disruptive innovations (e.g., patent litigation, exclusive distributor lockouts, regulatory lobbying). |
| [**`The 10x Imperative`**](./master-glossary.md#the-10x-imperative) | The principle that to overcome incumbent market antibodies and customer switching inertia, a new technological offering must deliver an order-of-magnitude (10x) improvement along at least one critical MPV (cost, speed, yield, or convenience). |
| [**`The Patience Dilemma (The Early Pioneer Trap)`**](./master-glossary.md#the-patience-dilemma-the-early-pioneer-trap) | The danger of entering a market too early when a breakthrough technology requires decades of compounding infrastructure, supply chain, and materials improvements before commercial viability (e.g., 3D printing pioneers failing in 1989–1995 despite the technology succeeding in 2015). |
| [**`The 100-Interview Funnel`**](./master-glossary.md#the-100-interview-funnel) | The rigorous customer discovery standard requiring early-stage founders to conduct at least 100 deep, unvarnished qualitative interviews with prospective buyers, operators, and ecosystem stakeholders (specifically strangers, never friends or family) prior to capital deployment. |
| [**`Customer Validation`**](./master-glossary.md#customer-validation) | The second phase of Steve Blank's Customer Development methodology that tests whether the customer problem, product architecture, and pricing model produce repeatable purchase transactions and verifiable economic commitments from real buyers. |
| [**`Disconfirming Evidence`**](./master-glossary.md#disconfirming-evidence) | Data, customer responses, or experimental outcomes that invalidate the founder's core hypotheses. |
| [**`The Mom Test Principles`**](./master-glossary.md#the-mom-test-principles) | A conversational interview framework developed by Rob Fitzpatrick to extract authentic customer truth: (1) Talk about their life and past behaviors, not your idea; (2) Ask about specific instances in the past, never hypothetical futures; (3) Listen more than you speak; (4) Deflect compliments. |
| [**`Hypothetical Bias`**](./master-glossary.md#hypothetical-bias) | The customer discovery fallacy where asking *"Would you buy a product that does X?"* generates polite, affirmative responses because hypothetical affirmations cost the customer nothing and produce false-positive validation. |
| [**`The Dog Food Test (Dogfooding)`**](./master-glossary.md#the-dog-food-test-dogfooding) | The rigorous operational discipline of requiring the founding team, engineers, and employees to daily use and live with their own technological product or prototype within their own workflows before subjecting external customers to it. |
| [**`Minimum Viable Product (MVP) in Deep Tech`**](./master-glossary.md#minimum-viable-product-mvp-in-deep-tech) | The minimum engineered artifact, simulation, or structured experience that enables a venture team to collect the maximum amount of validated learning regarding customer willingness to adopt with the least resource expenditure. |
| [**`Conceptual MVP`**](./master-glossary.md#conceptual-mvp) | An MVP archetype consisting of low-fidelity representations—such as system architecture diagrams, animated explainer videos, paper wireframes, or workflow storyboards—designed to test customer comprehension and value proposition resonance before engineering begins. |
| [**`Simulated MVP (Wizard of Oz / Mechanical Turk)`**](./master-glossary.md#simulated-mvp-wizard-of-oz--mechanical-turk) | An MVP archetype where the front-end user experience appears fully automated and intelligent, while human operators manually execute backend workflows behind the scenes. |
| [**`Prototypical MVP`**](./master-glossary.md#prototypical-mvp) | A minimally engineered but functional physical or software artifact deployed in the customer's actual operational environment to test physical reliability, integration hurdles, and workflow fit. |
| [**`Think-Aloud Protocol`**](./master-glossary.md#think-aloud-protocol) | A usability and customer discovery method where prospective users narrate their live stream of consciousness while interacting with an MVP artifact or workflow simulation, exposing authentic confusion, cognitive friction, and unarticulated needs. |

### Stage 5: Venture De-Risking & Capital Architecture

| Term | Quick-Scan Definition |
|---|---|
| [**`The Firm as a Cash Engine`**](./master-glossary.md#the-firm-as-a-cash-engine) | The fundamental economic representation of an enterprise as a transformation machine that takes cash, converts it into operating assets, and converts those assets back into cash plus a return. |
| [**`Cash Conversion Cycle (CCC)`**](./master-glossary.md#cash-conversion-cycle-ccc) | The duration in days required to convert cash invested in operations (inventory, R&D, labor) back into cash collected from customers. |
| [**`Working Capital Architecture`**](./master-glossary.md#working-capital-architecture) | The structural policies, payment terms, and inventory rhythms that determine how cash flows through operational accounts. |
| [**`Customer Financing (Negative Working Capital)`**](./master-glossary.md#customer-financing-negative-working-capital) | A business architecture where customers fund company growth in advance of delivery through subscription prepayments, upfront retainers, milestone deposits, or multi-year contracts, driving the Cash Conversion Cycle negative and eliminating reliance on dilutive capital. |
| [**`The Lemonade Stand Model`**](./master-glossary.md#the-lemonade-stand-model) | Ramana Nanda's foundational thought experiment illustrating how business models dictate external financing needs: Model 1 (Cash-on-Delivery: \$100 initial capital); Model 2 (Net-30 Invoice / Accounts Receivable: requires \$3,000 working capital debt/equity); Model 3 (Negative Working Capital / Pre-orders: \$0 external capital required). |
| [**`Venture De-Risking`**](./master-glossary.md#venture-de-risking) | The disciplined methodological sequence of identifying, prioritizing, and systematically eliminating the highest-consequence existential uncertainties (technical, market, regulatory, financial) at minimum cost and time. |
| [**`Discriminating Experiment (The Killer Experiment)`**](./master-glossary.md#discriminating-experiment-the-killer-experiment) | An empirical test specifically engineered to decisively invalidate a core venture hypothesis at the lowest possible cost and earliest possible date. |
| [**`Staged Financing (Milestone Financing)`**](./master-glossary.md#staged-financing-milestone-financing) | The venture capital practice of providing only enough capital to reach the next discrete discriminating milestone (TRL jump, clinical readout, regulatory clearance, commercial pilot) rather than capitalizing the entire project upfront. |
| [**`Debt Capital (Debt Financing)`**](./master-glossary.md#debt-capital-debt-financing) | Capital borrowed from lenders that must be repaid with interest over a contractual schedule. |
| [**`Equity`**](./master-glossary.md#equity) | The value of the total shares of ownership in a company, held through common stock, preferred stock, and other share classes. |
| [**`Equity Capital (Equity Financing)`**](./master-glossary.md#equity-capital-equity-financing) | Capital provided by investors in exchange for ownership shares (preferred stock) in the company. |
| [**`Debt vs. Equity Risk Asymmetry`**](./master-glossary.md#debt-vs-equity-risk-asymmetry) | The fundamental structural divergence in risk-return payoff curves between debt and equity instruments: |
| [**`Venture Debt`**](./master-glossary.md#venture-debt) | A specialized form of debt financing provided to venture-backed companies that have already secured institutional equity rounds. |
| [**`Dilutive Capital`**](./master-glossary.md#dilutive-capital) | Any capital infusion in your startup that requires you (the founders) to give up a share of your equity or ownership in your company. |
| [**`Non-Dilutive Capital`**](./master-glossary.md#non-dilutive-capital) | Capital received by a company that does not require giving up equity shares, ownership percentage, or governance voting rights. |
| [**`SBIR / STTR Grants`**](./master-glossary.md#sbir--sttr-grants) | Competitive US federal grant programs that award non-dilutive research funding to small deep-tech businesses to explore feasibility (Phase I: ~\$150k–\$300k) and prototype development (Phase II: ~\$1M–\$2M) across federal agencies (NSF, NIH, DoD, DOE). |
| [**`Advanced Customer Commitments`**](./master-glossary.md#advanced-customer-commitments) | Binding or structured legal agreements with prospective industrial customers (such as paid pilot contracts, milestone-based LOIs, or off-take guarantees) secured prior to product completion to de-risk demand and validate willingness to pay. |
| [**`Cash Flow Rights`**](./master-glossary.md#cash-flow-rights) | The contractual provisions in equity financing agreements that dictate how monetary proceeds, dividends, and exit returns are distributed among shareholders (e.g., 1x non-participating vs participating preferred stock, seniority order, anti-dilution ratchets). |
| [**`Control Rights`**](./master-glossary.md#control-rights) | The legal provisions in venture term sheets that dictate who makes strategic decisions and governs the enterprise, including board seat composition, voting thresholds, and protective vetoes over additional debt, key hires, intellectual property licensing, or M&A. |
| [**`Assumption Risk vs. Execution Risk`**](./master-glossary.md#assumption-risk-vs-execution-risk) | The critical distinction between two venture failure modes: |

### Stage 6: Scaling, Spin-Offs, Syndicates & Standards

| Term | Quick-Scan Definition |
|---|---|
| [**`Angel Investors (Angel Capital)`**](./master-glossary.md#angel-investors-angel-capital) | High-net-worth individuals who invest their own personal capital into early-stage startups (often pre-seed or seed stage). |
| [**`Family Office`**](./master-glossary.md#family-office) | A special investment entity managing the wealth owned by high-net-worth families, offering patient, multi-generational mission-driven capital. |
| [**`Venture Capital Funds (VC)`**](./master-glossary.md#venture-capital-funds-vc) | A specific kind of capital provider that invests in early stage companies that may have progressed beyond the initial incubation and acceleration stages, exchanging capital for equity ownership. |
| [**`Seed Funds`**](./master-glossary.md#seed-funds) | A particular kind of capital provider for startups, structured similarly to venture capital funds, but investing in companies that may be at an earlier stage than traditional VC firms. |
| [**`Illiquid Investment`**](./master-glossary.md#illiquid-investment) | Any investment that may not be easily tradable for cash due to any reason, such as early-stage startup equity lacking an active buyer market prior to an exit. |
| [**`Exit`**](./master-glossary.md#exit) | Any event when an investor can sell or transfer a stake in a company to another party. |
| [**`The Power Law ("The Hits Business")`**](./master-glossary.md#the-power-law-the-hits-business) | The mathematical distribution governing venture capital returns, where a tiny minority of investments (~5%) generate the overwhelming majority (~80%+) of total fund profits. |
| [**`10-Year Fund Lifecycle`**](./master-glossary.md#10-year-fund-lifecycle) | The rigid legal structure of traditional VC partnerships (2–3 years investment deployment $\rightarrow$ 5–7 years portfolio scaling and follow-on $\rightarrow$ fund liquidation and cash return to LPs). |
| [**`Investor Syndicate`**](./master-glossary.md#investor-syndicate) | The collaborative structure where multiple venture capital firms and angel investors co-invest in a single financing round, typically led by a lead investor who negotiates term sheet economics, sets governance rights, and conducts primary due diligence. |
| [**`Signaling Risk`**](./master-glossary.md#signaling-risk) | The reputational and financing hazard that occurs when an existing, privileged inside investor (such as the lead investor from a previous round) chooses not to participate or take up their pro-rata rights in a subsequent funding round, signaling to prospective outside investors that the venture is secretly troubled. |
| [**`Tech Transfer Office (TTO) Pitfalls`**](./master-glossary.md#tech-transfer-office-tto-pitfalls) | Common hazards encountered when licensing technology out of universities or national laboratories: aggressive upfront cash demands, excessive royalty drag on gross margins, unassigned intellectual property, and toxic cap tables (passive academic founders holding majority control). |
| [**`Accelerators`**](./master-glossary.md#accelerators) | Structured programs for startups, typically with a fixed timeframe, within which individual firms work to develop a business concept with mentors and advisors, culminating in a Demo Day presentation to investors. |
| [**`Venture Acceleration`**](./master-glossary.md#venture-acceleration) | The institutionalized systems, mentors, seed capital, and commercialization pathways designed to compress the time required for university or laboratory research spin-offs to reach commercial validation and private financing. |
| [**`Platforms`**](./master-glossary.md#platforms) | A multi-faced organizational structure that facilitates transactions and dialogue between a variety of stakeholders (e.g., users, firms, advertisers, communities). |
| [**`Standards War`**](./master-glossary.md#standards-war) | An existential commercial battle where rival technological architectures compete to become the de facto industry standard (e.g., CDMA vs TDMA/GSM, Betamax vs VHS, AC vs DC). |
| [**`Go-to-Market Foundations`**](./master-glossary.md#go-to-market-foundations) | The strategic blueprint detailing how a venture reaches, educates, acquires, and retains target customers across specific commercial channels, addressing customer acquisition cost (CAC), channel incentives, and incumbent lock-in. |

---

## How to Run a Glossary Coverage Check

Verify the entire repository for terminology completeness:
```bash
python3 glossaries/check-glossary-coverage.py
```
