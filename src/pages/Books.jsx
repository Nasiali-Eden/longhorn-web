import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx';
import BookFilters from '../components/BookFilters.jsx';
import PageHeader from '../components/PageHeader.jsx';
import DocRow from '../components/DocRow.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { priceLists, series } from '../data/documents.js';
import { useBookFilters } from '../hooks/useBookFilters.js';

export default function Books() {
  const { values, set, clear, filtered, active, summary } = useBookFilters();
  const [view, setView] = useState('grid');

  return (
    <main>
      <PageHeader
        image="covers-smartscore"
       
        title="Browse the catalogue"
        lead="A good catalogue feels like helpful guidance, not a long shelf. Narrow the list by curriculum, level, subject, product type and language."
      />

      <section id="price-lists" className="container" style={{ paddingTop: 32 }}>
        <SectionHeader title="Price lists" note="Download the full lists as PDF." />
        <ul className="doc-list">{priceLists.map((d) => <DocRow key={d.id} title={d.title} url={d.url} type="Price list" />)}</ul>
        <SectionHeader title="Browse by series" />
        <div className="series-grid">
          {series.map((s) => <div className="card-outline" key={s.id}><h3>{s.title}</h3><p>{s.blurb}</p></div>)}
        </div>
      </section>

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
                <th>Title</th><th>Curriculum</th><th>Level</th><th>Subject</th><th>Type</th><th>Language</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td><Link to={'/books/' + b.slug}>{b.title}</Link></td>
                  <td>{b.curriculum}</td>
                  <td>{b.grade}</td>
                  <td>{b.subject}</td>
                  <td>{b.type}</td>
                  <td>{b.language}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
