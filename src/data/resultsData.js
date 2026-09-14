import casesData from '../casesData'

export const resultsData = {
  eyebrow: 'Proof, not promises',
  headline: 'Real Accounts.',
  headlineLine2: 'Real Growth.',
  lead: 'No vanity metrics. See what actually changed.',
  cases: [
    {
      metric: '+20%',
      copy: 'Sales growth',
      bold: 'Profit +36%',
      label: '01 Growth',
    },
    {
      metric: '-41%',
      copy: 'Lower ACoS',
      bold: 'ROAS +58%',
      label: '02 Efficiency',
    },
    {
      metric: '+114%',
      copy: 'Organic rank uplift',
      bold: 'Revenue 2.1×',
      label: '03 Momentum',
    },
  ],
  // Pull images from casesData if available
  getImage: (index) => casesData?.[index]?.img || null,
}
