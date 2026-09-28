import { Fact, CategoryId } from '../types';
import { PHILIPPINE_AGENCIES } from './agencies';

type FactCategory = Exclude<CategoryId, 'all'>;

// Compact subject lists keep the catalog broad without duplicating large hand-written objects.
const subjects: Record<FactCategory, string[]> = {
  ph_gov: ['Constitutional checks and balances', 'Congressional oversight', 'Appropriations bills', 'Senate committees', 'House districts', 'Executive departments', 'Presidential appointments', 'Local autonomy', 'Public accountability', 'Treaty ratification', 'Impeachment', 'Constitutional amendments', 'Legislative privilege', 'Public hearings', 'The budget process', 'National elections', 'The barangay', 'Intergovernmental relations', 'Public consultation', 'The rule of law'],
  ph_agency: ['BIR', 'Bureau of Customs', 'CDA', 'CHED', 'CFO', 'CDA', 'DFA', 'DHSUD', 'DICT', 'DILG', 'DOJ', 'DOLE', 'DOT', 'DSWD', 'FDA', 'NEDA', 'NIA', 'NTC', 'OWWA', 'TESDA'],
  filipino: ['Baybayin', 'Barong Tagalog', 'Tinikling', 'Singkil', 'Pintados', 'Ifugao rice terraces', 'Vinta boats', 'Manila galleons', 'Apolinario Mabini', 'Gregoria de Jesus', 'Marcelo H. del Pilar', 'Emilio Aguinaldo', 'Lapu-Lapu', 'Sultan Kudarat', 'Jose Rizal', 'Andres Bonifacio', 'Philippine eagle', 'Kulintang', 'Pasko traditions', 'Philippine languages'],
  banks_finance: ['Inflation', 'Interest rates', 'Bonds', 'Stocks', 'Mutual funds', 'Insurance', 'Credit scores', 'Compound interest', 'Emergency funds', 'Budgeting', 'Taxes', 'Remittances', 'Foreign exchange', 'Digital payments', 'Central banking', 'Deposit insurance', 'Microfinance', 'Annuities', 'Diversification', 'Financial fraud'],
  myths_debunked: ['The ten-percent brain myth', 'Sugar rushes', 'Cold weather and colds', 'Shaving hair', 'Knuckle cracking', 'Swallowed gum', 'Goldfish memory', 'Lightning safety', 'Detox products', 'MSG myths', 'The five-second rule', 'Vitamin supplements', 'Bats and blindness', 'The Great Wall from space', 'Water after meals', 'Reading in dim light', 'Left-brain and right-brain types', 'Vaccines and immunity', 'Natural versus synthetic', 'Toads and warts'],
  biology_animals: ['Cell membranes', 'DNA replication', 'Natural selection', 'Coral reefs', 'Pollination', 'Fungal networks', 'Bird migration', 'Whale communication', 'Ant colonies', 'Bee navigation', 'Shark senses', 'Plant hormones', 'Photosynthesis', 'The immune system', 'Stem cells', 'Gut microbes', 'Camouflage', 'Animal echolocation', 'Seed dispersal', 'Food webs'],
  chemistry_nutrition: ['Atomic structure', 'Chemical bonds', 'Acids and bases', 'The periodic table', 'Catalysts', 'Oxidation', 'Polymers', 'Crystals', 'Enzymes', 'Electrolytes', 'Dietary fiber', 'Protein folding', 'Iron in blood', 'Calcium', 'Omega-3 fats', 'Fermentation', 'Food preservation', 'pH indicators', 'Carbohydrates', 'Water chemistry'],
  tech_ai: ['Computer networks', 'Open-source software', 'Databases', 'Encryption', 'Two-factor authentication', 'Machine learning', 'Computer vision', 'Robotics', 'Cloud computing', 'Web accessibility', 'Operating systems', 'Data compression', 'Digital signatures', 'Satellite navigation', 'Programming languages', 'Search engines', 'Version control', 'Digital footprints', 'Quantum computing', 'Software testing'],
  forensics_psych: ['Memory formation', 'Sleep cycles', 'Classical conditioning', 'Confirmation bias', 'The placebo effect', 'Stress responses', 'Forensic toxicology', 'DNA profiling', 'Ballistics', 'Blood spatter analysis', 'Cybercrime investigation', 'Eyewitness memory', 'Decision fatigue', 'Habit formation', 'Emotional contagion', 'Risk perception', 'Moral licensing', 'Social conformity', 'Crime-scene documentation', 'Questioning techniques'],
  arts_colors: ['Color temperature', 'Complementary colors', 'Visual contrast', 'Perspective', 'Typography', 'Negative space', 'Fresco painting', 'Woodcut printing', 'Photography exposure', 'Musical rhythm', 'Film editing', 'Architectural proportion', 'Textile patterns', 'Ceramics', 'Sculpture', 'Watercolor pigments', 'Color accessibility', 'The golden rectangle', 'Calligraphy', 'Public art'],
  language_english: ['Loanwords', 'Prefixes', 'Suffixes', 'Dialect continua', 'Sign languages', 'Bilingualism', 'Phonemes', 'Morphemes', 'Syntax', 'Metaphors', 'Place names', 'Personal names', 'Writing systems', 'Braille', 'Code-switching', 'Language change', 'Dictionaries', 'Punctuation', 'Euphemisms', 'Rhetorical questions'],
  science: ['Newtonian mechanics', 'Thermodynamics', 'Electromagnetism', 'Wave behavior', 'The scientific method', 'Measurement uncertainty', 'Plate tectonics', 'Evolution', 'The water cycle', 'Earthquakes', 'Volcanoes', 'Climate systems', 'Sound waves', 'Light spectra', 'Electric circuits', 'Fluid pressure', 'Conservation laws', 'Scientific models', 'Laboratory controls', 'Renewable energy'],
  galaxy: ['The Milky Way', 'Exoplanets', 'The asteroid belt', 'Comets', 'Solar eclipses', 'Lunar phases', 'Mars', 'Jupiter', 'Saturn rings', 'Venus', 'Mercury', 'The Kuiper Belt', 'Nebulae', 'Galaxy clusters', 'Stellar nurseries', 'Supernovae', 'Pulsars', 'Dark matter', 'Space telescopes', 'Orbital mechanics'],
  math: ['Prime numbers', 'Fractions', 'Negative numbers', 'Geometry', 'Trigonometry', 'Calculus', 'Statistics', 'Combinatorics', 'Graph theory', 'Set theory', 'Logic gates', 'Symmetry', 'Fibonacci numbers', 'Probability', 'Vectors', 'Matrices', 'Algorithms', 'Topology', 'Game theory', 'Measurement'],
  civics: ['Freedom of expression', 'Due process', 'Equal protection', 'Consumer rights', 'Labor rights', 'Data privacy', 'Environmental rights', 'Access to information', 'Disability inclusion', 'Senior citizens', 'Children rights', 'Indigenous peoples', 'Women rights', 'Public records', 'Legal aid', 'Peaceful assembly', 'Fair elections', 'Community participation', 'Human dignity', 'Civic responsibility'],
  world: ['Time zones', 'Rivers', 'Deserts', 'Mountain ranges', 'Rainforests', 'Island nations', 'World heritage sites', 'Map projections', 'International borders', 'Ancient trade routes', 'Writing origins', 'Global cuisines', 'Ocean currents', 'Arctic regions', 'Antarctica', 'Earth population', 'Languages of the world', 'Global festivals', 'Major canals', 'Geographic coordinates']
};

