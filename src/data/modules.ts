import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'principles',
    title: 'Core Bioethical Principles',
    summary: 'Master the four fundamental principles that guide ethical medical decision-making and recognize how they apply in clinical vignettes.',
    icon: '⚖️',
    sections: [
      {
        id: 'four-principles',
        title: 'The Four Principles',
        content: `The four core principles of biomedical ethics provide a framework for analyzing ethical dilemmas:

**Autonomy**: Respect for a patient's right to make their own informed decisions about their medical care. This includes the right to refuse treatment, even if that refusal seems unwise to others.

**Beneficence**: The obligation to act in the patient's best interest and promote their well-being. This means recommending treatments that offer genuine benefit.

**Nonmaleficence**: "First, do no harm." Avoid causing harm or injury to patients. When weighing treatment options, consider both potential benefits and risks.

**Justice**: Fair and equitable distribution of healthcare resources. All patients should have access to appropriate care regardless of their ability to pay, social status, or other characteristics.`,
        pearls: [
          'When principles conflict, autonomy typically takes precedence for competent adults making informed decisions',
          'Step 3 often tests your ability to identify which principle is most relevant to a given scenario',
          'Justice issues frequently appear in resource allocation and triage questions'
        ],
        pitfalls: [
          'Don\'t override a competent patient\'s autonomy just because you think another choice is "better"',
          'Beneficence doesn\'t justify paternalism when a patient has decision-making capacity',
          'Remember that nonmaleficence includes avoiding unnecessary tests and procedures'
        ]
      },
      {
        id: 'related-concepts',
        title: 'Related Ethical Concepts',
        content: `Beyond the four core principles, several other concepts frequently appear on Step 3:

**Fidelity**: Being faithful to commitments and maintaining trust in the physician-patient relationship. This includes keeping promises and maintaining continuity of care when possible.

**Veracity**: Truth-telling. Physicians have an ethical obligation to be honest with patients about their diagnosis, prognosis, and treatment options.

**Respect for Persons**: Recognizing the inherent worth and dignity of every individual, regardless of their condition, social status, or decision-making capacity.`,
        pearls: [
          'Veracity is tested through scenarios about disclosure of errors, bad news, and prognosis',
          'Fidelity comes up in questions about maintaining the therapeutic relationship'
        ]
      },
      {
        id: 'application',
        title: 'Applying Principles in Practice',
        content: `In clinical practice and on Step 3, you'll often face scenarios where principles conflict:

**Autonomy vs. Beneficence**: A competent patient refuses a life-saving treatment. Respect for autonomy means honoring their informed refusal, even if you believe treatment is in their best interest.

**Justice vs. Beneficence**: Limited ICU beds during a crisis require triage decisions that balance individual patient benefit against fair resource allocation.

**Nonmaleficence vs. Beneficence**: Aggressive treatment might offer small benefits but cause significant harm. The ethical approach weighs these carefully with the patient.

The exam typically expects you to:
- Identify the dominant ethical principle in the scenario
- Recognize when autonomy should be respected
- Know when beneficence justifies intervention (e.g., true emergencies, patients lacking capacity)
- Understand justice in resource allocation contexts`,
        pearls: [
          'The "best next step" is often to ensure informed consent and respect the patient\'s autonomous decision',
          'Emergency situations are the main exception where beneficence can override the usual consent process'
        ],
        pitfalls: [
          'Don\'t confuse disagreement with a patient\'s choice as evidence they lack capacity',
          'Avoid choosing answers that are paternalistic when the patient is competent'
        ]
      }
    ],
    keyPoints: [
      'Autonomy, beneficence, nonmaleficence, and justice form the foundation of medical ethics',
      'For competent adults, autonomy typically takes precedence',
      'Principles often conflict; recognizing which principle applies is key to Step 3 questions',
      'Fidelity and veracity are important supporting concepts'
    ]
  },
  {
    id: 'consent_capacity',
    title: 'Consent, Capacity & Surrogates',
    summary: 'Understand when patients can consent, how to assess capacity, and who decides when patients cannot make their own decisions.',
    icon: '✍️',
    sections: [
      {
        id: 'informed-consent',
        title: 'Elements of Informed Consent',
        content: `Informed consent is a process, not just a signature. It requires:

**1. Disclosure**: Provide information about:
   - The diagnosis or clinical situation
   - Proposed treatment or procedure
   - Risks and benefits of the proposed intervention
   - Alternative options (including doing nothing)
   - Likelihood of success

**2. Understanding**: The patient must comprehend the information provided. Use appropriate language and check understanding.

**3. Voluntariness**: The decision must be free from coercion or undue influence.

**4. Capacity**: The patient must have decision-making capacity for this specific decision.

**5. Authorization**: The patient gives permission for the proposed intervention.`,
        pearls: [
          'Consent is an ongoing process, not a one-time event',
          'If a patient doesn\'t understand initially, explain again in simpler terms',
          'Document the consent discussion, not just the signature'
        ],
        pitfalls: [
          'Don\'t obtain consent when a patient is sedated, intoxicated, or in severe pain',
          'Avoid getting consent from family members when the patient is competent',
          'Don\'t skip the risks or alternatives to make a procedure sound more appealing'
        ]
      },
      {
        id: 'capacity-assessment',
        title: 'Decision-Making Capacity',
        content: `Capacity is decision-specific and can fluctuate. A patient may have capacity for some decisions but not others. To assess capacity, evaluate four components:

**1. Understanding**: Can the patient comprehend the information about their condition and treatment options?

**2. Appreciation**: Does the patient recognize how this information applies to their own situation?

**3. Reasoning**: Can the patient weigh the risks and benefits and explain their thought process?

**4. Communication**: Can the patient express a clear, consistent choice?

**Key Points**:
- Capacity is NOT the same as competence (competence is a legal determination)
- Depression, delirium, or other conditions may temporarily impair capacity
- Disagreeing with medical advice does NOT mean a patient lacks capacity
- The threshold for capacity should match the decision's significance (higher bar for risky refusals)`,
        pearls: [
          'Capacity can be restored: treat delirium, wait for intoxication to clear, manage pain',
          'A Mini-Mental Status Exam score doesn\'t determine capacity',
          'If uncertain, consult psychiatry for formal capacity evaluation'
        ],
        pitfalls: [
          'Don\'t assume dementia or mental illness automatically means no capacity',
          'Don\'t confuse a "bad" decision with incapacity',
          'Avoid rushing capacity assessments during acute illness'
        ]
      },
      {
        id: 'minors-exceptions',
        title: 'Minors and Exceptions',
        content: `Generally, minors (under 18) cannot provide consent; parents or guardians must consent. However, important exceptions exist:

**Emancipated Minors** can consent for themselves:
- Married minors
- Minors who are parents
- Minors living independently and financially self-sufficient
- Active-duty military members

**Mature Minor Doctrine**: Some states allow mature adolescents to consent for certain treatments, typically evaluated case-by-case.

**Confidential Services**: Most jurisdictions allow minors to consent without parental involvement for:
- Sexual health services (STI testing/treatment, contraception)
- Prenatal care
- Substance use disorder treatment
- Mental health counseling (in many states)

**Emergency Exception**: In true emergencies where delay would cause serious harm, treatment can proceed without consent (implied consent).

**Court Orders**: In rare cases, courts can override parental refusal if the child's welfare is at risk.`,
        pearls: [
          'For Step 3: If a teen requests STI testing or contraception, provide it confidentially',
          'Encourage parental involvement, but don\'t require it for confidential services',
          'True emergencies don\'t require consent—act to save the patient'
        ],
        pitfalls: [
          'Don\'t refuse needed care to a minor seeking confidential services',
          'Don\'t call parents without the minor\'s permission for confidential matters',
          'Emergency exception is for TRUE emergencies, not elective procedures'
        ]
      },
      {
        id: 'surrogates',
        title: 'Surrogate Decision-Makers',
        content: `When a patient lacks capacity and there's no advance directive, a surrogate makes decisions:

**Typical Surrogate Hierarchy** (varies by state):
1. Court-appointed guardian
2. Healthcare proxy or durable power of attorney for healthcare
3. Spouse or domestic partner
4. Adult children (majority decision if multiple)
5. Parents
6. Adult siblings
7. Other relatives

**Two Standards for Surrogate Decisions**:

**1. Substituted Judgment**: What would the patient want? Use the patient's previously expressed values, preferences, and beliefs.

**2. Best Interest Standard**: When the patient's wishes are unknown, choose what a reasonable person would consider in the patient's best interest, weighing benefits and burdens.

**Advance Directives**:
- Living Will: Written document expressing treatment preferences
- Healthcare Proxy/Durable Power of Attorney: Designates someone to make decisions
- These take precedence over family members' opinions`,
        pearls: [
          'Always look for an advance directive first',
          'Substituted judgment is preferred over best interest when patient\'s values are known',
          'If family members disagree, seek ethics consultation'
        ],
        pitfalls: [
          'Don\'t let the loudest family member override others or the patient\'s known wishes',
          'A healthcare proxy beats a spouse if formally designated',
          'Surrogates should decide based on what the patient would want, not what the surrogate wants'
        ]
      },
      {
        id: 'ama',
        title: 'Against Medical Advice (AMA)',
        content: `When a competent patient wants to leave the hospital or refuse treatment:

**Steps to Take**:
1. **Assess capacity**: Ensure the patient has decision-making capacity
2. **Explore reasons**: Understand why they want to leave (pain, fear, misunderstanding, etc.)
3. **Address concerns**: Try to resolve issues that might keep them in treatment
4. **Explain risks**: Clearly describe potential consequences of leaving
5. **Offer alternatives**: Partial treatment, outpatient follow-up, etc.
6. **Document thoroughly**: Record capacity assessment, discussion of risks, and patient's decision
7. **Arrange follow-up**: Provide prescriptions, instructions, and follow-up appointments
8. **Let them go**: If they maintain their decision and have capacity, respect their autonomy

**Key Principles**:
- Competent adults have the right to refuse care, even if the decision could result in death
- "AMA" should not be used punitively
- Continue to offer support and follow-up care`,
        pearls: [
          'The best answer often involves exploring the patient\'s concerns first',
          'Don\'t abandon the patient just because they refuse one treatment',
          'Good documentation protects you and respects the patient'
        ],
        pitfalls: [
          'Don\'t try to coerce or manipulate a competent patient into staying',
          'Don\'t refuse follow-up care as "punishment" for leaving AMA',
          'Never physically restrain a competent adult who wants to leave (unless danger to others)'
        ]
      }
    ],
    keyPoints: [
      'Informed consent requires disclosure, understanding, voluntariness, capacity, and authorization',
      'Capacity is decision-specific and can fluctuate',
      'Minors need parental consent except for emancipated status or confidential services',
      'Surrogates should use substituted judgment when possible',
      'Competent patients have the right to refuse treatment, even life-saving care'
    ]
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality & Privacy',
    summary: 'Learn when to maintain patient confidentiality and when ethical or legal obligations require disclosure.',
    icon: '🔒',
    sections: [
      {
        id: 'basics',
        title: 'Confidentiality Fundamentals',
        content: `**Confidentiality** is the ethical duty to keep patient information private. **Privacy** is the patient's right to control their personal information.

**Core Principles**:
- Patient information should be shared only with those directly involved in the patient's care
- Discuss patient information in private settings, not in public areas
- Medical records should be secured and accessed only by authorized personnel
- Patients have the right to access their own medical records

**HIPAA** (Health Insurance Portability and Accountability Act) is the U.S. federal law protecting patient privacy. Key points:
- Permits sharing information for treatment, payment, and healthcare operations
- Patients can request an accounting of disclosures
- Violations can result in fines and criminal penalties`,
        pearls: [
          'The default is to maintain confidentiality unless there\'s a specific exception',
          'When in doubt, ask the patient for permission to disclose',
          'Discuss patients by room number or initials in public areas, not by name'
        ],
        pitfalls: [
          'Don\'t discuss patients in elevators, cafeterias, or other public spaces',
          'Don\'t leave patient charts or computer screens visible to others',
          'Don\'t access records of patients you\'re not treating (even celebrities or family)'
        ]
      },
      {
        id: 'family-requests',
        title: 'Family Requests for Information',
        content: `Family members often want information about a patient. The ethical approach depends on the situation:

**If Patient Has Capacity**:
- Get the patient's explicit permission before sharing information with family
- Let the patient decide how much to share and with whom
- Don't assume family members should automatically know everything

**If Patient Lacks Capacity**:
- You may share information with the legal surrogate decision-maker
- Share information necessary for the surrogate to make informed decisions
- Still respect the patient's previously expressed preferences when known

**Special Situations**:
- **Spouse/Partner**: No automatic right to information if patient is competent
- **Adult Patient's Parents**: Same rules apply—need patient permission
- **Concerned Family**: You can listen to their concerns without disclosing patient information`,
        pearls: [
          'Ask the patient who they want involved in their care early in the admission',
          'Document the patient\'s preferences about information sharing',
          'You can acknowledge someone is a patient without sharing details'
        ],
        pitfalls: [
          'Don\'t assume a spouse or parent automatically gets full access to information',
          'Don\'t share test results with family before telling the patient',
          'Avoid detailed discussions with family without the patient\'s permission'
        ]
      },
      {
        id: 'breaches',
        title: 'Mandatory Breaches of Confidentiality',
        content: `Certain situations require breaking confidentiality for legal or ethical reasons:

**1. Danger to Self**:
- Active suicidal ideation with plan and intent
- May require involuntary psychiatric hold

**2. Danger to Others** (Duty to Warn/Protect):
- Credible threat of violence to an identifiable person
- Based on Tarasoff v. Regents of University of California
- Must warn the potential victim and/or notify police
- Applies to serious, imminent threats

**3. Child Abuse or Neglect**:
- Mandatory reporting in all states
- Includes physical abuse, sexual abuse, emotional abuse, and neglect
- Report to Child Protective Services
- Don't need proof—reasonable suspicion is sufficient

**4. Elder or Vulnerable Adult Abuse**:
- Mandatory reporting in most states
- Report to Adult Protective Services

**5. Reportable Infectious Diseases**:
- Varies by jurisdiction
- Typically includes HIV, tuberculosis, sexually transmitted infections, etc.
- Report to public health authorities

**6. Occupational or Safety Concerns**:
- Conditions affecting ability to safely drive, pilot, operate machinery
- Seizure disorders, severe vision impairment, etc.
- Requirements vary by state

**7. Gunshot Wounds and Violent Injuries**:
- Often mandatory reporting to law enforcement`,
        pearls: [
          'Don\'t delay reporting suspected child abuse while gathering more evidence',
          'Duty to warn requires a specific, identifiable victim—not vague threats',
          'Document your reasoning when you breach confidentiality'
        ],
        pitfalls: [
          'Don\'t report intimate partner violence without the competent adult victim\'s consent (unless mandatory in your jurisdiction)',
          'General angry statements ("I could kill him") don\'t typically trigger duty to warn',
          'Don\'t let fear of reporting child abuse cause you to overlook signs'
        ]
      },
      {
        id: 'adolescents',
        title: 'Confidentiality with Adolescents',
        content: `Adolescent confidentiality requires balancing the teen's autonomy with parental involvement:

**General Approach**:
- Explain confidentiality limits at the start
- Encourage teens to involve parents when appropriate
- Maintain confidentiality for sensitive issues (sexual health, substance use, mental health) as allowed by law

**What to Keep Confidential** (in most jurisdictions):
- Sexual activity, contraception use, STI testing/treatment
- Substance use (unless immediately life-threatening)
- Mental health concerns (unless suicidal/homicidal)

**When to Break Confidentiality with Adolescents**:
- Active suicidal ideation with plan/intent
- Serious threat of harm to others
- Abuse by an adult
- Life-threatening medical condition requiring immediate intervention

**Best Practices**:
- Talk to the teen alone for part of the visit
- Encourage gradual disclosure to parents when safe and appropriate
- Use judgment: a 13-year-old and a 17-year-old may warrant different approaches`,
        pearls: [
          'Set expectations early: "What we discuss is private unless you\'re in danger"',
          'For Step 3: typically maintain confidentiality for adolescent sexual health',
          'Encourage but don\'t force parental involvement'
        ],
        pitfalls: [
          'Don\'t promise absolute confidentiality—always mention safety exceptions',
          'Don\'t immediately call parents when a teen discloses sexual activity',
          'Avoid being judgmental, which may shut down communication'
        ]
      }
    ],
    keyPoints: [
      'Default to maintaining confidentiality unless there\'s a specific exception',
      'Get patient permission before sharing information with family members',
      'Mandatory reporting includes child abuse, elder abuse, danger to self/others, and certain infectious diseases',
      'Duty to warn requires a credible, specific threat to an identifiable person',
      'Maintain adolescent confidentiality for sexual health and substance use unless life-threatening'
    ]
  },
  {
    id: 'end_of_life',
    title: 'End-of-Life Care',
    summary: 'Navigate advance directives, code status, and end-of-life decisions with clarity and compassion.',
    icon: '🕊️',
    sections: [
      {
        id: 'code-status',
        title: 'Code Status and DNR Orders',
        content: `**DNR (Do Not Resuscitate)** means no CPR if the patient's heart stops. **DNI (Do Not Intubate)** means no mechanical ventilation.

**Key Concepts**:
- DNR/DNI are medical orders based on patient preferences
- They don't mean "do not treat"—other care continues
- DNR/DNI can be time-limited or condition-specific
- Patients can change their code status at any time

**Important Distinctions**:
- DNR ≠ withdraw all care
- DNR patients still receive medications, procedures, IV fluids, etc.
- DNR means only: no chest compressions, no defibrillation, no emergency intubation for cardiac arrest

**Goals of Care Discussions**:
Rather than just asking "Do you want CPR?", frame discussions around:
- Patient's understanding of their illness and prognosis
- What quality of life means to them
- Their goals: longevity vs. comfort vs. function
- Their fears and hopes
- Then explain how code status aligns with these goals`,
        pearls: [
          'Frame DNR discussions around goals, not just technical procedures',
          'Explain the realistic outcomes of CPR in their specific situation',
          'DNR doesn\'t mean giving up—it means aligning treatment with values'
        ],
        pitfalls: [
          'Don\'t say "There\'s nothing more we can do" to a DNR patient',
          'Don\'t assume very elderly or very ill patients automatically want DNR',
          'Don\'t let your own values influence the patient\'s decision'
        ]
      },
      {
        id: 'advance-directives',
        title: 'Advance Directives',
        content: `Advance directives are legal documents expressing treatment preferences for a time when the patient can't communicate:

**Types of Advance Directives**:

**1. Living Will**:
- Written statement of treatment preferences
- Typically addresses life-sustaining treatment in terminal illness or persistent vegetative state
- Provides guidance but may not cover every situation

**2. Healthcare Proxy / Durable Power of Attorney for Healthcare (DPOA-HC)**:
- Legally designates someone to make medical decisions
- Takes effect when the patient lacks capacity
- The proxy's authority is broader than a living will's scope
- Proxy should make decisions based on what the patient would want (substituted judgment)

**3. Physician Orders for Life-Sustaining Treatment (POLST/MOLST)**:
- Medical order form (not just a directive)
- More detailed than DNR
- Covers CPR, intubation, IV fluids, antibiotics, feeding tubes
- Portable across healthcare settings
- Typically for patients with serious illness

**Using Advance Directives**:
- Look for advance directives on admission
- Discuss with patients and families to ensure understanding
- Directives can be changed or revoked at any time by a competent patient
- When directives conflict with family wishes, the directive prevails`,
        pearls: [
          'A healthcare proxy makes decisions; a living will provides guidance',
          'The proxy\'s job is to honor the patient\'s wishes, not their own',
          'Advance directives are legally binding when valid and applicable'
        ],
        pitfalls: [
          'Don\'t ignore an advance directive because family members disagree',
          'Don\'t assume an old advance directive is invalid—check if it\'s been revoked',
          'Living wills may not address the current specific situation'
        ]
      },
      {
        id: 'withdrawing-treatment',
        title: 'Withholding vs. Withdrawing Treatment',
        content: `**Withholding**: Not starting a treatment.
**Withdrawing**: Stopping a treatment already started.

**Ethical Equivalence**:
- Ethically, there is NO moral difference between withholding and withdrawing treatment
- Both are permissible when they align with the patient's wishes or best interests
- The same ethical analysis applies to both decisions

**Why This Matters**:
- Physicians sometimes hesitate to withdraw treatments once started
- This can lead to overly aggressive care that doesn't align with goals
- Knowing withdrawal is ethically acceptable allows time-limited trials

**Practical Application**:
- Offer time-limited trials: "Let's try mechanical ventilation for 48 hours and reassess"
- If treatment isn't meeting goals, it's ethical to withdraw it
- Withdrawal doesn't require the patient to be imminently dying`,
        pearls: [
          'For Step 3: withholding and withdrawing are ethically equivalent',
          'Fear of withdrawing shouldn\'t lead to withholding potentially helpful treatments',
          'Time-limited trials are a useful approach for uncertain situations'
        ],
        pitfalls: [
          'Don\'t continue non-beneficial treatments just because they were started',
          'Don\'t feel obligated to start treatments you wouldn\'t withdraw',
          'Withdrawal isn\'t "killing"—it\'s allowing natural death'
        ]
      },
      {
        id: 'palliative-care',
        title: 'Palliative Care and Comfort Measures',
        content: `**Palliative Care**: Specialized medical care focused on relief from symptoms and stress of serious illness. The goal is to improve quality of life for both patient and family.

**Key Points**:
- Palliative care can be provided alongside curative treatment
- It's appropriate at any stage of serious illness
- Not the same as hospice (though hospice is a type of palliative care)

**Comfort-Focused Care**:
When goals shift to comfort:
- Adequate pain and symptom management (even if it may hasten death)
- Stop non-beneficial treatments (frequent blood draws, vitals checks, etc.)
- Focus on dignity, meaning, family presence

**Double Effect**:
Giving opioids for pain relief is ethical even if it may hasten death, if:
1. The intent is to relieve suffering, not to cause death
2. Pain relief is a proportionate goal
3. The patient consents (or surrogate consents)

**Euthanasia vs. Physician-Assisted Dying vs. Palliative Sedation**:
- **Euthanasia**: Deliberately ending life (illegal in U.S.)
- **Physician-Assisted Dying**: Physician provides means for patient to end own life (legal in some states with strict criteria)
- **Palliative Sedation**: Sedation for refractory symptoms in dying patients (ethically acceptable)`,
        pearls: [
          'Adequate pain control in dying patients is ethical and essential',
          'Palliative care improves quality of life and sometimes even longevity',
          'Consult palliative care early, not just at the end'
        ],
        pitfalls: [
          'Don\'t withhold opioids from dying patients due to fear of hastening death',
          'Don\'t equate comfort measures with "giving up"',
          'Palliative care isn\'t only for the last days—involve them earlier'
        ]
      },
      {
        id: 'artificial-nutrition',
        title: 'Artificial Nutrition and Hydration',
        content: `**Artificial Nutrition and Hydration (ANH)**: Feeding tubes, IV fluids, TPN provided when a patient cannot eat or drink.

**Ethical Status**:
- ANH is considered a medical treatment, not basic care
- As a medical treatment, it can be refused or withdrawn
- The same ethical principles apply as for other treatments

**Common Scenarios**:

**Advanced Dementia**:
- Evidence shows tube feeding doesn't prolong life or prevent aspiration pneumonia in advanced dementia
- May cause discomfort and require restraints
- Hand feeding is often preferred for comfort

**Persistent Vegetative State**:
- Patient may survive for years with ANH
- Decisions typically based on patient's advance directive or substituted judgment
- Families may struggle with the symbolism of food/water

**Terminal Illness**:
- As patients approach death, they often naturally stop eating/drinking
- Forcing nutrition/hydration may cause discomfort (fluid overload, etc.)
- Small amounts for comfort are appropriate

**Best Practices**:
- Explore goals of care
- Educate about realistic outcomes
- Respect patient/surrogate decisions
- Offer time-limited trials when uncertain`,
        pearls: [
          'For Step 3: ANH is a medical treatment that can be refused',
          'Evidence doesn\'t support tube feeding in advanced dementia',
          'Decreased oral intake near death is normal and not usually distressing to the patient'
        ],
        pitfalls: [
          'Don\'t frame withdrawal of ANH as "starving" the patient',
          'Don\'t place feeding tubes in advanced dementia without a goals of care discussion',
          'Avoid the assumption that nutrition/hydration is always beneficial'
        ]
      }
    ],
    keyPoints: [
      'DNR/DNI doesn\'t mean withdrawal of all care, only no CPR/intubation',
      'Advance directives (living wills, healthcare proxies) guide care when patients can\'t communicate',
      'Withholding and withdrawing treatment are ethically equivalent',
      'Adequate pain control is ethical even if it may hasten death (double effect)',
      'Artificial nutrition and hydration are medical treatments that can be refused or withdrawn'
    ]
  },
  {
    id: 'professionalism',
    title: 'Professionalism & Boundaries',
    summary: 'Maintain professional boundaries, recognize impaired colleagues, and uphold ethical documentation practices.',
    icon: '👔',
    sections: [
      {
        id: 'boundaries',
        title: 'Professional Boundaries',
        content: `Professional boundaries protect both patients and physicians, maintaining the therapeutic relationship.

**Key Boundary Principles**:
- The physician-patient relationship is inherently unequal (power differential)
- Physicians must not exploit this relationship for personal gain
- Clear boundaries maintain trust and protect both parties

**Boundary Violations**:

**Sexual Relationships**:
- Sexual relationships with current patients are NEVER acceptable
- Even if the patient "consents," the power imbalance makes true consent impossible
- Relationships with former patients are ethically problematic and often prohibited
- Same rules apply regardless of who initiates

**Dual Relationships**:
- Treating family members or close friends creates conflicts of interest
- May impair objectivity and clinical judgment
- Should be avoided when possible
- If unavoidable (e.g., rural areas), establish clear boundaries and consider involving another physician

**Gift-Giving**:
- Small tokens of appreciation are generally acceptable
- Large gifts or monetary gifts create obligation and should be declined
- Gifts in the will from a patient should be disclosed and may need to be refused`,
        pearls: [
          'When in doubt about a boundary, ask: "Would I be comfortable if this were made public?"',
          'Set clear limits early if a patient seems to be crossing boundaries',
          'Consult with colleagues or ethics committee if uncertain'
        ],
        pitfalls: [
          'Never rationalize that a sexual relationship with a patient is acceptable',
          'Don\'t accept expensive gifts from patients',
          'Avoid treating family members for anything beyond minor acute issues'
        ]
      },
      {
        id: 'industry',
        title: 'Industry Relationships and Conflicts of Interest',
        content: `Relationships with pharmaceutical and medical device companies can create conflicts of interest.

**Common Scenarios**:
- Drug representatives providing samples, meals, or gifts
- Speaking fees or consulting arrangements
- Research funding
- Stock ownership in healthcare companies

**Ethical Guidelines**:
- Disclose conflicts of interest to patients, colleagues, and in publications
- Base prescribing on evidence, not on industry relationships
- Avoid gifts that might influence prescribing
- Many institutions ban industry-sponsored meals and gifts

**Best Practices**:
- Focus on generic names, not brand names
- Consult objective sources (UpToDate, Cochrane) rather than industry materials
- Decline speaking engagements where you're expected to promote specific products
- If receiving research funding, ensure the sponsor can't suppress negative results`,
        pearls: [
          'Free drug samples often lead to prescribing more expensive brand-name drugs',
          'Even small gifts can unconsciously influence prescribing',
          'Transparency is key—disclose potential conflicts'
        ],
        pitfalls: [
          'Don\'t assume you\'re immune to influence from industry relationships',
          'Avoid exclusive formulary restrictions based on your financial interests',
          'Don\'t accept consulting fees that are clearly excessive for the work'
        ]
      },
      {
        id: 'impaired-colleagues',
        title: 'Impaired Colleagues',
        content: `Physicians have a duty to identify and report colleagues who are impaired and may pose a risk to patients.

**Signs of Impairment**:
- Smelling of alcohol
- Appearing intoxicated or sedated
- Slurred speech, coordination problems
- Frequent absences or lateness
- Deteriorating work performance
- Mood swings, irritability
- Writing excessive narcotic prescriptions for self or family

**Substance Use Disorders**:
- Physicians have higher rates of substance use disorders than the general population
- Access to drugs facilitates misuse
- Stigma and fear of consequences often delay help-seeking

**What to Do**:
1. **Patient Safety First**: If immediate danger, remove the colleague from patient care
2. **Approach with Concern**: Talk to the colleague privately if safe
3. **Report**: Report to appropriate authority (department chair, chief of staff, medical board)
4. **Don't Enable**: Don't cover up for an impaired colleague
5. **Encourage Treatment**: Many states have physician health programs

**Legal and Ethical Obligations**:
- Protecting patients overrides loyalty to colleagues
- Most jurisdictions legally require reporting impaired physicians
- Failure to report can result in disciplinary action`,
        pearls: [
          'For Step 3: the answer is usually to report to the appropriate supervisor',
          'Don\'t confront an impaired colleague during an emergency—ensure patient safety first',
          'Many physician health programs offer confidential assessment and treatment'
        ],
        pitfalls: [
          'Don\'t ignore warning signs hoping they\'ll resolve on their own',
          'Don\'t cover for an impaired colleague out of misplaced loyalty',
          'Don\'t delay reporting due to fear of ruining their career—patients come first'
        ]
      },
      {
        id: 'documentation',
        title: 'Documentation Ethics',
        content: `Medical records are legal documents and must be accurate, honest, and complete.

**Documentation Principles**:
- **Accuracy**: Document what you observed, did, and thought
- **Timeliness**: Document as close to real-time as possible
- **Completeness**: Include relevant details
- **Objectivity**: Separate observations from interpretations

**Unethical Documentation Practices**:

**Falsification**:
- Intentionally recording false information
- Can constitute fraud (e.g., upcoding for reimbursement)
- Can result in loss of license, fines, or imprisonment

**Backdating**:
- Changing the date/time on a note to appear earlier
- May hide delays in care
- Ethically problematic even if the content is accurate

**Altering Records**:
- Changing or deleting information after the fact (except via proper addendum)
- May be discovered during legal proceedings
- Use addenda to correct errors, clearly marked with current date

**Copy-Paste Errors**:
- Copying previous notes without updating
- Can propagate errors
- Makes it hard to discern current status from past status
- May constitute fraud if used to inflate billing

**Best Practices**:
- Document contemporaneously when possible
- If you must document late, mark as a late entry
- To correct an error, add an addendum explaining the correction
- Be cautious with copy-paste—update all information`,
        pearls: [
          'If you didn\'t document it, it didn\'t happen (legally)',
          'The medical record is the most important evidence in malpractice cases',
          'Clear, timely documentation protects you and your patients'
        ],
        pitfalls: [
          'Never alter a record to make yourself look better in retrospect',
          'Don\'t backdate notes to hide a delay',
          'Avoid copy-paste notes that don\'t reflect the current visit'
        ]
      },
      {
        id: 'social-media',
        title: 'Social Media and Public Presence',
        content: `Physicians' online behavior can affect professionalism and patient trust.

**Key Principles**:
- Maintain patient confidentiality online
- Recognize that online behavior reflects on the profession
- Set appropriate boundaries with patients online

**Common Issues**:

**Patient Confidentiality**:
- Never post identifiable patient information, even with details changed
- Be cautious even with de-identified cases—details can reveal identity
- "Vaguebooking" about difficult cases still violates confidentiality

**Social Media Boundaries with Patients**:
- Generally avoid friending or following current patients on personal accounts
- Don't communicate about medical issues via social media
- Direct patients to appropriate channels for medical questions

**Professionalism Online**:
- Your online presence represents you and the profession
- Avoid posting content that could undermine trust (offensive material, excessive partying, intoxication)
- Be aware that patients, colleagues, and employers can see your posts
- Use privacy settings, but don't assume anything is truly private

**Acceptable Online Activity**:
- Patient education via professional blogs or social media
- Advocacy and public health messaging
- Professional networking`,
        pearls: [
          'Ask yourself: "Would I be comfortable if my patients saw this post?"',
          'Use separate professional and personal accounts',
          'Assume anything you post could become public'
        ],
        pitfalls: [
          'Don\'t post photos of patients, even if their face isn\'t shown',
          'Don\'t "check in" at the hospital or post about specific patient situations',
          'Avoid accepting friend requests from current patients'
        ]
      }
    ],
    keyPoints: [
      'Sexual relationships with patients are never acceptable',
      'Report impaired colleagues to protect patient safety',
      'Documentation must be accurate, timely, and honest—never falsify or backdate',
      'Industry relationships create conflicts of interest that must be disclosed',
      'Maintain patient confidentiality and professionalism on social media'
    ]
  },
  {
    id: 'research',
    title: 'Research Ethics',
    summary: 'Understand informed consent in research, protection of vulnerable populations, and ethical conduct of clinical trials.',
    icon: '🔬',
    sections: [
      {
        id: 'research-consent',
        title: 'Informed Consent in Research',
        content: `Informed consent for research has stricter requirements than clinical consent:

**Elements of Research Consent**:
1. **Purpose**: Why the study is being done
2. **Procedures**: What will happen, including randomization if applicable
3. **Risks and Benefits**: Including risks of experimental interventions
4. **Alternatives**: Including not participating
5. **Confidentiality**: How data will be protected
6. **Voluntary Nature**: Can withdraw at any time without penalty
7. **Compensation**: If any, and whether it continues if they withdraw
8. **Contact Information**: For questions and concerns
9. **Statement of Research**: Clear statement that this is research, not routine care

**Key Differences from Clinical Consent**:
- Research may not directly benefit the participant
- Emphasis on voluntary participation and right to withdraw
- More detailed explanation of risks
- Must be free from coercion or undue inducement`,
        pearls: [
          'Research consent must be truly voluntary—no pressure from treating physicians',
          'Payment for participation should compensate for time, not induce risky participation',
          'Therapeutic misconception: participants may think research is meant to benefit them personally'
        ],
        pitfalls: [
          'Don\'t pressure patients to enroll in research',
          'Don\'t downplay risks to encourage participation',
          'Avoid excessive payment that could constitute undue inducement'
        ]
      },
      {
        id: 'equipoise',
        title: 'Clinical Equipoise',
        content: `**Clinical Equipoise**: A state of genuine uncertainty in the medical community about whether a treatment is beneficial.

**Why It Matters**:
- Equipoise justifies randomized controlled trials
- Without equipoise, it's unethical to randomize patients
- If evidence clearly favors one treatment, that treatment should be provided

**Example**:
- Equipoise exists: Unclear if Drug A or Drug B is better for condition X → Ethical to randomize
- No equipoise: Drug A is proven superior → Unethical to randomize patients to inferior Drug B

**Personal vs. Community Equipoise**:
- **Personal equipoise**: Individual physician's uncertainty
- **Community (collective) equipoise**: Genuine disagreement in expert community
- Studies require community equipoise, not just personal uncertainty`,
        pearls: [
          'If the standard of care is established, it\'s unethical to deny it for research',
          'Placebo controls are only ethical when no effective treatment exists or when withholding is safe',
          'Monitoring ongoing results may disturb equipoise and require stopping the trial early'
        ],
        pitfalls: [
          'Don\'t enroll patients in studies comparing to placebo when effective treatment exists',
          'Don\'t continue a study if early results show clear superiority (lack of equipoise)',
          'Avoid trials designed primarily to benefit the sponsor rather than generate knowledge'
        ]
      },
      {
        id: 'vulnerable-populations',
        title: 'Vulnerable Populations in Research',
        content: `Certain groups need additional protections in research due to increased vulnerability:

**Who Is Vulnerable?**:
1. **Children**: Cannot provide informed consent; need parental permission and child assent when appropriate
2. **Prisoners**: Coercion and limited autonomy
3. **Cognitively Impaired**: May not fully understand consent
4. **Economically Disadvantaged**: May be unduly influenced by payment
5. **Pregnant Women**: Concern for fetal welfare
6. **Decisionally Impaired**: Severe mental illness, dementia, intoxication

**Additional Protections**:
- Enhanced IRB scrutiny
- Assessment of risk-benefit ratio
- Assurance that vulnerable status isn't being exploited
- Research must have potential to benefit the group (not just exploit them)
- Use vulnerable populations only when necessary (research question requires them)

**Special Cases**:

**Children**:
- Need parental permission AND child's assent (typically age 7+)
- Research must either benefit the child or pose minimal risk
- If the child will directly benefit, one parent's permission may suffice
- For research with no direct benefit and more than minimal risk, stricter review

**Prisoners**:
- Research must address conditions particularly affecting prisoners or be minimal risk
- Review includes prisoner representatives
- Can't offer reduced sentences as compensation (coercive)

**Pregnant Women**:
- Research must have potential to benefit the woman, the fetus, or pregnant women in general
- Risk to fetus must be minimized and clearly justified`,
        pearls: [
          'The vulnerability creates an obligation to protect, not an exclusion from research',
          'Payment should not be so high that it coerces vulnerable participants',
          'Always consider: "Are we enrolling them because we need them, or because they\'re easy to exploit?"'
        ],
        pitfalls: [
          'Don\'t exclude vulnerable populations when the research could benefit them',
          'Don\'t target vulnerable groups for risky research that doesn\'t address their needs',
          'Avoid large payments that might unduly influence economically vulnerable participants'
        ]
      },
      {
        id: 'irb',
        title: 'Institutional Review Boards (IRBs)',
        content: `**IRBs** (Institutional Review Boards) or Ethics Committees review research to protect participants.

**IRB Functions**:
- Review research protocols for ethical acceptability
- Ensure informed consent is adequate
- Assess risk-benefit ratio
- Monitor ongoing studies
- Approve modifications to protocols

**Types of Review**:

**Exempt Review**:
- Minimal risk research (surveys, educational tests, existing data)
- Doesn't require full IRB review

**Expedited Review**:
- Low-risk research
- Reviewed by chair or designated members, not full board

**Full Board Review**:
- More than minimal risk
- Vulnerable populations
- Requires convened IRB meeting

**Continuing Review**:
- Ongoing monitoring of approved studies
- Ensures continuing compliance and addresses adverse events

**What IRBs Evaluate**:
1. Risks minimized and reasonable relative to benefits
2. Selection of subjects is equitable
3. Informed consent is adequate and documented
4. Data and safety monitoring plan is sufficient
5. Privacy and confidentiality protections in place
6. Additional safeguards for vulnerable subjects`,
        pearls: [
          'Always get IRB approval before starting research',
          'Report adverse events and protocol deviations to the IRB promptly',
          'Changes to the protocol require IRB approval before implementation'
        ],
        pitfalls: [
          'Don\'t start research before IRB approval, even "pilot data"',
          'Don\'t make protocol changes without IRB amendment approval',
          'Never withhold adverse event information from the IRB'
        ]
      },
      {
        id: 'conflicts-publication',
        title: 'Conflicts of Interest and Publication Ethics',
        content: `Researchers must maintain integrity in conducting and reporting research.

**Conflicts of Interest in Research**:
- Financial relationships with sponsors
- Intellectual property or patent interests
- Personal relationships that could bias research
- **Management**: Disclose all conflicts; may require recusal or independent oversight

**Publication Ethics**:

**Authorship**:
- Should be based on substantial contributions to:
  1. Conception/design OR data collection/analysis
  2. Drafting or revising the manuscript
  3. Final approval
  4. Accountability for accuracy and integrity
- "Honorary authorship" (adding senior faculty who didn't contribute) is unethical
- "Ghost authorship" (company employees write paper, academic "authors" sign) is unethical

**Plagiarism**:
- Using others' work or ideas without attribution
- Self-plagiarism: republishing your own work without disclosure

**Data Fabrication and Falsification**:
- Making up data
- Manipulating data or methods to get desired results
- Omitting contradictory data

**Selective Reporting**:
- Publishing only positive results (publication bias)
- Not reporting pre-specified outcomes
- Changing primary outcomes after seeing results

**Duplicate Publication**:
- Publishing the same data in multiple papers without disclosure

**Trial Registration**:
- Clinical trials should be registered before enrollment begins
- Reduces selective reporting and publication bias`,
        pearls: [
          'Disclose all conflicts of interest in publications and presentations',
          'Negative results should be published—they contribute to knowledge',
          'Keep detailed records to ensure data integrity and reproducibility'
        ],
        pitfalls: [
          'Don\'t add authors who didn\'t substantially contribute',
          'Don\'t allow sponsors to control data or prevent publication of negative results',
          'Avoid changing your primary outcome after seeing the results'
        ]
      }
    ],
    keyPoints: [
      'Research consent requires detailed explanation of purpose, procedures, risks, and voluntary nature',
      'Clinical equipoise (genuine uncertainty) justifies randomized trials',
      'Vulnerable populations need additional protections; exploit them only when necessary',
      'IRBs review research to ensure ethical conduct and protect participants',
      'Disclose conflicts of interest; avoid plagiarism, fabrication, and selective reporting'
    ]
  }
];

export default modules;
