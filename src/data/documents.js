// Document registry for Catalogue, Tenders and Investor Relations.
//
// HOW PDFs ARE WIRED: drop a PDF into src/documents/<folder>/<slug>.pdf, where <slug> is the
// document title lower-cased with non-alphanumerics replaced by '-' (see src/documents/README.md).
// A document whose PDF exists opens the PDF; until then it links to the live Longhorn page that
// hosts it, so nothing is ever a dead link. Optional per-entry fields: published (ISO date),
// size (e.g. "1.2 MB"); unknown fields are simply not rendered.
const LIVE = 'https://www.longhornpublishers.com';
const live = (path) => LIVE + path;

const pdfFiles = import.meta.glob('../documents/**/*.pdf', { eager: true, query: '?url', import: 'default' });
export const slugify = (t) => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const pdfUrl = (folder, title, fallback) => pdfFiles['../documents/' + folder + '/' + slugify(title) + '.pdf'] || fallback;
const isPdf = (url) => !url.startsWith('http');

export const priceLists = [
  { id: 'price-2024', title: 'Longhorn Publishers 2024 Price List', url: pdfUrl('catalogue', 'Longhorn Publishers 2024 Price List', live('/products-services/catalogue/')) },
  { id: 'price-rationalized', title: 'Longhorn Rationalized Books Price List', url: pdfUrl('catalogue', 'Longhorn Rationalized Books Price List', live('/products-services/catalogue/')) }
];

export const series = [
  { id: 'english-readers', title: 'Longhorn English Readers', blurb: 'Graded English readers for early and developing readers.' },
  { id: 'kiswahili-readers', title: 'Longhorn Kiswahili Readers', blurb: 'Kiswahili readers that build fluency and a love of reading.' },
  { id: 'cbc-1', title: 'CBC Grade 1', blurb: 'Competency Based Curriculum course books for Grade 1.' },
  { id: 'cbc-2', title: 'CBC Grade 2', blurb: 'Competency Based Curriculum course books for Grade 2.' },
  { id: 'cbc-3', title: 'CBC Grade 3', blurb: 'Competency Based Curriculum course books for Grade 3.' },
  { id: 'kcse-encyclopaedias', title: 'KCSE Encyclopaedias', blurb: 'Subject encyclopaedias for KCSE revision and reference.' }
];

// ── Tenders ──────────────────────────────────────────────
// `closes` is an ISO timestamp (Nairobi, UTC+3); status is derived from it at render time.
export const tenders = [
  {
    id: 'prequalification-2025-2028',
    title: 'Tenders & Prequalification (2025–2028)',
    published: null,
    closes: '2025-09-01T10:00:00+03:00',
    summary: 'Invitation to qualified suppliers and service providers to apply for prequalification.',
    categories: [
      { code: 'A', name: 'Supply of goods', items: ['IT equipment, software and consumables', 'Office stationery and furniture', 'Firefighting equipment', 'Uniforms and safety gear', 'Warehouse tools and packing materials'] },
      { code: 'B', name: 'Provision of services', items: ['Graphic design, printing and layout', 'Travel and logistics', 'IT, vehicle and equipment maintenance', 'Security and courier services', 'Editing, transcription, internet and IT support'] },
      { code: 'C', name: 'Works', items: ['Construction and building maintenance', 'Plumbing, painting and landscaping'] }
    ],
    documents: [{ title: 'Prequalification document', url: live('/tenders/') }]
  }
];

// ── Investor relations ───────────────────────────────────
const annualYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];
const reportsPage = live('/investor-relations/reports/');
export const annualReports = annualYears.map((y) => {
  const title = 'Annual Report ' + y;
  return { id: 'ar-' + y, title, year: y, url: pdfUrl('reports', title, reportsPage) };
});
export const financialReports = [
  { id: 'hy-fy2026', title: 'Half-Year FY2026 Interim Report', period: 'Half-year FY2026', type: 'Half-year result', url: pdfUrl('reports', 'Half-Year FY2026 Interim Report', reportsPage) }
];