const lenses = [
  'What it means',
  'How it works',
  'Why it matters',
  'A historical view',
  'A practical connection',
  'A question to explore'
];

const topicDefinitions: Record<string, string> = {
  'The Milky Way': 'The Milky Way is the spiral-shaped galaxy that contains our Sun, Earth, and billions of other stars.',
  Exoplanets: 'Exoplanets are planets that orbit stars outside our Solar System.',
  'The asteroid belt': 'The asteroid belt is a wide region between Mars and Jupiter filled with rocky objects left over from the Solar System\'s formation.',
  Comets: 'Comets are icy space objects that release gas and dust to form a glowing cloud and tail when they approach the Sun.',
  'Solar eclipses': 'A solar eclipse happens when the Moon passes between Earth and the Sun and blocks some or all of the sunlight.',
  'Lunar phases': 'Lunar phases are the changing shapes of the Moon\'s sunlit half that we see from Earth during its orbit.',
  Mars: 'Mars is a cold, rocky planet with a thin atmosphere, iron-rich soil, polar ice, and evidence of ancient flowing water.',
  Jupiter: 'Jupiter is the largest planet in our Solar System and is a gas giant made mostly of hydrogen and helium.',
  'Saturn rings': 'Saturn\'s rings are countless pieces of ice and rock orbiting the planet in thin, wide bands.',
  Venus: 'Venus is a rocky planet covered by a thick carbon-dioxide atmosphere that makes its surface hotter than any other planet.',
  Mercury: 'Mercury is the smallest planet and the closest planet to the Sun, with extreme temperature changes between day and night.',
  'The Kuiper Belt': 'The Kuiper Belt is a distant ring of icy objects beyond Neptune, including dwarf planets such as Pluto.',
  Nebulae: 'Nebulae are enormous clouds of gas and dust in space. Some are places where new stars form, while others are the remains of dying stars.',
  'Galaxy clusters': 'Galaxy clusters are groups of hundreds or thousands of galaxies held together by gravity.',
  'Stellar nurseries': 'Stellar nurseries are dense parts of nebulae where gas and dust collapse under gravity to make new stars.',
  Supernovae: 'A supernova is a powerful stellar explosion that happens when a massive star dies or a white dwarf is destroyed.',
  Pulsars: 'Pulsars are rapidly spinning neutron stars that send regular beams of radio waves and other radiation toward space.',
  'Dark matter': 'Dark matter is invisible matter that does not emit light but whose gravity helps hold galaxies together.',
  'Space telescopes': 'Space telescopes are instruments above Earth\'s atmosphere that collect clearer images and signals from distant objects.',
  'Orbital mechanics': 'Orbital mechanics is the study of how gravity controls the paths of planets, moons, satellites, and spacecraft.'
};

