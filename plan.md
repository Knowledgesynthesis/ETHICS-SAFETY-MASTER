# ETHICS & SAFETY MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION

A clinically rigorous, **mobile-first**, **dark/light toggle**, **offline-capable** educational app blueprint focused on **bioethics, medical ethics, and patient safety** as tested on **USMLE Step 3** and encountered in routine clinical care.

> CRITICAL CONSTRAINTS  
> - No data management of any kind:  
>   - No logins, no accounts  
>   - No tracking of completed modules  
>   - No tracking of assessment scores or attempts  
>   - No bookmarks, no history, no export of user data  
> - Assessments are allowed, but they are **session-only**:  
>   - User can see correctness and rationales on the spot  
>   - No persistence beyond the current page or session  
> - SETTINGS PAGE MUST ONLY CONTAIN:  
>   - Dark/light mode toggle  
>   - “About the app” text  
>   - Disclaimers  

The purpose of this app is to gather and teach **all relevant ethics and patient safety content** that could realistically appear on **USMLE Step 3**, across all clinical specialties.

---

## 0. ROLE & MISSION

You are a cross-functional product team:

- Product: PM
- Engineering: Staff Frontend Engineer
- Learning Science: Senior Instructional Designer
- Content: Bioethics SME, Patient Safety / QI SME, Psychiatry / Legal / Public Health SMEs
- Experience: UX Writer, Interaction Designer
- Quality: QA Engineer

**Mission:**  
Design and (optionally) scaffold a **single-page–app-style** ethics & patient safety learning environment that:

- Contains all major concepts likely to be tested on **USMLE Step 3** in **bioethics, medical ethics, and patient safety**.  
- Emphasizes **clinical vignettes** with the classic **“best next step”** answer style.  
- Presents **interactive, self-contained assessments** whose results **are not stored or tracked**.

---

## 1. INPUTS (TO FILL WHEN USING THIS PROMPT)

- PRIMARY TOPICS: {{TOPICS}}  
  Suggested default if omitted:
  - Core bioethical principles  
  - Consent & capacity  
  - Confidentiality & privacy  
  - Mandatory reporting & duty to warn  
  - End-of-life care & advance directives  
  - Professionalism & boundaries  
  - Research ethics  
  - Public health ethics & reporting  
  - Patient safety & quality improvement (QI)

- TARGET LEARNER LEVELS: {{LEVELS}}  
  Suggested default:
  - MS3–MS4  
  - IM/FM/EM residents  
  - New attendings preparing for Step 3 / boards  

- LEARNER CONTEXT: {{CONTEXT}}  
  Suggested default:
  - “USMLE Step 3–style vignettes, OSCE-style communication tasks, and day-to-day clinical decisions.”

- LEARNING OBJECTIVES (SMART + BLOOM): {{LEARNING_OBJECTIVES}}  
  Suggested examples:
  - “Identify the ethically appropriate ‘best next step’ in common Step 3 vignette patterns.”  
  - “Differentiate systems errors vs individual blame and outline a basic root cause analysis.”  
  - “Apply consent and capacity rules correctly to adults, minors, and special populations.”

- CONSTRAINTS/PREFERENCES: {{CONSTRAINTS}}  
  Required constraints (do not remove):
  - Mobile-first, responsive  
  - Dark/light theme toggle  
  - Offline-ready (content cached locally)  
  - No user data storage, no progress tracking  

- REFERENCES/STANDARDS (high-level, conceptual only): {{REFERENCES}}  
  Example conceptual references:
  - AMA Code of Medical Ethics (principle-level)  
  - WHO patient safety concepts  
  - Common Step 3 ethics blueprints  

- BRAND / VOICE: {{VOICE_TONE}}  
  Suggested default:
  - “Calm, clear, exam-focused, non-judgmental, using short rationales and everyday language.”

- LOCALE / CONTEXT: {{LOCALE}}  
  Suggested default:
  - U.S. context (USMLE exams, HIPAA-style confidentiality, U.S. health system assumptions).

---

## 2. EXECUTIVE SUMMARY & NAME OPTIONS

Design **Ethics & Safety Master**, an app that:

- Centralizes **all Step 3–relevant ethics and patient safety topics** into one structured, modular curriculum.  
- Uses **interactive, case-based learning** to help learners internalize ethical reasoning patterns.  
- Provides **self-contained quizzes** that give immediate feedback but **never store** user performance.

