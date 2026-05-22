export interface GlossaryTerm {
  term: string;
  category: 'basics' | 'stocks' | 'funds' | 'analysis' | 'crypto' | 'risk' | 'tax';
  definition: string;
  example?: string;
}

export const glossary: GlossaryTerm[] = [
  // Basics
  {
    term: 'Asset',
    category: 'basics',
    definition: 'Anything you own that has economic value — stocks, bonds, cash, real estate, even art.',
  },
  {
    term: 'Liability',
    category: 'basics',
    definition: "What you owe — debts, loans, mortgages. The opposite of an asset.",
  },
  {
    term: 'Portfolio',
    category: 'basics',
    definition: 'The complete collection of investments you own.',
    example: 'A portfolio of 60% stocks, 30% bonds, and 10% cash.',
  },
  {
    term: 'Diversification',
    category: 'basics',
    definition: "Spreading investments across different assets so one bad outcome doesn't wreck you.",
    example: "Don't put your whole portfolio in a single stock.",
  },
  {
    term: 'Compound Interest',
    category: 'basics',
    definition: 'Earning returns on both your original money and on past returns. The engine of long-term wealth.',
  },
  {
    term: 'Inflation',
    category: 'basics',
    definition: 'The general rise in prices over time, which erodes purchasing power.',
  },
  {
    term: 'Liquidity',
    category: 'basics',
    definition: 'How quickly an asset can be turned into cash without losing value.',
    example: "Cash is highly liquid; a house isn't.",
  },
  {
    term: 'Bull Market',
    category: 'basics',
    definition: 'A sustained period when prices are rising — generally a 20%+ climb.',
  },
  {
    term: 'Bear Market',
    category: 'basics',
    definition: 'A sustained period when prices fall 20% or more from recent highs.',
  },
  {
    term: 'Volatility',
    category: 'basics',
    definition: 'How much an investment swings in price. High volatility = bigger swings.',
  },

  // Stocks
  {
    term: 'Stock',
    category: 'stocks',
    definition: 'A share of ownership in a public company.',
  },
  {
    term: 'Dividend',
    category: 'stocks',
    definition: 'A cash payment a company sends to shareholders, usually quarterly.',
  },
  {
    term: 'Market Cap',
    category: 'stocks',
    definition: "Total value of a company's shares. Share price × number of shares.",
    example: 'A $50 stock with 1 billion shares has a $50 billion market cap.',
  },
  {
    term: 'Blue Chip',
    category: 'stocks',
    definition: 'Large, established, financially solid companies. Generally lower risk.',
  },
  {
    term: 'IPO',
    category: 'stocks',
    definition: 'Initial Public Offering — when a private company first sells shares to the public.',
  },
  {
    term: 'Stock Split',
    category: 'stocks',
    definition: "A company issues more shares so each one costs less. Doesn't change total value.",
  },
  {
    term: 'Earnings',
    category: 'stocks',
    definition: "A company's profit, usually reported every quarter.",
  },
  {
    term: 'Penny Stock',
    category: 'stocks',
    definition: 'Very low-priced stocks of small companies. Often illiquid and risky.',
  },
  {
    term: 'Short Selling',
    category: 'stocks',
    definition: "Betting a stock's price will fall by borrowing and selling shares, then buying back cheaper.",
  },
  {
    term: 'Ticker Symbol',
    category: 'stocks',
    definition: "Short code that identifies a stock on an exchange.",
    example: 'AAPL for Apple, MSFT for Microsoft.',
  },

  // Funds
  {
    term: 'Mutual Fund',
    category: 'funds',
    definition: "A pooled investment managed by a professional, priced once per day.",
  },
  {
    term: 'ETF',
    category: 'funds',
    definition: "Exchange-Traded Fund — a basket of investments that trades like a stock.",
  },
  {
    term: 'Index Fund',
    category: 'funds',
    definition: 'A fund that tracks a market index like the S&P 500 instead of trying to beat it.',
  },
  {
    term: 'Expense Ratio',
    category: 'funds',
    definition: 'Annual fee a fund charges, expressed as a % of your investment. Lower is better.',
    example: '0.03% means $3 per year on $10,000 invested.',
  },
  {
    term: 'Bond',
    category: 'funds',
    definition: 'A loan you make to a government or company in exchange for interest payments.',
  },
  {
    term: 'REIT',
    category: 'funds',
    definition: 'Real Estate Investment Trust — invest in real estate without buying property directly.',
  },
  {
    term: 'Asset Allocation',
    category: 'funds',
    definition: 'How you divide your portfolio across stocks, bonds, cash, and other assets.',
  },
  {
    term: 'Rebalancing',
    category: 'funds',
    definition: 'Periodically adjusting your portfolio back to its target allocation.',
  },

  // Analysis
  {
    term: 'P/E Ratio',
    category: 'analysis',
    definition: 'Price-to-Earnings — share price divided by earnings per share. Rough gauge of how expensive a stock is.',
  },
  {
    term: 'EPS',
    category: 'analysis',
    definition: "Earnings Per Share — a company's profit divided by its outstanding shares.",
  },
  {
    term: 'ROE',
    category: 'analysis',
    definition: "Return on Equity — how well a company uses shareholder money to generate profit.",
  },
  {
    term: 'Free Cash Flow',
    category: 'analysis',
    definition: 'Cash a company generates after capital expenses. A key sign of business health.',
  },
  {
    term: 'Fundamental Analysis',
    category: 'analysis',
    definition: "Evaluating a company's underlying business, financials, and prospects.",
  },
  {
    term: 'Technical Analysis',
    category: 'analysis',
    definition: 'Predicting price moves by studying charts and trading patterns.',
  },
  {
    term: 'Moat',
    category: 'analysis',
    definition: 'A durable competitive advantage that protects a company from rivals.',
    example: "Network effects, patents, brand loyalty, or scale.",
  },
  {
    term: 'Dollar-Cost Averaging',
    category: 'analysis',
    definition: 'Investing a fixed amount on a schedule regardless of price. Smooths out volatility.',
  },

  // Risk
  {
    term: 'Risk Tolerance',
    category: 'risk',
    definition: 'How much loss and volatility you can stomach without panicking.',
  },
  {
    term: 'Drawdown',
    category: 'risk',
    definition: "How far an investment has fallen from its peak.",
    example: 'A 40% drawdown means it dropped 40% from its high.',
  },
  {
    term: 'Standard Deviation',
    category: 'risk',
    definition: 'A statistical measure of how much returns vary. Used as a proxy for risk.',
  },
  {
    term: 'Beta',
    category: 'risk',
    definition: 'How much a stock moves relative to the overall market. Beta of 1.5 = 50% more volatile than the market.',
  },
  {
    term: 'Margin',
    category: 'risk',
    definition: 'Borrowed money used to buy investments. Amplifies both gains and losses.',
  },
  {
    term: 'Stop Loss',
    category: 'risk',
    definition: 'An order that sells automatically if price drops to a set level.',
  },
  {
    term: 'Position Sizing',
    category: 'risk',
    definition: 'Deciding how much of your portfolio to put into any single investment.',
  },

  // Crypto
  {
    term: 'Blockchain',
    category: 'crypto',
    definition: 'A distributed digital ledger that records transactions across many computers.',
  },
  {
    term: 'Wallet',
    category: 'crypto',
    definition: 'Software or hardware that stores your crypto keys.',
  },
  {
    term: 'Private Key',
    category: 'crypto',
    definition: "The secret code that proves you own crypto. Lose it and the funds are gone.",
  },
  {
    term: 'DeFi',
    category: 'crypto',
    definition: "Decentralized Finance — financial services built on blockchain without traditional intermediaries.",
  },
  {
    term: 'Stablecoin',
    category: 'crypto',
    definition: 'A cryptocurrency designed to hold a stable value, usually pegged to the U.S. dollar.',
  },
  {
    term: 'Gas Fees',
    category: 'crypto',
    definition: 'Transaction costs paid to process activity on a blockchain like Ethereum.',
  },
  {
    term: 'NFT',
    category: 'crypto',
    definition: 'Non-Fungible Token — a unique digital asset recorded on a blockchain.',
  },
  {
    term: 'Rug Pull',
    category: 'crypto',
    definition: 'A scam where creators abandon a crypto project and run off with investors\' money.',
  },

  // Tax
  {
    term: 'Capital Gains',
    category: 'tax',
    definition: 'Profit from selling an investment for more than you paid.',
  },
  {
    term: 'Short-Term vs. Long-Term Gains',
    category: 'tax',
    definition: 'Assets held under a year are taxed as ordinary income; over a year usually at lower rates (in the U.S.).',
  },
  {
    term: '401(k)',
    category: 'tax',
    definition: 'U.S. employer-sponsored retirement account with tax advantages.',
  },
  {
    term: 'IRA',
    category: 'tax',
    definition: 'Individual Retirement Account — a tax-advantaged account in the U.S.',
  },
  {
    term: 'Roth vs. Traditional',
    category: 'tax',
    definition: 'Roth: pay tax now, withdraw tax-free later. Traditional: deduct now, pay tax on withdrawal.',
  },
  {
    term: 'Tax-Loss Harvesting',
    category: 'tax',
    definition: 'Selling losing investments to offset taxable gains elsewhere.',
  },
  {
    term: 'Wash Sale',
    category: 'tax',
    definition: "Buying back a security within 30 days of selling it at a loss — the IRS disallows the tax deduction.",
  },
  {
    term: 'Cost Basis',
    category: 'tax',
    definition: 'What you originally paid for an investment, used to calculate gains or losses.',
  },
];
