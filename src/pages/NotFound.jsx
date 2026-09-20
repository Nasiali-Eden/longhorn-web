import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="container" style={{ paddingTop: 88, paddingBottom: 120 }}>
      <p className="eyebrow eyebrow--green">Error 404</p>
      <h1 style={{ fontSize: 'clamp(40px, 5vw, 62px)', margin: '8px 0 12px' }}>We could not find that page.</h1>
      <div className="rule-green" />
      <p style={{ fontSize: 18, color: 'var(--n-800)', maxWidth: '46ch' }}>
        The page may have moved. Start from the catalogue, or tell us what you were looking for.
      </p>
      <div className="btn-row" style={{ marginTop: 20 }}>
        <Link className="btn btn--primary btn--md" to="/books">Find a book</Link>
        <Link className="btn btn--secondary btn--md" to="/contact">Contact Longhorn</Link>
      </div>
    </main>
  );
}
