import { FACTS } from '../data/facts';
import { Fact } from '../types';

export function getDailyFact(offsetDays: number = 0): { fact: Fact; dateLabel: string } {
  const now = new Date();
  if (offsetDays !== 0) {
    now.setDate(now.getDate() + offsetDays);
  }

  // Use calendar dates in UTC so daylight-saving changes cannot repeat a fact.
  const currentDate = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfYear = Date.UTC(now.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

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
