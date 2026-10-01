// Catalogue data. Replace with the product feed / CMS.
// Only facts visible on the book covers are recorded here. Prices, ISBNs and authors are
// not known yet, so they are left out and the UI does not render them.

const cover = (file) => import.meta.env.BASE_URL + 'covers/' + file + '.jpg';
const KICD = 'Approved by the Kenya Institute of Curriculum Development (KICD)';

const raw = [
  { file: 'integrated-science-learners-book-grade-9', title: "Longhorn Integrated Science Learner's Book", curriculum: 'Rationalised Curriculum', grade: 'Grade 9', subject: 'Integrated Science', type: 'Course book', language: 'English', badges: [KICD] },
  { file: 'social-studies-learners-book-grade-9', title: "Longhorn Social Studies Learner's Book", curriculum: 'Rationalised Curriculum', grade: 'Grade 9', subject: 'Social Studies', type: 'Course book', language: 'English', badges: [KICD] },
  { file: 'the-bicycle-race-grade-4', title: 'The Bicycle Race and Other Stories', curriculum: 'CBC', grade: 'Grade 4', subject: 'English', type: 'Reader', language: 'English', badges: ['Competency Based Curriculum'] },
  { file: 'treasures-of-mombasa-grade-5', title: 'Treasures of Mombasa and Other Stories', curriculum: 'CBC', grade: 'Grade 5', subject: 'English', type: 'Reader', language: 'English', badges: ['Competency Based Curriculum'] },
  { file: 'the-amazing-rewards-grade-6', title: 'The Amazing Rewards and Other Stories', curriculum: 'CBC', grade: 'Grade 6', subject: 'English', type: 'Reader', language: 'English', badges: ['Competency Based Curriculum'] },
  { file: 'afya-ni-mali-gredi-4', title: 'Afya ni Mali na Hadithi Nyingine', curriculum: 'CBC', grade: 'Grade 4', subject: 'Kiswahili', type: 'Reader', language: 'Kiswahili', badges: ['Mtaala wa Kiumilisi'] },
  { file: 'comprehensive-atlas-cbe-grades-4-6', title: 'Longhorn Comprehensive Atlas for CBE (Grades 4, 5 and 6)', curriculum: 'CBC', grade: 'Grades 4–6', subject: 'Geography', type: 'Reference', language: 'English', badges: [KICD] },
  { file: 'comprehensive-atlas-cbe-grades-7-9', title: 'Longhorn Comprehensive Atlas for CBE (Grades 7, 8 and 9)', curriculum: 'CBC', grade: 'Grades 7–9', subject: 'Geography', type: 'Reference', language: 'English', badges: [KICD] },
  { file: 'smartscore-cre-kjsea', title: 'SmartScore Christian Religious Education', curriculum: 'KJSEA', grade: 'Grades 7–9', subject: 'Christian Religious Education', type: 'Revision', language: 'English', badges: ['For KJSEA'] },
  { file: 'smartscore-english-kjsea', title: 'SmartScore English', curriculum: 'KJSEA', grade: 'Grades 7–9', subject: 'English', type: 'Revision', language: 'English', badges: ['For KJSEA'] },
  { file: 'smartscore-integrated-science-kjsea', title: 'SmartScore Integrated Science', curriculum: 'KJSEA', grade: 'Grades 7–9', subject: 'Integrated Science', type: 'Revision', language: 'English', badges: ['For KJSEA'] },
  { file: 'solving-problems-kjsea-mathematics', title: 'Solving Problems KJSEA Mathematics', curriculum: 'KJSEA', grade: 'Grades 7–9', subject: 'Mathematics', type: 'Revision', language: 'English', badges: ['Competency Based Education'] },
  { file: 'kamusi-ya-karne-ya-21', title: 'Kamusi ya Karne ya 21 (Toleo la 5)', curriculum: 'General reference', grade: 'All levels', subject: 'Kiswahili', type: 'Reference', language: 'Kiswahili', badges: ['Imeidhinishwa na EMAC, BAKITA na KICD'] }
];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const books = raw.map((b, i) => ({
  ...b,
  id: i + 1,
  slug: slugify(b.file),
  coverUrl: cover(b.file),
  meta: b.curriculum + ' · ' + b.grade + ' · ' + b.subject,
  description: b.title + ' — ' + b.type.toLowerCase() + ' for ' + b.grade.toLowerCase() + ' (' + b.curriculum + '), published by Longhorn Publishers.'
}));

export const bookBySlug = (slug) => books.find((b) => b.slug === slug);

// Filter options are derived from the catalogue so they can never drift from the data.
const optionsFor = (key) => [...new Set(books.map((b) => b[key]))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

export const FILTERS = {
  curriculum: { label: 'Curriculum', all: 'All curricula', options: optionsFor('curriculum') },
  grade: { label: 'Grade or level', all: 'All levels', options: optionsFor('grade') },
  subject: { label: 'Subject', all: 'All subjects', options: optionsFor('subject') },
  type: { label: 'Product type', all: 'All product types', options: optionsFor('type') },
  language: { label: 'Language', all: 'All languages', options: optionsFor('language') }
};

export const FILTER_KEYS = Object.keys(FILTERS);

// Markets served (used by the school quotation form).
export const COUNTRIES = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Cameroon', 'DR Congo', 'Malawi', 'Zambia', 'Ethiopia'];
