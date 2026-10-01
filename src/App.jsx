import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Book from './pages/Book.jsx';
import Schools from './pages/Schools.jsx';
import { LOHO_URL } from './data/services.js';
import AboutDetail from './pages/AboutDetail.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import Tenders from './pages/Tenders.jsx';
import Investors from './pages/Investors.jsx';
import NotFound from './pages/NotFound.jsx';

// The Digital Learning page now lives on the LoHo website; keep old links working.
function LoHoRedirect() {
  useEffect(() => { window.location.replace(LOHO_URL); }, []);
  return <main className="container" style={{ padding: '96px var(--gutter)' }}><p>Taking you to <a href={LOHO_URL}>LoHo Learning</a>…</p></main>;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) { document.getElementById(hash.slice(1))?.scrollIntoView(); return; }
    // Let the browser restore scroll on back/forward; only reset on a new push.
    if (window.history.state && window.history.state.idx === 0) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:slug" element={<Book />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/digital-learning" element={<LoHoRedirect />} />
        <Route path="/about" element={<Navigate to="/about/company-overview" replace />} />
        <Route path="/about/:section" element={<AboutDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/investors/:area" element={<Investors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
