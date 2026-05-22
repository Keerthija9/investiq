// Quiz scores users across four dimensions:
// - horizon: short-term <-> long-term
// - risk: cautious <-> aggressive
// - involvement: passive <-> active
// - focus: traditional <-> alternative

export type Dimension = 'horizon' | 'risk' | 'involvement' | 'focus';

export interface QuizOption {
  label: string;
  scores: Partial<Record<Dimension, number>>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  hint?: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'experience',
    question: 'How would you describe your investing experience?',
    hint: 'Be honest — there are no wrong answers.',
    options: [
      { label: "I'm just curious — never invested", scores: { involvement: -1, risk: -1 } },
      { label: 'I have a savings account or 401(k)', scores: { involvement: -1 } },
      { label: 'I own some stocks or funds', scores: { involvement: 0 } },
      { label: "I trade actively or follow markets daily", scores: { involvement: 2, risk: 1 } },
    ],
  },
  {
    id: 'timeframe',
    question: 'How long would you let money stay invested before touching it?',
    options: [
      { label: 'Less than 1 year', scores: { horizon: -2 } },
      { label: '1 to 5 years', scores: { horizon: -1 } },
      { label: '5 to 15 years', scores: { horizon: 1 } },
      { label: 'Decades — retirement or generational', scores: { horizon: 2 } },
    ],
  },
  {
    id: 'drop',
    question: 'Your portfolio drops 30% in a month. What do you do?',
    options: [
      { label: 'Sell everything to stop the bleeding', scores: { risk: -2 } },
      { label: 'Sell some and reassess', scores: { risk: -1 } },
      { label: 'Hold and ride it out', scores: { risk: 1, horizon: 1 } },
      { label: 'Buy more while prices are low', scores: { risk: 2 } },
    ],
  },
  {
    id: 'goal',
    question: 'What outcome would you be happiest with in 10 years?',
    options: [
      { label: 'Preserved my money against inflation', scores: { risk: -1, horizon: 1 } },
      { label: 'Steady, predictable growth', scores: { risk: 0, horizon: 1 } },
      { label: 'Significantly outpaced the market', scores: { risk: 2, involvement: 1 } },
      { label: 'Generated passive income I can live on', scores: { involvement: -1, horizon: 1 } },
    ],
  },
  {
    id: 'interest',
    question: 'Which of these excites you most?',
    options: [
      { label: 'Index funds and slow compounding', scores: { focus: -2, involvement: -1 } },
      { label: 'Dividend-paying blue-chip stocks', scores: { focus: -1 } },
      { label: 'Picking growth stocks and tech companies', scores: { focus: 1, involvement: 1 } },
      { label: 'Crypto, options, or alternative assets', scores: { focus: 2, risk: 1 } },
    ],
  },
  {
    id: 'time-spent',
    question: 'How much time do you want to spend on this per week?',
    options: [
      { label: 'Set it and forget it', scores: { involvement: -2 } },
      { label: 'A check-in every month or so', scores: { involvement: -1 } },
      { label: 'A few hours a week', scores: { involvement: 1 } },
      { label: "It's basically a hobby", scores: { involvement: 2 } },
    ],
  },
  {
    id: 'learning',
    question: 'How do you prefer to learn new topics?',
    options: [
      { label: 'Short videos and podcasts', scores: {} },
      { label: 'Long-form articles and books', scores: {} },
      { label: 'Interactive apps and simulators', scores: {} },
      { label: 'Communities and discussion', scores: {} },
    ],
  },
];
