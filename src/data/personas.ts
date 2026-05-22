import { Dimension } from './quiz';

export type PersonaId =
  | 'patient-gardener'
  | 'steady-builder'
  | 'curious-explorer'
  | 'active-strategist'
  | 'frontier-seeker';

export interface Persona {
  id: PersonaId;
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  watchouts: string[];
  focusAreas: string[];
  emoji: string;
}

export const personas: Record<PersonaId, Persona> = {
  'patient-gardener': {
    id: 'patient-gardener',
    name: 'The Patient Gardener',
    tagline: 'Slow and steady. Time is your edge.',
    description:
      "You believe in the power of compounding and aren't tempted by daily market noise. You'd rather plant good seeds and let them grow than chase the latest trend.",
    strengths: [
      'Naturally avoids panic selling',
      'Comfortable with simple, low-cost strategies',
      'Long time horizon works in your favor',
    ],
    watchouts: [
      'May miss opportunities by being too conservative',
      'Inflation risk on overly safe holdings',
    ],
    focusAreas: ['Index funds', 'Dollar-cost averaging', 'Tax-advantaged accounts', 'Bond basics'],
    emoji: '🌱',
  },
  'steady-builder': {
    id: 'steady-builder',
    name: 'The Steady Builder',
    tagline: 'Reliable growth. Real-world goals.',
    description:
      'You want investing to serve your life — a home, retirement, freedom. You favor proven companies and consistent strategies over speculation.',
    strengths: [
      'Clear goal-driven mindset',
      'Balanced risk tolerance',
      'Discipline with regular contributions',
    ],
    watchouts: [
      'Can over-diversify and dilute returns',
      'Watch fees on actively managed funds',
    ],
    focusAreas: ['Dividend stocks', 'ETF portfolios', 'Asset allocation', 'Retirement planning'],
    emoji: '🏛',
  },
  'curious-explorer': {
    id: 'curious-explorer',
    name: 'The Curious Explorer',
    tagline: 'Learning the map before the journey.',
    description:
      "You're new to this and want to understand things properly before committing. That's actually a superpower — most people learn the hard way.",
    strengths: [
      'Willing to learn fundamentals first',
      'Less likely to fall for hype',
      'Open to multiple strategies',
    ],
    watchouts: [
      'Analysis paralysis can delay starting',
      'Watch out for "guru" influencers selling certainty',
    ],
    focusAreas: ['Investing fundamentals', 'Market basics', 'How accounts work', 'Risk literacy'],
    emoji: '🧭',
  },
  'active-strategist': {
    id: 'active-strategist',
    name: 'The Active Strategist',
    tagline: 'Engaged. Researched. Hands-on.',
    description:
      "You enjoy the craft of investing — researching companies, reading earnings, building conviction. You're willing to do the work for potential outperformance.",
    strengths: [
      'Deep research mindset',
      'Comfortable with concentrated positions',
      'Stays informed on markets',
    ],
    watchouts: [
      'Overconfidence is a real risk',
      'Trading costs and taxes can eat returns',
      'Beware of mistaking activity for progress',
    ],
    focusAreas: ['Fundamental analysis', 'Valuation methods', 'Sector research', 'Behavioral finance'],
    emoji: '📊',
  },
  'frontier-seeker': {
    id: 'frontier-seeker',
    name: 'The Frontier Seeker',
    tagline: 'High conviction. High volatility. High learning curve.',
    description:
      "You're drawn to what's new — crypto, emerging tech, alternative assets. The upside is real but so is the risk. Knowledge is your safety net here.",
    strengths: [
      'Comfortable with new technology',
      'High tolerance for volatility',
      'Quick to learn evolving markets',
    ],
    watchouts: [
      'Speculative assets can go to zero',
      'Scams and rug-pulls target this space',
      'Position sizing matters more than ever',
    ],
    focusAreas: ['Crypto fundamentals', 'Risk management', 'Position sizing', 'Spotting scams'],
    emoji: '🛰',
  },
};

interface Scores {
  horizon: number;
  risk: number;
  involvement: number;
  focus: number;
}

export function scoresToPersona(scores: Scores): PersonaId {
  // Highly speculative / alternative focus
  if (scores.focus >= 2 && scores.risk >= 1) return 'frontier-seeker';

  // Active and engaged
  if (scores.involvement >= 2) return 'active-strategist';

  // New / cautious / curious
  if (scores.involvement <= -1 && scores.risk <= 0) {
    return scores.horizon >= 1 ? 'patient-gardener' : 'curious-explorer';
  }

  // Long-horizon, low involvement = gardener
  if (scores.horizon >= 1 && scores.involvement <= 0) return 'patient-gardener';

  // Default — steady middle
  return 'steady-builder';
}

export function tallyScores(answers: Array<Partial<Record<Dimension, number>>>): Scores {
  const totals: Scores = { horizon: 0, risk: 0, involvement: 0, focus: 0 };
  for (const a of answers) {
    for (const key of Object.keys(a) as Dimension[]) {
      totals[key] += a[key] ?? 0;
    }
  }
  return totals;
}
