import { FILTERS, FILTER_KEYS } from '../data/books.js';

export default function BookFilters({ values, onChange, trailing }) {
  return (
    <div className="filter-grid">
      {FILTER_KEYS.map((key) => {
        const f = FILTERS[key];
        return (
          <div className="field" key={key}>
            <label htmlFor={'filter-' + key}>{f.label}</label>
            <select
              id={'filter-' + key}
              className="input"
              value={values[key]}
              onChange={(e) => onChange(key, e.target.value)}
            >
              <option value={f.all}>{f.all}</option>
              {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        );
      })}
      {trailing}
    </div>
  );
}
