import { PersonaId } from './personas';

export type ResourceType = 'book' | 'video' | 'podcast' | 'article' | 'app' | 'course';

export interface Resource {
  title: string;
  source: string;
  type: ResourceType;
  description: string;
  url?: string;
  free: boolean;
}

// Curated picks per persona. All publicly available, reputable sources.
// No affiliate links, no paid promotion — pure education.
export const recommendations: Record<PersonaId, Resource[]> = {
  'patient-gardener': [
    {
      title: 'The Little Book of Common Sense Investing',
      source: 'John C. Bogle',
      type: 'book',
      description: 'The case for low-cost index investing from the founder of Vanguard.',
      free: false,
    },
    {
      title: 'Bogleheads Wiki',
      source: 'bogleheads.org',
      type: 'article',
      description: 'Community-maintained encyclopedia of long-term passive investing.',
      url: 'https://www.bogleheads.org/wiki/Main_Page',
      free: true,
    },
    {
      title: 'Ben Felix on YouTube',
      source: 'YouTube',
      type: 'video',
      description: 'Evidence-based investing explainers, refreshingly hype-free.',
      url: 'https://www.youtube.com/@BenFelixCSI',
      free: true,
    },
    {
      title: 'Rational Reminder Podcast',
      source: 'Podcast',
      type: 'podcast',
      description: 'Deep dives into passive investing, behavioral finance, and academic research.',
      free: true,
    },
    {
      title: 'Investor.gov',
      source: 'U.S. SEC',
      type: 'article',
      description: "The SEC's free education hub. Trustworthy and clear.",
      url: 'https://www.investor.gov',
      free: true,
    },
  ],

  'steady-builder': [
    {
      title: 'The Simple Path to Wealth',
      source: 'JL Collins',
      type: 'book',
      description: 'A father-daughter framing of a complete investing philosophy.',
      free: false,
    },
    {
      title: 'Morningstar Investing Classroom',
      source: 'morningstar.com',
      type: 'course',
      description: 'Structured free lessons covering stocks, funds, and portfolio theory.',
      url: 'https://www.morningstar.com/start-investing',
      free: true,
    },
    {
      title: 'Plain Bagel YouTube channel',
      source: 'YouTube',
      type: 'video',
      description: 'A CFA explains personal finance and investing in plain language.',
      url: 'https://www.youtube.com/@ThePlainBagel',
      free: true,
    },
    {
      title: 'Animal Spirits Podcast',
      source: 'Podcast',
      type: 'podcast',
      description: 'Two advisors discuss markets, behavioral finance, and trends each week.',
      free: true,
    },
    {
      title: 'Khan Academy: Finance and Capital Markets',
      source: 'khanacademy.org',
      type: 'course',
      description: 'Free, foundational lessons on how markets actually work.',
      url: 'https://www.khanacademy.org/economics-finance-domain/core-finance',
      free: true,
    },
  ],

  'curious-explorer': [
    {
      title: 'A Random Walk Down Wall Street',
      source: 'Burton Malkiel',
      type: 'book',
      description: 'The classic introduction to how markets behave and why.',
      free: false,
    },
    {
      title: 'Investopedia',
      source: 'investopedia.com',
      type: 'article',
      description: 'Reference dictionary for every investing term you encounter.',
      url: 'https://www.investopedia.com',
      free: true,
    },
    {
      title: 'Investor.gov beginner guides',
      source: 'U.S. SEC',
      type: 'article',
      description: 'Plain-language guides to what investing is and how it works.',
      url: 'https://www.investor.gov/introduction-investing',
      free: true,
    },
    {
      title: 'How To Money Podcast',
      source: 'Podcast',
      type: 'podcast',
      description: 'Friendly, beginner-friendly conversations about personal finance.',
      free: true,
    },
    {
      title: 'Investopedia Simulator',
      source: 'investopedia.com',
      type: 'app',
      description: 'Practice trading with virtual money before risking real money.',
      url: 'https://www.investopedia.com/simulator',
      free: true,
    },
  ],

  'active-strategist': [
    {
      title: 'The Intelligent Investor',
      source: 'Benjamin Graham',
      type: 'book',
      description: 'The foundational text of value investing. Dense but essential.',
      free: false,
    },
    {
      title: "Aswath Damodaran's YouTube channel",
      source: 'YouTube',
      type: 'video',
      description: 'NYU finance professor teaches valuation at a level you cannot get elsewhere for free.',
      url: 'https://www.youtube.com/@AswathDamodaranonValuation',
      free: true,
    },
    {
      title: 'SEC EDGAR',
      source: 'sec.gov',
      type: 'article',
      description: 'Read company filings directly — 10-Ks, 10-Qs, proxy statements.',
      url: 'https://www.sec.gov/edgar',
      free: true,
    },
    {
      title: 'Invest Like the Best',
      source: 'Podcast',
      type: 'podcast',
      description: 'Long-form interviews with investors, founders, and operators.',
      free: true,
    },
    {
      title: 'CFA Institute Refresher Readings',
      source: 'cfainstitute.org',
      type: 'course',
      description: 'Free selections from the CFA curriculum for serious learners.',
      url: 'https://www.cfainstitute.org',
      free: true,
    },
  ],

  'frontier-seeker': [
    {
      title: 'The Bitcoin Standard',
      source: 'Saifedean Ammous',
      type: 'book',
      description: 'A deep look at money, history, and the case for Bitcoin.',
      free: false,
    },
    {
      title: "Coin Bureau YouTube channel",
      source: 'YouTube',
      type: 'video',
      description: 'Balanced crypto education from a long-running, well-researched channel.',
      url: 'https://www.youtube.com/@CoinBureau',
      free: true,
    },
    {
      title: 'Bankless Podcast',
      source: 'Podcast',
      type: 'podcast',
      description: 'Weekly DeFi and crypto deep dives.',
      free: true,
    },
    {
      title: 'CFTC Customer Advisory: Spotting Crypto Scams',
      source: 'cftc.gov',
      type: 'article',
      description: 'Government-issued guide to recognizing common crypto fraud patterns.',
      url: 'https://www.cftc.gov/LearnAndProtect',
      free: true,
    },
    {
      title: 'CoinGecko Learn',
      source: 'coingecko.com',
      type: 'course',
      description: 'Free structured lessons on crypto basics and DeFi.',
      url: 'https://www.coingecko.com/learn',
      free: true,
    },
  ],
};
