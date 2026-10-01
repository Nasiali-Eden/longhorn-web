import { Link } from 'react-router-dom';
import logo from '../assets/longhorn-logo.png';
import { BOOKSTORE_URL, LOHO_URL } from '../data/services.js';

// [target, label, external?]
const COLS = [
  ['Books', [['/books', 'Browse catalogue'], ['/books#price-lists', 'Price lists'], [BOOKSTORE_URL, 'Online Bookstore', true], ['/schools', 'Request a quotation']]],
  ['Digital', [[LOHO_URL, 'Digital Learning', true], [LOHO_URL, 'LoHo E-Books', true], ['/contact', 'Support']]],
  ['Company', [['/about/company-overview', 'About Longhorn'], ['/investors', 'Investor Relations'], ['/tenders', 'Tenders'], ['/news', 'News & events'], ['/contact', 'Contact us']]]
];

const MARKETS = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Cameroon', 'DR Congo', 'Malawi', 'Zambia', 'Ethiopia'];

export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <span className="site-footer__plate"><img src={logo} alt="Longhorn Publishers PLC" /></span>
            <address>
              Funzi Road, Industrial Area<br />
              P.O. Box 18033 – 00500<br />
              Nairobi, Kenya
            </address>
          </div>
          {COLS.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h4>{title}</h4>
              <ul className="site-footer__links">
                {links.map(([to, label, external]) => (
                  <li key={label}>
                    {external
                      ? <a href={to} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a>
                      : <Link to={to}>{label}</Link>}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="site-footer__markets">
          <h4>Our markets</h4>
          <ul>{MARKETS.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>

        <div className="site-footer__legal">
          <p>© {new Date().getFullYear()} Longhorn Publishers PLC <span aria-hidden="true">·</span> ISO 9001:2015 certified <span aria-hidden="true">·</span> NSE: LKL</p>
          <p className="site-footer__tagline">Expanding Minds</p>
        </div>
      </div>
    </footer>
  );
}