NAME OPTIONS (CHOOSE/ADAPT):

1. Ethics & Safety Master — “Every Step 3 ethics scenario in one mental map.”  
2. ClinicEthics Atlas — “From vignette to best next step.”  
3. SafeCare Logic — “Patient safety and ethics, systematized.”

SUCCESS CRITERIA (FOR APP DESIGNERS, NOT TRACKED IN APP):

- Content coverage: all high-yield Step 3 ethics / patient safety topics are present.  
- Learners can articulate **why** an option is correct or incorrect, not just memorize.  
- In external testing (not in-app), most users show improved performance on ethics and safety questions.

---

## 3. PERSONAS & USE CASES

### 3.1 Personas (Design-Time Only, No Tracking in App)

1. Alex, Internal Medicine Resident (PGY-1)  
   - Needs: Fast ethics refresh for pre-call and Step 3.  
   - Pain points: Feels that “everything is gray” and wants a consistent “what would the exam expect?” approach.  
   - Success: Can solve typical Step 3 ethics vignettes rapidly and confidently.

2. Maya, MS4  
   - Needs: OSCE communication frameworks and exam-style practice.  
   - Pain points: Confused about consent in minors, AMA discharges, confidentiality vs mandatory reporting.  
   - Success: Recognizes the key principle and applies it correctly in exam-like scenarios.

3. Sam, Hospitalist with QI interest  
   - Needs: Structured overview of systems-based patient safety.  
   - Pain points: Knows one should “report the error,” but is unclear about differences between RCA, FMEA, checklists, etc.  
   - Success: Can classify events and propose the right systems-level response.

### 3.2 Use Cases

- Exam prep: Rapid practice of Step 3 ethics vignettes.  
- On-service reference: quick clarification of consent/capacity, confidentiality, mandatory reporting.  
- QI orientation: conceptual understanding of safety frameworks and how they appear on exams.  
- OSCE practice: error disclosure, breaking bad news, difficult conversations.

---

## 4. CURRICULUM MAP & KNOWLEDGE GRAPH (BULLET TREE)

### MODULE A — CORE BIOETHICAL PRINCIPLES

- Principles:
  - Autonomy  
  - Beneficence  
  - Nonmaleficence  
  - Justice  
- Related concepts:
  - Fidelity  
  - Veracity  
  - Respect for persons  
- Applications:
  - When principles conflict  
  - “Best next step” patterns based on the dominant principle

### MODULE B — CONSENT, CAPACITY, AND SURROGATES

- Informed consent:
  - Elements: diagnosis, options, risks/benefits, alternatives, right to refuse  
- Decision-making capacity:
  - Components: understand, appreciate, reason, express choice  
  - Dynamic and decision-specific  
- Adults vs minors:
  - Emancipated minors (e.g., married, parent, self-supporting)  
  - Confidential services (e.g., STI, contraception, substance use) where allowed  
- Emergency exceptions to consent  
- Surrogate decision-makers:
  - Hierarchies and best-interest vs substituted judgment  
- AMA (Against Medical Advice) discharges:
  - Handling competent refusal safely  
  - Documentation and risk discussion

### MODULE C — CONFIDENTIALITY, PRIVACY, AND DUTY TO WARN

- Confidentiality vs privacy  
- Permissible or required breaches:
  - Danger to self or others  
  - Suspected abuse (child, elder, vulnerable adult)  
  - Reportable infectious diseases  
  - Certain occupational or safety-sensitive roles  
- Duty to warn/protect concepts (Tarasoff-style)  
- Family members requesting information:
  - What can be shared and when  

### MODULE D — END-OF-LIFE CARE & ADVANCE PLANNING

- DNR/DNI vs broader treatment goals  
- Advance directives:
  - Living wills, healthcare proxies  
- Withholding vs withdrawing treatment:
  - Ethical equivalence concept  
- Palliative care:
  - Comfort-focused care vs euthanasia vs physician-assisted dying (high-level)  
- Artificial nutrition/hydration:
  - When it is considered a medical treatment vs basic care  

### MODULE E — PROFESSIONALISM & BOUNDARIES

- Professional boundaries:
  - Dual relationships  
  - Sexual boundary violations  
  - Gift-giving and industry relationships  
- Impaired colleagues:
  - Duty to report and protect patients  
- Documentation ethics:
  - Avoid falsification, backdating, “copy-paste” errors  
