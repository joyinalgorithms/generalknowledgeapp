import { FACTS } from '../data/facts';
import { Fact } from '../types';

export function getDailyFact(offsetDays: number = 0): { fact: Fact; dateLabel: string } {
  const now = new Date();
  if (offsetDays !== 0) {
    now.setDate(now.getDate() + offsetDays);
  }

  // Calculate day-of-year
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Deterministic seed
  const index = Math.abs(dayOfYear + (now.getFullYear() * 7)) % FACTS.length;
  const fact = FACTS[index] || FACTS[0];

  const dateLabel = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return { fact, dateLabel };
}
