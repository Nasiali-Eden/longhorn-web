import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import UtilityBar from './components/UtilityBar.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Book from './pages/Book.jsx';
import Schools from './pages/Schools.jsx';
import Digital from './pages/Digital.jsx';
import About from './pages/About.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Let the browser restore scroll on back/forward; only reset on a new push.
    if (window.history.state && window.history.state.idx === 0) return;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <UtilityBar />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:slug" element={<Book />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/digital-learning" element={<Digital />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
