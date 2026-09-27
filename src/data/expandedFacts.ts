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

const makeTopicFacts = (category: FactCategory, topicList: string[]): Fact[] =>
  topicList.flatMap((topic, topicIndex) => lenses.map((lens, lensIndex) => ({
    id: `catalog-${category}-${topicIndex + 1}-${lensIndex + 1}`,
    title: `${topic}: ${lens}`,
    category,
    digest: `${topic} is a useful subject in ${category.replaceAll('_', ' ')}. This entry highlights ${lens.toLowerCase()} so the idea can be reviewed from a different angle.`,
    deepDive: `Explore ${topic} by connecting its definition, evidence, examples, and everyday relevance. Comparing these details helps build durable knowledge instead of relying on a single isolated statement.`,
    funFact: `A good way to investigate ${topic} is to compare a primary source with a trusted reference work.`,
    citation: 'General reference entry; verify current details with the cited field authority',
    audioNarrative: `Did you know? This entry explores ${topic}, focusing on ${lens.toLowerCase()}.`,
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