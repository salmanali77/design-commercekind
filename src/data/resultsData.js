import casesData from '../casesData'

export const resultsData = {
  eyebrow: 'Proof, not promises',
  headline: 'Before & After: Real Creative and PPC Results',
  lead: 'No vanity metrics. See verified Amazon account performance before and after optimization.',
  cases: [
    {
      metric: '+356%',
      title: 'Real Creative & PPC Results',
      copy: 'CTR & Conversion Surge<br><b>Sales $44.6K · NTB Orders 88.3%</b>',
      label: '01 Creative & PPC',
      tag: 'Creative & PPC Lift',
      source: 'Amazon Ads & Brand Analytics',
      img: '/images/results-chart.png',
    },
    {
      metric: '+20%',
      title: 'Sales & Profit Scale',
      copy: 'Consistent Sales Growth<br><b>Net Profit +36%</b>',
      label: '02 Sales Scale',
      tag: 'Account Growth',
      source: 'Amazon Seller Central',
      img: casesData?.[0]?.img || null,
    },
    {
      metric: '-41%',
      title: 'ACoS Efficiency',
      copy: 'Lower Target ACoS<br><b>ROAS Increased +58%</b>',
      label: '03 Efficiency',
      tag: 'PPC Optimization',
      source: 'Amazon Advertising Console',
      img: casesData?.[1]?.img || null,
    },
    {
      metric: '+114%',
      title: 'Organic Search Dominance',
      copy: 'Organic Rank Uplift<br><b>Overall Revenue Multiplied 2.1×</b>',
      label: '04 Momentum',
      tag: 'SEO & Ranking',
      source: 'Amazon Brand Analytics',
      img: casesData?.[2]?.img || null,
    },
  ],
}