- Social media & public presence:
  - Confidentiality and professionalism online  

### MODULE F — RESEARCH ETHICS

- Informed consent in research vs clinical care  
- Clinical equipoise  
- Vulnerable populations:
  - Children, prisoners, cognitively impaired, economically vulnerable  
- Role of IRBs / ethics committees  
- Conflicts of interest  
- Publication ethics:
  - Plagiarism, data fabrication, selective reporting  

### MODULE G — PUBLIC HEALTH, LAW, AND REPORTING

- Reportable diseases and conditions  
- Mandatory reporting of abuse and neglect  
- Fitness to drive or work (e.g., seizures, severe visual impairment)  
- Quarantine, isolation, and public health ethics  
- Resource allocation and triage principles in crises  

### MODULE H — PATIENT SAFETY & QUALITY IMPROVEMENT (QI)

- Systems vs individual-blame mindset  
- Event types:
  - Adverse events  
  - Near misses  
  - No-harm events  
- Models:
  - Human factors  
  - Swiss cheese model  
- Tools:
  - Root cause analysis (RCA)  
  - Failure mode and effects analysis (FMEA)  
  - Plan-Do-Study-Act (PDSA) cycles  
- Interventions:
  - Checklists  
  - Surgical time-outs  
  - Standardized handoffs (e.g., SBAR concept)  
  - Medication reconciliation  

### MODULE I — COMMUNICATION & ERROR DISCLOSURE

- Error disclosure:
  - Acknowledgement, brief explanation, apology, plan for correction and prevention  
- Breaking bad news:
  - A simple, SPIKES-like conceptual structure  
- Handling anger and distrust:
  - Validating emotion, not becoming defensive  
- Cultural sensitivity and shared decision-making  

---

## 5. INTERACTIVE CONCEPT MODELS (NO PERSISTENT STATE)

Design interactives where all state is **in-memory only** (lost on refresh). They are purely for **moment-to-moment learning**.

INTERACTIVE SPEC TABLE:

1) Principle Picker  
- Purpose: Map short vignettes to the most relevant ethical principle(s).  
- Inputs: Short scenario text.  
- Outputs: Highlighted principle and explanation.  
- Visuals: Color-coded chips (Autonomy, Beneficence, Nonmaleficence, Justice).  
- Guardrails: Stress reasoning over memorization.  
- Presets: ~10 classic Step-style scenarios.

2) Consent & Capacity Flow  
- Purpose: Decide who can consent and whether capacity is present.  
- Inputs: Age, mental status, presence of emergency, minor/emancipated status.  
- Outputs: Clear statement such as “This patient can consent for themselves” or “Use surrogate.”  
- Visuals: Simple decision-tree with yes/no nodes.  
- Guardrails: Clearly marked as conceptual; not jurisdiction-specific legal advice.  
- Presets: Adult elective surgery, intoxicated patient, depressed patient refusing care, minor seeking STI care, etc.

3) Confidentiality Splitter  
- Purpose: Train decisions on maintaining vs breaching confidentiality.  
- Inputs: Scenario (teen pregnancy, STI, homicidal ideation, abuse).  
- Outputs: “Maintain confidentiality,” “Encourage disclosure,” or “Mandatory report / duty to warn.”  
- Visuals: Three-column layout with short explanation.  
- Guardrails: Frame in high-level USMLE-style logic, not real legal counsel.  
- Presets: ~12 conceptual vignettes.

4) End-of-Life Pathway  
- Purpose: Practice decisions involving code status, advance directives, and surrogate conflicts.  
- Inputs: Patient wishes, documented directives, family requests.  
- Outputs: Recommended ethical sequence: confirm directives, clarify goals, honor patient preferences.  
- Visuals: Timeline from “baseline health” to “current status” with intervention points.  
- Guardrails: Emphasize alignment with patient’s stated wishes and values.  
- Presets: 6–8 scenarios (conflicting family opinions, unclear DNR, etc.).

5) Professionalism Triage  
- Purpose: Sort behaviors into “professional,” “borderline,” and “unprofessional.”  
- Inputs: Behavior description.  
- Outputs: Triage category plus explanation.  
- Visuals: 3-zone horizontal bar or 3 colored cards.  
- Guardrails: Use neutral, educational language (no shaming).  
- Presets: ~15 behaviors (e.g., texting with patients at night, small gifts, industry lunches, etc.).

