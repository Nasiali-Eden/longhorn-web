import { Link } from 'react-router-dom';
import logo from '../assets/longhorn-logo.png';

const COLS = [
  ['Books', [['/books', 'Browse catalogue'], ['/books', 'New releases'], ['/books', 'Exam revision'], ['/books', 'Languages']]],
  ['Digital', [['/digital-learning', 'LOHO Learning'], ['/digital-learning', 'E-books'], ['/digital-learning', 'Sign in'], ['/contact', 'Support']]],
  ['Company', [['/about', 'About Longhorn'], ['/about', 'Investors'], ['/news', 'News & events'], ['/contact', 'Author guidelines']]]
];

export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="site-footer__top">
        <div className="site-footer__statement">
          <p className="kicker">Publishing for Africa since 1965</p>
          <p>Every classroom deserves the right book.</p>
        </div>
        <div className="site-footer__reach">
          <p>Talk to a Longhorn representative about titles, quotations or digital access in your market.</p>
          <div className="site-footer__contact">
            <a href="mailto:enquiries@longhornpublishers.com">enquiries@longhornpublishers.com</a>
            <span>+254 722 204 608 · +254 708 282 260</span>
          </div>
          <div className="btn-row">
            <Link className="btn btn--primary btn--md" to="/contact">Contact us</Link>
            <Link className="btn btn--secondary btn--md" to="/schools">Request a quotation</Link>
          </div>
        </div>
      </div>

      <div className="site-footer__cols">
        <div>
          <span className="site-footer__plate">
            <img src={logo} alt="Longhorn Publishers PLC" />
          </span>
          <address>
            Funzi Road, Industrial Area<br />
            P.O. Box 18033 – 00500<br />
            Nairobi, Kenya
          </address>
          <p className="site-footer__cert">ISO 9001:2015 certified · NSE: LKL</p>
        </div>

        {COLS.map(([title, links]) => (
          <div key={title}>
            <h4>{title}</h4>
            <div className="site-footer__links">
              {links.map(([to, label], i) => (
                <Link key={i} to={to}>{label}</Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h4>Markets</h4>
          <div className="site-footer__links" style={{ color: 'var(--on-maroon-meta)' }}>
            <span>Kenya · Uganda · Tanzania</span>
            <span>Rwanda · Cameroon · DR Congo</span>
            <span>Malawi · Zambia · Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="site-footer__legal">
        <div className="site-footer__legal-inner">
          <p>© {new Date().getFullYear()} Longhorn Publishers PLC · Placeholder site for design review.</p>
          <p className="site-footer__tagline">Expanding Minds</p>
        </div>
      </div>
    </footer>
  );
}
