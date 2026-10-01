import { Link } from 'react-router-dom';

export default function UtilityBar() {
  return (
    <div className="utility-bar on-dark">
      <div className="container utility-bar__inner">
        <span className="utility-bar__brand">Expanding Minds</span>
        <span className="utility-bar__sep" aria-hidden="true" />
        <span>9 markets across Africa</span>
        <span className="utility-bar__links">
          <Link to="/investors">Investors</Link>
          <Link to="/contact">Authors</Link>
          <a href="https://loholearning.co.ke/" target="_blank" rel="noreferrer" className="utility-bar__signin">LOHO sign in</a>
        </span>
      </div>
    </div>
  );
}