6) Safety Event Classifier  
- Purpose: Classify an incident as adverse event, near miss, or no-harm event.  
- Inputs: Short event description.  
- Outputs: Category plus explanation.  
- Visuals: Icon grid with labels.  
- Guardrails: Highlight systems thinking and reporting.  
- Presets: ~10 events.

7) Mini RCA Builder  
- Purpose: Identify system-level contributing factors to an error.  
- Inputs: List of contributing factors (e.g., similar packaging, unclear order entry, understaffing).  
- Outputs: A mini “map” of contributory factors.  
- Visuals: Simple node-link diagram.  
- Guardrails: Avoid institution-specific details; conceptual only.  
- Presets: 4–5 worked examples.

8) Error Disclosure Script Helper  
- Purpose: Reinforce the key elements of ethical error disclosure.  
- Inputs: Error vignette; user selects steps they would include.  
- Outputs: Feedback indicating which elements are essential or missing.  
- Visuals: Checklist with essential components.  
- Guardrails: Emphasize honesty, empathy, and systems improvement.  
- Presets: ~5 cases (med error, wrong test, delayed result, etc.).

---

## 6. ASSESSMENT & MASTERY (NON-TRACKED)

ASSESSMENT PRINCIPLES:

- All quizzes are **ephemeral**:
  - No saving scores  
  - No dashboards  
  - No history of attempts  
- Each question:
  - Gives immediate feedback  
  - Shows a concise rationale  
  - Can link back to a specific lesson/section for review  

ITEM TYPES:

- Single-best-answer MCQs (USMLE-style)  
- “Best next step” questions in ethics and safety vignettes  
- Drag-and-drop:
  - Principles to examples  
  - Event type to description (adverse vs near miss)  
- Scenario ordering:
  - Put steps of error disclosure or end-of-life discussion in a reasonable order.  
- “Select all that apply” for safety interventions or professionalism examples.

SAMPLE BLUEPRINT (NOT FULL CONTENT):

- Module A (Principles): 3–5 questions  
- Module B (Consent/Capacity): 3–5 questions  
- Module C (Confidentiality): 3–5 questions  
- Module D (End-of-life): 3–5 questions  
- Module E/F/G/H/I: 3–5 each  
- Mixed review quizzes: 10–20 varied items

No cumulative scoring; at the end of a quiz, show something like:

- “You answered X out of Y correctly this round.”  
- “Consider reviewing: Consent & Capacity; Safety Event Types.”

This is **display-only** for the current session and **not stored** anywhere.

---

## 7. ETHICS & SAFETY REASONING FRAMEWORK (EXPLAINERS + PEARLS/PITFALLS)

For each module, provide:

1. Plain-language explanation:
   - “In simple terms, this concept means…”  
2. Formal framing for exam logic:
   - “Step 3 will often test this by asking what the physician should do next when…”  
3. Pitfalls:
   - Common misunderstandings and “trap answers.”  
4. Pearls:
   - Short, memorable rules of thumb (e.g., “If the patient is competent, their informed refusal stands, even if it’s life-threatening.”).

Examples:

- Autonomy vs beneficence:
  - Pitfall: Forcing treatment for a competent adult solely because “it’s best for them.”  
- Confidentiality:
  - Pitfall: Over-disclosing to family members without explicit patient permission.  
- Safety:
  - Pitfall: Blaming a single provider instead of analyzing system issues.

---

## 8. ACCESSIBILITY, EQUITY, AND SAFETY

ACCESSIBILITY:

- Semantic HTML, proper headings, labels, and roles.  
- Keyboard-navigable interactives.  
- High contrast in both dark and light modes.  
- Minimal reliance on color alone (use icons, labels).

EQUITY:

- Diverse names and scenarios.  
- Avoid stereotypes and bias in case construction.  
- Explicitly highlight bias and equity issues where ethically relevant (e.g., access to care, resource allocation).

SAFETY (LEGAL / CLINICAL):

- Prominent disclaimer:
  - “This app is for education only and does not provide medical or legal advice.”  
- No jurisdiction-specific statutes presented as universal law.  
- No institution names, no real patient identifiers, entirely synthetic cases.

---

## 9. TECH SPEC & ARCHITECTURE

STACK:

- React + TypeScript  
- Tailwind CSS + shadcn/ui components  
- Optional state management: Zustand or minimal Context for:
  - Theme (dark/light)  
  - In-memory quiz state (per session only)  
