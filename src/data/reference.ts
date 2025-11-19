import type { ReferenceItem } from '../types';

export const referenceData: ReferenceItem[] = [
  {
    id: 'principles-table',
    title: 'Four Ethical Principles',
    category: 'Core Concepts',
    content: 'Quick reference for the four core bioethical principles and how they appear on Step 3.',
    rows: [
      {
        term: 'Autonomy',
        definition: 'Respect patient\'s right to make informed decisions',
        examPattern: 'Honor competent patient\'s informed refusal, even if life-threatening'
      },
      {
        term: 'Beneficence',
        definition: 'Act in patient\'s best interest',
        examPattern: 'Recommend beneficial treatments; justifies emergency treatment'
      },
      {
        term: 'Nonmaleficence',
        definition: 'Do no harm; avoid causing injury',
        examPattern: 'Weigh risks vs benefits; avoid unnecessary procedures'
      },
      {
        term: 'Justice',
        definition: 'Fair distribution of healthcare resources',
        examPattern: 'Triage based on medical utility, not social worth; equitable access'
      }
    ]
  },
  {
    id: 'capacity-criteria',
    title: 'Capacity Assessment',
    category: 'Consent',
    content: 'Four criteria for decision-making capacity evaluation.',
    rows: [
      {
        term: 'Understanding',
        definition: 'Can comprehend information about condition and treatment',
        examPattern: 'Ask patient to explain their condition in their own words'
      },
      {
        term: 'Appreciation',
        definition: 'Recognizes how information applies to own situation',
        examPattern: 'Patient acknowledges they have the condition and treatment applies to them'
      },
      {
        term: 'Reasoning',
        definition: 'Can weigh risks/benefits and explain rationale',
        examPattern: 'Patient can articulate why they\'re choosing or refusing treatment'
      },
      {
        term: 'Communication',
        definition: 'Can express a clear, stable choice',
        examPattern: 'Patient states a consistent decision'
      }
    ]
  },
  {
    id: 'breach-confidentiality',
    title: 'When to Breach Confidentiality',
    category: 'Confidentiality',
    content: 'Mandatory and permissible breaches of patient confidentiality.',
    rows: [
      {
        term: 'Danger to Self',
        definition: 'Active suicidal ideation with plan/intent',
        examPattern: 'Psychiatric hold; notify appropriate parties for safety'
      },
      {
        term: 'Danger to Others',
        definition: 'Credible, specific threat to identifiable person',
        examPattern: 'Duty to warn victim and/or notify police (Tarasoff)'
      },
      {
        term: 'Child Abuse',
        definition: 'Reasonable suspicion of abuse or neglect',
        examPattern: 'Mandatory report to Child Protective Services'
      },
      {
        term: 'Elder/Vulnerable Adult Abuse',
        definition: 'Suspected abuse of elderly or disabled adults',
        examPattern: 'Report to Adult Protective Services (most states)'
      },
      {
        term: 'Reportable Diseases',
        definition: 'Communicable diseases (TB, HIV, STIs, etc.)',
        examPattern: 'Report to public health department'
      },
      {
        term: 'Impaired Driving',
        definition: 'Conditions affecting safe driving (seizures, etc.)',
        examPattern: 'Counsel patient; report to DMV per state law'
      }
    ]
  },
  {
    id: 'surrogate-hierarchy',
    title: 'Surrogate Decision-Maker Hierarchy',
    category: 'Consent',
    content: 'Typical hierarchy for surrogate decision-making (varies by state).',
    rows: [
      {
        term: '1. Court-appointed guardian',
        definition: 'Legal guardian appointed by court',
        examPattern: 'Highest authority if appointed'
      },
      {
        term: '2. Healthcare proxy / DPOA',
        definition: 'Person designated by patient in advance directive',
        examPattern: 'Takes precedence over family relationships'
      },
      {
        term: '3. Spouse / partner',
        definition: 'Legally married spouse or domestic partner',
        examPattern: 'Next in line if no proxy designated'
      },
      {
        term: '4. Adult children',
        definition: 'Majority decision if multiple children',
        examPattern: 'If no spouse, children decide'
      },
      {
        term: '5. Parents',
        definition: 'Patient\'s parents',
        examPattern: 'If no spouse or adult children'
      },
      {
        term: '6. Adult siblings',
        definition: 'Patient\'s brothers/sisters',
        examPattern: 'Next level if parents unavailable'
      }
    ]
  },
  {
    id: 'minors-exceptions',
    title: 'Minors: When Parental Consent Not Required',
    category: 'Consent',
    content: 'Situations where minors can consent without parents.',
    rows: [
      {
        term: 'Emancipated Minors',
        definition: 'Married, parent, self-supporting, or military',
        examPattern: 'Can consent for all medical care'
      },
      {
        term: 'Emergency',
        definition: 'Life-threatening situation, delay would cause harm',
        examPattern: 'Treat immediately under implied consent'
      },
      {
        term: 'STI Testing/Treatment',
        definition: 'Diagnosis and treatment of sexually transmitted infections',
        examPattern: 'Provide confidentially without parental consent'
      },
      {
        term: 'Contraception',
        definition: 'Birth control services',
        examPattern: 'Most jurisdictions allow confidential access'
      },
      {
        term: 'Prenatal Care',
        definition: 'Care during pregnancy',
        examPattern: 'Pregnant minors can consent for prenatal care'
      },
      {
        term: 'Substance Use Treatment',
        definition: 'Drug/alcohol treatment programs',
        examPattern: 'Often allowed without parental consent'
      }
    ]
  },
  {
    id: 'advance-directives',
    title: 'Types of Advance Directives',
    category: 'End of Life',
    content: 'Legal documents expressing treatment preferences.',
    rows: [
      {
        term: 'Living Will',
        definition: 'Written statement of treatment preferences',
        examPattern: 'Provides guidance for life-sustaining treatment decisions'
      },
      {
        term: 'Healthcare Proxy / DPOA',
        definition: 'Designates someone to make medical decisions',
        examPattern: 'Takes effect when patient lacks capacity; broader than living will'
      },
      {
        term: 'DNR Order',
        definition: 'Do Not Resuscitate - no CPR if heart stops',
        examPattern: 'Doesn\'t mean withdraw all care, only no CPR'
      },
      {
        term: 'DNI Order',
        definition: 'Do Not Intubate - no mechanical ventilation',
        examPattern: 'Often paired with DNR; patient choice'
      },
      {
        term: 'POLST / MOLST',
        definition: 'Physician Orders for Life-Sustaining Treatment',
        examPattern: 'More detailed than DNR; portable across settings'
      }
    ]
  },
  {
    id: 'safety-tools',
    title: 'Patient Safety & QI Tools',
    category: 'Safety',
    content: 'Key tools for analyzing and preventing errors.',
    rows: [
      {
        term: 'Root Cause Analysis (RCA)',
        definition: 'Retrospective investigation after serious event',
        examPattern: 'Identify system factors contributing to error; develop action plans'
      },
      {
        term: 'Failure Mode Effects Analysis (FMEA)',
        definition: 'Prospective analysis before implementing process',
        examPattern: 'Anticipate potential failures and prevent them proactively'
      },
      {
        term: 'Plan-Do-Study-Act (PDSA)',
        definition: 'Iterative quality improvement cycles',
        examPattern: 'Test changes on small scale, study results, refine'
      },
      {
        term: 'Swiss Cheese Model',
        definition: 'Multiple layers of defense with holes that occasionally align',
        examPattern: 'Errors occur when system weaknesses align; strengthen layers'
      },
      {
        term: 'Just Culture',
        definition: 'Balance accountability with learning from errors',
        examPattern: 'Console human error, coach at-risk behavior, punish recklessness'
      }
    ]
  },
  {
    id: 'safety-events',
    title: 'Types of Safety Events',
    category: 'Safety',
    content: 'Classification of patient safety events.',
    rows: [
      {
        term: 'Adverse Event',
        definition: 'Injury from medical care, not underlying disease',
        examPattern: 'May or may not be preventable (e.g., post-op infection)'
      },
      {
        term: 'Preventable Adverse Event',
        definition: 'Adverse event that could have been avoided',
        examPattern: 'Wrong-site surgery, preventable medication error'
      },
      {
        term: 'Near Miss',
        definition: 'Error that could have caused harm but didn\'t',
        examPattern: 'Valuable for learning; caught before reaching patient'
      },
      {
        term: 'No-Harm Event',
        definition: 'Error reached patient but caused no harm',
        examPattern: 'Wrong med given but patient had no reaction'
      },
      {
        term: 'Sentinel Event',
        definition: 'Unexpected serious event involving death/severe harm',
        examPattern: 'Requires immediate RCA and response'
      }
    ]
  },
  {
    id: 'error-disclosure',
    title: 'Error Disclosure Steps',
    category: 'Communication',
    content: 'Key elements of ethical error disclosure.',
    rows: [
      {
        term: '1. Acknowledge',
        definition: 'State clearly that an error occurred',
        examPattern: '"An error happened with your medication"'
      },
      {
        term: '2. Apologize',
        definition: 'Express genuine regret',
        examPattern: '"I\'m sorry this happened to you"'
      },
      {
        term: '3. Explain',
        definition: 'Describe what happened in plain language',
        examPattern: 'Clear, jargon-free explanation of the event'
      },
      {
        term: '4. Immediate Actions',
        definition: 'What you\'re doing now to address harm',
        examPattern: 'Monitoring, treatment, additional care'
      },
      {
        term: '5. Prevention',
        definition: 'Steps to prevent similar errors',
        examPattern: 'System improvements being implemented'
      },
      {
        term: '6. Invite Questions',
        definition: 'Allow patient/family to ask questions',
        examPattern: 'Ongoing communication and support'
      }
    ]
  },
  {
    id: 'research-ethics',
    title: 'Research Ethics Key Concepts',
    category: 'Research',
    content: 'Core principles for ethical research conduct.',
    rows: [
      {
        term: 'Clinical Equipoise',
        definition: 'Genuine uncertainty about which treatment is best',
        examPattern: 'Justifies randomization; if no equipoise, unethical to randomize'
      },
      {
        term: 'Vulnerable Populations',
        definition: 'Groups needing extra protection (children, prisoners, etc.)',
        examPattern: 'Enhanced IRB review; research must benefit the group'
      },
      {
        term: 'IRB Review',
        definition: 'Independent review of research protocols',
        examPattern: 'Required before starting research; monitors ongoing studies'
      },
      {
        term: 'Placebo Controls',
        definition: 'Use of inactive treatment for comparison',
        examPattern: 'Ethical only when no effective treatment exists'
      },
      {
        term: 'Child Assent',
        definition: 'Child\'s agreement to participate (age 7+)',
        examPattern: 'Required in addition to parental permission'
      }
    ]
  }
];
