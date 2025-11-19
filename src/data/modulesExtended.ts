import type { Module } from '../types';

export const extendedModules: Module[] = [
  {
    id: 'public_health',
    title: 'Public Health & Reporting',
    summary: 'Master reporting obligations, public health ethics, and resource allocation principles in crisis situations.',
    icon: '🏥',
    sections: [
      {
        id: 'reportable-diseases',
        title: 'Reportable Diseases and Conditions',
        content: `Certain diseases must be reported to public health authorities to protect population health.

**Commonly Reportable Conditions** (vary by jurisdiction):
- **Sexually Transmitted Infections**: HIV, syphilis, gonorrhea, chlamydia
- **Tuberculosis**: Active and latent TB
- **Vaccine-Preventable Diseases**: Measles, pertussis, etc.
- **Foodborne Illnesses**: Salmonella, E. coli, hepatitis A
- **Emerging Infections**: Novel influenza, COVID-19, etc.
- **Bioterrorism Agents**: Anthrax, plague, smallpox

**Reporting Process**:
- Report to local or state health department
- Usually confidential to public health authorities
- Allows for contact tracing, outbreak investigation, and population monitoring
- Required even if the patient requests confidentiality

**Purpose of Reporting**:
- Disease surveillance
- Outbreak detection and control
- Contact tracing
- Prevention and public health interventions`,
        pearls: [
          'Reporting is mandatory even if the patient objects',
          'Report diseases, not names—public health will follow up',
          'Know your jurisdiction\'s requirements (Step 3 often uses common diseases)'
        ],
        pitfalls: [
          'Don\'t delay reporting to get patient permission',
          'Don\'t assume you need to do the contact tracing yourself',
          'Not reporting is a violation of public health law'
        ]
      },
      {
        id: 'fitness',
        title: 'Fitness to Drive and Work',
        content: `Physicians may need to report conditions that impair a patient's ability to safely drive or work.

**Conditions Affecting Driving Safety**:
- **Seizure Disorders**: Most states require seizure-free period before driving
- **Severe Vision Impairment**: Below legal standards
- **Dementia**: Impaired judgment and reaction time
- **Substance Use Disorders**: Intoxication risk
- **Cardiovascular Conditions**: Syncope, arrhythmias
- **Medications**: Sedating medications

**Ethical Considerations**:
- Balance patient autonomy and confidentiality with public safety
- Reporting requirements vary by state—some mandatory, others voluntary
- Discuss risks with patient first
- Document the discussion and your reasoning

**Occupational Fitness**:
- Commercial drivers: More stringent standards
- Pilots: FAA medical certification
- Healthcare workers: Certain infections (HIV, hepatitis) may require restrictions
- Safety-sensitive positions: May require disclosure of certain conditions

**Approach**:
1. Assess the condition and its impact on safety
2. Educate the patient about the risks
3. Strongly advise not to drive/work if unsafe
4. If mandated, report to DMV or appropriate authority
5. Document thoroughly`,
        pearls: [
          'Always discuss with the patient first before reporting',
          'Focus on patient and public safety, not punishment',
          'Know your state\'s mandatory reporting laws'
        ],
        pitfalls: [
          'Don\'t assume all patients with a condition are unsafe to drive',
          'Don\'t report without a clear safety concern',
          'Avoid taking keys or being coercive—use the legal system'
        ]
      },
      {
        id: 'quarantine',
        title: 'Quarantine, Isolation, and Public Health Powers',
        content: `During outbreaks, public health authorities have legal powers to control disease spread.

**Definitions**:
- **Isolation**: Separating people who ARE sick with a contagious disease
- **Quarantine**: Separating people who have been EXPOSED but aren't yet sick
- **Social Distancing**: Reducing contact in the general population

**Ethical Justification**:
- **Harm Principle**: Individual liberty can be restricted to prevent harm to others
- **Proportionality**: Restrictions must be proportionate to the threat
- **Least Restrictive Means**: Use the least invasive effective measure
- **Due Process**: Legal procedures to challenge restrictions

**Public Health Authority**:
- Public health agencies can legally order isolation and quarantine
- Typically time-limited and reviewed
- May involve law enforcement if non-compliant
- Applies to diseases like TB, Ebola, pandemic influenza, etc.

**Ethical Considerations**:
- Balance individual rights with collective safety
- Provide support (food, housing, medical care) during restrictions
- Minimize stigma
- Clear communication about reasons and duration`,
        pearls: [
          'Isolation and quarantine are legally enforceable',
          'The goal is public safety, not punishment',
          'Support services should accompany restrictions'
        ],
        pitfalls: [
          'Don\'t use isolation/quarantine for punitive reasons',
          'Don\'t apply overly broad restrictions disproportionate to risk',
          'Avoid stigmatizing language about isolated individuals'
        ]
      },
      {
        id: 'triage',
        title: 'Resource Allocation and Triage Ethics',
        content: `During crises (pandemics, disasters, mass casualties), resources may be scarce, requiring triage decisions.

**Triage Principles**:

**1. Utilitarian Approach**:
- Maximize overall benefit
- Save the most lives or life-years
- May prioritize those most likely to survive

**2. Egalitarian Approach**:
- Equal concern for all
- First-come, first-served or lottery systems
- Emphasizes fairness over efficiency

**3. Prioritarian Approach**:
- Give some priority to the worst-off
- Balance efficiency with equity

**Common Triage Frameworks**:

**Crisis Standards of Care**:
- Used when resources are overwhelmed
- Shift from individual-focused to population-focused care
- Goal: do the greatest good for the greatest number

**Sequential Organ Failure Assessment (SOFA)** or similar:
- Allocate scarce resources (e.g., ventilators) based on likelihood of survival
- Not first-come, first-served
- Regular reassessment

**Ethical Considerations**:
- **Transparency**: Clear, public criteria
- **Consistency**: Apply criteria uniformly
- **Proportionality**: Restrictions match the crisis severity
- **Accountability**: Review and oversight
- **Equity**: Avoid discrimination based on race, socioeconomic status, disability, etc.

**What NOT to Consider**:
- Social worth (occupation, wealth, status)
- Age alone (though functional status and life expectancy may be relevant)
- Ability to pay
- Disability unrelated to the condition being treated

**Step 3 Approach**:
- The exam typically expects utilitarian thinking in crisis scenarios
- Maximize benefit, save the most lives
- Apply objective clinical criteria, not social value`,
        pearls: [
          'Triage is about medical utility, not social worth',
          'In a crisis, the goal shifts from individual to population benefit',
          'Regular reassessment allows reallocation if someone isn\'t improving'
        ],
        pitfalls: [
          'Don\'t allocate based on who arrives first during true resource scarcity',
          'Don\'t consider socioeconomic status or "value to society"',
          'Avoid discrimination against disabled individuals'
        ]
      }
    ],
    keyPoints: [
      'Report communicable diseases to public health authorities even if the patient objects',
      'Report conditions affecting driving safety per state law',
      'Isolation and quarantine are legally enforceable public health measures',
      'Crisis triage focuses on maximizing overall benefit, not social worth',
      'Resource allocation must be transparent, consistent, and equitable'
    ]
  },
  {
    id: 'safety_qi',
    title: 'Patient Safety & Quality Improvement',
    summary: 'Adopt a systems-based approach to patient safety, understand key safety tools, and differentiate types of adverse events.',
    icon: '🛡️',
    sections: [
      {
        id: 'systems-thinking',
        title: 'Systems vs. Individual Blame',
        content: `**Old Model** (Individual Blame):
- Errors are caused by careless or incompetent individuals
- Response: Blame, punish, retrain the individual
- Problem: Doesn't prevent future errors

**New Model** (Systems Approach):
- Errors result from system failures and latent conditions
- Humans make predictable errors; systems should prevent them
- Response: Analyze contributing factors and redesign systems

**Systems Thinking Principles**:
1. **Humans err**: Mistakes are inevitable
2. **Multiple defenses**: Layers of protection catch most errors
3. **Active failures**: Individual errors (prescribing wrong dose)
4. **Latent conditions**: Underlying system problems (look-alike medications, poor IT design, understaffing)

**Swiss Cheese Model**:
- Multiple layers of defense (like slices of Swiss cheese)
- Each layer has holes (weaknesses)
- An error occurs when holes align
- Strengthen layers, reduce holes

**Culture of Safety**:
- Non-punitive reporting of errors and near misses
- Focus on learning, not blaming
- Leadership commitment to safety
- Teamwork and communication`,
        pearls: [
          'For Step 3: the answer focuses on systems, not blaming individuals',
          'Near misses are opportunities to fix system problems before harm occurs',
          'A just culture balances accountability with systems thinking'
        ],
        pitfalls: [
          'Don\'t immediately blame the individual who made the error',
          'Don\'t ignore near misses because "no harm occurred"',
          'Systems thinking doesn\'t mean zero individual accountability for reckless behavior'
        ]
      },
      {
        id: 'event-types',
        title: 'Types of Safety Events',
        content: `**Adverse Event**: An injury resulting from medical care (not the underlying disease).
- May or may not be preventable
- Examples: Post-op infection, medication side effect

**Preventable Adverse Event**: An adverse event that could have been avoided with proper care.
- Example: Wrong-site surgery, medication error causing harm

**Near Miss** (Close Call): An error that could have caused harm but didn't, either by chance or because it was caught in time.
- Example: Wrong dose prescribed but caught by pharmacist before administration
- VERY important to report and analyze

**No-Harm Event**: An error reached the patient but caused no harm.
- Example: Wrong medication given, but patient had no reaction

**Sentinel Event**: A serious, unexpected event involving death or severe harm (or risk thereof).
- Requires immediate investigation and response
- Examples: Wrong-patient surgery, suicide in a hospital, infant abduction

**Why Classify Events?**:
- Different responses needed
- Near misses and no-harm events reveal system vulnerabilities without harm
- Sentinel events trigger immediate root cause analysis`,
        pearls: [
          'Report ALL events, including near misses—they teach without causing harm',
          'Most errors don\'t cause harm due to layers of protection',
          'Every near miss is a gift: a chance to fix the system'
        ],
        pitfalls: [
          'Don\'t dismiss near misses as "no big deal"',
          'Don\'t only focus on events that caused harm',
          'Avoid assuming a single individual is the "cause"'
        ]
      },
      {
        id: 'safety-tools',
        title: 'Safety Improvement Tools',
        content: `**Root Cause Analysis (RCA)**:
- Retrospective investigation of a serious event
- Identify contributing factors at multiple levels
- Ask "Why?" repeatedly to get to root causes
- Develop action plans to prevent recurrence
- Used after the event has occurred

**Failure Mode and Effects Analysis (FMEA)**:
- Prospective analysis
- Identify potential failures BEFORE they occur
- Assess likelihood and severity
- Prioritize interventions for high-risk failure modes
- Used proactively when designing new processes

**Plan-Do-Study-Act (PDSA) Cycles**:
- Iterative quality improvement method
- **Plan**: Identify change and predict results
- **Do**: Implement change on small scale
- **Study**: Analyze data and compare to predictions
- **Act**: Refine and spread the change or try something else
- Repeat cycles to continuously improve

**When to Use Each**:
- **RCA**: After a serious event to understand what happened
- **FMEA**: Before implementing a new process to anticipate problems
- **PDSA**: For iterative testing and improvement of processes`,
        pearls: [
          'RCA is retrospective; FMEA is prospective',
          'PDSA cycles allow rapid testing without committing to large changes',
          'All three tools emphasize systems, not individuals'
        ],
        pitfalls: [
          'Don\'t do an RCA that ends with "retrain the staff"—find deeper system issues',
          'Don\'t skip FMEA when introducing high-risk new processes',
          'PDSA should be iterative, not one-and-done'
        ]
      },
      {
        id: 'interventions',
        title: 'Safety Interventions',
        content: `Effective interventions reduce errors and improve patient safety:

**Checklists**:
- Standardize complex processes
- Reduce reliance on memory
- Proven effective (e.g., surgical safety checklist, central line insertion checklist)

**Surgical Time-Outs**:
- Pause before incision to verify patient, site, procedure, implants, etc.
- All team members participate
- Prevents wrong-patient, wrong-site, wrong-procedure events

**Standardized Handoffs** (e.g., SBAR):
- **S**ituation: What's happening?
- **B**ackground: Context and history
- **A**ssessment: What I think is going on
- **R**ecommendation: What I think we should do
- Reduces communication errors during transitions

**Medication Reconciliation**:
- Compare medications across transitions of care (admission, transfer, discharge)
- Identify and resolve discrepancies
- Reduces adverse drug events

**Computerized Provider Order Entry (CPOE) with Decision Support**:
- Reduces transcription errors
- Provides alerts for drug interactions, allergies, dosing errors
- Can have unintended consequences (alert fatigue, new error types)

**Bar-Code Medication Administration**:
- Scans patient wristband and medication
- Ensures right patient, right drug, right dose, right time

**Culture Changes**:
- Non-punitive error reporting
- Teamwork and communication training
- Leadership commitment to safety`,
        pearls: [
          'Checklists work even in expert hands—not a sign of incompetence',
          'Time-outs require active participation, not just a checkbox',
          'Medication reconciliation is especially important at transitions'
        ],
        pitfalls: [
          'Don\'t skip the time-out because you\'re in a rush',
          'Don\'t override CPOE alerts without careful thought (but avoid alert fatigue)',
          'Checklists must be used consistently, not just sometimes'
        ]
      },
      {
        id: 'just-culture',
        title: 'Just Culture and Error Reporting',
        content: `A **just culture** balances learning from errors with appropriate accountability.

**Three Types of Behavior**:

**1. Human Error**: Inadvertent mistakes
- Example: Momentary lapse, slip, or miscalculation
- Response: Console, support, fix the system

**2. At-Risk Behavior**: Risky shortcuts, often normalized
- Example: Not washing hands, skipping a safety step
- Response: Coach, remove incentives for risky behavior, increase awareness

**3. Reckless Behavior**: Conscious disregard of substantial risk
- Example: Operating while intoxicated, falsifying records
- Response: Disciplinary action

**Error Reporting**:
- Encourage non-punitive reporting of errors and near misses
- Confidential or anonymous systems
- Feedback loop: show how reports lead to improvements
- Legal protections: Many states have peer review protections

**Barriers to Reporting**:
- Fear of punishment, liability, or loss of reputation
- Time required to report
- Belief that reporting won't lead to change

**Overcoming Barriers**:
- Leadership support and modeling
- Demonstrate that reports lead to system improvements
- Protect reporters from retaliation
- Simplify reporting processes`,
        pearls: [
          'Most errors are human errors, not reckless behavior',
          'Reporting should be easy, non-punitive, and lead to visible changes',
          'A just culture doesn\'t mean no accountability—it means appropriate accountability'
        ],
        pitfalls: [
          'Don\'t punish people for honest mistakes',
          'Don\'t ignore reckless behavior in the name of "just culture"',
          'Avoid blaming individuals without analyzing system contributors'
        ]
      }
    ],
    keyPoints: [
      'Adopt systems thinking: errors result from system failures, not just individual incompetence',
      'Classify events: adverse events, near misses, and sentinel events require different responses',
      'Use RCA (retrospective), FMEA (prospective), and PDSA cycles (iterative improvement)',
      'Implement proven interventions: checklists, time-outs, standardized handoffs, medication reconciliation',
      'Foster a just culture: non-punitive reporting with appropriate accountability for recklessness'
    ]
  },
  {
    id: 'communication',
    title: 'Communication & Error Disclosure',
    summary: 'Master difficult conversations including error disclosure, breaking bad news, and handling patient anger with professionalism.',
    icon: '💬',
    sections: [
      {
        id: 'error-disclosure',
        title: 'Disclosing Medical Errors',
        content: `Ethical and effective error disclosure is honest, compassionate, and focuses on the patient.

**Why Disclose?**:
- Ethical obligation (honesty, fidelity, respect)
- Patients have a right to know
- Reduces litigation (surprisingly, disclosure reduces lawsuits)
- Maintains trust
- Required by many institutions and professional standards

**Key Elements of Error Disclosure**:

**1. Acknowledge the Event**:
- Be factual and clear
- "An error occurred with your medication"
- Avoid minimizing or hedging

**2. Apologize**:
- Express genuine regret
- "I'm sorry this happened"
- Apology laws in many states protect apologies from being used in court

**3. Explain What Happened**:
- Simple, jargon-free language
- As much detail as the patient wants
- Don't speculate or blame others

**4. Describe Immediate Actions**:
- What you're doing now to address harm
- Monitoring, treatment, etc.

**5. Outline Prevention Steps**:
- What will be done to prevent similar errors
- Shows commitment to improvement

**6. Invite Questions**:
- Allow time for patient/family to process and ask questions
- Offer ongoing communication

**Timing**:
- Disclose as soon as the facts are reasonably clear
- Don't delay excessively to investigate every detail
- Balance speed with accuracy

**Who Should Disclose**:
- Attending physician or team leader
- Include others involved as appropriate
- Risk management may be involved, but physicians should lead`,
        pearls: [
          'Apology doesn\'t mean accepting legal liability—it shows empathy',
          'Patients are more likely to sue when they feel misled or disrespected',
          'Disclosure is the right thing to do, ethically and practically'
        ],
        pitfalls: [
          'Don\'t hide errors, even small ones that caused no harm',
          'Don\'t blame individuals during the disclosure',
          'Avoid legalistic, defensive language—be human'
        ]
      },
      {
        id: 'breaking-bad-news',
        title: 'Breaking Bad News',
        content: `Delivering bad news is one of the most difficult communication tasks. A structured approach helps.

**SPIKES Protocol** (Adapted):

**S - Setting**:
- Private, comfortable location
- Sit down
- Ensure privacy
- Minimize interruptions
- Have tissues available

**P - Perception**:
- Assess what the patient knows
- "What have you been told about your condition?"
- "What is your understanding of why we did this test?"

**I - Invitation**:
- Ask how much the patient wants to know
- Most want full information, but some prefer limited details
- Respect their wishes

**K - Knowledge**:
- Give information in small chunks
- Use plain language, avoid jargon
- Warning shot: "I'm afraid I have some serious news"
- Be direct but compassionate: "The biopsy shows cancer"

**E - Emotions**:
- Pause and allow silence for emotions
- Respond to emotions with empathy
- Name the emotion: "I can see this is devastating"
- Validate feelings: "It's completely understandable to feel this way"

**S - Strategy and Summary**:
- Outline next steps
- Provide hope where appropriate (treatment options, support)
- Offer to answer questions
- Arrange follow-up

**Key Principles**:
- Be honest but compassionate
- Use understandable language
- Allow time for emotional response
- Don't overload with information in one sitting
- Offer support and follow-up`,
        pearls: [
          'Silence is okay—give the patient time to process',
          'Match the pace to the patient; some want all details, others need time',
          'Even when prognosis is poor, there\'s always something you can offer (symptom control, support)'
        ],
        pitfalls: [
          'Don\'t use euphemisms like "passed away" without first saying "died"',
          'Don\'t dump all information at once',
          'Avoid taking away all hope or saying "there\'s nothing we can do"'
        ]
      },
      {
        id: 'anger-conflict',
        title: 'Handling Anger and Conflict',
        content: `Patients and families may express anger, especially in stressful medical situations. Skilled response can de-escalate and preserve the relationship.

**Why Patients Get Angry**:
- Fear and anxiety
- Feeling unheard or dismissed
- Lack of control
- Frustration with the healthcare system
- Poor communication or perceived errors
- Grief and loss

**Response Strategy**:

**1. Stay Calm**:
- Don't take it personally
- Regulate your own emotions
- Take a breath before responding

**2. Listen Actively**:
- Let them express their feelings without interruption
- Show you're listening (eye contact, nodding)
- Don't become defensive

**3. Acknowledge and Validate**:
- Name the emotion: "I can see you're very upset"
- Validate: "It's understandable to feel frustrated"
- Don't argue about whether they should feel that way

**4. Apologize if Appropriate**:
- "I'm sorry you've had this experience"
- "I'm sorry we didn't communicate more clearly"
- Apology for their distress, even if no error occurred

**5. Explore Concerns**:
- "Help me understand what's most concerning to you"
- "What would be most helpful right now?"
- Identify specific, addressable issues

**6. Problem-Solve Together**:
- Collaborate on solutions
- Explain what you can and can't do
- Set realistic expectations

**7. Set Boundaries if Needed**:
- If behavior is abusive or threatening, set firm, respectful limits
- "I want to help you, but I can't do that if you're yelling/threatening me"
- Involve security if there's a safety concern

**When to Involve Others**:
- Patient relations/ombudsman
- Risk management (if litigation seems likely)
- Ethics consultation (for ethical conflicts)
- Security (for threatening behavior)`,
        pearls: [
          'Most anger dissipates when the person feels heard',
          'Validating emotion doesn\'t mean agreeing with their interpretation of events',
          'Your goal is not to win an argument, but to maintain a therapeutic relationship'
        ],
        pitfalls: [
          'Don\'t become defensive or argue',
          'Don\'t dismiss their feelings ("You shouldn\'t be upset about that")',
          'Don\'t promise things you can\'t deliver to placate them'
        ]
      },
      {
        id: 'shared-decision',
        title: 'Shared Decision-Making and Cultural Sensitivity',
        content: `Effective communication involves partnering with patients and respecting their values and culture.

**Shared Decision-Making**:
- Collaborative process between clinician and patient
- Clinician provides information about options, risks, benefits
- Patient provides values and preferences
- Together, reach a decision

**Steps**:
1. **Establish the context**: Clarify the decision to be made
2. **Describe options**: All reasonable alternatives, including no treatment
3. **Discuss pros and cons**: Risks, benefits, uncertainties of each option
4. **Explore patient values**: What matters most to this patient?
5. **Make a decision**: Reach consensus
6. **Evaluate**: Follow up and reassess

**Cultural Sensitivity**:
- Recognize that culture shapes health beliefs and preferences
- Don't make assumptions based on culture, race, or ethnicity
- Use professional interpreters (not family members) for language barriers
- Respect different communication norms (eye contact, personal space, etc.)
- Understand different family structures and decision-making norms

**Family Involvement**:
- In some cultures, family plays a larger role in medical decisions
- Balance patient autonomy with family involvement
- If the patient wants family involved, include them
- If the patient prefers to decide alone, respect that

**Health Literacy**:
- Many patients have limited health literacy
- Use plain language, avoid jargon
- Teach-back method: "Just to make sure I explained it clearly, can you tell me what we discussed?"
- Provide written materials at appropriate literacy level
- Use visuals when possible`,
        pearls: [
          'Shared decision-making respects autonomy while providing guidance',
          'Cultural humility: approach each patient as an individual, don\'t assume',
          'Health literacy issues are common—always check understanding'
        ],
        pitfalls: [
          'Don\'t impose your values on the patient ("If it were me, I\'d...")',
          'Don\'t assume all members of a cultural group have identical beliefs',
          'Don\'t use family members (especially children) as interpreters for serious discussions'
        ]
      }
    ],
    keyPoints: [
      'Disclose errors promptly, apologize, explain, and outline prevention steps',
      'Use a structured approach (like SPIKES) to break bad news with compassion',
      'When patients are angry, listen actively, validate emotions, and collaborate on solutions',
      'Practice shared decision-making: combine medical expertise with patient values',
      'Use professional interpreters and respect diverse cultural communication styles'
    ]
  }
];

export default extendedModules;
