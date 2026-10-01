import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx';
import Dialog from '../components/Dialog.jsx';
import { books, bookBySlug } from '../data/books.js';
import NotFound from './NotFound.jsx';

const STORE_URL = 'https://mybidhaa.com/stores/longhorn-publishers-plc';

export default function Book() {
  const { slug } = useParams();
  const book = bookBySlug(slug);
  const [handoff, setHandoff] = useState(false);

  if (!book) return <NotFound />;

  const related = books.filter((b) => b.id !== book.id && b.grade === book.grade).slice(0, 4);

  return (
    <main className="container book-detail" style={{ paddingTop: 36, paddingBottom: 88 }}>

      <div className="row">
        <div className="book-detail__cover">
          <figure className="image-well ar-3-4">
            <img src={book.coverUrl} alt={'Cover of ' + book.title} />
          </figure>
        </div>

        <div className="book-detail__body">
          <div className="book-detail__meta">{book.meta}</div>
          <h1>{book.title}</h1>
          <p className="book-detail__author">Longhorn Publishers PLC</p>
          <div className="rule-green rule-green--sm" />
          <p className="book-detail__desc">{book.description}</p>

          <div className="tag-row">{book.badges.map((b) => <span className="tag tag--green" key={b}>{b}</span>)}</div>

          <div className="btn-row" style={{ marginTop: 20 }}>
            <button type="button" className="btn btn--primary btn--lg" onClick={() => setHandoff(true)}>
              Buy this book
            </button>
            <button type="button" className="btn btn--secondary btn--lg">Preview sample</button>
            <Link className="btn btn--ghost" to="/schools">School quotation</Link>
          </div>
          <p className="book-detail__note">
            Buying opens the Longhorn online bookstore on My Bidhaa. We will tell you before you leave.
          </p>

          <hr className="hr" style={{ margin: '32px 0' }} />

          <div className="row" style={{ gap: 40 }}>
            <div className="col" style={{ flexBasis: 260 }}>
              <h4 className="label-sm">Essential information</h4>
              <table className="table">
                <tbody>
                  <tr><td className="spec-label">Curriculum</td><td>{book.curriculum}</td></tr>
                  <tr><td className="spec-label">Level</td><td>{book.grade}</td></tr>
                  <tr><td className="spec-label">Subject</td><td>{book.subject}</td></tr>
                  <tr><td className="spec-label">Type</td><td>{book.type}</td></tr>
                  <tr><td className="spec-label">Language</td><td>{book.language}</td></tr>
                </tbody>
              </table>
            </div>
            <div className="col" style={{ flexBasis: 220 }}>
              <h4 className="label-sm">Teacher resources</h4>
              <ul className="resource-list">
                <li><a href="#sample">Sample pages (PDF)</a></li>
                <li><a href="#scheme">Scheme of work</a></li>
                <li><a href="#answers">Answer key</a></li>
                <li><Link to="/digital-learning">Matching digital resources</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section style={{ marginTop: 72 }}>
          <div className="section-header">
            <h2 style={{ fontSize: 'clamp(30px, 3.2vw, 42px)' }}>Related books at the same level</h2>
          </div>
          <div className="book-grid book-grid--catalogue">
            {related.map((b) => <BookCard book={b} key={b.id} />)}
          </div>
        </section>
      )}

      {handoff && (
        <Dialog
          title="You are going to the Longhorn bookstore"
          onClose={() => setHandoff(false)}
          actions={
            <>
              <button type="button" className="btn btn--secondary" onClick={() => setHandoff(false)}>
                Stay here
              </button>
              <a className="btn btn--primary" href={STORE_URL} target="_blank" rel="noreferrer">Continue to store</a>
            </>
          }
        >
          <p>
            Checkout happens on the Longhorn online store. Your basket and payment are handled
            there — the look stays Longhorn.
          </p>
        </Dialog>
      )}
    </main>
  );
}
