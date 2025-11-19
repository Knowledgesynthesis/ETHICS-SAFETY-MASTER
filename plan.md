# **ETHICS & SAFETY MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A clinically rigorous, **mobile-first**, **dark/light toggle**, **offline-capable** educational app blueprint focused on **bioethics, medical ethics, and patient safety** as tested on **USMLE Step 3** and encountered in clinical practice.

> **Critical constraint:**  
> - **No data management**:  
>   - No logins  
>   - No user accounts  
>   - No tracking of modules completed  
>   - No tracking of scores, attempts, progress, bookmarks, or exports  
> - Assessments are **session-local only**: user sees correctness and explanations, but **nothing is stored** beyond the current page/session.  
> - **Settings page must ONLY contain**:
>   - Dark/light mode toggle  
>   - “About the app” section  
>   - Disclaimers  

---

# **MASTER PROMPT — Ethics & Safety Master Educational App Generator (SPECIALIZED VERSION)**

## 0. Role & Mission

You are a cross-functional team:
- **Product**: PM
- **Engineering**: Staff Frontend Engineer
- **Learning**: Senior Instructional Designer
- **Content**: Bioethics SME, Patient Safety / QI SME, Psychiatry / Legal / Public Health SMEs
- **Experience**: UX Writer, Interaction Designer
- **Quality**: QA Engineer

**Mission**: Design and scaffold a **single-page–app–style** ethics & patient safety learning environment that:  
- Contains **all major concepts likely to be tested on USMLE Step 3** related to **bioethics, medical ethics, and patient safety**, across all specialties.  
- Emphasizes **clinical scenarios**, “best next step” reasoning, and **pattern recognition** for ethics vignettes.  
- Uses **interactive, self-contained assessments** whose results are **not stored** or tracked.

---

## 1. Inputs (Fill These at Generation Time)

- **Primary Topic(s):**  
  `{{TOPICS}}`  
  - Default if omitted:  
    - Core bioethical principles  
    - Consent & capacity  
    - Confidentiality & privacy  
    - Mandatory reporting & duty to warn  
    - End-of-life care & advance directives  
    - Professionalism & boundaries  
    - Research ethics  
    - Resource allocation & triage  
    - Systems-based patient safety & QI  

- **Target Learner Levels:**  
  `{{LEVELS}}`  
  - Suggested default:  
    - MS3–MS4, IM/FM/EM residents, early attendings preparing for Step 3/boards.

- **Learner Context:**  
  `{{CONTEXT}}`  
  - Suggested default:  
    - “Step 3-style vignettes, OSCE-style communication, and day-to-day clinical decisions.”

- **Learning Outcomes (SMART, mapped to Bloom):**  
  `{{LEARNING_OBJECTIVES}}`  
  - Suggested default examples:
    - “Correctly identify the ethically appropriate ‘next best step’ in >80% of Step 3–style ethics vignettes.”  
    - “Differentiate systems errors vs individual blame and outline a basic root cause analysis.”  
    - “Apply consent and capacity rules to adults, minors, and special populations.”  

- **Constraints/Preferences:**  
  - **Hard constraints (must implement):**
    - Mobile-first, responsive
    - Dark/light theme toggle
    - Offline-ready (static assets cached)  
    - **No user data storage/tracking/progress**  
    - No exports or saved scores
  - Optional extras: `{{CONSTRAINTS}}`

- **References/Standards (Conceptual Alignment Only):**  
  `{{REFERENCES}}`  
  - e.g., AMA Code of Medical Ethics (concepts only), WHO patient safety, typical USMLE blueprint topics.

- **Brand/Voice:**  
  `{{VOICE_TONE}}`  
  - Suggested default: “Calm, clear, exam-focused, non-judgmental, uses real-life language and short, sharp rationales.”

- **Locale:**  
  `{{LOCALE}}`  
  - Default: U.S. context (USMLE, HIPAA, U.S. legal assumptions).

---

## 2. Executive Summary & Names

Design **Ethics & Safety Master**, an app that:

- Centralizes **all Step 3–relevant ethics & patient safety topics** into one structured, modular curriculum.  
- Uses **interactive cases** to teach the “**best next step**” style of reasoning.  
- Offers **self-contained quizzes** that give feedback but **do not store** user performance.

**Name options:**

1. **Ethics & Safety Master** – “Every Step 3 ethics question, one mental map.”  
2. **ClinicEthics Atlas** – “From vignette to best next step.”  
3. **SafeCare Logic** – “Patient safety and ethics, systematized.”

Success criteria (for the creators, not tracked in-app):

- Content coverage maps cleanly to USMLE Step 3 ethics/patient safety blueprint.  
- Learners can articulate **why** an option is ethically correct or incorrect.  
- In sample testing, ≥80% of users improve their case-based ethics accuracy after using the app (evaluated externally, not by in-app tracking).

---