const categoryDefinitions: Record<FactCategory, string> = {
  ph_gov: 'a subject about how Philippine government institutions make decisions and serve the public',
  ph_agency: 'a Philippine government agency, its responsibility, or a public service',
  filipino: 'a part of Philippine history, culture, language, or heritage',
  banks_finance: 'an idea about money, saving, borrowing, investing, or financial decisions',
  myths_debunked: 'a common claim that can be checked against scientific evidence',
  biology_animals: 'an idea about living things, animals, plants, or how bodies work',
  chemistry_nutrition: 'an idea about matter, chemical reactions, food, or nutrients',
  tech_ai: 'an idea about computers, digital tools, artificial intelligence, or online safety',
  forensics_psych: 'an idea about human behavior, thinking, evidence, or criminal investigation',
  arts_colors: 'an idea about visual art, design, music, film, or creative expression',
  language_english: 'an idea about how people create, use, and understand language',
  science: 'an idea about the natural world and the evidence used to understand it',
  galaxy: 'an object, event, or process in space',
  math: 'an idea used to describe numbers, patterns, shapes, chance, or logical relationships',
  civics: 'a right, responsibility, or rule that helps people participate fairly in society',
  world: 'a place, feature, or pattern found on Earth'
};

const makeTopicFacts = (category: FactCategory, topicList: string[]): Fact[] =>
  topicList.flatMap((topic, topicIndex) => lenses.map((lens, lensIndex) => ({
    id: `catalog-${category}-${topicIndex + 1}-${lensIndex + 1}`,
    title: `${topic}: ${lens}`,
    category,
    simpleDefinition: topicDefinitions[topic] || `${topic} is ${categoryDefinitions[category]}.`,
    digest: topicDefinitions[topic] || `${topic} is ${categoryDefinitions[category]}.`,
    deepDive: `${topicDefinitions[topic] || `${topic} is ${categoryDefinitions[category]}.`} The ${lens.toLowerCase()} view helps connect this idea to real examples and everyday decisions.`,
    funFact: `A good way to investigate ${topic} is to compare a primary source with a trusted reference work.`,
    citation: 'General reference entry; verify current details with the cited field authority',
    tags: [topic, category.replaceAll('_', ' ')]
  })));

const makeAgencyFacts = (): Fact[] => PHILIPPINE_AGENCIES.flatMap((agency, agencyIndex) => [
  ['mandate', `What ${agency.acronym} does`, agency.mandate],
  ['services', `${agency.acronym} services citizens use`, agency.keyServices.join('; ')],
  ['history', `${agency.acronym} and its legal foundation`, `It was established in ${agency.establishedYear} under ${agency.legalBasis}.`],
  ['quick', `${agency.acronym}: a Philippine government acronym`, agency.funFact]
].map(([kind, title, detail], detailIndex) => ({
  id: `agency-catalog-${agencyIndex + 1}-${kind}`,
  title,
  category: 'ph_agency' as const,
  digest: `${agency.fullName} (${agency.acronym}) is a ${agency.sector.toLowerCase()} institution. ${detail}`,
  deepDive: `${agency.mandate} Key public services include ${agency.keyServices.join(', ')}.`,
  funFact: agency.funFact,
  pronunciation: agency.pronunciation,
  citation: agency.legalBasis,
  acronymDetails: {
    code: agency.acronym,
    standsFor: agency.fullName,
    filipinoTitle: agency.filipinoName,
    mandate: agency.mandate
  },
  audioNarrative: `${agency.acronym} stands for ${agency.fullName}. ${agency.mandate}`,
  tags: [agency.acronym, agency.sector, kind]
})));

export const EXPANDED_FACTS: Fact[] = [
  ...Object.entries(subjects).flatMap(([category, topicList]) => makeTopicFacts(category as FactCategory, topicList)),
  ...makeAgencyFacts()
];