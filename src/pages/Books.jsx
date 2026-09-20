import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx';
import BookFilters from '../components/BookFilters.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { useBookFilters } from '../hooks/useBookFilters.js';

export default function Books() {
  const { values, set, clear, filtered, active, summary } = useBookFilters();
  const [view, setView] = useState('grid');

  return (
    <main>
      <PageHeader
        crumb="Books"
        title="Browse the catalogue"
        lead="A good catalogue feels like helpful guidance, not a long shelf. Narrow the list by country, curriculum, level and subject."
      />

      <div className="filter-bar">
        <div className="container">
          <BookFilters
            values={values}
            onChange={set}
            trailing={
              <button type="button" className="btn btn--secondary" style={{ minHeight: 44 }} onClick={clear}>
                Clear filters
              </button>
            }
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: 32, paddingBottom: 88 }}>
        <div className="result-line">
          <p><strong>{filtered.length}</strong> suitable books — {summary}</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="tag-row">
              {active.map((a) => <span className="tag tag--maroon" key={a}>{a}</span>)}
            </div>
            <div className="view-toggle" role="group" aria-label="Catalogue view">
              <button type="button" aria-pressed={view === 'grid'} onClick={() => setView('grid')}>Covers</button>
              <button type="button" aria-pressed={view === 'table'} onClick={() => setView('table')}>Details</button>
            </div>
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h3>No books match that combination</h3>
            <p>Try a wider level or subject — or clear the filters and start again.</p>
            <button type="button" className="btn btn--primary" onClick={clear}>Clear all filters</button>
          </div>
        )}

        {filtered.length > 0 && view === 'grid' && (
          <div className="book-grid book-grid--catalogue">
            {filtered.map((b) => <BookCard book={b} showFormat key={b.id} />)}
          </div>
        )}

        {filtered.length > 0 && view === 'table' && (
          <table className="table table--right">
            <thead>
              <tr>
                <th>Title</th><th>Country</th><th>Curriculum</th><th>Level</th><th>Subject</th><th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td><Link to={'/books/' + b.slug}>{b.title}</Link></td>
                  <td>{b.country}</td>
                  <td>{b.curriculum}</td>
                  <td>{b.grade}</td>
                  <td>{b.subject}</td>
                  <td>{b.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