## 3. Personas & Use Cases

### Personas (Non-tracked, design-only)

1. **Alex, IM Resident (PGY-1)**
   - Needs: Fast ethics refresh between admissions; Step 3 prep.
   - Pain points: “Everything feels gray; I want a reliable ‘what would the test want?’ guide.”
   - Success: Can answer exam-style ethics questions confidently in <60 seconds.

2. **Maya, MS4**
   - Needs: Step 2/3–style ethics practice; OSCE communication frameworks.
   - Pain points: Confused about consent in minors, AMA discharges, and confidentiality rules.
   - Success: Correctly spots the relevant principle and applies it.

3. **Sam, Hospitalist**
   - Needs: Structured overview of patient safety & QI frameworks.
   - Pain points: Knows “report the error” but struggles distinguishing RCA vs FMEA vs QI project.
   - Success: Can classify events and choose the right safety/process response.

### Primary Use Cases

- Board-style practice for **ethics vignettes**.  
- Quick clarification on **consent**, **capacity**, **confidentiality**, **reporting obligations**.  
- Patient safety scenario drills: “What is the best systems-level response?”  
- OSCE-style scripting for **disclosing errors** and **breaking bad news** (at a conceptual level).

---

## 4. Curriculum Map & Knowledge Graph (Bullet Tree)

### Module A — Core Bioethical Principles

- Principles:
  - Autonomy
  - Beneficence
  - Nonmaleficence
  - Justice
- Derived concepts:
  - Fidelity, veracity, respect for persons
- Applications:
  - Conflicting principles (e.g., autonomy vs beneficence)
  - Best next step when principles conflict

### Module B — Consent, Capacity, and Surrogate Decision-Making

- Informed consent components  
- Decision-making capacity:
  - Understanding, appreciation, reasoning, expressing a choice  
- Adults vs minors:
  - Emancipated minors, mature minor doctrine (conceptual)  
- Emergency exceptions  
- Surrogate hierarchies & advance directives  
- AMA (against medical advice) discharge

### Module C — Confidentiality, Privacy, and Duty to Warn

- HIPAA-style confidentiality logic (conceptual)  
- When breaking confidentiality is allowed/required:
  - Danger to self/others, reportable diseases, abuse  
- Duty to warn/protect (Tarasoff-style concept)  
- Handling family requests for information

### Module D — End-of-Life Care & Advance Care Planning

- DNR/DNI vs “do not treat”  
- Living wills, healthcare proxies  
- Withholding vs withdrawing treatment  
- Palliative care vs euthanasia vs physician-assisted dying (U.S. high-level)  
- Artificial nutrition/hydration decisions  

### Module E — Professionalism & Boundaries

- Dual relationships & boundaries  
- Gifts, industry relationships  
- Sexual boundaries with patients  
- Impaired colleagues and duty to report  
- Documentation ethics (falsification, backdating)  
- Social media considerations

### Module F — Research Ethics

- Informed consent in research  
- Clinical equipoise  
- Vulnerable populations: children, prisoners, cognitively impaired  
- IRB/ethics committee role  
- Conflicts of interest  
- Publication ethics (plagiarism, data fabrication)

### Module G — Public Health & Legal Reporting

- Reportable diseases  
- Child, elder, and intimate partner abuse  
- Driving and seizure disorders (conceptual)  
- Occupational impairment (e.g., commercial pilots, surgeons)  
- Quarantine/isolation ethics

### Module H — Patient Safety & Quality Improvement

- Systems vs individual blame  
- Human factors, Swiss cheese model  
- Adverse events, near-misses, never events  
- Root cause analysis (RCA)  
- Failure mode and effects analysis (FMEA)  
- Checklists, time-outs, standardized handoffs (SBAR-style)  
- High-reliability organization concepts  
- QI cycles (PDSA) – conceptual; no stats

### Module I — Communication & Error Disclosure

- Error disclosure:
  - Acknowledgment, apology, correction plan, follow-up  
- Breaking bad news basics (SPIKES-like structure)  
- Handling angry or distrustful patients  
- Cultural sensitivity and shared decision-making  

---

## 5. Interactive Concept Models (NO persistent tracking)

