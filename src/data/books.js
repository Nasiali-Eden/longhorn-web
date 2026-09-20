// Placeholder catalogue. Replace with the real product feed / CMS.
// Shape kept deliberately close to what the design needs.

const cover = (id) => 'https://picsum.photos/seed/lh-book-' + id + '/600/800';

const raw = [
  { id: 1,  title: 'Lorem Ipsum Dolor',     country: 'Kenya',    curriculum: 'CBC',                  grade: 'Grade 4', subject: 'Mathematics',    price: 'KSh 640',   format: 'Print + e-book', isbn: '978-9966-00-000-1' },
  { id: 2,  title: 'Consectetur Adipiscing', country: 'Kenya',    curriculum: 'CBC',                  grade: 'Grade 7', subject: 'Mathematics',    price: 'KSh 780',   format: 'Print',          isbn: '978-9966-00-000-2' },
  { id: 3,  title: 'Sed Do Eiusmod',        country: 'Kenya',    curriculum: 'CBC',                  grade: 'Grade 7', subject: 'English',        price: 'KSh 720',   format: 'Print + e-book', isbn: '978-9966-00-000-3' },
  { id: 4,  title: 'Tempor Incididunt',     country: 'Kenya',    curriculum: 'CBC',                  grade: 'Grade 5', subject: 'Kiswahili',      price: 'KSh 590',   format: 'Print',          isbn: '978-9966-00-000-4' },
  { id: 5,  title: 'Labore et Dolore',      country: 'Kenya',    curriculum: '8-4-4',                grade: 'Form 2',  subject: 'Chemistry',      price: 'KSh 860',   format: 'Print',          isbn: '978-9966-00-000-5' },
  { id: 6,  title: 'Magna Aliqua',          country: 'Kenya',    curriculum: 'CBC',                  grade: 'Grade 6', subject: 'Science',        price: 'KSh 700',   format: 'Print + e-book', isbn: '978-9966-00-000-6' },
  { id: 7,  title: 'Ut Enim ad Minim',      country: 'Uganda',   curriculum: 'National curriculum',  grade: 'Grade 5', subject: 'English',        price: 'UGX 32,000', format: 'Print',          isbn: '978-9966-00-000-7' },
  { id: 8,  title: 'Quis Nostrud',          country: 'Uganda',   curriculum: 'National curriculum',  grade: 'Grade 7', subject: 'Mathematics',    price: 'UGX 36,000', format: 'Print',          isbn: '978-9966-00-000-8' },
  { id: 9,  title: 'Exercitation Ullamco',  country: 'Uganda',   curriculum: 'National curriculum',  grade: 'Grade 6', subject: 'Social Studies', price: 'UGX 30,000', format: 'Print + e-book', isbn: '978-9966-00-000-9' },
  { id: 10, title: 'Laboris Nisi',          country: 'Tanzania', curriculum: 'National curriculum',  grade: 'Grade 4', subject: 'Kiswahili',      price: 'TZS 22,000', format: 'Print',          isbn: '978-9966-00-001-0' },
  { id: 11, title: 'Aliquip ex Ea',         country: 'Tanzania', curriculum: 'National curriculum',  grade: 'Grade 6', subject: 'Mathematics',    price: 'TZS 25,500', format: 'Print',          isbn: '978-9966-00-001-1' },
  { id: 12, title: 'Commodo Consequat',     country: 'Tanzania', curriculum: 'National curriculum',  grade: 'Grade 7', subject: 'Science',        price: 'TZS 27,000', format: 'Print + e-book', isbn: '978-9966-00-001-2' }
];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const books = raw.map((b) => ({
  ...b,
  slug: slugify(b.title),
  author: 'Placeholder Author',
  coverUrl: cover(b.id),
  inStock: true,
  meta: b.curriculum + ' · ' + b.grade + ' · ' + b.subject,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
    'ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}));

export const bookBySlug = (slug) => books.find((b) => b.slug === slug);

export const FILTERS = {
  country: { label: 'Country', all: 'All countries', options: ['Kenya', 'Uganda', 'Tanzania'] },
  curriculum: { label: 'Curriculum', all: 'All curricula', options: ['CBC', '8-4-4', 'National curriculum'] },
  grade: { label: 'Grade or level', all: 'All levels', options: ['Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Form 2'] },
  subject: { label: 'Subject', all: 'All subjects', options: ['Mathematics', 'English', 'Kiswahili', 'Science', 'Social Studies', 'Chemistry'] }
};

export const FILTER_KEYS = Object.keys(FILTERS);
