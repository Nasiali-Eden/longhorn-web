import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/longhorn-logo.png';
import { BOOKSTORE_URL, LOHO_URL, LOGOS } from '../data/services.js';

const CATALOGUE_LINKS = ['Longhorn English Readers', 'Longhorn Kiswahili Readers', 'CBC Grade 1', 'CBC Grade 2', 'CBC Grade 3', 'KCSE Encyclopaedias'];
const ABOUT_LINKS = [['/about/company-overview', 'Company overview'], ['/about/our-journey', 'Our journey'], ['/about/african-footprint', 'Our African footprint'], ['/about/subsidiaries', 'Subsidiaries'], ['/about/impact-achievements', 'Impact & achievements'], ['/about/why-partner-with-us', 'Why partner with us']];
const INVESTOR_LINKS = [['/investors/reports', 'Reports'], ['/investors/policies', 'Company Policies'], ['/investors/notices', 'Notices & Downloads']];
const PLAIN_LINKS = { digital: ['/digital-learning', 'Digital Learning'], news: ['/news', 'News'], contact: ['/contact', 'Contact'] };

function Chevron() {
  return <svg className="nav-trigger__chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.25 6 8l4-3.75" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ProductsMega({ close }) {
  return <div className="products-mega__inner">
    <section className="products-mega__section" aria-labelledby="books-title">
      <h2 id="books-title">Books</h2>
      <div className="products-mega__links">
        <NavLink to="/books" onClick={close}>Browse all books</NavLink>
        <NavLink to="/books#price-lists" onClick={close}>Price lists (PDF)</NavLink>
        <a href={BOOKSTORE_URL} target="_blank" rel="noreferrer" onClick={close}>Online Bookstore <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a>
        <NavLink to="/schools" onClick={close}>Request a school quotation</NavLink>
      </div>
      <p>Course books, readers and revision titles for every level, in print and digital.</p>
      <NavLink className="products-mega__arrow" to="/books" onClick={close}>Explore the catalogue <span aria-hidden="true">→</span></NavLink>
    </section>
    <section className="products-mega__section" aria-labelledby="catalogue-title">
      <h2 id="catalogue-title">Catalogue</h2>
      <div className="products-mega__links">{CATALOGUE_LINKS.map((label) => <NavLink key={label} to="/books" onClick={close}>{label}</NavLink>)}</div>
    </section>
    <section className="products-mega__section" aria-labelledby="mybidhaa-title">
      <h2 id="mybidhaa-title">Shop (My Bidhaa)</h2>
      <a className="products-mega__logo" href={BOOKSTORE_URL} target="_blank" rel="noreferrer" onClick={close}><img src={LOGOS.mybidhaa} alt="My Bidhaa" /></a>
      <p>Our e-commerce platform makes buying books and stationery convenient and stress free.</p>
      <a className="products-mega__arrow" href="https://www.mybidhaa.co.ke" target="_blank" rel="noreferrer" onClick={close}>Visit My Bidhaa <span aria-hidden="true">→</span></a>
    </section>
    <section className="products-mega__section" aria-labelledby="loho-title">
      <h2 id="loho-title">LOHO Learning</h2>
      <NavLink className="products-mega__logo" to="/digital-learning" onClick={close}><img src={LOGOS.loho} alt="LOHO Learning" /></NavLink>
      <p>Interactive educational content and a comprehensive learning management system.</p>
      <a className="products-mega__arrow" href={LOHO_URL} target="_blank" rel="noreferrer" onClick={close}>Visit LOHO Learning <span aria-hidden="true">↗</span></a>
      <div className="products-mega__subservice"><h2>LOHO E-Books</h2><p>Digital study materials created by education professionals.</p><NavLink className="products-mega__arrow" to="/digital-learning" onClick={close}>About LOHO and e-books <span aria-hidden="true">→</span></NavLink></div>
    </section>
    <section className="products-mega__section" aria-labelledby="services-title">
      <h2 id="services-title">Services</h2>
      <NavLink className="products-mega__service-name products-mega__service-name--publishing" to="/contact" onClick={close}>Longhorn <small>Publishing Services</small></NavLink>
      <p>We support aspiring authors through the self-publishing journey, from manuscript to distribution.</p>
      <NavLink className="products-mega__arrow" to="/contact" onClick={close}>Learn more <span aria-hidden="true">→</span></NavLink>
      <div className="products-mega__subservice"><NavLink className="products-mega__service-name products-mega__service-name--language" to="/contact" onClick={close}>Longhorn <small>Language Services</small></NavLink>
        <p>High-quality translation for commercial, non-commercial and technical documents.</p>
        <NavLink className="products-mega__arrow" to="/contact" onClick={close}>Learn more <span aria-hidden="true">→</span></NavLink></div>
    </section>
  </div>;
}

// A dropdown is ONE button: the label and the chevron are the same control.
function NavMenu({ id, label, prefixes, open, setOpen, mega, children }) {
  const { pathname } = useLocation();
  const active = prefixes.some((p) => pathname === p || pathname.startsWith(p + '/'));
  return <div className={'nav-item' + (mega ? ' nav-item--mega' : '') + (open ? ' nav-item--open' : '')} data-menu={id}>
    <button type="button" className={'nav-trigger' + (active ? ' nav-trigger--active' : '')} aria-expanded={open} aria-controls={id + '-panel'} onClick={() => setOpen(open ? null : id)}>
      {label}<Chevron />
    </button>
    <div id={id + '-panel'} className={mega ? 'products-mega' : 'nav-menu'} hidden={!open}>{children}</div>
  </div>;
}

export default function SiteHeader() {
  const [mobile, setMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const { pathname } = useLocation();
  const header = useRef(null);
  const close = () => { setMobile(false); setOpenMenu(null); };

  useEffect(() => { setMobile(false); setOpenMenu(null); }, [pathname]);
  useEffect(() => {
    const outside = (e) => { if (header.current && !header.current.contains(e.target)) setOpenMenu(null); };
    const escape = (e) => {
      if (e.key !== 'Escape') return;
      setOpenMenu((current) => { if (current) header.current?.querySelector(`[data-menu="${current}"] .nav-trigger`)?.focus(); return null; });
    };
    document.addEventListener('mousedown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('mousedown', outside); document.removeEventListener('keydown', escape); };
  }, []);

  const plain = (key) => <NavLink key={key} to={PLAIN_LINKS[key][0]}>{PLAIN_LINKS[key][1]}</NavLink>;
  const list = (links) => links.map(([to, text]) => <NavLink key={to} to={to}>{text}</NavLink>);

  return <header className="site-header" ref={header}><div className="site-header__inner">
    <Link to="/" className="site-header__logo"><img src={logo} alt="Longhorn Publishers PLC — Expanding Minds" /></Link>
    <button type="button" className="nav-toggle" aria-expanded={mobile} aria-controls="site-nav" aria-label={mobile ? 'Close menu' : 'Open menu'} onClick={() => setMobile((v) => !v)}>
      <span className="nav-toggle__bars" aria-hidden="true"><span /><span /><span /></span>
    </button>
    <nav id="site-nav" className={'site-nav' + (mobile ? ' site-nav--open' : '')} aria-label="Main">
      <NavMenu id="products" label="Products & Services" prefixes={['/books']} open={openMenu === 'products'} setOpen={setOpenMenu} mega><ProductsMega close={close} /></NavMenu>
      {plain('digital')}
      <NavMenu id="about" label="About" prefixes={['/about']} open={openMenu === 'about'} setOpen={setOpenMenu}>{list(ABOUT_LINKS)}</NavMenu>
      <NavMenu id="investors" label="Investor Relations" prefixes={['/investors']} open={openMenu === 'investors'} setOpen={setOpenMenu}>{list(INVESTOR_LINKS)}</NavMenu>
      {plain('news')}
      {plain('contact')}
      <Link className="btn btn--primary site-nav__cta" to="/books">Find a book</Link>
    </nav>
    <Link className="btn btn--primary site-header__cta" to="/books">Find a book</Link>
  </div></header>;
}