- Offline:
  - Service Worker for caching static assets and JSON content  
  - No data sync or user-specific storage

ROUTES / PAGES:

- `/` – Home (overview, module list)  
- `/modules/:id` – Module overview + entry point to lessons and quiz  
- `/modules/:id/lesson/:sectionId` – Lesson page  
- `/cases` – Mixed-case practice (random vignette pool)  
- `/reference` – Quick-reference cheat sheets (principles, consent, reporting, safety tools)  
- `/settings` – **restricted**:
  - Theme toggle (dark / light / system)  
  - About the app  
  - Disclaimers  

NO OTHER SETTINGS OR USER PREFERENCES.

STATE & STORAGE:

- No authentication.  
- No localStorage / IndexedDB for user content or progress.  
- Optional: saving theme preference in localStorage is acceptable.  
- All quiz states are in-memory; refreshing the page resets them.

---

## 10. DATA SCHEMAS (JSON, CONCEPTUAL — NO USER DATA)

ETHICS MODULE SCHEMA (CONTENT ONLY):

    {
      "id": "consent_capacity",
      "title": "Consent & Capacity",
      "summary": "How to determine who can legally and ethically consent to treatment.",
      "sections": [
        {
          "id": "capacity_criteria",
          "title": "Capacity Criteria",
          "content": "Plain-language explanation of understanding, appreciation, reasoning, and communication..."
        },
        {
          "id": "minors",
          "title": "Minors & Exceptions",
          "content": "Conceptual summary of emancipated minors, emergencies, and confidential services where allowed..."
        }
      ],
      "key_points": [
        "Capacity is decision-specific and may fluctuate over time.",
        "Emancipated minors can consent for themselves in certain contexts.",
        "Emergencies allow immediate treatment when delay would risk serious harm."
      ]
    }

SCENARIO / VIGNETTE SCHEMA:

    {
      "id": "confidentiality_sti_teen",
      "module_id": "confidentiality",
      "stem": "A 16-year-old asks for STI testing and specifically requests that her parents not be informed...",
      "options": [
        { "id": "A", "text": "Refuse testing until a parent is present." },
        { "id": "B", "text": "Explain confidentiality limits and proceed with testing." },
        { "id": "C", "text": "Call the parents to obtain consent before testing." }
      ],
      "correct_option_id": "B",
      "rationale": "In many exam-style contexts, a mature adolescent can receive confidential sexual health services. Encourage but do not force parental involvement."
    }

SAFETY EVENT SCHEMA:

    {
      "id": "wrong_dose_near_miss",
      "description": "A 10× dose was prescribed, but the nurse noticed the error before it was given.",
      "classification": "Near miss",
      "teaching_points": [
        "Near misses should be reported because they reveal system vulnerabilities.",
        "Root cause analysis can examine order entry, alerts, and workflow design."
      ]
    }

No schema is needed for user scores, progress, or bookmarks, since these features are explicitly disallowed.

---

## 11. SCREEN INVENTORY & WIREFRAME-BY-TEXT

### HOME

- Purpose: Introduce the app and list all modules.  
- Content:
  - App name, tagline (“Bioethics & Patient Safety for Step 3.”)
  - Short description
  - Grid/list of module cards (Principles, Consent, Confidentiality, End-of-Life, Professionalism, Research, Public Health, Safety/QI, Communication)
- Interactions:
  - Tap module → Module overview  
- No progress bars, no “completed” indicators.

### MODULE OVERVIEW

- Purpose: Give structure to a topic.  
- Content:
  - Title, short overview  
  - List of sections (Lessons) with 1–2 sentence descriptions  
  - “Quick Quiz” button for untracked assessment  
- Interactions:
  - Tap lesson → Lesson view  
  - Tap Quick Quiz → Quiz view  

### LESSON VIEW

- Purpose: Teach a focused concept.  
- Content:
  - Headings and short paragraphs  
  - Callout boxes: “Exam Pearl,” “Common Pitfall”  
  - Simple flows (e.g., consent decision tree) as diagrams or bullet flows  
- Interactions:
  - “Try a Case” button – launches a small vignette overlay  
  - “Back to module” link  

### CASE / VIGNETTE VIEW

- Purpose: Apply one concept in context.  
- Content:
  - Vignette text  
  - Options (usually 4–5 answer choices)  
  - “Check Answer” button  
