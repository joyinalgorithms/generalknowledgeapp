import { FACTS } from '../data/facts';
import { Fact } from '../types';

function getDateKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function getCategoryIndex(date: Date, categories: string[]): number {
  const rawIndex = hashString(`${getDateKey(date)}:category`) % categories.length;
  if (categories.length < 2) return rawIndex;

  const previousDate = new Date(date);
  previousDate.setDate(previousDate.getDate() - 1);
  const previousIndex = hashString(`${getDateKey(previousDate)}:category`) % categories.length;
  return rawIndex === previousIndex ? (rawIndex + 1) % categories.length : rawIndex;
}

export function getDailyFact(offsetDays: number = 0): { fact: Fact; dateLabel: string } {
  const now = new Date();
  if (offsetDays !== 0) {
    now.setDate(now.getDate() + offsetDays);
  }

  const factsByCategory = FACTS.reduce<Record<string, Fact[]>>((groups, fact) => {
    (groups[fact.category] ??= []).push(fact);
    return groups;
  }, {});
  const categories = Object.keys(factsByCategory);
  const category = categories[getCategoryIndex(now, categories)];
  const categoryFacts = factsByCategory[category] ?? FACTS;
  const factIndex = hashString(`${getDateKey(now)}:fact`) % categoryFacts.length;
  const fact = categoryFacts[factIndex] || FACTS[0];

  const dateLabel = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return { fact, dateLabel };
}
