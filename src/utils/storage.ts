import { QuizScoreEntry, WeeklyScoreSummary } from '../types';

const BOOKMARKS_STORAGE_KEY = 'alamin_bookmarks_v1';
const QUIZ_SCORES_STORAGE_KEY = 'alamin_quiz_scores_v1';
const THEME_STORAGE_KEY = 'alamin_theme_v1';

// --- Bookmarks Management ---
export function getSavedBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleSavedBookmark(id: string): string[] {
  const current = getSavedBookmarks();
  const exists = current.includes(id);
  const updated = exists ? current.filter(item => item !== id) : [...current, id];
  try {
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
  return updated;
}

// --- Theme Management ---
export function getStoredTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === 'light' || raw === 'dark') return raw;
  } catch {
    // fallback
  }
  return 'dark'; // Default to sleek black and gold
}

export function setStoredTheme(theme: 'dark' | 'light'): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

// --- ISO Week Calculation ---
export function getWeekKey(date: Date = new Date()): string {
  const target = new Date(date.valueOf());
  const dayNumber = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNumber + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  const weekNumber = 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000);
  const year = new Date(firstThursday).getFullYear();
  return `${year}-W${String(weekNumber).padStart(2, '0')}`;
}

export function formatWeekLabel(weekKey: string): string {
  const parts = weekKey.split('-W');
  if (parts.length !== 2) return weekKey;
  const year = parseInt(parts[0], 10);
  const week = parseInt(parts[1], 10);

  // Compute approximate start date of that ISO week
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const dow = simple.getDay();
  const isoWeekStart = simple;
  if (dow <= 4) {
    isoWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
  } else {
    isoWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
  }

  const isoWeekEnd = new Date(isoWeekStart);
  isoWeekEnd.setDate(isoWeekEnd.getDate() + 6);

  const startMonth = isoWeekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const endMonth = isoWeekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return `Week ${week} (${startMonth} – ${endMonth}, ${year})`;
}

// --- Quiz Scores & Weekly Tracking ---
export function getStoredQuizScores(): QuizScoreEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(QUIZ_SCORES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuizScore(entry: Omit<QuizScoreEntry, 'id' | 'timestamp' | 'dateStr' | 'weekKey' | 'percentage'>): QuizScoreEntry {
  const now = new Date();
  const percentage = Math.round((entry.score / Math.max(1, entry.totalQuestions)) * 100);
  const newEntry: QuizScoreEntry = {
    ...entry,
    id: `quiz-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: now.getTime(),
    dateStr: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    percentage,
    weekKey: getWeekKey(now)
  };

  const current = getStoredQuizScores();
  const updated = [newEntry, ...current];
  try {
    localStorage.setItem(QUIZ_SCORES_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }

  return newEntry;
}

export function getWeeklySummaries(): WeeklyScoreSummary[] {
  const scores = getStoredQuizScores();
  const groupedByWeek: Record<string, QuizScoreEntry[]> = {};

  // Group scores by weekKey
  scores.forEach(score => {
    if (!groupedByWeek[score.weekKey]) {
      groupedByWeek[score.weekKey] = [];
    }
    groupedByWeek[score.weekKey].push(score);
  });

  // Ensure current week is present even if no scores yet
  const currentWeekKey = getWeekKey(new Date());
  if (!groupedByWeek[currentWeekKey]) {
    groupedByWeek[currentWeekKey] = [];
  }

  const weekKeys = Object.keys(groupedByWeek).sort().reverse();

  return weekKeys.map(key => {
    const list = groupedByWeek[key];
    const attemptsCount = list.length;
    const totalCorrect = list.reduce((acc, curr) => acc + curr.score, 0);
    const totalQuestions = list.reduce((acc, curr) => acc + curr.totalQuestions, 0);
    const averagePercentage = attemptsCount > 0
      ? Math.round(list.reduce((acc, curr) => acc + curr.percentage, 0) / attemptsCount)
      : 0;
    const highestPercentage = attemptsCount > 0
      ? Math.max(...list.map(s => s.percentage))
      : 0;

    return {
      weekKey: key,
      weekLabel: formatWeekLabel(key),
      attemptsCount,
      averagePercentage,
      highestPercentage,
      totalCorrect,
      totalQuestions,
      history: list
    };
  });
}
