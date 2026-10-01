export const LOHO_URL = 'https://loholearning.co.ke/';
const logo = (f) => import.meta.env.BASE_URL + 'logos/' + f;
export const LOGOS = { mybidhaa: logo('mybidhaa.png'), loho: logo('loho-learning.jpg'), safaricom: logo('safaricom.png') };
export const SAFARICOM_POST = 'https://www.longhornpublishers.com/blog/longhorn-publishers-partners-with-safaricom-for-the-loho-digital-learning-platform-to-transform-education-in-kenya/';
export const BOOKSTORE_URL = 'https://mybidhaa.com/stores/longhorn-publishers-plc';

// `to` is an internal route; `href` is an external site.
export const SERVICES = [
  { title: 'My Bidhaa', logo: 'mybidhaa', body: 'Our e-commerce platform dedicated to making the process of buying books and stationery convenient and stress free.', href: BOOKSTORE_URL },
  { title: 'Longhorn Books', body: 'Explore the diverse range of books published by Longhorn Publishers PLC, both education and non-education materials.', to: '/books' },
  { title: 'Publishing Services', body: 'We work with aspiring authors to help them navigate the self-publishing journey, from manuscript to publishing to distribution.', to: '/contact' },
  { title: 'Language Services', body: 'High-quality translation services for all types of documents: commercial, non-commercial, technical and non-technical.', to: '/contact' },
  { title: 'LOHO E-Books', logo: 'loho', body: 'Digital study materials created by professionals: scientists, editors and teachers.', to: '/digital-learning' },
  { title: 'LOHO Learning', logo: 'loho', body: 'Our eLearning platform with interactive educational content and comprehensive learning management systems.', href: LOHO_URL }
];