const policyPage = live('/investor-relations/company-policies/');
const policy = (group, title) => ({ group, title, url: pdfUrl('policies', title, policyPage) });
export const POLICY_GROUPS = ['Board and governance', 'Ethics and conduct', 'Risk, audit and compliance', 'Procurement and operations', 'People and HR', 'Information, privacy and technology', 'Sustainability and stakeholder engagement'];
export const policies = [
  policy('Board and governance', 'Board Charter'),
  policy('Board and governance', 'Recruitment and Remuneration of Directors'),
  policy('Board and governance', 'Nomination, Governance and HR Committee'),
  policy('Board and governance', 'Operations and Strategy Committee Terms of Reference'),
  policy('Ethics and conduct', 'Code of Conduct'),
  policy('Ethics and conduct', 'Conflict of Interest Policy'),
  policy('Ethics and conduct', 'Anti-Bribery Policy'),
  policy('Ethics and conduct', 'Whistleblowing Policy'),
  policy('Risk, audit and compliance', 'Risk Management Policy'),
  policy('Risk, audit and compliance', 'Audit and Risk Committee Terms of Reference'),
  policy('Procurement and operations', 'Procurement Policy'),
  policy('Procurement and operations', 'Quality Policy'),
  policy('People and HR', 'Staff Policy Manual'),
  policy('Information, privacy and technology', 'Data Privacy Policy'),
  policy('Information, privacy and technology', 'ICT Policies and Procedures'),
  policy('Sustainability and stakeholder engagement', 'ESG Policy'),
  policy('Sustainability and stakeholder engagement', 'Stakeholder Engagement Policy'),
  policy('Sustainability and stakeholder engagement', 'Communication Policy')
];

export const NOTICE_TYPES = ['Event calendar', 'AGM and shareholder documents', 'Financial announcements', 'Board and leadership announcements', 'Public announcements'];
const noticePage = live('/investor-relations/notices-downloads/');
const EV = 'Event calendar', AGM = 'AGM and shareholder documents', FIN = 'Financial announcements', BOARD = 'Board and leadership announcements', PUB = 'Public announcements';
const notice = (type, title) => ({ type, title, url: pdfUrl('notices', title, noticePage) });
// Titles and order follow the live Notices & Downloads page.
export const notices = [
  notice(EV, 'Event Calendar 2026'),
  notice(AGM, 'AGM Notice 2021'),
  notice(AGM, 'Electronic Consent Form 2023 AGM'),
  notice(AGM, 'AGM 2023 Resolutions'),
  notice(PUB, 'Announcement of Delay of 2023 AGM'),
  notice(AGM, '2023 AGM Poll Results'),
  notice(AGM, 'Proxy Form 2023 AGM'),
  notice(PUB, '2024 Public Announcement: Change in Auditor'),
  notice(AGM, 'AGM 2023 Q & A'),
  notice(FIN, 'Delay of Release of Results for FY 2023'),
  notice(AGM, 'AGM Notice 2023'),
  notice(AGM, 'AGM Notice 2025'),
  notice(AGM, 'Proxy Form 2025 AGM'),
  notice(PUB, 'Public Announcement: Shikoh Gitau, March 2024'),
  notice(AGM, 'Notice 2024 SM'),
  notice(AGM, 'Electronic Consent Form'),
  notice(AGM, 'Proxy Form'),
  notice(AGM, 'Polling Results 2024'),
  notice(AGM, 'Polling Results 2025'),
  notice(AGM, 'AGM 2024 Q & A'),
  notice(AGM, 'AGM 2025 Q & A'),
  notice(AGM, 'Consent Form 2025'),
  notice(BOARD, 'Public Announcement: Appointment of Group Chairman'),
  notice(BOARD, 'Public Announcement: Appointment of Ms Makenna Nyammo'),
  notice(BOARD, 'CEO Departure Announcement'),
  notice(PUB, 'Public Announcement'),
  notice(BOARD, 'Public Announcement: Changes of Company Secretary'),
  notice(BOARD, 'Public Announcement: Appointment of Chief Finance & Operations Officer')
];

export { isPdf };
