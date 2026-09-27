import { GovernmentAgency } from '../types';

export const PHILIPPINE_AGENCIES: GovernmentAgency[] = [
  {
    id: 'dpwh',
    acronym: 'DPWH',
    fullName: 'Department of Public Works and Highways',
    filipinoName: 'Kagawaran ng mga Pagawaing Bayan at Lansangan',
    pronunciation: '/dee-pee-double-yoo-aych/ (Kagawaran ng Pagawaing Bayan)',
    sector: 'Infrastructure',
    mandate: 'Primary state engineering and infrastructure arm responsible for planning, design, construction, and maintenance of national roads, bridges, and flood control systems.',
    keyServices: [
      'National highway & expressway development',
      'Major river basin flood control dikes',
      'Public infrastructure quality inspection',
      'Emergency post-typhoon road clearing'
    ],
    establishedYear: 1898,
    legalBasis: 'Executive Order No. 124, series of 1987',
    funFact: 'Traced to the Department of War and Public Works established by Gen. Emilio Aguinaldo in the First Philippine Republic at Malolos in 1898.',
    audioText: 'DPWH stands for Department of Public Works and Highways. In Filipino, it is Kagawaran ng mga Pagawaing Bayan at Lansangan. It plans and builds national roads, bridges, and flood mitigation systems.'
  },
  {
    id: 'doh',
    acronym: 'DOH',
    fullName: 'Department of Health',
    filipinoName: 'Kagawaran ng Kalusugan',
    pronunciation: '/dee-oh-aych/ (Kagawaran ng Kalusugan)',
    sector: 'Health & Welfare',
    mandate: 'Principal health authority in the Philippines ensuring access to basic public health services, regulating health facilities, and supervising national tertiary referral hospitals.',
    keyServices: [
      'National immunization & disease surveillance',
      'Regulation of hospitals, clinics & blood centers',
      'Administration of specialty centers (Lung, Heart, Kidney Centers)',
      'Emergency health response & quarantine controls'
    ],
    establishedYear: 1898,
    legalBasis: 'Executive Order No. 119, series of 1987 & RA 11223 (Universal Health Care Act)',
    funFact: 'Administers premier national research and referral facilities including the Research Institute for Tropical Medicine (RITM) and San Lazaro Hospital.',
    audioText: 'DOH stands for Department of Health, or Kagawaran ng Kalusugan. It is the lead agency protecting public health, regulating hospitals, and coordinating the Universal Health Care program.'
  },
  {
    id: 'philhealth',
    acronym: 'PhilHealth',
    fullName: 'Philippine Health Insurance Corporation',
    filipinoName: 'Korporasyon ng Paseguruhan sa Kalusugan ng Pilipinas',
    pronunciation: '/fil-health/ (Paseguruhan sa Kalusugan)',
    sector: 'Health & Welfare',
    mandate: 'Tax-exempt government corporation attached to the DOH implementing the National Health Insurance Program to ensure financial risk protection for medical hospitalization.',
    keyServices: [
      'Inpatient case rate medical reimbursements',
      'Konsulta package (primary care consultations & laboratory tests)',
      'Z-Benefit packages for catastrophic illnesses',
      'Automatic health coverage for all Filipino citizens under RA 11223'
    ],
    establishedYear: 1995,
    legalBasis: 'Republic Act No. 7875, amended by RA 9241, RA 10606, and RA 11223',
    funFact: 'Under the Universal Health Care Act of 2019, all Filipino citizens are automatically enrolled in PhilHealth as either direct or indirect contributors.',
    audioText: 'PhilHealth stands for Philippine Health Insurance Corporation. It provides medical insurance coverage, subsidizing hospitalization costs and diagnostic consultations for all Filipino citizens.'
  },
  {
    id: 'pagasa',
    acronym: 'PAGASA',
    fullName: 'Philippine Atmospheric, Geophysical and Astronomical Services Administration',
    filipinoName: 'Pangasiwaan ng Pilipinas sa Serbisyong Atmosperiko, Heopisiko at Astronomiko',
    pronunciation: '/pahg-AH-sah/ (PAGASA, which also means "Hope" in Tagalog)',
    sector: 'Science & Tech',
    mandate: 'Attached agency under the DOST providing real-time weather forecasts, tropical cyclone warnings, hydrological flood advisories, and astronomical observations.',
    keyServices: [
      'Tropical cyclone track forecasting & Wind Signals 1 to 5',
      'Doppler radar storm surge & rainfall advisories',
      'Dams & river basins flood forecasting',
      'Philippine Standard Time (PST) synchronization'
    ],
    establishedYear: 1972,
    legalBasis: 'Presidential Decree No. 78, modernized under Republic Act No. 10692',
    funFact: 'The acronym PAGASA was deliberately coined to spell "pag-asa", the Filipino word for "hope", reflecting its mission to protect lives from typhoons.',
    audioText: 'PAGASA stands for Philippine Atmospheric, Geophysical and Astronomical Services Administration. Pronounced pag-AH-sah, it monitors typhoons, issues flood bulletins, and sets official Philippine Standard Time.'
  },
  {
    id: 'rhu',
    acronym: 'RHU',
    fullName: 'Rural Health Unit',
    filipinoName: 'Pangkalusugang Tanggapan sa Pook Rural',
    pronunciation: '/ar-aych-yoo/ (Rural Health Unit / Munisipyong Klinika)',
    sector: 'Health & Welfare',
    mandate: 'Municipal-level primary healthcare center operated by the Local Government Unit (LGU) providing frontline preventive, diagnostic, maternal, and wellness services.',
    keyServices: [
      'Free childhood immunizations (EPI program)',
      'Maternal prenatal checkups & clean childbirth',
      'Tuberculosis DOTS treatment & diagnostics',
      'Issuance of local medical and sanitary certificates'
    ],
    establishedYear: 1954,
    legalBasis: 'Republic Act No. 1082 (Rural Health Act of 1954), devolved under RA 7160 (Local Government Code)',
    funFact: 'Under RA 7160, RHUs are not directly managed by DOH headquarters, but are operated by municipal mayors through the Municipal Health Officer (MHO).',
    audioText: 'RHU stands for Rural Health Unit. It is the frontline clinic in every municipality offering free vaccines, maternal care, and doctor consultations under the local government.'
  },
  {
    id: 'sss',
    acronym: 'SSS',
    fullName: 'Social Security System',
    filipinoName: 'Pangasiwaan ng Kapanatagang Panlipunan',
    pronunciation: '/es-es-es/ (Social Security System)',
    sector: 'Health & Welfare',
    mandate: 'State-run social insurance program providing retirement, disability, sickness, maternity, and funeral benefits to private sector workers, freelancers, and OFWs.',
    keyServices: [
      'Monthly retirement pensions for insured workers',
      'Sickness and maternity cash daily allowances',
      'Salary loans & emergency calamity aid',
      'Unemployment involuntary separation benefits'
    ],
    establishedYear: 1957,
    legalBasis: 'Republic Act No. 1161, amended by the Social Security Act of 2018 (RA 11199)',
    funFact: 'Unlike GSIS which protects civil servants, SSS serves the private sector, contractual laborers, household helpers (Kasambahay), and self-employed professionals.',
    audioText: 'SSS stands for Social Security System. It provides retirement pensions, maternity allowances, and calamity loans to private-sector workers and overseas Filipinos.'
  },
  {
    id: 'gsis',
    acronym: 'GSIS',
    fullName: 'Government Service Insurance System',
    filipinoName: 'Paseguruhan ng mga Manggagawa sa Pamahalaan',
    pronunciation: '/jee-sis/ or /jee-es-eye-es/',
    sector: 'Governance & Integrity',
    mandate: 'Social security and pension institution for all civilian government employees, state university faculty, and constitutional commission personnel.',
    keyServices: [
      'Government civil service retirement pensions',
      'Life insurance coverage for state employees',
      'General insurance of government assets and infrastructure',
      'Multi-purpose policy loans and emergency credit'
    ],
    establishedYear: 1936,
    legalBasis: 'Commonwealth Act No. 186, amended by RA 8291 (GSIS Act of 1997)',
    funFact: 'GSIS also insures all state-owned properties, including public bridges, government halls, airports, and military installations.',
    audioText: 'GSIS stands for Government Service Insurance System. Pronounced jee-sis, it manages pensions and insurance for public school teachers, civil servants, and state workers.'
  },
  {
    id: 'dost',
    acronym: 'DOST',
    fullName: 'Department of Science and Technology',
    filipinoName: 'Kagawaran ng Agham at Teknolohiya',
    pronunciation: '/dee-oh-es-tee/ or /dost/',
    sector: 'Science & Tech',
    mandate: 'Premier government department directing and coordinating national scientific research, technological innovation, space applications, and STEM education.',
    keyServices: [
      'Oversight of PAGASA, PHIVOLCS, and PhilSA coordination',
      'Philippine Science High School System (Pisay) campuses',
      'SETUP: Small enterprise technology upgrading program',
      'National R&D grants in health, agriculture, and AI'
    ],
    establishedYear: 1958,
    legalBasis: 'Republic Act No. 2067 (Science Act of 1958), reorganized under EO 128 (1987)',
    funFact: 'DOST oversees the Philippine Science High School system, widely regarded as one of the premier STEM secondary institutions in Southeast Asia.',
    audioText: 'DOST stands for Department of Science and Technology. It leads Philippine technological innovation, supports STEM scholars, and oversees agencies like PAGASA and PHIVOLCS.'
  },
  {
    id: 'deped',
    acronym: 'DepEd',
    fullName: 'Department of Education',
    filipinoName: 'Kagawaran ng Edukasyon',
    pronunciation: '/dep-ed/ (Kagawaran ng Edukasyon)',
    sector: 'Education',
    mandate: 'Formulates, implements, and coordinates policies in basic education across kindergarten, elementary, junior high, and senior high schools nationwide.',
    keyServices: [
      'Public kindergarten to Grade 12 school administration',
      'National curriculum formulation (MATATAG Curriculum)',
      'Learning resource production & textbook distribution',
      'Alternative Learning System (ALS) for out-of-school youth'
    ],
    establishedYear: 1901,
    legalBasis: 'Republic Act No. 9155 (Governance of Basic Education Act of 2001)',
    funFact: 'DepEd is the largest government employer in the Philippines, with over 800,000 public school teachers and staff serving over 25 million learners.',
    audioText: 'DepEd stands for Department of Education. Pronounced dep-ed, it oversees all public and private elementary and high schools across the Philippines.'
  },
  {
    id: 'ched',
    acronym: 'CHED',
    fullName: 'Commission on Higher Education',
    filipinoName: 'Komisyon sa Lalong Mataas na Edukasyon',
    pronunciation: '/ched/ (Komisyon sa Lalong Mataas na Edukasyon)',
    sector: 'Education',
    mandate: 'Attached agency under the Office of the President regulating degree-granting public and private higher education institutions (HEIs) and universities.',
    keyServices: [
      'Free Higher Education under RA 10931 (Universal Access to Quality Tertiary Education)',
      'Curriculum standards for undergraduate & graduate degrees',
      'Accreditation of State Universities and Colleges (SUCs)',
      'Student financial assistance programs (UniFAST)'
    ],
    establishedYear: 1994,
    legalBasis: 'Republic Act No. 7722 (Higher Education Act of 1994)',
    funFact: 'Prior to 1994, all Philippine education was handled by one monolithic department. RA 7722 tri-focalized education into DepEd (basic), CHED (tertiary), and TESDA (vocational).',
    audioText: 'CHED stands for Commission on Higher Education. Pronounced ched, it regulates universities and colleges and implements free tuition in State Universities under RA 10931.'
  },
  {
    id: 'tesda',
    acronym: 'TESDA',
    fullName: 'Technical Education and Skills Development Authority',
    filipinoName: 'Pangasiwaan sa Edukasyong Teknikal at Pagpapaunlad ng Kasanayan',
    pronunciation: '/tes-dah/ (TESDA)',
    sector: 'Education',
    mandate: 'Lead agency directing and managing technical vocational education and training (TVET) and skill certifications in the Philippines.',
    keyServices: [
      'National Certificates (NC I, NC II, NC III, NC IV) assessments',
      'Free tech-voc scholarships (TWSP, STEP)',
      'Training centers in automotive, electrical, culinary, IT',
      'Overseas workers skill retooling and upgrading'
    ],
    establishedYear: 1994,
    legalBasis: 'Republic Act No. 7796 (TESDA Act of 1994)',
    funFact: 'TESDA certificates (NC II) are recognized internationally across the Middle East, Europe, and Asia for trade professions like welding, butchery, and heavy equipment operation.',
    audioText: 'TESDA stands for Technical Education and Skills Development Authority. Pronounced tes-dah, it certifies technical and vocational skills like carpentry, culinary arts, and electrical wiring.'
  },
  {
    id: 'bsp',
    acronym: 'BSP',
    fullName: 'Bangko Sentral ng Pilipinas',
    filipinoName: 'Bangko Sentral ng Pilipinas',
    pronunciation: '/bee-es-pee/ (Bangko Sentral ng Pilipinas)',
    sector: 'Economy & Finance',
    mandate: 'Central monetary authority of the Philippines maintaining price stability, monetary policy, supervision of banks, and issuing the Philippine Peso.',
    keyServices: [
      'Exclusive issuance of Philippine banknotes and circulation coins',
      'Setting policy interest rates (reverse repurchase rate)',
      'Supervision of universal, commercial, rural, and digital banks',
      'Management of the Gross International Reserves (GIR)'
    ],
    establishedYear: 1993,
    legalBasis: 'Republic Act No. 7653, amended by Republic Act No. 11211 (New Central Bank Act)',
    funFact: 'Operates its own banknote minting and bullion refinery in Quezon City, where gold panned by small-scale Filipino miners is refined to standard London Good Delivery bars.',
    audioText: 'BSP stands for Bangko Sentral ng Pilipinas. It is the country\'s central bank, setting monetary policies, maintaining the value of the Philippine Peso, and supervising financial banks.'
  },
  {
    id: 'bir',
    acronym: 'BIR',
    fullName: 'Bureau of Internal Revenue',
    filipinoName: 'Kawanihan ng Rentas Internas',
    pronunciation: '/bee-eye-ar/ (Kawanihan ng Rentas Internas)',
    sector: 'Economy & Finance',
    mandate: 'Attached agency under the Department of Finance tasked with assessing and collecting all national internal revenue taxes, fees, and charges.',
    keyServices: [
      'Issuance of Tax Identification Number (TIN)',
      'Collection of individual and corporate Income Tax',
      'Value-Added Tax (VAT) and percentage tax administration',
      'Estate tax, donor tax, and documentary stamp collections'
    ],
    establishedYear: 1904,
    legalBasis: 'Reorganized under Executive Order No. 127 (1987) & Tax Reform Acts',
    funFact: 'The BIR accounts for approximately 70% to 75% of the total tax revenues funding the Philippine national budget each year.',
    audioText: 'BIR stands for Bureau of Internal Revenue. In Filipino, Kawanihan ng Rentas Internas. It collects national taxes, issues TIN cards, and funds the national budget.'
  },
  {
    id: 'dfa',
    acronym: 'DFA',
    fullName: 'Department of Foreign Affairs',
    filipinoName: 'Kagawaran ng Ugnayang Panlabas',
    pronunciation: '/dee-ef-ay/ (Kagawaran ng Ugnayang Panlabas)',
    sector: 'Foreign Affairs',
    mandate: 'Premier department advising the President on foreign relations, conducting diplomatic treaties, and protecting Filipino citizens abroad through embassies and consulates.',
    keyServices: [
      'Issuance of biometric Philippine Passports (ePassport)',
      'Apostille and document authentication',
      'Assistance to Nationals (ATN) and OFW repatriation',
      'Bilateral diplomatic summits and maritime law defense'
    ],
    establishedYear: 1898,
    legalBasis: 'Commonwealth Act No. 732 & Republic Act No. 7157 (Foreign Service Act of 1991)',
    funFact: 'Apolinario Mabini, the "Sublime Paralytic", served as the very first Secretary of Foreign Affairs of the Philippine Revolutionary Republic in 1899.',
    audioText: 'DFA stands for Department of Foreign Affairs. It handles international diplomacy, issues Philippine passports, and assists Filipinos overseas through embassies and consulates.'
  },
  {
    id: 'dole',
    acronym: 'DOLE',
    fullName: 'Department of Labor and Employment',
    filipinoName: 'Kagawaran ng Paggawa at Empleyo',
    pronunciation: '/dohl/ or /dee-oh-el-ee/',
    sector: 'Health & Welfare',
    mandate: 'Formulates and implements labor policies, protects workers rights, sets regional minimum wages, and enforces occupational safety standards.',
    keyServices: [
      'Regional Tripartite Wages and Productivity Boards (RTWPBs)',
      'Single Entry Approach (SEnA) labor dispute settlement',
      'TUPAD emergency employment for displaced workers',
      'Labor inspections and anti-child labor enforcement'
    ],
    establishedYear: 1933,
    legalBasis: 'Act No. 4121 (1933), reorganized under Executive Order No. 126 (1987)',
    funFact: 'Minimum wages in the Philippines are not set uniformly by Congress, but regionally by DOLE\'s Regional Tripartite Wages and Productivity Boards based on local cost of living.',
    audioText: 'DOLE stands for Department of Labor and Employment. It protects workers rights, determines regional minimum wages, and mediates labor disputes.'
  },
  {
    id: 'dswd',
    acronym: 'DSWD',
    fullName: 'Department of Social Welfare and Development',
    filipinoName: 'Kagawaran ng Kagalingan at Pagpapaunlad Panlipunan',
    pronunciation: '/dee-es-double-yoo-dee/ (Kagawaran ng Kagalingang Panlipunan)',
    sector: 'Health & Welfare',
    mandate: 'Primary agency safeguarding marginalized children, seniors, families, and disaster survivors through targeted social safety net programs.',
    keyServices: [
      'Pantawid Pamilyang Pilipino Program (4Ps conditional cash transfers, RA 11310)',
      'National disaster food pack pre-positioning and relief ops',
      'Assistance to Individuals in Crisis Situations (AICS)',
      'Social Pension for Indigent Senior Citizens'
    ],
    establishedYear: 1947,
    legalBasis: 'Executive Order No. 15, series of 1998 & Republic Act No. 11310',
    funFact: 'The 4Ps program invests directly in children\'s human capital by providing financial grants on condition of 85% school attendance and regular health checkups.',
    audioText: 'DSWD stands for Department of Social Welfare and Development. It runs the 4Ps conditional cash assistance program, provides crisis aid, and leads disaster food relief.'
  },
  {
    id: 'dti',
    acronym: 'DTI',
    fullName: 'Department of Trade and Industry',
    filipinoName: 'Kagawaran ng Kalakalan at Industriya',
    pronunciation: '/dee-tee-eye/ (Kagawaran ng Kalakalan at Industriya)',
    sector: 'Economy & Finance',
    mandate: 'Executive department charged with fostering a competitive business climate, promoting domestic and international commerce, and protecting consumer rights.',
    keyServices: [
      'Business Name Registration System (BNRS)',
      'Suggested Retail Price (SRP) monitoring on basic necessities',
      'Diskuwento caravans and consumer complaint arbitration',
      'Negosyo Centers and MSME startup mentoring'
    ],
    establishedYear: 1898,
    legalBasis: 'Executive Order No. 133, series of 1987 & RA 7394 (Consumer Act of the Philippines)',
    funFact: 'Operates over 1,400 Negosyo Centers across Philippine municipalities, enabling entrepreneurs to register micro-businesses within 15 minutes.',
    audioText: 'DTI stands for Department of Trade and Industry. It registers business trade names, monitors grocery prices with Suggested Retail Prices, and safeguards consumer protection.'
  },
  {
    id: 'dotr',
    acronym: 'DOTr',
    fullName: 'Department of Transportation',
    filipinoName: 'Kagawaran ng Transportasyon',
    pronunciation: '/dee-oh-tee-ar/ (Kagawaran ng Transportasyon)',
    sector: 'Infrastructure',
    mandate: 'Primary policy, planning, and regulating entity for land, air, sea, and rail transportation infrastructure and safety throughout the archipelago.',
    keyServices: [
      'Development of metro subways, commuter rail, and busways',
      'Supervision of LTO (driver licenses & vehicle plates)',
      'Supervision of LTFRB (public utility franchises)',
      'Civil Aviation Authority of the Philippines (CAAP) oversight'
    ],
    establishedYear: 1899,
    legalBasis: 'Republic Act No. 10844 (separating DICT and re-designating DOTr in 2016)',
    funFact: 'DOTr oversees the construction of the Metro Manila Subway Project—the first underground mass transit railway in the history of the Philippines.',
    audioText: 'DOTr stands for Department of Transportation. It manages trains, airports, seaports, and oversees agencies like LTO for driving licenses and LTFRB for public franchises.'
  },
  {
    id: 'mmda',
    acronym: 'MMDA',
    fullName: 'Metropolitan Manila Development Authority',
    filipinoName: 'Pangasiwaan sa Pagpapaunlad ng Kalakhang Maynila',
    pronunciation: '/em-em-dee-ay/ (MMDA)',
    sector: 'Infrastructure',
    mandate: 'Provides metro-wide services across Metro Manila covering traffic management, solid waste disposal, flood control, and disaster preparedness.',
    keyServices: [
      'Unified Vehicular Volume Reduction Program (Number Coding)',
      'Operation of metro pumping stations along esteros',
      'Pasig River Ferry Service operations',
      'Metropolitan disaster rescue command & shake drills'
    ],
    establishedYear: 1995,
    legalBasis: 'Republic Act No. 7924',
    funFact: 'Governs metropolitan services for 16 cities and 1 lone municipality (Pateros, famous for balut production) without replacing individual city mayors.',
    audioText: 'MMDA stands for Metropolitan Manila Development Authority. It coordinates traffic management, number coding schemes, and flood pumping stations in Metro Manila.'
  },
  {
    id: 'neda',
    acronym: 'NEDA',
    fullName: 'National Economic and Development Authority',
    filipinoName: 'Pambansang Pangasiwaan sa Kabuhayan at Pagpapaunlad',
    pronunciation: '/neh-dah/ (NEDA)',
    sector: 'Economy & Finance',
    mandate: 'The nation\'s premier socio-economic planning body, chaired by the President of the Philippines, formulating medium-term Philippine Development Plans (PDP).',
    keyServices: [
      'Formulation of the Philippine Development Plan (PDP)',
      'ICC (Investment Coordination Committee) review of mega-projects',
      'Quarterly GDP and economic growth assessment reports',
      'Overseas Development Assistance (ODA) allocation'
    ],
    establishedYear: 1973,
    legalBasis: 'Article XII, Section 9 of the 1987 Constitution & Presidential Decree 107',
    funFact: 'The NEDA Board is chaired directly by the President of the Philippines, and must approve all foreign-assisted and billion-peso public infrastructure projects before construction begins.',
    audioText: 'NEDA stands for National Economic and Development Authority. Pronounced neh-dah, it creates the Philippine economic blueprints and evaluates billion-peso infrastructure projects.'
  },
  {
    id: 'coa',
    acronym: 'COA',
    fullName: 'Commission on Audit',
    filipinoName: 'Komisyon sa Pagsusuri',
    pronunciation: '/see-oh-ay/ or /koh-ah/ (Komisyon sa Pagsusuri)',
    sector: 'Governance & Integrity',
    mandate: 'Independent Constitutional Commission possessing exclusive authority to examine, audit, and settle all government revenues and expenditures of public funds.',
    keyServices: [
      'Annual Audit Reports (AAR) of all state agencies and LGUs',
      'Issuance of Notice of Disallowance (ND) for illegal expenses',
      'Special fraud audits and citizen participatory audits',
      'Settlement of public debts and accounts'
    ],
    establishedYear: 1899,
    legalBasis: 'Article IX-D of the 1987 Philippine Constitution',
    funFact: 'As an independent Constitutional Commission, COA has guaranteed fiscal autonomy, meaning its budget cannot be reduced below the previous year\'s appropriation by Congress.',
    audioText: 'COA stands for Commission on Audit. An independent constitutional commission, it inspects every peso spent by government offices and issues audit reports to prevent corruption.'
  },
  {
    id: 'comelec',
    acronym: 'COMELEC',
    fullName: 'Commission on Elections',
    filipinoName: 'Komisyon sa Halalan',
    pronunciation: '/kohm-eh-lek/ (Komisyon sa Halalan)',
    sector: 'Governance & Integrity',
    mandate: 'Constitutional commission with exclusive power to enforce and administer all laws and regulations relative to the conduct of free, honest, and credible elections.',
    keyServices: [
      'Voter registration and biometric record verification',
      'Management of national, local, and barangay elections',
      'Automated Election System (AES) machine deployment',
      'Adjudication of election contests and campaign finance'
    ],
    establishedYear: 1940,
    legalBasis: 'Article IX-C of the 1987 Philippine Constitution & Omnibus Election Code (BP 881)',
    funFact: 'During official election periods, COMELEC exercises operational control over the Philippine National Police and Armed Forces to enforce gun bans and maintain peace.',
    audioText: 'COMELEC stands for Commission on Elections. Pronounced kohm-eh-lek, it oversees voter registrations, runs automated elections, and enforces election laws.'
  },
  {
    id: 'csc',
    acronym: 'CSC',
    fullName: 'Civil Service Commission',
    filipinoName: 'Komisyon sa Serbisyo Sibil',
    pronunciation: '/see-es-see/ (Komisyon sa Serbisyo Sibil)',
    sector: 'Governance & Integrity',
    mandate: 'Central personnel agency of the Philippine Government mandated to establish a career service and promote merit and fitness in all government appointments.',
    keyServices: [
      'Career Service Examination (Professional & Sub-Professional)',
      'Civil service eligibility conferment and verification',
      'Resolution of administrative discipline cases for civil servants',
      'Public service code of conduct enforcement (RA 6713)'
    ],
    establishedYear: 1900,
    legalBasis: 'Article IX-B of the 1987 Philippine Constitution & Administrative Code of 1987',
    funFact: 'Passers of the Philippine Bar Exam and PRC Professional Board Exams are automatically granted civil service eligibility without needing to take the CSC exam.',
    audioText: 'CSC stands for Civil Service Commission. It is the central HR agency of the Philippine government, conducting civil service exams and enforcing merit-based appointments.'
  },
  {
    id: 'pdic',
    acronym: 'PDIC',
    fullName: 'Philippine Deposit Insurance Corporation',
    filipinoName: 'Korporasyon ng Paseguruhan ng Deposito ng Pilipinas',
    pronunciation: '/pee-dee-eye-see/',
    sector: 'Banking & Central Reserve',
    mandate: 'Statutory government corporation providing deposit insurance protection to bank depositors up to ₱500,000 per depositor per bank.',
    keyServices: [
      'Maximum deposit insurance coverage (MDIC) up to ₱500,000',
      'Receiver and liquidator of closed and distressed banks',
      'Financial literacy programs for grassroots depositors',
      'Risk assessment and co-examination of member banks with BSP'
    ],
    establishedYear: 1963,
    legalBasis: 'Republic Act No. 3591, amended by RA 11840 (2022)',
    funFact: 'Under Republic Act 11840 enacted in 2022, PDIC is now an attached agency under the Bangko Sentral ng Pilipinas (BSP) instead of the Department of Finance.',
    audioText: 'PDIC stands for Philippine Deposit Insurance Corporation. It insures your savings accounts in Philippine banks up to five hundred thousand pesos per depositor in case a bank closes.'
  },
  {
    id: 'sec',
    acronym: 'SEC',
    fullName: 'Securities and Exchange Commission',
    filipinoName: 'Komisyon sa mga Panagot at Palitan',
    pronunciation: '/es-ee-see/ (Komisyon sa Panagot at Palitan)',
    sector: 'Economy & Finance',
    mandate: 'National government agency charged with supervising the corporate sector, capital markets, stock exchange, and protecting the public from investment scams.',
    keyServices: [
      'Registration of stock and non-stock corporations and partnerships',
      'Supervision of the Philippine Stock Exchange (PSE)',
      'Enforcement against unauthorized investment schemes and Ponzi scams',
      'Corporate governance standards and ESG reporting'
    ],
    establishedYear: 1936,
    legalBasis: 'Commonwealth Act No. 83 & Republic Act No. 8799 (Securities Regulation Code)',
    funFact: 'The SEC was established in 1936 during the Philippine Commonwealth, predating the post-war sovereign Republic, patterned after the US SEC to oversee the Manila gold boom.',
    audioText: 'SEC stands for Securities and Exchange Commission. It registers all corporations, oversees the Philippine Stock Exchange, and investigates financial scams and Ponzi schemes.'
  },
  {
    id: 'landbank',
    acronym: 'LANDBANK',
    fullName: 'Land Bank of the Philippines',
    filipinoName: 'Bangko sa Lupa ng Pilipinas',
    pronunciation: '/land-bank/ (Bangko sa Lupa)',
    sector: 'Banking & Central Reserve',
    mandate: 'Universal bank owned by the Government mandated to promote countryside development, finance agrarian reform, and disburse conditional cash transfers (4Ps).',
    keyServices: [
      'Agricultural and agrarian reform credit to farmers and fisherfolk',
      'Primary depository of national government revenues and LGU funds',
      'Official cash payout agent for DSWD 4Ps cash card recipients',
      'Nationwide ATM network reaching unbanked rural municipalities'
    ],
    establishedYear: 1963,
    legalBasis: 'Republic Act No. 3844 (Agricultural Land Reform Code)',
    funFact: 'Following its 2021 merger with the United Coconut Planters Bank (UCPB), LANDBANK became the second-largest bank in the Philippines in terms of total assets.',
    audioText: 'LANDBANK stands for Land Bank of the Philippines. It is the premier government universal bank supporting farmers, agricultural loans, and distributing 4Ps cash subsidies.'
  },
  {
    id: 'dbp',
    acronym: 'DBP',
    fullName: 'Development Bank of the Philippines',
    filipinoName: 'Bangko sa Pagpapaunlad ng Pilipinas',
    pronunciation: '/dee-bee-pee/ (Bangko sa Pagpapaunlad)',
    sector: 'Banking & Central Reserve',
    mandate: 'State-owned development bank dedicated to financing high-impact infrastructure, clean energy, public hospitals, water systems, and local industrial ventures.',
    keyServices: [
      'Financing LGU public markets, hospital construction, and waterworks',
      'Loans for renewable solar, hydro, and geothermal power plants',
      'Direct lending to micro, small, and medium enterprises (MSMEs)',
      'Strategic infrastructure loans under national master plans'
    ],
    establishedYear: 1947,
    legalBasis: 'Republic Act No. 85, reorganized under Executive Order 81 & RA 8523',
    funFact: 'Originally chartered as the Rehabilitation Finance Corporation in 1947 by President Manuel Roxas to rebuild the nation from the rubble of World War II.',
    audioText: 'DBP stands for Development Bank of the Philippines. It provides long-term financing for public infrastructure, clean energy grids, regional hospitals, and local industrial plants.'
  }
];
