import type { Vignette } from '../types';

export const vignettes: Vignette[] = [
  // Core Principles
  {
    id: 'v1',
    moduleId: 'principles',
    stem: 'A 45-year-old woman with metastatic breast cancer refuses further chemotherapy despite her oncologist\'s recommendation that it could extend her life by several months. She states she wants to focus on quality of life rather than quantity. She has decision-making capacity. What is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Respect her decision and transition to palliative care' },
      { id: 'B', text: 'Consult psychiatry to evaluate for depression' },
      { id: 'C', text: 'Ask her family to convince her to continue treatment' },
      { id: 'D', text: 'Explain that refusing treatment is not in her best interest' },
      { id: 'E', text: 'Refer to the ethics committee before proceeding' }
    ],
    correctOptionId: 'A',
    rationale: 'This patient has decision-making capacity and is making an informed choice to prioritize quality over quantity of life. Autonomy requires respecting her decision. While you can ensure she understands the implications and isn\'t depressed, if she maintains her choice, you must honor it. Beneficence (wanting to help her live longer) does not override autonomy when the patient is competent.'
  },
  {
    id: 'v2',
    moduleId: 'principles',
    stem: 'During a disaster with limited ICU beds, two patients need mechanical ventilation. Patient A is a 30-year-old with severe COVID-19 pneumonia and SOFA score of 6. Patient B is a 75-year-old with pneumonia, COPD, and heart failure with SOFA score of 12. Only one ventilator is available. Which ethical principle primarily guides this decision?',
    options: [
      { id: 'A', text: 'Autonomy' },
      { id: 'B', text: 'Beneficence' },
      { id: 'C', text: 'Nonmaleficence' },
      { id: 'D', text: 'Justice' },
      { id: 'E', text: 'Fidelity' }
    ],
    correctOptionId: 'D',
    rationale: 'Justice governs fair allocation of scarce resources. In crisis standards of care, utilitarian approaches aim to do the greatest good for the greatest number. Patient A has a better prognosis based on SOFA score. This is not about age alone, but medical utility. The decision should be based on objective, transparent criteria applied consistently.'
  },

  // Consent & Capacity
  {
    id: 'v3',
    moduleId: 'consent_capacity',
    stem: 'A 17-year-old sexually active female requests oral contraceptives. She specifically asks that her parents not be informed. She is not emancipated. What is the most appropriate action?',
    options: [
      { id: 'A', text: 'Provide the contraceptives without parental notification' },
      { id: 'B', text: 'Refuse until she brings a parent' },
      { id: 'C', text: 'Call her parents to obtain consent' },
      { id: 'D', text: 'Provide contraceptives only after she turns 18' },
      { id: 'E', text: 'Refer her to an adult gynecologist' }
    ],
    correctOptionId: 'A',
    rationale: 'Most jurisdictions allow minors to access confidential sexual health services, including contraception, without parental consent. This promotes public health by reducing unintended pregnancy and STIs. While encouraging parental involvement is appropriate, it should not be required. On Step 3, this is typically the expected answer.'
  },
  {
    id: 'v4',
    moduleId: 'consent_capacity',
    stem: 'A 68-year-old man with mild dementia (MMSE 24/30) is hospitalized for pneumonia. He refuses IV antibiotics, saying "I\'m tired of doctors and needles." He can explain that he has pneumonia and that antibiotics might help, but he\'s had enough. What is the best next step?',
    options: [
      { id: 'A', text: 'Respect his refusal; he has capacity for this decision' },
      { id: 'B', text: 'Give antibiotics anyway because he lacks capacity' },
      { id: 'C', text: 'Obtain consent from his next of kin' },
      { id: 'D', text: 'Request a court order to treat' },
      { id: 'E', text: 'Explore his reasons, address concerns, and reassess' }
    ],
    correctOptionId: 'E',
    rationale: 'Capacity is decision-specific. Mild dementia doesn\'t automatically mean incapacity. However, before accepting his refusal of life-saving treatment, explore WHY he\'s refusing. Is it fear of needles? Misunderstanding? Depression? Pain? Addressing these concerns might change his decision. If after exploration he maintains an informed refusal and demonstrates capacity, then respect it (A). But "explore first" is the better initial answer.'
  },
  {
    id: 'v5',
    moduleId: 'consent_capacity',
    stem: 'A 42-year-old man is brought to the ED unresponsive after a motor vehicle collision. He needs emergency surgery for a ruptured spleen. No family is present, and no advance directive is available. What is the most appropriate action?',
    options: [
      { id: 'A', text: 'Proceed with surgery under implied consent' },
      { id: 'B', text: 'Wait for family to arrive to provide consent' },
      { id: 'C', text: 'Request a court order for surgery' },
      { id: 'D', text: 'Consult the ethics committee' },
      { id: 'E', text: 'Attempt to stabilize without surgery until consent is obtained' }
    ],
    correctOptionId: 'A',
    rationale: 'In a true emergency where delay would result in serious harm or death and the patient cannot consent, emergency treatment can proceed under the principle of implied consent. A reasonable person would consent to life-saving surgery. Don\'t delay life-saving care to find family or get a court order.'
  },

  // Confidentiality
  {
    id: 'v6',
    moduleId: 'confidentiality',
    stem: 'A 16-year-old girl is diagnosed with chlamydia. She requests treatment but asks that her parents not be told. What should you do?',
    options: [
      { id: 'A', text: 'Treat her and maintain confidentiality' },
      { id: 'B', text: 'Treat her but inform her parents' },
      { id: 'C', text: 'Refuse treatment until she agrees to tell her parents' },
      { id: 'D', text: 'Call her parents to obtain consent for treatment' },
      { id: 'E', text: 'Refer her to the health department' }
    ],
    correctOptionId: 'A',
    rationale: 'Adolescents can receive confidential diagnosis and treatment for STIs in most jurisdictions. Maintaining confidentiality encourages teens to seek necessary care. Encourage her to involve her parents, but don\'t require it. Also counsel about partner notification and safe sex practices.'
  },
  {
    id: 'v7',
    moduleId: 'confidentiality',
    stem: 'A patient tells you he has been having thoughts of harming his ex-girlfriend, who he says "deserves to pay for what she did." He mentions her name and where she works. What is your obligation?',
    options: [
      { id: 'A', text: 'Maintain confidentiality; he has not acted on the thoughts' },
      { id: 'B', text: 'Warn the ex-girlfriend and notify police' },
      { id: 'C', text: 'Encourage the patient to resolve his feelings in therapy' },
      { id: 'D', text: 'Hospitalize the patient involuntarily' },
      { id: 'E', text: 'Document the conversation but take no further action' }
    ],
    correctOptionId: 'B',
    rationale: 'This meets criteria for duty to warn/protect (Tarasoff principle): a credible, specific threat to an identifiable person. You must breach confidentiality to warn the intended victim and/or notify authorities. This overrides the usual confidentiality obligation. Document thoroughly.'
  },
  {
    id: 'v8',
    moduleId: 'confidentiality',
    stem: 'A mother of your 22-year-old patient calls requesting information about her son\'s hospital admission. The patient is awake, alert, and has capacity. What should you do?',
    options: [
      { id: 'A', text: 'Provide the information; she is his mother' },
      { id: 'B', text: 'Ask the patient for permission before sharing information' },
      { id: 'C', text: 'Tell her you cannot confirm or deny he is a patient' },
      { id: 'D', text: 'Provide general information but not specifics' },
      { id: 'E', text: 'Refer her to the hospital administrator' }
    ],
    correctOptionId: 'B',
    rationale: 'For a competent adult patient, you need the patient\'s permission before sharing information with family members, including parents. The patient controls who receives information. First ask the patient if they want their mother informed and what information to share.'
  },

  // End of Life
  {
    id: 'v9',
    moduleId: 'end_of_life',
    stem: 'An 80-year-old woman with advanced dementia, bedridden in a nursing home, develops aspiration pneumonia. She has a living will stating "no aggressive measures" but her daughter (healthcare proxy) insists on hospital transfer and IV antibiotics. What should you do?',
    options: [
      { id: 'A', text: 'Honor the daughter\'s wishes; she is the legal proxy' },
      { id: 'B', text: 'Follow the living will; it takes precedence' },
      { id: 'C', text: 'Treat with comfort measures only despite the daughter\'s objection' },
      { id: 'D', text: 'Transfer to the hospital to avoid conflict' },
      { id: 'E', text: 'Convene an ethics committee meeting' }
    ],
    correctOptionId: 'B',
    rationale: 'An advance directive (living will) represents the patient\'s own wishes and takes precedence over a proxy\'s contrary opinion. The proxy\'s role is to implement the patient\'s wishes, not their own. Discuss with the daughter to help her understand her mother\'s wishes, but ultimately the living will guides care. Ethics consultation may help if she remains in conflict.'
  },
  {
    id: 'v10',
    moduleId: 'end_of_life',
    stem: 'A terminally ill patient with metastatic cancer is experiencing severe pain despite maximal non-opioid therapy. He requests higher doses of morphine. The current dose already causes some sedation. What principle supports increasing the dose?',
    options: [
      { id: 'A', text: 'Double effect' },
      { id: 'B', text: 'Autonomy' },
      { id: 'C', text: 'Nonmaleficence' },
      { id: 'D', text: 'Euthanasia' },
      { id: 'E', text: 'Justice' }
    ],
    correctOptionId: 'A',
    rationale: 'The principle of double effect allows increasing opioids for pain relief in dying patients, even if it may hasten death, as long as the intent is to relieve suffering (not to cause death). Adequate pain control is ethical and essential. This is not euthanasia because the intent is pain relief, not death.'
  },

  // Professionalism
  {
    id: 'v11',
    moduleId: 'professionalism',
    stem: 'You notice a colleague has been arriving late, missing rounds, and appears disheveled. Twice you smelled alcohol on their breath in the afternoon. What should you do?',
    options: [
      { id: 'A', text: 'Ignore it unless a patient is harmed' },
      { id: 'B', text: 'Talk to the colleague privately to offer help' },
      { id: 'C', text: 'Report to the appropriate supervisor immediately' },
      { id: 'D', text: 'Confront the colleague in front of the team' },
      { id: 'E', text: 'Wait to see if the behavior improves' }
    ],
    correctOptionId: 'C',
    rationale: 'Patient safety is paramount. Signs of impairment (alcohol on breath, deteriorating performance) must be reported to protect patients. While offering support is compassionate, your first duty is to ensure patients are safe. Report to the department chair, chief of staff, or medical board. Most states have physician health programs to help impaired physicians.'
  },
  {
    id: 'v12',
    moduleId: 'professionalism',
    stem: 'A pharmaceutical representative offers you tickets to a major sporting event in exchange for prescribing their new brand-name medication. The medication is similar in efficacy to generic alternatives but more expensive. What should you do?',
    options: [
      { id: 'A', text: 'Accept the tickets; your prescribing is evidence-based anyway' },
      { id: 'B', text: 'Accept the tickets but don\'t change your prescribing' },
      { id: 'C', text: 'Decline the tickets to avoid conflict of interest' },
      { id: 'D', text: 'Accept the tickets and disclose to patients' },
      { id: 'E', text: 'Ask the representative to give the tickets to your department instead' }
    ],
    correctOptionId: 'C',
    rationale: 'Gifts from pharmaceutical companies create conflicts of interest and can unconsciously influence prescribing, even when we believe we\'re immune. Even small gifts have been shown to affect physician behavior. Decline the gift. Base prescribing on evidence, cost-effectiveness, and patient needs, not industry relationships.'
  },

  // Research Ethics
  {
    id: 'v13',
    moduleId: 'research',
    stem: 'A pharmaceutical company wants to conduct a trial comparing a new antihypertensive to placebo. Effective antihypertensive medications are already available. Is this trial ethical?',
    options: [
      { id: 'A', text: 'Yes, if patients give informed consent' },
      { id: 'B', text: 'Yes, if the study duration is short' },
      { id: 'C', text: 'No, placebo is unethical when effective treatment exists' },
      { id: 'D', text: 'Yes, if patients are compensated' },
      { id: 'E', text: 'No, unless the IRB approves it' }
    ],
    correctOptionId: 'C',
    rationale: 'When effective treatment exists, it is generally unethical to use placebo controls because you\'re denying patients proven beneficial therapy. The new drug should be compared to existing effective treatment (active control), not placebo. Exceptions might exist for very short durations in non-serious conditions, but for hypertension, withholding treatment carries risk.'
  },
  {
    id: 'v14',
    moduleId: 'research',
    stem: 'A 10-year-old child is invited to participate in a research study that may not directly benefit him but poses minimal risk. His parents consent. What else is required?',
    options: [
      { id: 'A', text: 'Nothing; parental consent is sufficient' },
      { id: 'B', text: 'The child\'s assent' },
      { id: 'C', text: 'A court order' },
      { id: 'D', text: 'IRB waiver of assent' },
      { id: 'E', text: 'Consent from both parents' }
    ],
    correctOptionId: 'B',
    rationale: 'For children (typically age 7 and older, depending on maturity), both parental permission and the child\'s assent are required for research participation. Assent means the child agrees to participate after an age-appropriate explanation. This respects the child\'s developing autonomy.'
  },

  // Public Health
  {
    id: 'v15',
    moduleId: 'public_health',
    stem: 'You diagnose a patient with active pulmonary tuberculosis. The patient refuses treatment and asks you not to tell anyone. What should you do?',
    options: [
      { id: 'A', text: 'Respect confidentiality and do not report' },
      { id: 'B', text: 'Report to public health authorities' },
      { id: 'C', text: 'Try to convince the patient, but don\'t report if they refuse' },
      { id: 'D', text: 'Report only if the patient has family or close contacts' },
      { id: 'E', text: 'Hospitalize the patient against their will immediately' }
    ],
    correctOptionId: 'B',
    rationale: 'Active tuberculosis is a reportable disease in all jurisdictions. Public health authorities can enforce treatment and isolation if necessary to protect the public. Report to the health department regardless of the patient\'s wishes. They have the legal authority to manage the case, including directly observed therapy and isolation if needed.'
  },
  {
    id: 'v16',
    moduleId: 'public_health',
    stem: 'A 72-year-old man with a history of seizures, most recently 6 months ago, continues to drive. He has not informed the DMV. His wife is concerned. What should you do?',
    options: [
      { id: 'A', text: 'Maintain confidentiality; he has the right to drive' },
      { id: 'B', text: 'Advise him not to drive but take no further action' },
      { id: 'C', text: 'Strongly advise him not to drive; if he continues, report to DMV per state law' },
      { id: 'D', text: 'Call the police immediately' },
      { id: 'E', text: 'Tell his wife to hide his car keys' }
    ],
    correctOptionId: 'C',
    rationale: 'First, counsel the patient about the risks and legal requirements (most states require seizure-free periods before driving). If he refuses to stop driving, and your state mandates reporting, you must report to the DMV. Document your counseling and his response. This balances patient autonomy with public safety.'
  },

  // Safety & QI
  {
    id: 'v17',
    moduleId: 'safety_qi',
    stem: 'A nurse catches a prescribing error before a medication reaches the patient. No harm occurred. What type of event is this?',
    options: [
      { id: 'A', text: 'Adverse event' },
      { id: 'B', text: 'Sentinel event' },
      { id: 'C', text: 'Near miss' },
      { id: 'D', text: 'No-harm event' },
      { id: 'E', text: 'Not a safety event since no harm occurred' }
    ],
    correctOptionId: 'C',
    rationale: 'A near miss (close call) is an error that could have caused harm but didn\'t, either by chance or because it was intercepted. Near misses are extremely valuable because they reveal system vulnerabilities without causing patient harm. They should be reported and analyzed.'
  },
  {
    id: 'v18',
    moduleId: 'safety_qi',
    stem: 'After a wrong-site surgery, the hospital wants to understand what happened and prevent recurrence. Which tool is most appropriate?',
    options: [
      { id: 'A', text: 'Plan-Do-Study-Act (PDSA) cycle' },
      { id: 'B', text: 'Failure Mode and Effects Analysis (FMEA)' },
      { id: 'C', text: 'Root Cause Analysis (RCA)' },
      { id: 'D', text: 'Fishbone diagram' },
      { id: 'E', text: 'Randomized controlled trial' }
    ],
    correctOptionId: 'C',
    rationale: 'Root Cause Analysis (RCA) is a retrospective investigation of a serious event to identify contributing factors and develop action plans. It\'s the standard approach after sentinel events like wrong-site surgery. FMEA is prospective (used before implementing new processes). PDSA is for iterative improvement.'
  },
  {
    id: 'v19',
    moduleId: 'safety_qi',
    stem: 'A physician administers 10 times the intended dose of insulin due to a decimal point error. The patient develops severe hypoglycemia but recovers. How should this be addressed?',
    options: [
      { id: 'A', text: 'Reprimand the physician to prevent future errors' },
      { id: 'B', text: 'Require the physician to complete a training module' },
      { id: 'C', text: 'Analyze system factors: look-alike orders, lack of alerts, etc.' },
      { id: 'D', text: 'Terminate the physician\'s privileges' },
      { id: 'E', text: 'No action needed since the patient recovered' }
    ],
    correctOptionId: 'C',
    rationale: 'Systems thinking: decimal point errors are predictable human errors. The system should prevent them (e.g., standardized concentrations, computerized alerts, double-checks). Blaming and retraining the individual doesn\'t fix the system. Analyze contributing factors and implement safeguards to prevent similar errors by anyone.'
  },

  // Communication
  {
    id: 'v20',
    moduleId: 'communication',
    stem: 'During a surgical procedure, a sponge was inadvertently left in the patient\'s abdomen, requiring a second surgery to remove it. The patient is recovering well. What should you do?',
    options: [
      { id: 'A', text: 'Do not tell the patient; it will only cause distress' },
      { id: 'B', text: 'Document the error but wait to disclose until asked' },
      { id: 'C', text: 'Disclose the error, apologize, and explain prevention steps' },
      { id: 'D', text: 'Blame the surgical tech who performed the count' },
      { id: 'E', text: 'Let risk management decide whether to disclose' }
    ],
    correctOptionId: 'C',
    rationale: 'Error disclosure is an ethical obligation. Tell the patient what happened, apologize, explain what you\'re doing to address the harm, and outline steps to prevent recurrence. Disclosure is honest, maintains trust, and actually reduces litigation risk. Don\'t hide errors or blame individuals.'
  },
  {
    id: 'v21',
    moduleId: 'communication',
    stem: 'A patient becomes angry and yells at you, "You doctors don\'t care about anyone! You\'re just in it for the money!" What is the best response?',
    options: [
      { id: 'A', text: 'Defend yourself and explain you do care' },
      { id: 'B', text: 'Leave the room until the patient calms down' },
      { id: 'C', text: 'Say "I can see you\'re very upset. Help me understand what\'s going on."' },
      { id: 'D', text: 'Call security to manage the disruptive patient' },
      { id: 'E', text: 'Tell the patient their behavior is unacceptable' }
    ],
    correctOptionId: 'C',
    rationale: 'Acknowledge the emotion, validate it, and explore the underlying concern. Most anger dissipates when patients feel heard. Don\'t become defensive, argue, or leave immediately (unless there\'s a safety threat). Use empathy to de-escalate and understand the real issue.'
  }
];
