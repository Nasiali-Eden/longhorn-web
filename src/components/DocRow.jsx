const fmt = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

function PdfIcon() {
  return (
    <svg className="doc-row__icon" viewBox="0 0 40 48" width="34" height="41" aria-hidden="true" focusable="false">
      <path d="M4 0h24l12 12v32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#83324e" />
      <path d="M28 0l12 12h-8a4 4 0 0 1-4-4z" fill="#c4869e" />
      <text x="20" y="35" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="12" fill="#fff">PDF</text>
    </svg>
  );
}

// One downloadable document: PDF icon + descriptive link, plus type / date / size when known.
export default function DocRow({ title, url, type, period, published, size }) {
  const meta = [type, period, published && 'Published ' + fmt(published), size].filter(Boolean);
  return (
    <li className="doc-row">
      <a className="doc-row__link" href={url} target="_blank" rel="noreferrer">
        <PdfIcon />
        <span>
          <span className="doc-row__title">{title}</span>
          {meta.length > 0 && <span className="doc-row__meta">{meta.join(' · ')}</span>}
          <span className="visually-hidden"> (PDF, opens in a new tab)</span>
        </span>
      </a>
    </li>
  );
}
