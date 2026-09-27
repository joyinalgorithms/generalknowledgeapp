export type CategoryId = 
  | 'all'
  | 'ph_gov'
  | 'ph_agency'
  | 'filipino'
  | 'banks_finance'
  | 'myths_debunked'
  | 'science'
  | 'galaxy'
  | 'math'
  | 'tech_ai'
  | 'forensics_psych'
  | 'biology_animals'
  | 'chemistry_nutrition'
  | 'arts_colors'
  | 'language_english'
  | 'world'
  | 'civics';

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  shortLabel: string;
  icon: string;
  description: string;
}

export interface GovernmentAgency {
  id: string;
  acronym: string;
  fullName: string;
  filipinoName: string;
  pronunciation: string;
  sector: 'Infrastructure' | 'Health & Welfare' | 'Economy & Finance' | 'Science & Tech' | 'Education' | 'Security & Defense' | 'Governance & Integrity' | 'Foreign Affairs' | 'Banking & Central Reserve';
  mandate: string;
  keyServices: string[];
  establishedYear: number;
  legalBasis: string;
  funFact: string;
  audioText: string;
}

export interface Fact {
  id: string;
  title: string;
  category: Exclude<CategoryId, 'all'>;
  digest: string;
  deepDive: string;
  funFact?: string;
  pronunciation?: string;
  citation: string;
  acronymDetails?: {
    code: string;
    standsFor: string;
    filipinoTitle?: string;
    mandate: string;
  };
  audioNarrative?: string;
  image?: string;
  tags: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  category: Exclude<CategoryId, 'all'>;
  options: string[];
  correctIndex: number;
  explanation: string;
  factIdRef?: string;
}

export interface QuizScoreEntry {
  id: string;
  timestamp: number;
  dateStr: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  categoryMode: string;
  weekKey: string; // e.g., "2026-W39"
}

export interface WeeklyScoreSummary {
  weekKey: string;
  weekLabel: string;
  attemptsCount: number;
  averagePercentage: number;
  highestPercentage: number;
  totalCorrect: number;
  totalQuestions: number;
  history: QuizScoreEntry[];
}
