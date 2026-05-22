export interface Tip {
  text: string;
  attribution?: string;
}

export const dailyTips: Tip[] = [
  {
    text: "Time in the market beats timing the market.",
    attribution: 'old investing adage',
  },
  {
    text: "Your behavior matters more than your portfolio. Panic-selling in a crash can erase years of gains.",
  },
  {
    text: "Fees compound too. A 1% annual fee can eat 25%+ of your lifetime returns.",
  },
  {
    text: "If you don't understand an investment, you don't own it — it owns you.",
    attribution: 'Warren Buffett, paraphrased',
  },
  {
    text: "Diversification means owning things that don't all move together — not just owning a lot of things.",
  },
  {
    text: "An emergency fund is the foundation. Invest only after you have 3-6 months of expenses set aside.",
  },
  {
    text: "The stock market is a device for transferring money from the impatient to the patient.",
    attribution: 'Warren Buffett',
  },
  {
    text: "Past performance doesn't predict future results — but the future tends to ruin yesterday's winners.",
  },
  {
    text: "Risk and return are linked. If something offers high returns with no risk, it's either a misunderstanding or a scam.",
  },
  {
    text: "Dollar-cost averaging works because you buy more shares when prices are low and fewer when they're high.",
  },
  {
    text: "Read the prospectus. The boring document tells you what you actually own.",
  },
  {
    text: "Tax-advantaged accounts (401k, IRA) often beat any clever stock pick in a regular account.",
  },
  {
    text: "Your time horizon matters more than your stock picks. A 30-year investor can ride out crashes that wreck short-term traders.",
  },
  {
    text: "The 'sleep test' is real: if an investment keeps you up at night, you're holding too much of it.",
  },
  {
    text: "Most active fund managers underperform a simple index fund over long periods.",
  },
  {
    text: "Don't confuse a bull market for brilliance. Wait for a downturn to see who actually has a strategy.",
  },
  {
    text: "Compound interest doesn't feel like much in year three. It feels like magic in year thirty.",
  },
  {
    text: "Every investment carries some risk — even cash, which loses to inflation over time.",
  },
  {
    text: "If a strategy was truly foolproof and easy, everyone would already be doing it and the edge would be gone.",
  },
  {
    text: "Boring is profitable. The most successful long-term investors look almost asleep.",
  },
];

export function getTipForDay(date: Date = new Date()): Tip {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyTips[dayOfYear % dailyTips.length];
}
