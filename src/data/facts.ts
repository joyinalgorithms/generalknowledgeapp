import { Fact, CategoryInfo } from '../types';
import { EXPANDED_FACTS } from './expandedFacts';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    label: 'All Knowledge',
    shortLabel: 'All',
    icon: 'Sparkles',
    description: 'Explore the full compendium of Philippine civics, science, cosmos, math, technology, biology, and universal facts.'
  },
  {
    id: 'ph_gov',
    label: 'PH Government & Senate',
    shortLabel: 'PH Gov',
    icon: 'Landmark',
    description: 'Senate, Congress, Executive, Judiciary, Constitution, and essential civics every citizen must know.'
  },
  {
    id: 'ph_agency',
    label: 'Agencies & Acronyms',
    shortLabel: 'Agencies',
    icon: 'Building2',
    description: 'What DPWH, DOH, PhilHealth, PAGASA, RHU, SSS, GSIS, BSP, and PDIC stand for, their mandates and citizen services.'
  },
  {
    id: 'filipino',
    label: 'Filipino Heritage & History',
    shortLabel: 'PH History',
    icon: 'Sun',
    description: 'Pre-colonial Baybayin script, Manila Galleon trade, inverted wartime flag, Rizal polyglot feats, and Philippine heritage.'
  },
  {
    id: 'banks_finance',
    label: 'Banks, Money & Finance',
    shortLabel: 'Finance',
    icon: 'BadgeDollarSign',
    description: 'PDIC deposit guarantee, Philippine Bank Secrecy Law, fractional reserves, fiat currency, and the compound interest Rule of 72.'
  },
  {
    id: 'myths_debunked',
    label: 'Common Myths Debunked',
    shortLabel: 'Debunked',
    icon: 'AlertCircle',
    description: 'Fact-checked demystifications: 10% brain myth, blue blood fallacy, hair shaving rumors, knuckle cracking, and sugar rushes.'
  },
  {
    id: 'biology_animals',
    label: 'Animals & Biology Branches',
    shortLabel: 'Animals & Bio',
    icon: 'Dna',
    description: 'Specialized animal sciences (Zoology, Entomology, Herpetology, Ornithology, Ichthyology), octopus anatomy, and tardigrades.'
  },
  {
    id: 'chemistry_nutrition',
    label: 'Chemistry & Nutrients',
    shortLabel: 'Chemistry',
    icon: 'FlaskConical',
    description: 'Water expansion anomalies, gallium melting point, human Vitamin C synthesis loss, Vitamin D sunlight photolysis, and amino acids.'
  },
  {
    id: 'tech_ai',
    label: 'Tech, Cybersecurity & AI',
    shortLabel: 'Tech & AI',
    icon: 'Cpu',
    description: 'What web cookies do, password salting & hashing, RAM vs SSD flash storage, DNS routing, and LLM transformer attention.'
  },
  {
    id: 'forensics_psych',
    label: 'Forensics & Psychology',
    shortLabel: 'Forensics & Psych',
    icon: 'Fingerprint',
    description: "Locard's exchange principle, luminol blood detection, fingerprint odds, cognitive dissonance, bystander effect, and Dunning-Kruger."
  },
  {
    id: 'arts_colors',
    label: 'Colors & Color Theory',
    shortLabel: 'Color Theory',
    icon: 'Palette',
    description: 'Additive RGB vs subtractive CMYK, impossible chimerical colors, retinal opponent-process vision, and Vantablack 99.96% absorption.'
  },
  {
    id: 'language_english',
    label: 'English & Linguistics',
    shortLabel: 'Linguistics',
    icon: 'Type',
    description: 'The tittle dot on lowercase i, pangrams, Janus contronyms that mean their opposites, and dictionary records.'
  },
  {
    id: 'science',
    label: 'Science & Physics',
    shortLabel: 'Physics',
    icon: 'Atom',
    description: 'Speed of light constant, quantum superposition, gravitational time dilation, and fundamental scientific principles.'
  },
  {
    id: 'galaxy',
    label: 'Galaxy & Cosmos',
    shortLabel: 'Cosmos',
    icon: 'Orbit',
    description: 'Sagittarius A* supermassive black hole, neutron star density, cosmic horizon, and planetary trivia.'
  },
  {
    id: 'math',
    label: 'Mathematics & Logic',
    shortLabel: 'Math',
    icon: 'Binary',
    description: 'The Golden Ratio, formal invention of zero, cryptographic primes, and probability paradoxes.'
  },
  {
    id: 'civics',
    label: 'Citizen Rights & Laws',
    shortLabel: 'Rights',
    icon: 'Scale',
    description: 'Miranda rights (RA 7438), senior citizen discounts (RA 9994), PWD privileges (RA 10754), and Data Privacy Act (RA 10173).'
  },
  {
    id: 'world',
    label: 'World Extremes & Lore',
    shortLabel: 'World',
    icon: 'Globe2',
    description: 'Fascinating geopolitical anomalies, carbon-negative kingdoms, geographic extremes, and global history.'
  }
];