Design **interactives where all state is in-memory only** (lost on refresh):

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails | Presets |
|------------|---------|--------|---------|--------|-----------|---------|
| Principle Picker | Map cases to core ethical principles | Short vignette text | Highlighted principle(s) | Pill tags, color-coded | Emphasize “reasoning,” not just labels | 10 classic cases |
| Consent & Capacity Flow | Practice consent vs surrogate logic | Age, mental status, emergency flag | “Who can consent?” + reasoning | Decision tree | No legal jurisdiction claims | Adult urgent, elective, minors |
| Confidentiality Splitter | Decide when to maintain vs breach confidentiality | Scenario (e.g., teen pregnancy, STIs, threats) | “Maintain / disclose / mandatory report” | Split-screen explanation | States conceptual, not legal advice | 12 vignettes |
| End-of-Life Pathway | Navigate EOL decisions | Code status, directives, family wishes | Ethically preferred next step | Timeline of care | Emphasis on aligning with patient wishes | 8 scenarios |
| Professionalism Triage | Sort behaviors into “professional / gray / unprofessional” | Behavior descriptions | Category + rationale | 3-zone gradient | No shaming tone | 15 behaviors |
| Safety Event Classifier | Classify incident type | Description of error | Adverse event vs near-miss vs no harm | Icon grid | No blame focus | 10 safety incidents |
| RCA Builder (Mini) | Identify system vs individual root causes | List of contributing factors | System map | Node-link diagram | No real institutional policy | 5 worked examples |
| Error Disclosure Script Helper | Choose key communication elements | Error vignette | Checklist of must-include elements | Checklist UI | Coaching tone only | 5 disclosure cases |

---

## 6. Assessment & Mastery System (Non-tracked)

**Key constraint:**  
- All assessments are **local-only**. No progress, no historical scores, no exporting.  
- On each quiz screen, show:
  - Correct/incorrect
  - Short rationale
  - Linked “Review this concept” section

**Question Types:**

- Single-best-answer MCQs (USMLE-style)  
- “Best next step” vignettes  
- Drag-and-drop classification:
  - Principle (autonomy vs beneficence vs justice vs nonmaleficence)
  - Systems vs individual error  
- Scenario reordering: “Put the steps of error disclosure in appropriate sequence.”  
- Short “select all that apply” for safety interventions.

**Sample Item Blueprints (Examples Only):**

- 3–5 items per module plus 5–10 mixed review items.  
- Answer keys + 2–3 sentence rationales focusing on:
  - Why the correct answer is preferred  
  - Why tempting options are wrong or less ideal  

No cumulative scoring page, no badges, no dashboards.

---

## 7. Ethics & Safety Reasoning Framework (Core Explainer + Pearls/Pitfalls)

For each module, provide:

1. **Plain-language summary**: “If you can say it to a patient in 2–3 sentences.”  
2. **Formal framing**: how Step 3 tends to encode it (e.g., “The ethically correct answer will…”).  
3. **Pitfalls**:
   - E.g., “Respecting autonomy does not mean doing anything the patient asks if it conflicts with professional ethics.”  
4. **Quick Pearls**:
   - E.g., “If a competent adult refuses life-saving care, respect autonomy after explaining risks and ensuring understanding.”  

---

## 8. Accessibility, Equity, and Safety

- **Accessibility:**
  - WCAG 2.2 AA where feasible: semantic HTML, keyboard navigability, sufficient contrast.
  - Clear headings and readable font sizes.
- **Equity:**
  - Diverse, non-stereotyped patient names, backgrounds, scenarios.
  - Avoid framing any group as inherently “difficult.”
- **Safety:**
  - Prominent disclaimer: “Educational only; not legal or clinical advice.”
  - No jurisdiction-specific legal claims beyond high-level patterns.
  - No real hospital names, institutions, or policy references.

---

## 9. Tech Spec & Architecture

### Stack

- **Framework:** React + TypeScript  
- **Bundler:** Vite or Next.js in SPA-like mode  
- **UI:** Tailwind CSS + shadcn/ui components  
- **State Management:** Local component state + lightweight global state (e.g., Zustand) for theme & in-session UI only  
- **Math / Formatting:** Plain text (no heavy math)  
- **Offline:** Service worker caching of static assets (no data sync)

### Structure

- `/` – Home (overview + module list)  
- `/modules/:id` – Module detail/lesson view  
- `/cases` – Mixed-vignette practice  
- `/quiz/:id` – Quiz view (in-module)  
- `/reference` – Quick-reference glossary & summary tables  
- `/settings` – **Only**:
  - Theme toggle (dark/light/system)  
  - “About the app” text  
  - Disclaimers  

### Important: No Data/Progress Storage

- No user account system  
- No progress or scores persisted to localStorage/IndexedDB  
- State is ephemeral per session (except theme preference can be stored locally if desired).

---

## 10. Data Schemas (JSON + Brief Examples)

Only content schemas; **no user-progress schemas**.

### Ethics Module Schema

```json
{
  "id": "consent_capacity",
  "title": "Consent & Capacity",
  "summary": "How to determine who can legally and ethically consent to treatment.",
  "sections": [
    {
      "id": "capacity_criteria",
      "title": "Capacity Criteria",
      "content": "Plain-language explanation..."
    },
    {
      "id": "minors",
      "title": "Minors & Exceptions",
      "content": "Emancipated minors, emergencies..."
    }
  ],
  "key_points": [
    "Capacity is task-specific and time-specific.",
    "Emancipated minors can consent for themselves in certain contexts."
  ]
}