- After submission:
  - Show “Correct” / “Incorrect”  
  - Show short rationale  
- Optional:
  - “Another case” button loads another vignette from the same module  
- No tally of total cases answered, no cumulative scores.

### QUIZ VIEW

- Purpose: Do a mini self-test.  
- Flow:
  - 5–10 questions from one or multiple modules.  
  - After each question, show feedback and rationale.  
  - At end, show:
    - “You answered X out of Y correctly this time.”  
    - Suggested modules to review.  
  - No scoreboard or saved history.

### REFERENCE VIEW

- Purpose: Quick “cheat sheet” style reference.  
- Content:
  - Tables:
    - Principles vs definitions vs exam patterns  
    - Consent & capacity rules summary  
    - Common reporting obligations  
    - Safety tool overview (RCA, FMEA, PDSA)  
- Interactions:
  - Jump links to different tables/sections.

### SETTINGS VIEW (STRICTLY LIMITED)

- Purpose: Only theme + static info.  
- Content:
  - Theme toggle:
    - Light / Dark / System  
  - “About the App” section:
    - Short paragraph on goals and intended audience  
  - Disclaimers:
    - “Educational only, not medical or legal advice.”  
    - “No personal data is collected or stored.”  
- No other settings or personalization.

---

## 12. COPY & CONTENT KIT (SAMPLES)

MICROCOPY FOR BUTTONS:

- “Start learning”  
- “Open module”  
- “Try a case”  
- “Check answer”  
- “Show rationale”  
- “Next question”  
- “Review this topic”

GLOSSARY EXAMPLES:

- Autonomy  
  - Simple: “Respect a competent patient’s right to choose.”  
  - Exam framing: “The exam usually expects you to honor the informed choice of a competent patient, even if others disagree.”

- Root Cause Analysis (RCA)  
  - Simple: “A structured way to find deeper system problems that led to an error.”  
  - Exam framing: “RCA is typically performed after a serious event to identify system-level fixes.”

- Capacity  
  - Simple: “Does this patient understand, appreciate, reason about, and communicate a choice for this decision?”  

---

## 13. QA CHECKLIST & TEST PLAN

CONTENT QA:

- Verify that each major Step 3 ethics / safety topic is included:
  - Principles, consent/capacity, confidentiality, reporting, end-of-life, professionalism, research ethics, public health, safety/QI, communication/error disclosure.  
- Ensure content is generic and high-level:
  - No jurisdiction-specific statutes presented as universal law.  
  - All cases are synthetic.

FUNCTIONAL QA:

- Confirm:
  - No login or user-account flows exist.  
  - No API calls for user data.  
  - No localStorage/IndexedDB usage for anything except *optional* theme preference.  
- Confirm:
  - Refreshing the page resets quiz state.  
  - There is no “progress” bar or “you have completed X% of the course” view.

USABILITY QA:

- Test on small screens (phones) and larger devices (tablets, laptops).  
- Ensure tap targets are large enough, content wraps nicely, and text size is comfortable.  
- Verify keyboard accessibility for major interactive elements.

---

## 14. ROADMAP (FOR CREATORS, NOT IMPLEMENTED IN UI)

- M0: Core Ethics  
  - Modules: Principles, Consent/Capacity, Confidentiality  
  - 20–30 vignettes  

- M1: End-of-Life + Professionalism + Communication  
  - Add: advance directives, EOL cases, professionalism scenarios, error-disclosure cases  

- M2: Research Ethics + Public Health + Safety/QI  
  - Add: research consent, vulnerable populations, mandatory reporting, RCA/FMEA content and cases  

- M3: Mixed Case Library  
  - Build a large pool (50–100) of mixed-discipline vignettes combining ethics and patient safety concepts.

---

## ACCEPTANCE CRITERIA (FOR THE APP DESIGN)

- All high-yield USMLE Step 3 topics related to **bioethics, medical ethics, and patient safety** are covered and mapped into modules.  
- The app **never** stores or tracks user progress, scores, or attempts.  
- The **Settings page** includes only:
  - Theme toggle  
  - About  
  - Disclaimers  
- Users can practice decision-making in ethics and safety vignettes with immediate feedback in **single sessions** without any data retention.

---

## NOW GENERATE

Using the inputs above, generate the complete app design and scaffolding based on this specification.  
Respect all hard constraints on **no data management** and **minimal settings (theme/about/disclaimers only)**.
