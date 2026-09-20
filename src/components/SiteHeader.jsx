import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/longhorn-logo.png';

const LINKS = [
  ['/books', 'Books'],
  ['/digital-learning', 'Digital Learning'],
  ['/schools', 'Schools & Teachers'],
  ['/about', 'About'],
  ['/news', 'News'],
  ['/contact', 'Contact']
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Longhorn Publishers PLC — Expanding Minds" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className="site-nav" hidden={!open} aria-label="Main">
          {LINKS.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              aria-current={
                pathname === to || (to === '/books' && pathname.startsWith('/books')) ? 'page' : undefined
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link className="btn btn--primary site-header__cta" to="/books">Find a book</Link>
      </div>
    </header>
  );
}
