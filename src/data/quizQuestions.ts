import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Philippine Government & Senate
  {
    id: 'q-senate-count',
    question: 'How many senators comprise the Senate of the Philippines, and how are they elected?',
    category: 'ph_gov',
    options: [
      '24 senators, elected at-large nationwide',
      '100 senators, 2 from each province',
      '50 senators, elected per administrative region',
      '12 senators, appointed by the President'
    ],
    correctIndex: 0,
    explanation: 'Under Article VI, Section 2 of the 1987 Constitution, the Philippine Senate has exactly 24 members elected at-large by the entire nation, each serving six-year terms.',
    factIdRef: 'gov-senate-seats'
  },
  {
    id: 'q-presidential-term',
    question: 'What is the term length and re-election rule for the President of the Philippines?',
    category: 'ph_gov',
    options: [
      'Four-year term with one re-election allowed',
      'Single fixed six-year term with no re-election',
      'Five-year term with unlimited re-elections',
      'Six-year term with one re-election allowed'
    ],
    correctIndex: 1,
    explanation: 'Article VII, Section 4 of the 1987 Philippine Constitution strictly limits the President to a single six-year term without any eligibility for re-election.',
    factIdRef: 'gov-presidential-term'
  },
  {
    id: 'q-sc-justices',
    question: 'How many total justices make up the Supreme Court of the Philippines, and what is their mandatory retirement age?',
    category: 'ph_gov',
    options: [
      '9 justices with lifetime tenure until death',
      '15 justices (1 Chief Justice + 14 Associates) retiring at age 70',
      '12 justices retiring at age 65',
      '20 justices appointed for a fixed 10-year term'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court of the Philippines is composed of 1 Chief Justice and 14 Associate Justices, who must retire upon reaching the compulsory age of 70.',
    factIdRef: 'gov-supreme-court'
  },
  {
    id: 'q-constitutional-commissions',
    question: 'Which three independent bodies are classified as Constitutional Commissions with guaranteed fiscal autonomy under the 1987 Constitution?',
    category: 'ph_gov',
    options: [
      'DPWH, DOH, and PhilHealth',
      'CSC, COMELEC, and COA',
      'NEDA, BSP, and BIR',
      'DFA, DOLE, and DTI'
    ],
    correctIndex: 1,
    explanation: 'Article IX establishes the Civil Service Commission (CSC), Commission on Elections (COMELEC), and Commission on Audit (COA) as independent constitutional commissions with fiscal autonomy.',
    factIdRef: 'gov-constitutional-commissions'
  },

  // Agencies & Acronyms
  {
    id: 'q-acronym-dpwh',
    question: 'What does the government agency acronym DPWH stand for?',
    category: 'ph_agency',
    options: [
      'Department of Public Works and Highways',
      'Division of Public Waterways and Housing',
      'Department of Philippine Water and Health',
      'Directorate of Private Works and Homes'
    ],
    correctIndex: 0,
    explanation: 'DPWH stands for the Department of Public Works and Highways (Kagawaran ng mga Pagawaing Bayan at Lansangan), the chief engineering and infrastructure arm of the state.',
    factIdRef: 'agency-dpwh-fact'
  },
  {
    id: 'q-acronym-pagasa',
    question: 'What does PAGASA stand for, and which department is it attached to?',
    category: 'ph_agency',
    options: [
      'Philippine Atmospheric, Geophysical and Astronomical Services Administration (under DOST)',
      'Philippine Aviation and Ground Aerial Safety Administration (under DOTr)',
      'Pacific Agency for Geophysical and Agro-Silvicultural Affairs (under DENR)',
      'Philippine Astronomical and Geodetic Satellite Authority (under DICT)'
    ],
    correctIndex: 0,
    explanation: 'PAGASA stands for Philippine Atmospheric, Geophysical and Astronomical Services Administration, functioning under the Department of Science and Technology (DOST).',
    factIdRef: 'agency-pagasa-fact'
  },
  {
    id: 'q-acronym-rhu',
    question: 'In Philippine local governance, what does RHU stand for?',
    category: 'ph_agency',
    options: [
      'Regional Hospital Unit',
      'Rural Health Unit',
      'Resident Housing Undertaking',
      'Rehabilitation and Healthcare Union'
    ],
    correctIndex: 1,
    explanation: 'RHU stands for Rural Health Unit, the frontline clinic operated by municipal local government units providing free primary care and immunizations.',
    factIdRef: 'agency-rhu-fact'
  },
  {
    id: 'q-acronym-philhealth',
    question: 'What law guarantees automatic PhilHealth membership for all Filipino citizens?',
    category: 'ph_agency',
    options: [
      'Universal Health Care Act (Republic Act No. 11223)',
      'Labor Code of the Philippines (Presidential Decree 442)',
      'National Internal Revenue Code',
      'Consumer Act of the Philippines (RA 7394)'
    ],
    correctIndex: 0,
    explanation: 'Under the Universal Health Care Act of 2019 (Republic Act No. 11223), all Filipino citizens are automatically enrolled in the National Health Insurance Program through PhilHealth.',
    factIdRef: 'agency-philhealth-fact'
  },
  {
    id: 'q-central-bank-currency',
    question: 'Which institution possesses exclusive legal authority to issue Philippine Peso currency banknotes and coins?',
    category: 'ph_agency',
    options: [
      'Bureau of Internal Revenue (BIR)',
      'Department of Finance (DOF)',
      'Bangko Sentral ng Pilipinas (BSP)',
      'Development Bank of the Philippines (DBP)'
    ],
    correctIndex: 2,
    explanation: 'Under the New Central Bank Act (RA 7653 as amended by RA 11211), the Bangko Sentral ng Pilipinas (BSP) holds exclusive monopoly over minting and issuing Philippine currency.',
    factIdRef: 'agency-bsp-fact'
  },

  // Filipino Heritage & Culture
  {
    id: 'q-baybayin-name',
    question: 'What is the historically accurate name for the native pre-colonial Tagalog syllabic script, often mistakenly called "Alibata"?',
    category: 'filipino',
    options: [
      'Baybayin',
      'Hangul',
      'Sanskrit PH',
      'Kawi Script'
    ],
    correctIndex: 0,
    explanation: 'Baybayin, from the Tagalog root word "baybay" (to spell), is the authentic pre-colonial writing script. "Alibata" was an erroneous term coined in 1914.',
    factIdRef: 'heritage-baybayin'
  },
  {
    id: 'q-homo-luzonensis',
    question: 'In which Philippine province was the ancient hominin species Homo luzonensis excavated in Callao Cave?',
    category: 'filipino',
    options: [
      'Palawan',
      'Cagayan',
      'Benguet',
      'Bohol'
    ],
    correctIndex: 1,
    explanation: 'Homo luzonensis fossils dating back over 50,000 years were discovered in Callao Cave, located in Peñablanca, Cagayan on the island of Luzon.',
    factIdRef: 'heritage-homo-luzonensis'
  },

  // Science & Cosmos
  {
    id: 'q-sunlight-duration',
    question: 'Approximately how long does it take for sunlight traveling across space to reach Earth?',
    category: 'science',
    options: [
      '8 seconds',
      '8 minutes and 20 seconds',
      '1 hour and 15 minutes',
      'Instantaneous (0 seconds)'
    ],
    correctIndex: 1,
    explanation: 'Because light travels at approximately 300,000 km/s and the distance to the Sun is ~150 million km, sunlight takes about 8 minutes and 20 seconds (500 seconds) to arrive.',
    factIdRef: 'science-speed-of-light'
  },
  {
    id: 'q-olympus-mons',
    question: 'Where is Olympus Mons, the tallest volcano in the Solar System, located?',
    category: 'galaxy',
    options: [
      'Venus',
      'Earth (Hawaii)',
      'Mars',
      'Jupiter\'s moon Io'
    ],
    correctIndex: 2,
    explanation: 'Olympus Mons is located on Mars. Towering 21.9 km (72,000 feet) high, it stands nearly three times the elevation of Mount Everest.',
    factIdRef: 'galaxy-olympus-mons'
  },

  // Math & World
  {
    id: 'q-birthday-paradox',
    question: 'What is the minimum number of people needed in a room for the probability of two individuals sharing a birthday to exceed 50%?',
    category: 'math',
    options: [
      '183 people',
      '23 people',
      '50 people',
      '365 people'
    ],
    correctIndex: 1,
    explanation: 'The Birthday Paradox mathematically shows that just 23 people produce 253 pairwise comparisons, yielding a 50.7% likelihood of at least one shared birthday.',
    factIdRef: 'math-birthday-paradox'
  },
  {
    id: 'q-bhutan-carbon',
    question: 'Which country is recognized globally as the only carbon-negative nation, sequestering more carbon than it produces?',
    category: 'world',
    options: [
      'Switzerland',
      'Bhutan',
      'New Zealand',
      'Norway'
    ],
    correctIndex: 1,
    explanation: 'The Kingdom of Bhutan is carbon-negative thanks to its constitutional requirement maintaining at least 60% forest cover and reliance on hydroelectric power.',
    factIdRef: 'world-bhutan-carbon'
  },

  // Civics & Rights
  {
    id: 'q-senior-discount-ph',
    question: 'Under Philippine law (RA 9994), what financial benefits do senior citizens receive on prescription medicines and dining?',
    category: 'civics',
    options: [
      '10% discount only',
      '20% discount PLUS 12% VAT exemption',
      '5% discount and waived municipal tax',
      'Free medication for all without limit'
    ],
    correctIndex: 1,
    explanation: 'Republic Act No. 9994 grants senior citizens a 20% statutory discount and exempts purchases from the 12% Value Added Tax (VAT) on eligible goods and services.',
    factIdRef: 'civics-senior-benefits'
  },

  // Banking & Finance
  {
    id: 'q-pdic-coverage',
    question: 'What is the maximum deposit insurance coverage provided by the Philippine Deposit Insurance Corporation (PDIC) per depositor per bank?',
    category: 'banks_finance',
    options: [
      '₱100,000',
      '₱250,000',
      '₱500,000',
      '₱1,000,000'
    ],
    correctIndex: 2,
    explanation: 'Under RA 3591 as amended, PDIC guarantees bank deposits up to ₱500,000 per depositor per bank, protecting funds in case of bank closure.',
    factIdRef: 'fin-pdic-insurance'
  },
  {
    id: 'q-bank-secrecy-ph',
    question: 'Which Philippine law establishes strict confidentiality for all bank deposits, prohibiting disclosure without court order or owner consent?',
    category: 'banks_finance',
    options: [
      'Republic Act No. 1405',
      'Republic Act No. 9160',
      'Republic Act No. 8791',
      'Republic Act No. 7160'
    ],
    correctIndex: 0,
    explanation: 'RA 1405 (Law on Secrecy of Bank Deposits enacted in 1955) makes all bank deposits absolutely confidential, with very narrow legal exceptions.',
    factIdRef: 'fin-bank-secrecy'
  },

  // Philippine History & Lore
  {
    id: 'q-ph-flag-wartime',
    question: 'Under Republic Act 8491, how does the Philippine flag uniquely signal that the country is in an official state of war?',
    category: 'filipino',
    options: [
      'A black ribbon is tied to the mast',
      'The red stripe is flown uppermost on top',
      'The three stars are turned outward',
      'The golden sun is replaced with an eagle'
    ],
    correctIndex: 1,
    explanation: 'The Philippines is the only nation on Earth whose national flag signals wartime when flown inverted with the red stripe on top.',
    factIdRef: 'hist-inverted-flag'
  },

  // Debunked Myths
  {
    id: 'q-myth-brain-pct',
    question: 'What does modern neuroimaging (fMRI) prove regarding the popular myth that humans only use 10% of their brains?',
    category: 'myths_debunked',
    options: [
      'It is true; 90% is dormant backup capacity',
      'It is false; virtually 100% of the brain is actively utilized',
      'Only trained geniuses use more than 15%',
      'Brain activity drops to zero during sleep'
    ],
    correctIndex: 1,
    explanation: 'fMRI and PET scans demonstrate that virtually the entire brain is active across various cognitive, sensory, and motor tasks throughout the day and during sleep.',
    factIdRef: 'myth-brain-10-percent'
  },
  {
    id: 'q-myth-vein-blood',
    question: 'Why do human veins appear blue through the skin even though human blood is always red?',
    category: 'myths_debunked',
    options: [
      'Blood is blue until it touches atmospheric oxygen',
      'Venous blood contains copper instead of iron',
      'Skin tissue absorbs long red light and scatters short blue wavelengths back to the eyes',
      'Carbon dioxide chemically turns plasma blue'
    ],
    correctIndex: 2,
    explanation: 'Blood is always red. Deep deoxygenated blood is dark crimson, but human skin scatters short blue wavelengths back to the surface while red light penetrates deeper.',
    factIdRef: 'myth-blood-is-blue'
  },

  // Biology & Animal Studies
  {
    id: 'q-study-of-insects',
    question: 'What is the specific scientific branch of zoology dedicated to the study of insects?',
    category: 'biology_animals',
    options: [
      'Herpetology',
      'Entomology',
      'Ichthyology',
      'Ornithology'
    ],
    correctIndex: 1,
    explanation: 'Entomology (from Greek entomon, notched/segmented) is the study of insects. Herpetology is reptiles/amphibians, Ichthyology is fish, and Ornithology is birds.',
    factIdRef: 'bio-animal-studies'
  },
  {
    id: 'q-octopus-hearts',
    question: 'How many hearts and brains does a common octopus have, and what metal gives its blood a blue color?',
    category: 'biology_animals',
    options: [
      '1 heart, 1 brain, iron-based blood',
      '2 hearts, 4 brains, magnesium-based blood',
      '3 hearts, 9 brains, copper-based hemocyanin blood',
      '4 hearts, 8 brains, cobalt-based blood'
    ],
    correctIndex: 2,
    explanation: 'Octopuses possess 3 hearts (two for gills, one for body), 9 brains (one central + one in each of 8 arms), and blue copper-based hemocyanin blood.',
    factIdRef: 'bio-octopus-anatomy'
  },

  // Chemistry & Nutrition
  {
    id: 'q-water-ice-density',
    question: 'Why does solid ice float on top of liquid water rather than sinking to the bottom?',
    category: 'chemistry_nutrition',
    options: [
      'Ice traps atmospheric carbon dioxide bubbles',
      'Hydrogen bonds expand into an open hexagonal lattice that is 9% less dense than liquid water',
      'Cold water is heavier because of higher salinity',
      'Surface tension pushes solid ice upward'
    ],
    correctIndex: 1,
    explanation: 'Water uniquely reaches peak density at 4°C. When freezing, hydrogen bonds lock H2O molecules into a spacious hexagonal crystal that is 9% less dense than liquid water.',
    factIdRef: 'chem-water-expands-ice'
  },
  {
    id: 'q-gallium-melting',
    question: 'Which solid metal has a melting point of 29.76°C (85.6°F) and will liquefy simply from human body heat in the palm of your hand?',
    category: 'chemistry_nutrition',
    options: [
      'Gallium',
      'Mercury',
      'Titanium',
      'Platinum'
    ],
    correctIndex: 0,
    explanation: 'Gallium is a solid metal that melts at 29.76°C, well below human core body temperature (37°C), causing it to melt into a liquid mirror in your hand.',
    factIdRef: 'chem-gallium-melts'
  },

  // Tech, Cybersecurity & AI
  {
    id: 'q-http-cookies',
    question: 'Why were HTTP cookies invented in 1994 by Lou Montulli for web browsers?',
    category: 'tech_ai',
    options: [
      'To prevent viruses from entering computers',
      'Because HTTP is stateless and cookies allow servers to remember user sessions and carts',
      'To increase internet download bandwidth',
      'To compress image files before sending'
    ],
    correctIndex: 1,
    explanation: 'HTTP is inherently stateless. Cookies were created in 1994 so browsers could store session tokens and remember logins and shopping cart items between web clicks.',
    factIdRef: 'tech-cookies-explained'
  },
  {
    id: 'q-password-salting',
    question: 'In cybersecurity, why do websites "salt" user passwords before hashing them into the database?',
    category: 'tech_ai',
    options: [
      'To make passwords shorter for faster retrieval',
      'To append random data that prevents attackers from using precomputed rainbow tables',
      'To automatically email passwords back to users',
      'To decrypt passwords on the server side'
    ],
    correctIndex: 1,
    explanation: 'Adding a unique random cryptographic "salt" ensures that identical passwords yield different hashes, preventing precomputed rainbow table attacks.',
    factIdRef: 'tech-password-salting'
  },

  // Forensics & Psychology
  {
    id: 'q-locards-exchange',
    question: 'What is the core principle of modern forensic science formulated by Dr. Edmond Locard?',
    category: 'forensics_psych',
    options: [
      'The criminal always returns to the scene',
      'Every contact leaves a trace',
      'Eyewitness testimony is infallible',
      'Blood evidence decays within one hour'
    ],
    correctIndex: 1,
    explanation: "Locard's Exchange Principle states: 'Every contact leaves a trace'—a perpetrator inevitably brings physical evidence into a scene and carries material away.",
    factIdRef: 'for-locards-exchange'
  },
  {
    id: 'q-bystander-effect',
    question: 'What primary psychological mechanism explains why people in large crowds are less likely to intervene in emergencies?',
    category: 'forensics_psych',
    options: [
      'Auditory sensory overload',
      'Diffusion of responsibility',
      'Inherent human malice',
      'Classical conditioning'
    ],
    correctIndex: 1,
    explanation: 'The Bystander Effect is primarily caused by diffusion of responsibility—each bystander assumes someone else will intervene or call emergency responders.',
    factIdRef: 'psych-bystander-effect'
  },

  // Color Theory & English
  {
    id: 'q-tittle-letter-dot',
    question: 'What is the official English name for the small dot above the lowercase letters "i" and "j"?',
    category: 'language_english',
    options: [
      'Circumflex',
      'Tittle',
      'Cedilla',
      'Breve'
    ],
    correctIndex: 1,
    explanation: 'The diacritic dot over the lowercase i and j is officially called a "tittle", derived from Latin "titulus" (label or superscript mark).',
    factIdRef: 'eng-tittle-dot'
  },
  {
    id: 'q-contronyms-janus',
    question: 'What is a "contronym" (or Janus word) in the English language?',
    category: 'language_english',
    options: [
      'A word borrowed from Ancient Greek',
      'A word with contradictory meanings that is its own exact opposite',
      'A word that contains no vowels',
      'A word spelled backwards that forms a new word'
    ],
    correctIndex: 1,
    explanation: 'Contronyms (like "cleave" or "sanction") are words with contradictory meanings that mean their own opposite, named after two-faced Roman god Janus.',
    factIdRef: 'eng-janus-contronyms'
  }
];
