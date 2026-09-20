// Placeholder newsroom. Replace with the CMS feed.
const img = (id) => import.meta.env.BASE_URL + 'photos/news-' + id + '.png';

export const news = [
  { id: 1, kind: 'Partnership', date: '12 August 2026', title: 'Placeholder partnership headline',   blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.' },
  { id: 2, kind: 'Company',     date: '30 July 2026',   title: 'Placeholder company announcement',   blurb: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' },
  { id: 3, kind: 'Insight',     date: '18 July 2026',   title: 'Placeholder reading-culture insight', blurb: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  { id: 4, kind: 'Event',       date: '02 July 2026',   title: 'Placeholder teacher workshop',        blurb: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
  { id: 5, kind: 'Investor',    date: '20 June 2026',   title: 'Placeholder investor update',         blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.' },
  { id: 6, kind: 'Insight',     date: '05 June 2026',   title: 'Placeholder curriculum explainer',    blurb: 'Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.' }
].map((n) => ({ ...n, imageUrl: img(n.id) }));

export const milestones = [
  ['1965', 'Incorporated as Longmans of Kenya, a wholly owned subsidiary of Longman Group International, operating as a sales promotion office for UK publications.'],
  ['1969', 'Renamed Longman Kenya Limited, laying the foundation for local publishing operations.'],
  ['1993', 'Renamed Longhorn Kenya Limited.'],
  ['1995', 'Longhorn Publishers Uganda incorporated — the first regional subsidiary and a key milestone in Pan-African growth.'],
  ['2005', 'Longhorn Publishers Tanzania Limited established for publishing and educational distribution.'],
  ['2009', 'Entered Rwanda, further strengthening the East African footprint.'],
  ['2012', 'Listed on the Nairobi Securities Exchange and renamed Longhorn Publishers Limited.'],
  ['2016', 'Expanded into professional and legal publishing through a majority stake in LawAfrica.'],
  ['2018', 'Renamed Longhorn Publishers PLC.'],
  ['2020', 'Entered Cameroon, strengthening expansion into Francophone Africa.'],
  ['2022', 'Officially expanded into the Democratic Republic of Congo.'],
  ['2023', 'LoHo Learning launched as a dedicated digital learning platform, and MyBidhaa launched to strengthen direct-to-customer distribution.'],
  ['2026', 'International Curriculum Business established, and the Tertiary Business division launched for colleges, universities and professional learning institutions.']
];

export const markets = [
  ['Kenya', 'Head office'], ['Uganda', 'Subsidiary, 1995'], ['Tanzania', 'Subsidiary, 2005'],
  ['Rwanda', 'Since 2009'], ['Cameroon', 'Since 2020'], ['DR Congo', 'Since 2022'],
  ['Malawi', ''], ['Zambia', ''], ['Ethiopia', '']
];