export const FACTS: Fact[] = [
  // --- PH GOVERNMENT & SENATE ---
  {
    id: 'gov-senate-seats',
    title: 'The Philippine Senate has Only 24 Senators Elected at Large',
    category: 'ph_gov',
    digest: 'Unlike the US Senate with 100 members representing 50 states, the Philippine Senate has exactly 24 senators elected by the entire nationwide voting population.',
    deepDive: 'Under Article VI, Section 2 of the 1987 Constitution, senators serve a term of six years. Half of the Senate (12 seats) is renewed every three years during midterm and presidential elections. A senator may serve a maximum of two consecutive terms.',
    funFact: 'Because Philippine senators are voted at-large nationwide, their legislative constituency is the entire Republic of the Philippines rather than a single province or congressional district.',
    pronunciation: '/SEN-it/ (Senado ng Pilipinas)',
    citation: 'Article VI, Section 2, 1987 Philippine Constitution',
    audioNarrative: 'Did you know? The Philippine Senate is composed of only 24 senators elected at-large by the entire nation. Under Article 6 of the 1987 Constitution, each senator serves a six-year term with a two-consecutive term limit.',
    tags: ['Senate', 'Congress', '1987 Constitution', 'Elections']
  },
  {
    id: 'gov-presidential-term',
    title: 'The Philippine President Cannot Run for Re-election',
    category: 'ph_gov',
    digest: 'The President of the Philippines serves a single, fixed six-year term with an absolute constitutional ban on seeking re-election.',
    deepDive: 'Article VII, Section 4 of the 1987 Constitution was deliberately framed to prevent another authoritarian monopoly following the 20-year rule of Ferdinand Marcos Sr. Even if a president resigns before completing six years, they remain ineligible for any future presidential election.',
    funFact: 'A Vice President who succeeds the presidency and serves for more than four years is likewise permanently barred from running for President.',
    citation: 'Article VII, Section 4, 1987 Philippine Constitution',
    audioNarrative: 'Did you know? The President of the Philippines serves a single, fixed six-year term and is constitutionally prohibited from ever seeking re-election, as mandated by the 1987 Constitution.',
    tags: ['President', 'Executive Branch', 'Malacañang', 'Constitution']
  },
  {
    id: 'gov-supreme-court',
    title: 'The Supreme Court is Made of 15 Justices with Retirement at Age 70',
    category: 'ph_gov',
    digest: 'The highest court of the land consists of one Chief Justice and fourteen Associate Justices appointed by the President from nominees vetted by the Judicial and Bar Council.',
    deepDive: 'Under Article VIII, Section 4, Supreme Court justices hold office during good behavior until reaching the mandatory retirement age of 70 years, or until incapacitated. The Court exercises judicial review—empowering it to strike down any law or executive decree found unconstitutional.',
    funFact: 'Unlike the US Supreme Court where justices hold lifetime tenure until death or voluntary resignation, Philippine justices must step down on their 70th birthday.',
    citation: 'Article VIII, Section 11, 1987 Philippine Constitution',
    audioNarrative: 'Did you know? The Supreme Court of the Philippines has 15 members: one Chief Justice and 14 Associate Justices. They serve until the compulsory retirement age of 70.',
    tags: ['Supreme Court', 'Judiciary', 'Judicial Review', 'Chief Justice']
  },
  {
    id: 'gov-constitutional-commissions',
    title: 'Three Constitutional Commissions Possess Independent Fiscal Autonomy',
    category: 'ph_gov',
    digest: 'The Civil Service Commission (CSC), Commission on Elections (COMELEC), and Commission on Audit (COA) are independent bodies whose budgets cannot be reduced below the previous year.',
    deepDive: 'Created under Article IX of the 1987 Constitution, their commissioners enjoy guaranteed seven-year non-renewable terms and cannot be removed except by congressional impeachment, ensuring independence from executive and legislative pressure.',
    funFact: 'Their official decisions can only be appealed directly to the Supreme Court through a petition for certiorari, bypassing all intermediate appellate courts.',
    citation: 'Article IX-A, Section 5, 1987 Constitution of the Republic of the Philippines',
    audioNarrative: 'Did you know? The three independent Constitutional Commissions of the Philippines are the CSC, COMELEC, and COA. They possess constitutional fiscal autonomy, meaning their annual appropriations cannot be cut below the previous year.',
    tags: ['COMELEC', 'COA', 'CSC', 'Independent Bodies']
  },
  {
    id: 'gov-ombudsman',
    title: 'The Ombudsman is the "Tanodbayan" and Protector of the People',
    category: 'ph_gov',
    digest: 'The Office of the Ombudsman has constitutional authority to investigate and prosecute any public official for graft, corruption, or abuse of power.',
    deepDive: 'Established under Article XI and Republic Act No. 6770, the Ombudsman acts on complaints filed by any private citizen or even anonymous tipsters. It prosecutes cases before the Sandiganbayan, the special anti-graft court.',
    funFact: 'The Ombudsman can order the immediate preventive suspension of any government official—from city mayors to cabinet members—while an investigation is pending.',
    citation: 'Republic Act No. 6770 (The Ombudsman Act of 1989)',
    audioNarrative: 'Did you know? The Office of the Ombudsman, known as the Tanodbayan, is the constitutional protector of the people against graft and corruption in government, prosecuting cases before the Sandiganbayan.',
    tags: ['Ombudsman', 'Sandiganbayan', 'Anti-Corruption', 'Accountability']
  },
  {
    id: 'gov-party-list',
    title: '20% of the House of Representatives is Reserved for Party-Lists',
    category: 'ph_gov',
    digest: 'Under the Philippine Constitution, one-fifth of all seats in the House of Representatives must come from registered party-list organizations representing marginalized sectors.',
    deepDive: 'Republic Act No. 7941 governs the party-list system. Sectors include labor, peasant, urban poor, indigenous cultural communities, women, youth, and overseas workers. A single party-list organization can win a maximum of three seats regardless of how many votes it receives.',
    funFact: 'The 3-seat cap was established by the Supreme Court in Veterans Federation Party v. COMELEC to prevent any single well-funded bloc from dominating the proportional seats.',
    citation: 'Article VI, Section 5(2), 1987 Constitution & RA 7941',
    audioNarrative: 'Did you know? By constitutional mandate, twenty percent of the House of Representatives must be composed of party-list representatives, with no single organization allowed more than three seats.',
    tags: ['Congress', 'House of Representatives', 'Party List', 'Elections']
  },

  // --- PH AGENCIES & ACRONYMS ---
  {
    id: 'agency-dpwh-fact',
    title: 'DPWH: Department of Public Works and Highways',
    category: 'ph_agency',
    digest: 'DPWH is the government\'s primary engineering arm, managing over 33,000 kilometers of national arterial roads and major river basin flood control dikes.',
    deepDive: 'Traced back to the Revolutionary Cabinet of 1898 under Apolinario Mabini, today\'s DPWH operates under Executive Order 124. It tests concrete strength using core drilling and ultrasound to prevent sub-standard contractor paving.',
    funFact: 'The shortest national road in the Philippines is said to be the 100-meter stretch of Gen. Luna Street in Intramuros, Manila, maintained under national supervision.',
    pronunciation: '/dee-pee-double-yoo-aych/ (Kagawaran ng Pagawaing Bayan at Lansangan)',
    citation: 'Executive Order No. 124, s. 1987',
    acronymDetails: {
      code: 'DPWH',
      standsFor: 'Department of Public Works and Highways',
      filipinoTitle: 'Kagawaran ng mga Pagawaing Bayan at Lansangan',
      mandate: 'Planning, design, construction, and maintenance of national highways, bridges, and flood control structures.'
    },
    audioNarrative: 'DPWH stands for Department of Public Works and Highways. In Filipino, it is Kagawaran ng mga Pagawaing Bayan at Lansangan. It builds and maintains national highways, bridges, and flood control systems.',
    tags: ['DPWH', 'Infrastructure', 'Bridges', 'Highways']
  },
  {
    id: 'agency-doh-fact',
    title: 'DOH: Department of Health',
    category: 'ph_agency',
    digest: 'DOH is the supreme health policy formulation and regulatory body, supervising specialty hospitals like the Philippine Heart Center and National Kidney and Transplant Institute.',
    deepDive: 'Operating under Executive Order 119 and Republic Act 11223 (Universal Health Care Act), DOH distributes free childhood vaccines through the Expanded Program on Immunization and monitors emerging viral pathogens through the RITM.',
    funFact: 'San Lazaro Hospital in Manila, managed under the DOH, was founded in 1577 by Franciscan friars, making it one of the oldest operating hospitals in all of Asia.',
    pronunciation: '/dee-oh-aych/ (Kagawaran ng Kalusugan)',
    citation: 'Republic Act No. 11223 (Universal Health Care Act)',
    acronymDetails: {
      code: 'DOH',
      standsFor: 'Department of Health',
      filipinoTitle: 'Kagawaran ng Kalusugan',
      mandate: 'Formulates national health standards, operates apex referral medical centers, and regulates pharmaceuticals and clinics.'
    },
    audioNarrative: 'DOH stands for Department of Health, or Kagawaran ng Kalusugan. It leads the nation\'s public healthcare response, oversees specialty hospitals, and implements the Universal Health Care law.',
    tags: ['DOH', 'Health', 'Hospitals', 'San Lazaro']
  },
  {
    id: 'agency-philhealth-fact',
    title: 'PhilHealth: Philippine Health Insurance Corporation',
    category: 'ph_agency',
    digest: 'PhilHealth guarantees financial coverage for medical treatments, and every Filipino citizen is automatically enrolled by law.',
    deepDive: 'Under the Universal Health Care Act (RA 11223), all Filipinos are categorized as either direct contributors (those paying monthly premiums through salary deductions) or indirect contributors (subsidized by the national budget, including indigents and senior citizens).',
    funFact: 'PhilHealth\'s "Konsulta" package covers free outpatient consultations, complete blood counts, urinalysis, chest X-rays, and essential maintenance medications.',
    pronunciation: '/fil-health/ (Korporasyon ng Paseguruhan sa Kalusugan ng Pilipinas)',
    citation: 'Republic Act No. 7875 & RA 11223',
    acronymDetails: {
      code: 'PhilHealth',
      standsFor: 'Philippine Health Insurance Corporation',
      filipinoTitle: 'Korporasyon ng Paseguruhan sa Kalusugan ng Pilipinas',
      mandate: 'Administering the National Health Insurance Program to provide universal hospitalization safety nets.'
    },
    audioNarrative: 'PhilHealth stands for Philippine Health Insurance Corporation. Under Republic Act 11223, all Filipino citizens are legally entitled to PhilHealth medical coverage for hospitalization and outpatient consultations.',
    tags: ['PhilHealth', 'Universal Health Care', 'Insurance', 'Medical Subsidies']
  },
  {
    id: 'agency-pagasa-fact',
    title: 'PAGASA: Philippine Atmospheric, Geophysical and Astronomical Services Administration',
    category: 'ph_agency',
    digest: 'PAGASA forecasts weather, tracks typhoons inside the Philippine Area of Responsibility (PAR), and synchronizes official Philippine Standard Time.',
    deepDive: 'Created under Presidential Decree No. 78 and modernized via Republic Act 10692, PAGASA operates 19 Doppler radar stations, astronomical observatories, and issues Wind Signals from Signal No. 1 (39–61 km/h) to Signal No. 5 (exceeding 185 km/h).',
    funFact: 'The acronym was purposefully coined to spell "pag-asa", the Filipino word for "hope", reflecting its humanitarian duty to give early warning and save lives.',
    pronunciation: '/pahg-AH-sah/ (Pangasiwaan sa Serbisyong Atmosperiko, Heopisiko at Astronomiko)',
    citation: 'Presidential Decree No. 78 & Republic Act No. 10692',
    acronymDetails: {
      code: 'PAGASA',
      standsFor: 'Philippine Atmospheric, Geophysical and Astronomical Services Administration',
      filipinoTitle: 'Pangasiwaan ng Pilipinas sa Serbisyong Atmosperiko, Heopisiko at Astronomiko',
      mandate: 'Providing weather forecasting, flood warnings, storm signals, and maintaining astronomical standards.'
    },
    audioNarrative: 'PAGASA stands for Philippine Atmospheric, Geophysical and Astronomical Services Administration. Pronounced pag-AH-sah, it tracks tropical cyclones, issues storm signals, and keeps official Philippine Standard Time.',
    tags: ['PAGASA', 'Typhoons', 'Weather', 'Philippine Standard Time']
  },
  {
    id: 'agency-rhu-fact',
    title: 'RHU: Rural Health Unit',
    category: 'ph_agency',
    digest: 'An RHU is the frontline, municipal-level clinic providing free primary doctor consultations, vaccines, and prenatal care across every Philippine town.',
    deepDive: 'Originally instituted under the Rural Health Act of 1954 (RA 1082), RHUs were devolved to local governments under RA 7160 (Local Government Code). Each RHU is headed by a Municipal Health Officer (MHO) and supported by Barangay Health Stations (BHS).',
    funFact: 'By law, an RHU must provide free TB-DOTS (Tuberculosis Direct Observed Therapy), reducing tuberculosis transmission in grassroots communities at zero out-of-pocket cost.',
    pronunciation: '/ar-aych-yoo/ (Rural Health Unit / Munisipyong Klinika)',
    citation: 'Republic Act No. 1082 & RA 7160 (Local Government Code)',
    acronymDetails: {
      code: 'RHU',
      standsFor: 'Rural Health Unit',
      filipinoTitle: 'Pangkalusugang Tanggapan sa Pook Rural',
      mandate: 'Frontline primary care clinic in municipalities delivering free vaccines, maternal health, and general medical diagnostics.'
    },
    audioNarrative: 'RHU stands for Rural Health Unit. It is the primary clinic located in every Philippine municipality, providing free doctor checkups, childhood vaccines, and maternal prenatal care.',
    tags: ['RHU', 'LGU', 'Primary Care', 'Barangay Health']
  },
  {
    id: 'agency-bsp-fact',
    title: 'BSP: Bangko Sentral ng Pilipinas',
    category: 'ph_agency',
    digest: 'The BSP is the central bank of the Philippines, controlling monetary policy and possessing the sole authority to issue Philippine Peso banknotes and coins.',
    deepDive: 'Established under Republic Act No. 7653 (amended by RA 11211), the BSP manages foreign exchange reserves, regulates retail banks and e-wallets, and prints money at the Security Plant Complex in Quezon City.',
    funFact: 'Under Philippine law (Presidential Decree No. 247), defacing, tearing, or writing on Philippine currency notes is a criminal offense punishable by a fine and up to 5 years imprisonment.',
    pronunciation: '/bee-es-pee/ (Bangko Sentral ng Pilipinas)',
    citation: 'Republic Act No. 11211 (New Central Bank Act)',
    acronymDetails: {
      code: 'BSP',
      standsFor: 'Bangko Sentral ng Pilipinas',
      filipinoTitle: 'Bangko Sentral ng Pilipinas',
      mandate: 'Maintaining price stability, sound financial systems, and exclusive minting of the Philippine currency.'
    },
    audioNarrative: 'BSP stands for Bangko Sentral ng Pilipinas. It is the nation\'s central bank, setting monetary policies, supervising banks, and printing Philippine Peso banknotes and coins.',
    tags: ['BSP', 'Central Bank', 'Philippine Peso', 'Monetary Policy']
  },

  // --- FILIPINO HERITAGE & CULTURE ---
  {
    id: 'heritage-baybayin',
    title: 'Baybayin is an Ancient Syllabic Script, NOT "Alibata"',
    category: 'filipino',
    digest: 'Baybayin is the authentic pre-colonial writing system of the Tagalog and neighboring Philippine communities, derived from the Brahmic scripts of South Asia.',
    deepDive: 'The term "Alibata" was mistakenly coined in 1914 by Dean Paul Versoza based on the Arabic alphabet (alif, ba, ta), which had no historical link to the script. Baybayin comes from the Tagalog root word "baybay", meaning "to spell".',
    funFact: 'The 1593 Doctrina Christiana, the first printed book in Philippine history, featured side-by-side text in Spanish, Romanized Tagalog, and native Baybayin script.',
    pronunciation: '/bye-BYE-yeen/ (Baybayin)',
    citation: 'National Historical Commission of the Philippines & RA 11106',
    audioNarrative: 'Did you know? The native pre-colonial Philippine writing script is correctly called Baybayin, from the word baybay meaning to spell, and not Alibata as mistakenly popularized in 1914.',
    tags: ['Baybayin', 'Language', 'Pre-Colonial', 'Doctrina Christiana']
  },
  {
    id: 'heritage-living-languages',
    title: 'The Philippines has Over 170 Living Indigenous Languages, Not "Dialects"',
    category: 'filipino',
    digest: 'Tagalog, Cebuano, Ilocano, Hiligaynon, and Waray are distinct, mutually unintelligible languages—not mere dialects of each other.',
    deepDive: 'All Philippine indigenous languages belong to the Malayo-Polynesian branch of the Austronesian language family. In linguistics, two speech varieties are distinct languages if speakers cannot understand each other without learning the other speech.',
    funFact: 'Article XIV, Section 7 of the 1987 Constitution designates Filipino and English as the official languages of communication and instruction.',
    citation: 'Article XIV, Section 7, 1987 Constitution & Komisyon sa Wikang Filipino',
    audioNarrative: 'Did you know? The Philippines has over 170 living indigenous languages, including Cebuano, Ilocano, and Waray. Linguistically, they are separate languages, not dialects.',
    tags: ['Languages', 'Austronesian', 'Cebuano', 'Ilocano', 'Tagalog']
  },
  {
    id: 'heritage-homo-luzonensis',
    title: 'Homo luzonensis: A New Ancient Human Species Discovered in Cagayan',
    category: 'filipino',
    digest: 'In 2019, scientists announced the discovery of Homo luzonensis in Callao Cave, Peñablanca, Cagayan—proving an ancient human species inhabited Luzon 50,000–67,000 years ago.',
    deepDive: 'Excavated by Filipino archaeologist Dr. Armand Mijares and an international team, the fossils showed a unique mosaic of primitive Australopithecus-like curved toe bones and modern human-like teeth.',
    funFact: 'Because Luzon was always an island surrounded by deep ocean trenches even during the Ice Ages, Homo luzonensis or their ancestors must have crossed open sea to reach Luzon.',
    citation: 'Nature Journal 568, 181–186 (April 2019)',
    audioNarrative: 'Did you know? In 2019, archaeologists discovered Homo luzonensis in Callao Cave, Cagayan. This ancient human species lived on Luzon over 50,000 years ago, rewriting human evolutionary history.',
    tags: ['Homo luzonensis', 'Callao Cave', 'Archaeology', 'Evolution']
  },
  {
    id: 'heritage-philippine-eagle',
    title: 'The Philippine Eagle is the Longest and Largest Eagle on Earth',
    category: 'filipino',
    digest: 'The Philippine Eagle (Pithecophaga jefferyi) is endemic exclusively to four Philippine islands: Luzon, Samar, Leyte, and Mindanao.',
    deepDive: 'With a wingspan exceeding 2 meters (7 feet) and measuring up to 1 meter in height, it is recognized by ornithologists as the longest and largest eagle by wing surface. Declared the National Bird under Proclamation No. 615 by President Fidel V. Ramos in 1995.',
    funFact: 'Philippine eagles are strictly monogamous, pairing with a single mate for life, and a couple raises only one chick every two years.',
    pronunciation: '/pi-the-CO-pha-ga JEFF-er-eye/ (Haribon)',
    citation: 'Proclamation No. 615, s. 1995 & IUCN Red List Critically Endangered',
    audioNarrative: 'Did you know? The Philippine Eagle is the longest eagle in the world with a wingspan of over 7 feet. It lives only in the Philippine rainforests and mates with a single partner for life.',
    tags: ['Philippine Eagle', 'Haribon', 'National Bird', 'Wildlife']
  },

  // --- SCIENCE & NATURE ---
  {
    id: 'science-speed-of-light',
    title: 'Sunlight Takes 8 Minutes and 20 Seconds to Reach Your Eyes',
    category: 'science',
    digest: 'Light travels through a vacuum at exactly 299,792,458 meters per second. Because Earth is roughly 150 million kilometers from the Sun, you always see the Sun as it looked 8.3 minutes ago.',
    deepDive: 'This constant speed (c) forms the foundation of Einstein\'s Special Theory of Relativity. If the Sun were to suddenly disappear this instant, Earth would continue orbiting peacefully in daylight for over 8 minutes before feeling both gravitational and optical consequences.',
    funFact: 'Photons created in the nuclear furnace at the Sun\'s core take up to 100,000 years to slowly bounce through dense solar plasma to the surface before embarking on their 8-minute journey to Earth.',
    citation: 'National Institute of Standards and Technology (CODATA Constant c)',
    audioNarrative: 'Did you know? Sunlight takes 8 minutes and 20 seconds to reach Earth at the cosmic speed limit of 299,792 kilometers per second. You are always seeing the Sun as it was in the past.',
    tags: ['Physics', 'Speed of Light', 'Sun', 'Relativity']
  },
  {
    id: 'science-crispr-gene-editing',
    title: 'CRISPR-Cas9 Originated as a Bacterial Immune System Against Viruses',
    category: 'science',
    digest: 'The revolutionary gene-editing technology that won the 2020 Nobel Prize was discovered in ordinary bacteria defending themselves against bacteriophage viruses.',
    deepDive: 'CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) uses guide RNA to find matching viral DNA sequences and the Cas9 enzyme as molecular scissors to snip the foreign genetic code in two.',
    funFact: 'Scientists can now reprogram Cas9 with custom synthetic RNA guides, allowing targeted editing of single DNA letters in human cells to cure sickle cell anemia and congenital blindness.',
    pronunciation: '/KRIS-per kas-nine/',
    citation: 'Nobel Prize in Chemistry 2020 (Emmanuelle Charpentier & Jennifer Doudna)',
    audioNarrative: 'Did you know? CRISPR gene editing originated as a natural immune defense in bacteria against viruses, using the Cas9 protein as precision molecular scissors to cut target DNA.',
    tags: ['CRISPR', 'Genetics', 'DNA', 'Biotechnology']
  },
  {
    id: 'science-quantum-entanglement',
    title: 'Quantum Entanglement Connects Particles Instantly Across the Universe',
    category: 'science',
    digest: 'When two particles become entangled, measuring the quantum state of one instantly determines the state of the other, no matter how many light-years separate them.',
    deepDive: 'Albert Einstein famously doubted this phenomenon, calling it "spukhafte Fernwirkung" (spooky action at a distance). However, Alain Aspect, John Clauser, and Anton Zeilinger proved entanglement experimentally, winning the 2022 Nobel Prize in Physics.',
    funFact: 'Quantum entanglement is the physical mechanism powering modern quantum computers and unhackable quantum cryptographic networks.',
    citation: 'Nobel Prize in Physics 2022 (Aspect, Clauser, Zeilinger)',
    audioNarrative: 'Did you know? In quantum entanglement, two particles remain linked so that changing one instantly affects the other across any distance, what Einstein called spooky action at a distance.',
    tags: ['Quantum Physics', 'Entanglement', 'Einstein', 'Nobel Prize']
  },

  // --- GALAXY & COSMOS ---
  {
    id: 'galaxy-olympus-mons',
    title: 'The Tallest Mountain in the Solar System is on Mars and Dwarf Everest',
    category: 'galaxy',
    digest: 'Olympus Mons on Mars stands 21.9 kilometers (72,000 feet) high—nearly three times the height of Mount Everest above sea level.',
    deepDive: 'Olympus Mons is a gargantuan shield volcano with a base measuring 600 kilometers across, large enough to cover the entire island of Luzon. It grew to such monstrous proportions because Mars lacks moving tectonic plates, allowing the volcano to erupt over a single stationary mantle plume for billions of years.',
    funFact: 'Its summit slope is so gradual and its base is so enormous that an astronaut standing on its peak would not realize they are on a mountain—the summit curve vanishes beyond the Martian horizon.',
    citation: 'NASA Mars Exploration Program & Mars Global Surveyor MOLA Data',
    audioNarrative: 'Did you know? Olympus Mons on Mars is the largest volcano in the Solar System, towering nearly 22 kilometers high, three times the elevation of Mount Everest.',
    tags: ['Mars', 'Olympus Mons', 'Planets', 'NASA']
  },
  {
    id: 'galaxy-neutron-density',
    title: 'One Teaspoon of a Neutron Star Weighs 6 Billion Tons',
    category: 'galaxy',
    digest: 'When a massive star explodes in a supernova, its iron core collapses into a neutron star so dense that atomic empty space is completely squeezed out.',
    deepDive: 'A neutron star packs the entire mass of 1.4 to 2 solar masses into a sphere only 20 kilometers in diameter—about the size of Metro Manila. Under this extreme gravity, protons and electrons fuse into pure neutrons.',
    funFact: 'A single sugar-cube volume of neutron star material would weigh approximately as much as all human beings and buildings on Earth combined.',
    citation: 'Astrophysical Journal (Neutron Star Equations of State)',
    audioNarrative: 'Did you know? Neutron stars are so incredibly dense that a single teaspoon of their matter would weigh approximately six billion tons on Earth, equivalent to a whole mountain.',
    tags: ['Neutron Stars', 'Supernova', 'Astrophysics', 'Gravity']
  },
  {
    id: 'galaxy-sagittarius-a',
    title: 'A Supermassive Black Hole 4 Million Times the Mass of the Sun Centers Our Galaxy',
    category: 'galaxy',
    digest: 'At the exact gravitational heart of the Milky Way galaxy lies Sagittarius A*, an ultra-compact supermassive black hole around which our entire solar system orbits.',
    deepDive: 'Located 26,000 light-years away, its gravitational pull was verified by tracking the high-speed orbits of individual stars (like star S2) for nearly 30 years. In 2022, the Event Horizon Telescope collaboration captured the first direct image of its glowing accretion ring.',
    funFact: 'Our Solar System takes roughly 230 million Earth years to complete a single galactic lap around Sagittarius A*, a span of time known as a "Cosmic Year".',
    pronunciation: '/sa-ji-TAIR-ee-us ay-star/',
    citation: 'Event Horizon Telescope Collaboration & Nobel Prize in Physics 2020',
    audioNarrative: 'Did you know? At the center of our Milky Way galaxy sits Sagittarius A*, a supermassive black hole with the mass of four million Suns, around which hundreds of billions of stars revolve.',
    tags: ['Black Hole', 'Sagittarius A*', 'Milky Way', 'Cosmic Year']
  },

  // --- MATHEMATICS & LOGIC ---
  {
    id: 'math-golden-ratio',
    title: 'The Golden Ratio (1.618) Governs Spiral Shells and Sunflower Seeds',
    category: 'math',
    digest: 'The Golden Ratio, represented by Phi (1.618033...), describes optimal packing geometry found across botany, classical architecture, and spiral galaxies.',
    deepDive: 'If you divide consecutive numbers in the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21...), the ratio approaches Phi. Sunflowers position their seed florets at the golden angle of 137.5 degrees, allowing the maximum number of seeds to pack without leaving gaps.',
    funFact: 'The Parthenon in Athens and Leonardo da Vinci\'s Vitruvian Man both employ golden proportions to achieve harmonious spatial balance.',
    pronunciation: '/fye/ (Phi = 1.618)',
    citation: 'Euclid\'s Elements (Book VI) & Kepler\'s Mysterium Cosmographicum',
    audioNarrative: 'Did you know? The Golden Ratio, approximately 1.618, dictates the mathematical packing of sunflower seeds and spiral nautilus shells to maximize space efficiency.',
    tags: ['Golden Ratio', 'Fibonacci', 'Geometry', 'Botany']
  },
  {
    id: 'math-origin-zero',
    title: 'The Mathematical Zero was Formally Defined in India in 628 CE',
    category: 'math',
    digest: 'While ancient Babylonians used a placeholder space, the Indian astronomer Brahmagupta was the first to define zero as a real number with mathematical arithmetic rules.',
    deepDive: 'In his treatise the Brahmasphutasiddhanta, Brahmagupta wrote the fundamental rules: a number plus zero equals itself, a number minus zero equals itself, and a number multiplied by zero equals zero. The concept traveled to the Islamic Golden Age through Al-Khwarizmi and into Europe via Fibonacci.',
    funFact: 'Brahmagupta correctly solved that negative numbers minus zero remain negative, establishing the formal concept of negative debt centuries ahead of Western mathematics.',
    citation: 'Brahmasphutasiddhanta (628 CE) by Brahmagupta',
    audioNarrative: 'Did you know? Zero was officially established as a working mathematical number with arithmetic laws in 628 CE by the Indian mathematician Brahmagupta.',
    tags: ['Zero', 'Mathematics', 'Brahmagupta', 'History of Numbers']
  },
  {
    id: 'math-birthday-paradox',
    title: 'In a Room of Just 23 People, Two Likely Share the Same Birthday',
    category: 'math',
    digest: 'In a gathering of only 23 people, there is a greater than 50% probability that at least two individuals share the exact same calendar birthday.',
    deepDive: 'The human brain intuitively compares one person to the remaining 22. But probability calculates all possible pairs: 23 people form 253 pairwise combinations. With 253 chances for an overlap, the complementary probability of everyone having distinct birthdays drops below 50%.',
    funFact: 'In a group of 70 people, the mathematical likelihood of a shared birthday reaches an astonishing 99.9%.',
    citation: 'Harold Davenport & Richard von Mises Probability Distributions',
    audioNarrative: 'Did you know? The Birthday Paradox reveals that in a gathering of just 23 people, there is over a fifty percent mathematical probability that two people share the exact same birthday.',
    tags: ['Probability', 'Birthday Paradox', 'Statistics', 'Combinatorics']
  },

  // --- WORLD & OTHER COUNTRIES ---
  {
    id: 'world-bhutan-carbon',
    title: 'Bhutan is the Only Carbon-Negative Country in the World',
    category: 'world',
    digest: 'The Kingdom of Bhutan absorbs three times more carbon dioxide than it emits, legally mandated by its constitution to maintain at least 60% forest cover for all time.',
    deepDive: 'Bhutan generates clean hydroelectric power from Himalayan glacial runoff and measures national progress using Gross National Happiness (GNH) rather than Gross Domestic Product (GDP). Today, over 70% of Bhutan\'s territory is covered by virgin forests.',
    funFact: 'Bhutan is also one of the few nations on Earth where selling commercial chemical cigarettes was completely banned nationwide in public places.',
    citation: 'Constitution of the Kingdom of Bhutan (Article 5) & UN Climate Action',
    audioNarrative: 'Did you know? The Himalayan Kingdom of Bhutan is the world\'s only carbon-negative nation, absorbing more carbon dioxide than it produces thanks to a constitutional mandate protecting its forests.',
    tags: ['Bhutan', 'Environment', 'Carbon Negative', 'Gross National Happiness']
  },
  {
    id: 'world-iceland-no-army',
    title: 'Iceland Has No Standing Military Army and Zero Native Mosquitoes',
    category: 'world',
    digest: 'Iceland has maintained no standing army since 1869, relying on a small coast guard and NATO collective security, and has zero native mosquito populations.',
    deepDive: 'Iceland ranks consistently as the most peaceful country in the world on the Global Peace Index. Furthermore, because Iceland undergoes rapid sub-arctic freeze-thaw cycles that break insect pupation, mosquitoes cannot establish breeding colonies.',
    funFact: 'Nearly 100% of Iceland\'s electricity and home heating is powered cleanly by geothermal subterranean vents and cascading glacial hydroelectric dams.',
    citation: 'Global Peace Index (Institute for Economics & Peace) & University of Iceland Institute of Biology',
    audioNarrative: 'Did you know? Iceland has no standing military army, zero native mosquitoes, and generates almost one hundred percent of its electrical power from geothermal and hydro renewable energy.',
    tags: ['Iceland', 'Geothermal', 'Peace Index', 'Geography']
  },
  {
    id: 'world-canada-lakes',
    title: 'Canada Contains More Freshwater Lakes Than the Rest of the World Combined',
    category: 'world',
    digest: 'Canada is home to over 879,000 natural lakes larger than 10 hectares, accounting for roughly 62% of all the lakes on Earth.',
    deepDive: 'The retreat of massive Laurentide continental ice sheets at the end of the last Ice Age gouged deep bedrock basins into the Canadian Shield, leaving behind approximately 20% of the world\'s total surface freshwater reserves.',
    funFact: 'Canada\'s shoreline stretches 243,042 kilometers—the longest national coastline of any country on planet Earth.',
    citation: 'Natural Resources Canada & Global Lake and Wetland Database (GLWD)',
    audioNarrative: 'Did you know? Canada has more natural lakes than all other countries on Earth combined, holding twenty percent of the world\'s accessible liquid freshwater.',
    tags: ['Canada', 'Freshwater', 'Lakes', 'Geography']
  },

  // --- CIVICS & EVERYDAY CITIZEN RIGHTS ---
  {
    id: 'civics-miranda-rights',
    title: 'Your Constitutional Rights When Arrested Under Philippine Law (RA 7438)',
    category: 'civics',
    digest: 'Any person arrested or questioned in custodial investigation in the Philippines must be read their rights in a language they understand, with non-waivable access to independent legal counsel.',
    deepDive: 'Under Republic Act No. 7438 and Article III, Section 12 of the Constitution, a suspect has the absolute right to remain silent and to have competent and independent counsel preferably of their own choice. Any extrajudicial confession obtained without the physical presence of a lawyer is inadmissible as evidence in court.',
    funFact: 'If the police fail to inform the detainee of their rights or deny them access to their attorney, the arresting officers themselves face criminal penalties and administrative dismissal.',
    citation: 'Republic Act No. 7438 & Article III, Section 12, 1987 Philippine Constitution',
    audioNarrative: 'Did you know? Under Philippine Republic Act 7438, anyone arrested has the absolute constitutional right to remain silent and to have independent legal counsel. Any statement made without a lawyer is legally void.',
    tags: ['Miranda Rights', 'RA 7438', 'Bill of Rights', 'Due Process']
  },
  {
    id: 'civics-senior-benefits',
    title: 'Senior Citizens and PWDs Enjoy 20% Discount PLUS 12% VAT Exemption',
    category: 'civics',
    digest: 'Under RA 9994 (Expanded Senior Citizens Act) and RA 10754 (PWD Magna Carta), eligible citizens receive a combined 32% total reduction on medicines, doctor fees, dining, and public transport.',
    deepDive: 'The law mandates that the 12% Value-Added Tax (VAT) is first deducted from the gross price, and then a 20% discount is applied to the net amount. This applies to branded and generic prescription drugs, diagnostic medical laboratories, domestic airline tickets, and cinema admissions.',
    funFact: 'Refusing to honor a valid Senior Citizen or PWD card is a criminal violation punishable under Philippine law with fines and possible business permit revocation.',
    citation: 'Republic Act No. 9994 (Senior Citizens) & Republic Act No. 10754 (PWD)',
    audioNarrative: 'Did you know? Under Philippine law, senior citizens and persons with disabilities receive a 20 percent discount and are exempt from the 12 percent Value Added Tax on medicine, doctor fees, and dining.',
    tags: ['Senior Citizens', 'PWD', 'RA 9994', 'Consumer Rights']
  },
  {
    id: 'civics-data-privacy',
    title: 'The Data Privacy Act of 2012 Protects Your Personal Digital Information',
    category: 'civics',
    digest: 'Under Republic Act No. 10173, every individual is a "Data Subject" with legally enforceable rights to access, correct, block, or delete their personal data collected by companies or agencies.',
    deepDive: 'The law established the National Privacy Commission (NPC). Any unauthorized disclosure, data breach, or improper sale of personal sensitive information (such as health records, government IDs, and biometric data) carries severe criminal penalties of up to 6 years imprisonment.',
    funFact: 'Under the "Right to Erasure", a Filipino citizen can legally demand that an app, bank, or online service permanently delete their collected private personal information if no longer required.',
    citation: 'Republic Act No. 10173 (Data Privacy Act of 2012)',
    audioNarrative: 'Did you know? The Philippine Data Privacy Act of 2012 grants every citizen the right to know what personal data companies collect, and the legal right to demand its correction or deletion.',
    tags: ['Data Privacy Act', 'RA 10173', 'NPC', 'Digital Rights']
  },

  // --- BANKS, MONEY & FINANCE ---
  {
    id: 'fin-pdic-insurance',
    title: 'Your Bank Deposits in the Philippines are Insured up to ₱500,000 by PDIC',
    category: 'banks_finance',
    digest: 'The Philippine Deposit Insurance Corporation (PDIC) legally guarantees and insures bank deposits up to ₱500,000 per depositor per bank in the event of bank closure.',
    deepDive: 'Under Republic Act No. 3591 (as amended by RA 9576 and RA 11840), all legitimate commercial, thrift, and rural bank deposits (savings, checking, and time deposits) are covered. If you have multiple accounts in the same bank under the same name, they are consolidated up to the ₱500,000 maximum guarantee ceiling.',
    funFact: 'Deposit insurance is automatic—depositors do not need to pay extra premiums or sign separate insurance policies. The commercial banks pay the insurance assessments directly to PDIC.',
    citation: 'Republic Act No. 3591 as amended by RA 9576 & RA 11840',
    audioNarrative: 'Did you know? Your bank deposits in the Philippines are insured up to five hundred thousand pesos per depositor per bank by the Philippine Deposit Insurance Corporation, PDIC, protecting your hard-earned savings if a bank closes.',
    tags: ['PDIC', 'Banking', 'Deposit Insurance', 'RA 3591', 'Finance']
  },
  {
    id: 'fin-bank-secrecy',
    title: 'The Philippines Operates One of the World\'s Strictest Bank Secrecy Laws (RA 1405)',
    category: 'banks_finance',
    digest: 'Under Republic Act No. 1405 enacted in 1955, all bank deposits of whatever nature are absolutely confidential and cannot be examined without court order or written depositor consent.',
    deepDive: 'The law was passed to encourage people to deposit their money in banking institutions rather than hoarding it. Only rare exceptions apply: upon written permission of the depositor, in cases of impeachment, bribery/dereliction of duty of public officials, or upon court order in cases where the deposit is the subject of litigation.',
    funFact: 'Bank officials who improperly disclose or reveal bank account details face imprisonment of up to five years and a hefty statutory fine.',
    citation: 'Republic Act No. 1405 (Law on Secrecy of Bank Deposits)',
    audioNarrative: 'Did you know? The Philippines has one of the strictest bank secrecy laws in the world under Republic Act 1405. Bank deposits are absolutely confidential and cannot be inspected without a court order or written consent from the depositor.',
    tags: ['Bank Secrecy', 'RA 1405', 'Banking Law', 'Privacy']
  },
  {
    id: 'fin-rule-72',
    title: 'The Rule of 72: Mental Math to Calculate How Fast Your Money Doubles',
    category: 'banks_finance',
    digest: 'To quickly find how many years it will take an investment to double with compound interest, simply divide 72 by the annual interest rate percentage.',
    deepDive: 'Discovered in medieval Italian accounting manuscripts (including Luca Pacioli\'s Summa de Arithmetica in 1494), the formula t ≈ 72 / r gives an astonishingly close approximation to the logarithmic compound interest equation t = ln(2) / ln(1 + r/100). For example, at an 8% annual return, your money doubles in approximately 9 years (72 / 8 = 9).',
    funFact: 'Albert Einstein reportedly called compound interest the "eighth wonder of the world" because exponential compounding produces massive returns over decades.',
    citation: 'Luca Pacioli (1494), Summa de Arithmetica, Geometria, Proportioni et Proportionalita',
    audioNarrative: 'Did you know? You can calculate how fast your money will double using the Rule of 72. Simply divide 72 by your annual interest rate. For example, at six percent interest, your investment doubles in twelve years.',
    tags: ['Rule of 72', 'Compound Interest', 'Investing', 'Financial Literacy']
  },
  {
    id: 'fin-fractional-reserve',
    title: 'How Fractional Reserve Banking Multiplies the Money Supply',
    category: 'banks_finance',
    digest: 'Commercial banks do not simply store your cash in a vault; they hold only a mandatory reserve fraction (set by the central bank) and lend out the rest, expanding the money supply.',
    deepDive: 'Under the Bangko Sentral ng Pilipinas (BSP) reserve requirement ratio, when a customer deposits ₱100,000, the bank might hold ₱9,500 in statutory reserve and lend out ₱90,500 to a borrower. That borrower pays a supplier who deposits it into another bank, which in turn lends out 90.5%. Through this "money multiplier" effect, initial deposits generate new credit and liquidity.',
    funFact: 'Most of the money circulating in modern economies does not exist as physical coins or paper bills, but as digital ledger credit entries generated by commercial bank lending.',
    citation: 'Bangko Sentral ng Pilipinas (BSP) Monetary Board Regulations & Macroeconomics Principles',
    audioNarrative: 'Did you know? Modern commercial banks operate under fractional reserve banking. When you deposit money, the bank keeps a mandatory fraction as reserves and lends out the remainder, multiplying the total money supply in the economy.',
    tags: ['Fractional Reserve', 'BSP', 'Monetary Policy', 'Money Creation']
  },

  // --- PHILIPPINE HISTORY & HERITAGE (EXPANDED) ---
  {
    id: 'hist-manila-galleon',
    title: 'The Manila Galleon Trade Created the World\'s First True Global Trade Route',
    category: 'filipino',
    digest: 'For 250 years (1565 to 1815), the Manila-Acapulco Galleon Trade linked Asia, the Americas, and Europe in the very first trans-Pacific economic highway.',
    deepDive: 'Spanish galleons sailed between Manila and Acapulco in Mexico, transporting Chinese silks, porcelain, Philippine spices, and Asian luxury goods to the New World in exchange for massive shipments of Mexican and Peruvian silver. This trade turned Manila into the premier commercial emporium of the Far East.',
    funFact: 'Mexican silver pesos brought to Manila were stamped with Chinese chop-marks and became the primary international currency across East Asia for centuries.',
    citation: 'William Lytle Schurz, "The Manila Galleon" (1939) & National Museum of the Philippines',
    audioNarrative: 'Did you know? The Manila-Acapulco Galleon Trade connected Asia, the Americas, and Europe from 1565 to 1815, making Manila the center of the world\'s very first truly globalized trade network.',
    tags: ['Manila Galleon', 'Acapulco', 'Spanish Era', 'Global Trade']
  },
  {
    id: 'hist-inverted-flag',
    title: 'The Philippine Flag is Flown Inverted with Red on Top During Times of War',
    category: 'filipino',
    digest: 'Under Republic Act No. 8491, the Philippine flag has the unique legal distinction of signaling an official state of war when flown with the red stripe on top.',
    deepDive: 'In peacetime, the blue stripe must always be on top (or to the observer\'s left when displayed vertically). If the Republic is in a declared state of war by Congress, the red stripe—symbolizing courage, patriotism, and readiness to shed blood—is positioned uppermost. This was historically hoisted during the Philippine-American War and World War II.',
    funFact: 'The Philippines is the only sovereign country in the world that officially indicates peace or war simply by flipping the vertical orientation of its national flag colors.',
    citation: 'Republic Act No. 8491 (Flag and Heraldic Code of the Philippines)',
    audioNarrative: 'Did you know? The Philippines is the only nation on Earth whose national flag signals wartime when flipped. In peacetime, blue is on top; during an official state of war, the red stripe is hoisted uppermost.',
    tags: ['Flag Code', 'RA 8491', 'Wartime Flag', 'Patriotism']
  },
  {
    id: 'hist-rizal-polyglot',
    title: 'Dr. Jose Rizal Was a Polymath Who Could Read and Write in 22 Languages',
    category: 'filipino',
    digest: 'The Philippine national hero was not only an ophthalmologist, novelist, and sculptor, but a master linguist fluent or conversant in 22 different world languages.',
    deepDive: 'Rizal spoke Tagalog, Spanish, English, French, German, Italian, Portuguese, Latin, Greek, Hebrew, Arabic, Japanese, Chinese, Russian, Swedish, Dutch, Catalan, and regional Philippine tongues including Ilokano, Bisaya, and Subanon. His polyglot brilliance allowed him to write scientific treatises, translate Schiller\'s William Tell into Tagalog, and communicate with European scholars directly.',
    funFact: 'While exiled in Dapitan, Zamboanga del Norte, Rizal discovered three new animal species that were scientifically named after him: Draco rizali (a flying lizard), Rachophorus rizali (a frog), and Apogonia rizali (a beetle).',
    citation: 'Austin Craig, "Lineage, Life and Labors of Jose Rizal" & National Historical Commission of the Philippines',
    audioNarrative: 'Did you know? Dr. Jose Rizal was a polyglot conversant in twenty-two languages. In addition to medicine and literature, he discovered three animal species in Dapitan that are scientifically named after him.',
    tags: ['Jose Rizal', 'Polymath', 'Linguistics', 'Dapitan']
  },

  // --- MYTHS DEBUNKED (SOME WRONG FACTS THAT PEOPLE LIVED BY) ---
  {
    id: 'myth-brain-10-percent',
    title: 'Debunked: Humans Do NOT Use Only 10% of Their Brains',
    category: 'myths_debunked',
    digest: 'Brain imaging technology (fMRI and PET scans) proves conclusively that humans use virtually 100% of their brains across daily cognitive, sensory, and motor tasks.',
    deepDive: 'The popular myth that 90% of brain tissue lies dormant originated in misquoted 19th-century self-help literature. In reality, the brain represents only 2% of body mass but consumes over 20% of the body\'s oxygen and glucose. Evolution would never preserve an organ that was 90% useless energy waste.',
    funFact: 'Even during deep sleep, neuroimaging shows that every lobe of the human brain remains metabolically active, processing memories and regulating autonomic bodily functions.',
    citation: 'Barry L. Beyerstein, "Whence Comes the Myth That We Only Use 10% of Our Brains?" & Society for Neuroscience',
    audioNarrative: 'Did you know? The belief that humans use only ten percent of their brain is completely false. Functional brain scans show that virtually the entire brain is active throughout the day and even during sleep.',
    tags: ['Brain Myth', 'Neuroscience', 'fMRI', 'Cognition']
  },
  {
    id: 'myth-blood-is-blue',
    title: 'Debunked: Deoxygenated Blood in Your Veins is NEVER Blue',
    category: 'myths_debunked',
    digest: 'Human blood is always red. Deoxygenated blood returning through your veins is a deep burgundy or dark crimson, never blue.',
    deepDive: 'Veins appear blue through the skin due to an optical illusion caused by how different wavelengths of light penetrate human tissue. Red light has a long wavelength and penetrates deep into subcutaneous fat, being absorbed by venous hemoglobin. Blue light has a short wavelength, scatters near the skin surface, and reflects back into our eyes.',
    funFact: 'Some animals genuinely have blue blood: octopuses, horseshoe crabs, and spiders use copper-based hemocyanin instead of iron-based hemoglobin to transport oxygen.',
    citation: 'Alwin Kienle et al., "Why do veins appear blue? A new look at an old question", Applied Optics (1996)',
    audioNarrative: 'Did you know? Human blood is never blue. Even deoxygenated blood in your veins is dark red. Veins only appear blue because human skin scatters short blue light wavelengths back to your eyes.',
    tags: ['Blue Blood Myth', 'Optics', 'Hemoglobin', 'Hematology']
  },
  {
    id: 'myth-shaving-hair',
    title: 'Debunked: Shaving Does NOT Make Hair Grow Back Thicker or Darker',
    category: 'myths_debunked',
    digest: 'Shaving has zero biological impact on hair density, growth rate, or pigmentation. It only cuts the dead keratin shaft at the skin surface.',
    deepDive: 'Natural uncut hair has a tapered, softer tip. When a razor blade cuts the hair at the surface, it leaves a blunt, flat cross-section that feels stubbly and coarse as it emerges. Furthermore, new stubble has not yet been lightened by sun exposure, making it appear temporarily darker to the naked eye.',
    funFact: 'Dermatologists first proved this in a landmark clinical trial back in 1928, where participants shaved identical patches of hair for months with zero change in follicle count or hair caliber.',
    citation: 'Mildred Trotter, "Hair Growth and Shaving: An Anatomical and Experimental Study", Archives of Dermatology (1928)',
    audioNarrative: 'Did you know? Shaving does not cause hair to grow back thicker, coarser, or darker. A razor only cuts the tip flat, making new growth feel temporarily blunt and stiff.',
    tags: ['Hair Myth', 'Dermatology', 'Follicles', 'Debunked']
  },
  {
    id: 'myth-cracking-knuckles',
    title: 'Debunked: Cracking Your Knuckles Does NOT Cause Arthritis',
    category: 'myths_debunked',
    digest: 'The popping sound of cracked knuckles is caused by harmless gas bubbles collapsing in synovial fluid, not bones grinding together.',
    deepDive: 'When you stretch or bend a joint capsule, you lower the pressure inside the synovial fluid, causing dissolved nitrogen gas to form microscopic bubbles that rapidly collapse (cavitation). Dr. Donald Unger famously cracked the knuckles of his left hand every day for over 60 years while leaving his right hand uncracked. After six decades, X-rays showed zero arthritis in either hand.',
    funFact: 'Dr. Donald Unger received the prestigious 2009 Ig Nobel Prize in Medicine for his 60-year dedicated self-experiment that finally settled the knuckle-cracking debate.',
    citation: 'Donald L. Unger, MD, "Does knuckle cracking lead to arthritis of the fingers?", Arthritis & Rheumatism (1998)',
    audioNarrative: 'Did you know? Cracking your knuckles does not cause arthritis. The popping sound is simply harmless gas bubbles collapsing in joint fluid, proven by a doctor who cracked one hand for sixty years with no adverse effects.',
    tags: ['Knuckle Cracking', 'Arthritis Myth', 'Synovial Fluid', 'Cavitation']
  },
  {
    id: 'myth-sugar-hyperactivity',
    title: 'Debunked: Sugar Does NOT Cause Chemical Hyperactivity in Children',
    category: 'myths_debunked',
    digest: 'Multiple double-blind, placebo-controlled clinical trials have proven that refined sugar (sucrose) does not induce hyperactivity or ADHD symptoms in children.',
    deepDive: 'A comprehensive meta-analysis published in JAMA reviewed 23 controlled studies and concluded that sugar does not affect child behavior or cognitive performance. The hyperactivity observed at birthday parties is caused by excitement, games, social stimulation, and parental confirmation bias—when parents are told their child drank sugar (even if it was a sugar-free placebo), they rate their child as more hyperactive.',
    funFact: 'While excessive sugar intake is harmful for dental health and metabolism, its supposed link to behavioral tantrums was largely popularized by the discredited Feingold Diet in the 1970s.',
    citation: 'Mark L. Wolraich et al., "The Effect of Sugar on Behavior or Cognition in Children: A Meta-analysis", JAMA (1995)',
    audioNarrative: 'Did you know? Double-blind scientific studies have proved that sugar does not cause hyperactivity in children. The excitement seen at parties is driven by social stimulation and parental expectation bias.',
    tags: ['Sugar Rush Myth', 'Pediatrics', 'JAMA', 'Behavior']
  },
  {
    id: 'myth-cold-water-cancer',
    title: 'Debunked: Drinking Cold Water After Meals Does NOT Harden Fat or Cause Cancer',
    category: 'myths_debunked',
    digest: 'The popular viral chain message claiming cold water solidifies dietary fats into cancer-causing sludge is physiological nonsense.',
    deepDive: 'The human stomach is an internal heat engine maintained at a constant 37°C (98.6°F). Any iced or chilled beverage ingested is warmed to core body temperature within minutes through gastric blood flow before reaching the small intestine. Furthermore, bile salts and pancreatic lipases chemically emulsify dietary lipids regardless of liquid temperature.',
    funFact: 'Drinking cold water actually burns a minuscule number of extra calories (about 8 calories per glass) because the body must expend metabolic energy to warm the liquid to 37°C.',
    citation: 'American Cancer Society & World Health Organization (WHO) Dietary Guidelines',
    audioNarrative: 'Did you know? The internet rumor that drinking cold water after eating causes cancer or solidifies fat is completely false. Your stomach warms all liquids to body temperature within minutes.',
    tags: ['Cold Water Myth', 'Digestion', 'Physiology', 'Health Myths']
  },
  {
    id: 'myth-bats-blind',
    title: 'Debunked: Bats are NOT Blind and Many Species Have Excellent Vision',
    category: 'myths_debunked',
    digest: 'The idiom "blind as a bat" is false. All of the world\'s 1,400+ bat species have fully functioning eyes, and some have vision superior to humans in low light.',
    deepDive: 'While smaller microbats navigate dark caves and capture flying insects using high-frequency ultrasonic echolocation, their eyes are sensitive to low-light and polarized light. Furthermore, large fruit bats (megabats like the Philippine Giant Golden-crowned Flying Fox) do not use echolocation at all; they rely entirely on keen daylight vision and a powerful sense of smell to forage.',
    funFact: 'The Giant Golden-crowned Flying Fox, endemic to the Philippines, is one of the world\'s largest bats with a wingspan reaching up to 1.7 meters (5.5 feet) and relies exclusively on eyesight and smell.',
    citation: 'Bat Conservation International & Smithsonian Tropical Research Institute',
    audioNarrative: 'Did you know? Bats are not blind. All bat species have working eyes, and large fruit bats like the Philippine Flying Fox navigate entirely using acute vision and smell without echolocation.',
    tags: ['Bats', 'Vision', 'Echolocation', 'Philippine Wildlife']
  },

  // --- BIOLOGY & WHAT DO YOU CALL THE STUDY OF ANIMALS ---
  {
    id: 'bio-animal-studies',
    title: 'What Do You Call the Study of Animals? Branches of Biological Science',
    category: 'biology_animals',
    digest: 'While Zoology is the overarching study of all animals, specialized scientific disciplines investigate distinct animal kingdoms with exact Greek and Latin naming.',
    deepDive: 'Key biological branches include:\n• Zoology: The scientific study of all animal life.\n• Entomology: The study of insects (over 1 million known species).\n• Herpetology: The study of reptiles and amphibians.\n• Ichthyology: The study of fishes.\n• Ornithology: The study of birds.\n• Mammalogy: The study of mammals.\n• Mycology: The study of fungi (mushrooms and yeasts, distinct from plants).\n• Malacology: The study of mollusks (snails, clams, octopuses).\n• Helminthology: The study of parasitic worms.',
    funFact: 'The word "Entomology" comes from the Greek "entomon", meaning "notched or segmented", describing the segmented body segments of all insects.',
    citation: 'International Commission on Zoological Nomenclature (ICZN) & Linnaean Society',
    audioNarrative: 'Did you know? The study of animals is Zoology, but its specialized fields have unique names: Entomology is the study of insects, Herpetology is reptiles and amphibians, Ichthyology is fish, and Ornithology is the study of birds.',
    tags: ['Zoology', 'Entomology', 'Ornithology', 'Ichthyology', 'Animal Studies']
  },
  {
    id: 'bio-octopus-anatomy',
    title: 'Octopuses Have 3 Hearts, 9 Brains, and Blue Copper-Based Blood',
    category: 'biology_animals',
    digest: 'Octopuses possess three distinct pumping hearts, a central brain plus independent neural clusters in each of their eight arms, and blue hemocyanin blood.',
    deepDive: 'Two systemic branchial hearts pump blood exclusively through the gills to absorb oxygen, while a central systemic heart pumps blood to the rest of the body. When an octopus swims, the systemic heart stops beating, which is why they prefer crawling along the seabed to avoid exhaustion. Two-thirds of an octopus\'s 500 million neurons are located directly in its arms, allowing each arm to taste, touch, and move autonomously.',
    funFact: 'Because octopuses use copper-rich hemocyanin rather than iron-rich hemoglobin to transport oxygen in cold, low-oxygen deep-sea environments, their blood is visibly bright blue.',
    citation: 'Peter Godfrey-Smith, "Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness" (2016)',
    audioNarrative: 'Did you know? Octopuses have three hearts, nine brains, and blue blood. Two hearts pump blood to the gills, one to the body, and each of their eight arms contains an independent mini-brain.',
    tags: ['Octopus', 'Marine Biology', 'Hemocyanin', 'Neuroscience']
  },
  {
    id: 'bio-tardigrade-extremes',
    title: 'Tardigrades (Water Bears) Can Survive Outer Space, Absolute Zero, and Radiation',
    category: 'biology_animals',
    digest: 'Microscopic eight-legged tardigrades can endure temperatures from -272°C (-458°F) to 150°C (302°F), cosmic vacuum, and 1,000 times lethal human radiation.',
    deepDive: 'When faced with environmental catastrophe, tardigrades enter a state called cryptobiosis. They expel over 99% of the water from their cells, curl into a dormant sphere called a "tun", and produce unique intrinsically disordered proteins that glassify their cytoplasm. In 2007, the European Space Agency\'s FOTON-M3 mission exposed living tardigrades directly to the open vacuum and solar radiation of low Earth orbit—and they survived and reproduced.',
    funFact: 'Tardigrades have lived through all five of Earth\'s major mass extinction events, having inhabited the planet for over 500 million years.',
    citation: 'European Space Agency (ESA) TARDIS Experiment & Nature Communications',
    audioNarrative: 'Did you know? Microscopic tardigrades can survive the vacuum of space, near absolute zero temperatures, and intense radiation by entering cryptobiosis and glassifying their cellular water.',
    tags: ['Tardigrades', 'Cryptobiosis', 'Astrobiology', 'Extremophiles']
  },
  {
    id: 'bio-mitochondrial-dna',
    title: 'Mitochondria Possess Their Own Independent DNA Inherited Only from Mothers',
    category: 'biology_animals',
    digest: 'The powerhouses of your cells contain their own separate circular genome (mtDNA) that passes down exclusively along the unbroken maternal lineage.',
    deepDive: 'Under the Endosymbiotic Theory formulated by Dr. Lynn Margulis, mitochondria were once independent free-living alpha-proteobacteria that were engulfed by an ancestral eukaryotic cell roughly 1.5 billion years ago. During human fertilization, the sperm\'s mitochondria are tagged with ubiquitin and destroyed, leaving only the egg\'s mitochondria intact in the embryo.',
    funFact: 'Geneticists use mitochondrial DNA to trace the evolutionary maternal family tree of all living humans back to "Mitochondrial Eve", a woman who lived in Africa roughly 150,000 years ago.',
    citation: 'Lynn Margulis, "On the Origin of Mitosing Cells" (1967) & Nature Genetics',
    audioNarrative: 'Did you know? Mitochondria inside your cells have their own circular DNA separate from your nucleus, and it is inherited exclusively from your mother in an unbroken maternal line.',
    tags: ['Mitochondria', 'Endosymbiosis', 'Genetics', 'Cell Biology']
  },

  // --- CHEMISTRY & NUTRIENTS ---
  {
    id: 'chem-water-expands-ice',
    title: 'Why Ice Floats: Water Uniquely Expands When It Freezes',
    category: 'chemistry_nutrition',
    digest: 'Unlike almost all other liquids which contract and become denser when solidifying, liquid water reaches its maximum density at 4°C and expands by 9% when freezing.',
    deepDive: 'As liquid water cools below 4°C, hydrogen bonds between H2O molecules lock into an open hexagonal crystalline lattice with spacious empty gaps. This makes solid ice less dense (0.917 g/cm³) than liquid water (1.000 g/cm³). Because ice floats, lakes and oceans freeze from the top down, forming an insulating surface crust that allows aquatic life to survive below.',
    funFact: 'If water behaved like normal substances and sank when frozen, Earth\'s polar oceans would have frozen solid from the bottom up billions of years ago, rendering advanced marine life impossible.',
    citation: 'CRC Handbook of Chemistry and Physics & Linus Pauling, "The Nature of the Chemical Bond"',
    audioNarrative: 'Did you know? Liquid water is one of the only substances that expands when freezing. Because ice is nine percent less dense than liquid water, it floats and insulates marine life below.',
    tags: ['Water Anomaly', 'Hydrogen Bonds', 'Ice Density', 'Chemistry']
  },
  {
    id: 'chem-gallium-melts',
    title: 'Gallium: The Solid Metal That Melts in the Palm of Your Hand',
    category: 'chemistry_nutrition',
    digest: 'Gallium (element 31) is a lustrous silvery metal with a melting point of just 29.76°C (85.6°F)—well below normal human body temperature of 37°C.',
    deepDive: 'Discovered by French chemist Paul-Émile Lecoq de Boisbaudran in 1875, gallium has an unusually weak metallic bonding crystal structure despite being a metal. If you hold a solid bar of gallium in your bare hand, body heat melts it into a shimmering liquid mirror within seconds. Today, gallium is essential in semiconductor electronics, including gallium nitride (GaN) fast phone chargers and blue LED lights.',
    funFact: 'Gallium attacks and dissolves aluminum on contact through liquid metal embrittlement, turning tough aircraft-grade aluminum into brittle, chalky dust.',
    citation: 'Periodic Table of the Elements & Paul-Émile Lecoq de Boisbaudran (1875)',
    audioNarrative: 'Did you know? Gallium is a solid metal with a melting point of just twenty-nine point eight degrees Celsius. If you hold a piece in your hand, your body heat will melt it into liquid metal.',
    tags: ['Gallium', 'Periodic Table', 'Metals', 'GaN']
  },
  {
    id: 'nutr-vitamin-c-mutation',
    title: 'Humans Cannot Make Vitamin C Because of a 61-Million-Year-Old Gene Mutation',
    category: 'chemistry_nutrition',
    digest: 'Unlike dogs, cats, and cows that synthesize Vitamin C in their livers, humans have a broken GULO pseudogene and must obtain ascorbic acid entirely from food.',
    deepDive: 'Over 61 million years ago, an ancestor of modern primates suffered a disabling missense mutation in the GULO gene (L-gulonolactone oxidase), which is the final enzyme required to convert glucose into ascorbic acid. Because our ancient tree-dwelling ancestors ate fruit rich in Vitamin C, the mutation was not fatal. However, when modern humans lack dietary fresh fruit and vegetables, they develop scurvy.',
    funFact: 'Guinea pigs, fruit bats, and teleost fishes also suffered separate genetic mutations that broke their Vitamin C synthesis, making them among the few other animals that can get scurvy.',
    citation: 'Guy Drouin et al., "The Genetics of Vitamin C Loss in Vertebrates", Current Genomics (2011)',
    audioNarrative: 'Did you know? Humans are among the few animals that cannot produce Vitamin C. A broken gene inherited sixty-one million years ago forces us to get all our ascorbic acid from fruits and food.',
    tags: ['Vitamin C', 'GULO Gene', 'Scurvy', 'Evolutionary Genetics']
  },
  {
    id: 'nutr-vitamin-d-prohormone',
    title: 'Vitamin D is Not a True Vitamin—It is a Steroid Prohormone Made by Sunlight',
    category: 'chemistry_nutrition',
    digest: 'Unlike dietary vitamins, Vitamin D is produced endogenously when ultraviolet B (UVB) sunlight strikes your skin, triggering chemical photolysis.',
    deepDive: 'When UVB rays (290–315 nm wavelength) penetrate the epidermis, they convert 7-dehydrocholesterol into previtamin D3, which isomerizes into cholecalciferol (Vitamin D3). It then travels to the liver and kidneys to become calcitriol, a powerful steroid hormone that binds to nuclear receptors in nearly every tissue to regulate calcium absorption, bone density, and immune T-cell function.',
    funFact: 'Glass windows block virtually 100% of solar UVB radiation, which means sitting by a sunny closed office window will not stimulate any Vitamin D synthesis.',
    citation: 'Michael F. Holick, MD, "Vitamin D Deficiency", New England Journal of Medicine (2007)',
    audioNarrative: 'Did you know? Vitamin D is not a true dietary vitamin, but a steroid hormone synthesized when sunlight hits your skin. Glass windows block the UVB rays needed to produce it.',
    tags: ['Vitamin D', 'Sunlight', 'Hormone', 'Endocrinology']
  },
  {
    id: 'nutr-essential-amino-acids',
    title: 'The 9 Essential Amino Acids Your Body Cannot Produce on Its Own',
    category: 'chemistry_nutrition',
    digest: 'Of the 20 amino acids required to synthesize human proteins, exactly 9 are "essential"—meaning your cells cannot create them from scratch and must ingest them.',
    deepDive: 'The 9 essential amino acids are Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, and Valine. Animal proteins (eggs, dairy, meat, fish) and complete plant proteins (soy, quinoa) supply all nine in optimal ratios. If your diet lacks even a single essential amino acid, protein synthesis halts.',
    funFact: 'Tryptophan is the biochemical precursor that your brain converts into serotonin (the mood-regulating neurotransmitter) and melatonin (the sleep-regulating hormone).',
    citation: 'World Health Organization (WHO) Technical Report Series on Protein and Amino Acid Requirements',
    audioNarrative: 'Did you know? Out of twenty amino acids your body needs to build muscle and enzymes, nine are essential and cannot be manufactured by your body, requiring you to consume them in food.',
    tags: ['Amino Acids', 'Protein', 'Nutrition', 'Biochemistry']
  },

  // --- TECH, CYBERSECURITY & AI ---
  {
    id: 'tech-cookies-explained',
    title: 'What Web Cookies Actually Do: The Invisible Memory of the Internet',
    category: 'tech_ai',
    digest: 'HTTP cookies are small text files created by web browsers in 1994 so websites can remember user logins, shopping carts, and site preferences across web page clicks.',
    deepDive: 'The World Wide Web was built on the Hypertext Transfer Protocol (HTTP), which is inherently "stateless"—meaning the web server forgets who you are the second a page loads. In 1994, Lou Montulli at Netscape invented "magic cookies". When you log in, the server sends a cookie with a unique session token that your browser saves and sends back on subsequent requests.',
    funFact: 'First-party cookies keep you logged into your account safely. Third-party cookies, by contrast, are placed by external advertising networks to track your browsing habits across different websites.',
    citation: 'IETF RFC 6265 (HTTP State Management Mechanism) & Lou Montulli (Netscape 1994)',
    audioNarrative: 'Did you know? HTTP cookies were invented in 1994 because web servers are stateless and naturally forget who you are between clicks. Cookies store your session token so you stay logged in.',
    tags: ['HTTP Cookies', 'Web Architecture', 'Browsers', 'Internet History']
  },
  {
    id: 'tech-ram-vs-storage',
    title: 'RAM vs Storage: Why Computer Memory is Blazingly Fast but Forgetful',
    category: 'tech_ai',
    digest: 'RAM (Random Access Memory) is ultra-fast volatile memory that loses all data when powered down, while SSD flash storage is non-volatile and keeps your files permanently.',
    deepDive: 'RAM uses microscopic transistors and capacitors to store data as electrical charges that access data in 10 to 20 nanoseconds. However, capacitors constantly leak charge and require refreshing thousands of times per second. Solid State Drives (SSDs) use NAND flash memory with floating-gate or charge-trap transistors that physically trap electrons, retaining data for years without electrical current.',
    funFact: 'Reading data from modern DDR5 RAM is roughly 100 times faster than reading from the fastest NVMe SSD, and 100,000 times faster than an old mechanical spinning hard drive.',
    citation: 'Computer Organization and Design (Patterson & Hennessy) & JEDEC Solid State Technology',
    audioNarrative: 'Did you know? RAM is volatile memory that reads data in nanoseconds but forgets everything when powered off. SSD storage uses trapped electrons to preserve your data for years without power.',
    tags: ['RAM', 'SSD', 'Computer Hardware', 'Memory Hierarchy']
  },
  {
    id: 'tech-password-salting',
    title: 'How Websites Secure Passwords: Cryptographic Hashing and Salting',
    category: 'tech_ai',
    digest: 'Secure websites never store your plaintext password. They append a random string called a "salt" and pass it through a one-way mathematical cryptographic hash function.',
    deepDive: 'A cryptographic hash function (like bcrypt or Argon2) takes your password and produces an irreversible 64-character fingerprint. Adding a unique random "salt" to every password prevents hackers from using precomputed "rainbow tables" to reverse leaked database dumps. Even if two users choose the identical password "password123", their salted hashes will look completely different.',
    funFact: 'Because cryptographic hashing is strictly one-way, when you click "Forgot Password", websites cannot tell you what your old password was; they can only reset it.',
    citation: 'NIST Special Publication 800-63B (Digital Identity Guidelines) & OWASP Password Storage Guide',
    audioNarrative: 'Did you know? Websites do not store your actual password. They combine your password with a random string called a salt and convert it into a one-way cryptographic hash that cannot be reversed.',
    tags: ['Cybersecurity', 'Password Salting', 'Hashing', 'Cryptography']
  },
  {
    id: 'tech-how-dns-works',
    title: 'The Domain Name System (DNS): The Global Phonebook of the Web',
    category: 'tech_ai',
    digest: 'DNS translates human-friendly website addresses (like google.com) into numerical IP addresses (like 142.250.190.46) in a fraction of a second.',
    deepDive: 'Computers route internet traffic using numerical Internet Protocol (IP) addresses. When you enter a web address, your computer queries a recursive resolver, which queries a Root Nameserver, a Top-Level Domain (.com) nameserver, and finally the authoritative nameserver for the site. This hierarchical worldwide lookup happens in roughly 20 to 50 milliseconds.',
    funFact: 'There are only 13 original logical root nameserver addresses in the entire global internet infrastructure, replicated across thousands of anycast physical server locations worldwide.',
    citation: 'IETF RFC 1034 & RFC 1035 (Domain Names - Concepts and Facilities)',
    audioNarrative: 'Did you know? The Domain Name System, or DNS, functions as the internet\'s phonebook, translating human names like google.com into numerical IP addresses in milliseconds.',
    tags: ['DNS', 'Networking', 'IP Address', 'Internet Infrastructure']
  },
  {
    id: 'tech-transformer-ai',
    title: 'How AI Large Language Models Work: The Transformer Architecture',
    category: 'tech_ai',
    digest: 'Modern AI models (like Gemini and GPT) are built on the Transformer architecture, which uses "self-attention" to understand how words relate across entire sentences.',
    deepDive: 'Published in 2017 in the landmark Google paper "Attention Is All You Need", transformers abandoned slow sequential word-by-word processing. Instead, self-attention assigns mathematical weights to every word simultaneously. For example, in "The bank approved the loan because it had money", the model instantly calculates that "it" refers to the bank rather than the loan.',
    funFact: 'Before transformers, language translation systems processed words in strict left-to-right order, frequently losing context in long or complex compound sentences.',
    citation: 'Vaswani et al., "Attention Is All You Need", Google Research (NeurIPS 2017)',
    audioNarrative: 'Did you know? Modern AI large language models are based on the Transformer architecture invented by Google in 2017. Its self-attention mechanism processes all words at once to grasp context.',
    tags: ['Artificial Intelligence', 'Transformers', 'Machine Learning', 'Deep Learning']
  },

  // --- FORENSICS & PSYCHOLOGY ---
  {
    id: 'for-locards-exchange',
    title: 'Locard\'s Exchange Principle: Every Contact Leaves a Trace',
    category: 'forensics_psych',
    digest: 'The foundational axiom of all modern forensic criminology states that whenever two objects come into contact, there is an inevitable transfer of microscopic physical material.',
    deepDive: 'Formulated in 1910 by French criminologist Dr. Edmond Locard (dubbed the "Sherlock Holmes of France"), the principle dictates that a criminal will always leave something at the crime scene (hairs, skin cells, fibers, shoe soil, DNA) and take something away with them. Forensic investigators simply search for and chemically analyze these cross-transfers.',
    funFact: 'Locard established the world\'s first official forensic crime laboratory in two attic rooms of the Lyon Police Department in 1910.',
    citation: 'Edmond Locard, "L\'Enquête Criminelle et les Méthodes Scientifiques" (1920)',
    audioNarrative: 'Did you know? The cornerstone of forensic science is Locard\'s Exchange Principle: every contact leaves a trace. A perpetrator inevitably leaves microscopic evidence behind and takes material away.',
    tags: ['Locard Principle', 'Forensic Science', 'Criminology', 'Crime Scene']
  },
  {
    id: 'for-luminol-chemistry',
    title: 'Luminol: Revealing Invisible Bloodstains Through Chemiluminescence',
    category: 'forensics_psych',
    digest: 'Forensic investigators spray luminol onto suspected crime scenes to reveal bloodstains that have been wiped clean, producing a glowing blue light in dark rooms.',
    deepDive: 'Luminol (C8H7N3O2) is mixed with an oxidant like hydrogen peroxide. When the solution touches blood, the iron in hemoglobin acts as a powerful catalyst, rapidly decomposing the peroxide and exciting the luminol molecules. As electrons drop back to their ground state, they release energy as striking blue photon chemiluminescence (425 nm wavelength).',
    funFact: 'Luminol is so sensitive that it can detect microscopic blood traces diluted up to 1 part per million, even after a room has been scrubbed with bleach.',
    citation: 'Walter Specht (1937), "The Chemiluminescence of Hemin" & Forensic Science International',
    audioNarrative: 'Did you know? Luminol reveals invisible blood at crime scenes through chemiluminescence. The iron in hemoglobin catalyzes a chemical reaction that glows bright blue in the dark.',
    tags: ['Luminol', 'Forensics', 'Blood Analysis', 'Chemiluminescence']
  },
  {
    id: 'for-fingerprint-uniqueness',
    title: 'The Science of Fingerprints: 1 in 64 Billion Odds of Identical Prints',
    category: 'forensics_psych',
    digest: 'Human friction ridge skin patterns form in the womb by the 17th week of pregnancy and are so mathematically unique that even identical twins have different fingerprints.',
    deepDive: 'Sir Francis Galton calculated in 1892 that the odds of two humans sharing identical fingerprints are roughly 1 in 64 billion. While identical twins share 100% of their DNA, fingerprints are shaped by micro-fluctuations in amniotic fluid pressure, umbilical movement, and embryonic growth rates, creating unique loops, whorls, and minutiae points.',
    funFact: 'Fingerprint ridges (dermatoglyphics) also amplify touch sensitivity, acting as microscopic acoustic antennae that transmit high-frequency vibrations to Pacinian corpuscle nerve receptors.',
    citation: 'Sir Francis Galton, "Finger Prints" (1892) & FBI Biometric Identification Standards',
    audioNarrative: 'Did you know? Even identical twins with identical DNA have completely different fingerprints. Friction ridge patterns form in the womb and have odds of duplication lower than one in sixty-four billion.',
    tags: ['Fingerprints', 'Biometrics', 'Identical Twins', 'Dermatoglyphics']
  },
  {
    id: 'psych-cognitive-dissonance',
    title: 'Cognitive Dissonance: The Psychological Discomfort of Conflicting Beliefs',
    category: 'forensics_psych',
    digest: 'When people hold contradictory beliefs or perform actions that violate their self-image, the brain experiences mental friction, driving them to rationalize or alter their memories.',
    deepDive: 'Identified by psychologist Leon Festinger in 1957, cognitive dissonance explains why people rarely admit when they are wrong. Rather than changing entrenched behaviors (such as smoking or financial gambling), humans unconsciously invent comforting justifications ("My grandfather smoked and lived to 90") to reduce the psychological discomfort of conflicting facts.',
    funFact: 'In Festinger\'s famous 1959 experiment, participants paid just $1 to tell a lie convinced themselves that the boring task was actually fun, while participants paid $20 felt no need to change their opinion.',
    citation: 'Leon Festinger, "A Theory of Cognitive Dissonance" (Stanford University Press, 1957)',
    audioNarrative: 'Did you know? Cognitive dissonance is the mental discomfort felt when our actions clash with our beliefs. To eliminate the discomfort, people unconsciously rationalize rather than admit an error.',
    tags: ['Cognitive Dissonance', 'Psychology', 'Festinger', 'Rationalization']
  },
  {
    id: 'psych-bystander-effect',
    title: 'The Bystander Effect: Why More Observers Means Less Help',
    category: 'forensics_psych',
    digest: 'In public emergencies, an individual is significantly less likely to offer assistance when surrounded by a large crowd than when standing alone.',
    deepDive: 'Pioneered by social psychologists John Darley and Bibb Latané in 1968, the phenomenon is driven by two psychological mechanisms: "diffusion of responsibility" (assuming someone else will step up or call the police) and "pluralistic ignorance" (seeing others remain calm and assuming the situation is not an emergency). If you need help in a crowd, point directly to one person and say "You in the blue shirt, call 911!"',
    funFact: 'When a bystander is completely alone, the likelihood of them intervening to help an injured stranger jumps from under 20% in a crowd to over 85%.',
    citation: 'Darley & Latané, "Bystander intervention in emergencies: Diffusion of responsibility", JPSP (1968)',
    audioNarrative: 'Did you know? The Bystander Effect reveals that people are less likely to help an emergency victim when surrounded by a crowd. Diffusion of responsibility leads everyone to assume someone else will act.',
    tags: ['Bystander Effect', 'Social Psychology', 'Emergency Response', 'Human Behavior']
  },
  {
    id: 'psych-dunning-kruger',
    title: 'The Dunning-Kruger Effect: Why Incompetence Breeds Overconfidence',
    category: 'forensics_psych',
    digest: 'People with low competence in a subject severely overestimate their ability, while true experts tend to underestimate their own expertise.',
    deepDive: 'In 1999, Cornell psychologists David Dunning and Justin Kruger demonstrated that poor performers lack the metacognitive ability to recognize their own errors. Conversely, high performers assume that because tasks come easily to them, the knowledge must be obvious to everyone else, leading to modesty or imposter syndrome.',
    funFact: 'Dunning and Kruger were inspired by a real robber who smeared lemon juice on his face before robbing banks, believing it would make him invisible to security cameras because lemon juice works as invisible ink.',
    citation: 'Justin Kruger & David Dunning, "Unskilled and Unaware of It", JPSP (1999)',
    audioNarrative: 'Did you know? The Dunning-Kruger effect shows that people with little knowledge in a field often feel supreme confidence, while true experts tend to underestimate their own expertise.',
    tags: ['Dunning-Kruger', 'Cognitive Bias', 'Metacognition', 'Psychology']
  },

  // --- COLORS & COLOR THEORY ---
  {
    id: 'col-rgb-vs-cmyk',
    title: 'Additive vs Subtractive Color: Why Screens Use RGB and Printers Use CMYK',
    category: 'arts_colors',
    digest: 'Electronic screens emit light using Additive RGB (Red, Green, Blue) combining into white, while printed paper absorbs light using Subtractive CMYK combining into black.',
    deepDive: 'Screens are light sources: combining 100% red, green, and blue light creates pure white light (255, 255, 255). Printed paper, however, reflects ambient light: Cyan, Magenta, and Yellow ink act as chemical light filters that subtract specific light wavelengths. Combining all three ink colors theoretically absorbs all light, but produces a muddy brown—which is why printers add a separate black ("Key" or K) cartridge.',
    funFact: 'This is why colors on your computer monitor look brighter and more vibrant than when printed on physical paper—RGB screens have a much wider color gamut than ink pigments.',
    citation: 'CIE (International Commission on Illumination) & Adobe Systems Color Management',
    audioNarrative: 'Did you know? Digital screens use additive RGB light which combines to form white, whereas printers use subtractive CMYK ink pigments which absorb light to produce dark tones.',
    tags: ['Color Theory', 'RGB', 'CMYK', 'Printing', 'Light Spectrum']
  },
  {
    id: 'col-opponent-process',
    title: 'Opponent-Process Theory: Why You Cannot See "Reddish-Green" or "Yellowish-Blue"',
    category: 'arts_colors',
    digest: 'Human retinal ganglion cells process color vision in antagonistic opponent channels (red vs green, blue vs yellow), making it neurologically impossible to perceive them simultaneously.',
    deepDive: 'Proposed by German physiologist Ewald Hering in 1878, Opponent-Process Theory proved that our neural pathways measure color differences along opposing axes. When red cones are stimulated, green responses are actively inhibited in the lateral geniculate nucleus of the thalamus. This is why colors like "reddish-green" or "yellowish-blue" are considered "forbidden" or impossible colors under normal lighting.',
    funFact: 'If you stare at a bright green patch for 30 seconds and look at a white wall, you will see a vivid red afterimage because your green receptors fatigued, leaving the opponent red signal active.',
    citation: 'Ewald Hering (1878), "Zur Lehre vom Lichtsinne" & Vision Research Journal',
    audioNarrative: 'Did you know? You cannot see reddish-green or yellowish-blue because human eye cells process colors in opposing pairs. When your brain receives a red signal, it actively blocks the green signal.',
    tags: ['Opponent Process', 'Color Vision', 'Afterimages', 'Neurology']
  },
  {
    id: 'col-vantablack',
    title: 'Vantablack: The Darkest Material That Absorbs 99.965% of All Light',
    category: 'arts_colors',
    digest: 'Vantablack is composed of millions of vertical carbon nanotubes that trap incoming photons, reflecting virtually no light and turning 3D objects into flat 2D silhouettes.',
    deepDive: 'Created by Surrey NanoSystems in the UK, VANTA stands for "Vertically Aligned NanoTube Arrays". When light enters the forest of microscopic nanotubes, it bounces repeatedly between the carbon cylinders and is converted entirely into heat rather than reflecting back to the eye. Looking at a crumpled sheet of foil coated in Vantablack looks like looking into an infinite void, because your eyes cannot perceive depth without shadows.',
    funFact: 'Vantablack was originally engineered for military stealth and space telescopes to prevent stray sunlight from bouncing inside star-tracking cameras.',
    citation: 'Surrey NanoSystems & Optics Express Journal',
    audioNarrative: 'Did you know? Vantablack is so black that it absorbs ninety-nine point nine six percent of light. Coated three-dimensional objects look like completely flat black voids because no light reflects back.',
    tags: ['Vantablack', 'Carbon Nanotubes', 'Optics', 'Materials Science']
  },

  // --- ENGLISH & LINGUISTICS ---
  {
    id: 'eng-tittle-dot',
    title: 'The Dot Over the Lowercase Letters "i" and "j" is Officially Called a "Tittle"',
    category: 'language_english',
    digest: 'The small diacritic dot hovering above the lowercase letters "i" and "j" has an official grammatical name in English: the "tittle".',
    deepDive: 'The word comes from the Latin "titulus", meaning a label, mark, or superscript heading. In medieval Latin manuscripts written in dense blackletter script, the stroke of the letter "i" looked identical to the individual strokes of "u", "m", and "n" (which scribes called "minims"). Scribes added a diagonal slash or accent mark above the "i" to distinguish words, which eventually simplified into the round dot we use today.',
    funFact: 'The common English idiom "to a T" and the biblical phrase "not one jot or tittle" refer to this microscopic mark, meaning to adhere with utmost precision down to the smallest dot.',
    citation: 'Oxford English Dictionary & Keith Houston, "Shady Characters: The Secret Life of Punctuation"',
    audioNarrative: 'Did you know? The dot over the lowercase letters i and j has an official name: it is called a tittle. Medieval scribes invented it to tell the letter i apart from other strokes in handwriting.',
    tags: ['Tittle', 'Typography', 'English Grammar', 'Linguistics']
  },
  {
    id: 'eng-pangram-sentence',
    title: 'Pangrams: Sentences That Contain Every Single Letter of the Alphabet',
    category: 'language_english',
    digest: 'A pangram (from Greek "pan gramma", meaning "all letters") is a coherent sentence containing every letter from A to Z at least once.',
    deepDive: 'The most famous English pangram is "The quick brown fox jumps over the lazy dog", which contains 35 letters and has been used since the late 19th century to test typewriters, computer keyboards, font rendering, and telegraph systems. A perfect pangram uses each letter exactly once (26 letters with zero repeats), such as "Mr Jock, TV quiz PhD, bags few lynx."',
    funFact: 'Pangrams exist in many languages. In Tagalog, a common pangram is "Ang mabilis na kulay-tsokolateng aso ay tumalon sa ibabaw ng tamad na oso."',
    citation: 'The Boston Journal (Feb 1885) & American Type Founders Specimen Catalog',
    audioNarrative: 'Did you know? A pangram is a sentence that uses every letter of the alphabet. The famous phrase "The quick brown fox jumps over the lazy dog" has been used to test typewriters and fonts for a century.',
    tags: ['Pangram', 'Alphabet', 'Typography', 'Linguistics']
  },
  {
    id: 'eng-janus-contronyms',
    title: 'Contronyms: Words That Are Their Own Exact Opposite',
    category: 'language_english',
    digest: 'Also known as "Janus words" or auto-antonyms, contronyms are words with dual meanings that directly contradict one another.',
    deepDive: 'Examples of English contronyms include:\n• Cleave: To cling tightly together, OR to split apart with an axe.\n• Sanction: To officially permit and approve, OR to impose a punitive penalty.\n• Dust: To remove dust from a table, OR to sprinkle dust/powder onto a cake.\n• Left: What has departed, OR what remains behind.\n• Oversighted: Carefully supervised, OR completely missed and neglected.\nThese linguistic anomalies usually evolve when two distinct historical root words merge into the same spelling over centuries.',
    funFact: 'They are named "Janus words" after the two-faced Roman god Janus, who looks forward into the future and backward into the past simultaneously.',
    citation: 'Richard Lederer, "Crazy English" & Merriam-Webster Linguistic Notes',
    audioNarrative: 'Did you know? Contronyms, or Janus words, are words that mean their own opposite. For example, "cleave" means to cling together or to split apart, and "sanction" means to permit or to penalize.',
    tags: ['Contronyms', 'Janus Words', 'Semantics', 'Etymology']
  },
  {
    id: 'eng-set-most-definitions',
    title: 'The English Word "Set" Holds the Record for Over 430 Definitions',
    category: 'language_english',
    digest: 'In the Oxford English Dictionary, the little three-letter verb "set" has the longest entry of any word in the English language, requiring over 60,000 words to explain.',
    deepDive: 'Linguists track more than 430 distinct senses and sub-meanings for "set" as a verb, noun, and adjective (e.g., set the table, set a clock, a set of keys, the sun sets, set in stone, set a record, ready-set-go). It eclipsed the word "run" (which has ~396 definitions) due to its extreme flexibility in forming phrasal verbs across centuries of English evolution.',
    funFact: 'It took the editors of the Oxford English Dictionary more than two full years of continuous lexicographical research just to write and organize the entry for the word "set".',
    citation: 'Oxford English Dictionary (OED 2nd Edition) & Ammon Shea, "Reading the OED"',
    audioNarrative: 'Did you know? The word with the most meanings in the English language is the word "set". The Oxford English Dictionary lists over four hundred and thirty distinct definitions for this single word.',
    tags: ['Oxford English Dictionary', 'Vocabulary', 'Lexicography', 'Word Records']
  },
  ...EXPANDED_FACTS
];
