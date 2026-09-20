import { useState } from 'react';
import { Link } from 'react-router-dom';
import RuledGrid from '../components/RuledGrid.jsx';
import ImageWell from '../components/ImageWell.jsx';
import { FILTERS } from '../data/books.js';

const CELLS = [
  ['Resources', 'Schemes of work and answer keys', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.', 'Download'],
  ['Samples', 'Request sample copies', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', 'Request'],
  ['Quotations', 'Bulk orders and school accounts', 'Duis aute irure dolor in reprehenderit in voluptate velit esse.', 'Start a request'],
  ['Training', 'Teacher workshops and webinars', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', 'See dates']
];

export default function Schools() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <div className="band band--maroon on-dark">
        <div className="container" style={{ paddingTop: 52, paddingBottom: 52 }}>
          <div className="row row--center">
            <div className="col" style={{ flexBasis: 400 }}>
              <p className="breadcrumb"><Link to="/">Longhorn</Link> / <strong>Schools &amp; Teachers</strong></p>
              <h1 style={{ fontSize: 'clamp(44px, 5.8vw, 74px)', lineHeight: 0.99, letterSpacing: '-0.015em', margin: '0 0 16px' }}>
                Support for the people who teach.
              </h1>
              <div className="rule-green" />
              <p style={{ fontSize: 20, lineHeight: 1.45, color: 'var(--on-maroon-body)', maxWidth: '46ch', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn-row" style={{ marginTop: 26 }}>
                <a className="btn btn--primary btn--md" href="#quotation">Request a quotation</a>
                <Link className="btn btn--secondary btn--md" to="/books">Browse coursebooks</Link>
              </div>
            </div>
            <div className="col">
              <ImageWell
                src={`${import.meta.env.BASE_URL}photos/home-schools.png`}
                alt="A teacher working with learners in a classroom"
                ratio="ar-4-3"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="container section--tight" style={{ paddingTop: 56 }}>
        <RuledGrid variant="4" top>
          {CELLS.map(([eyebrow, title, body, cta]) => (
            <div className="ruled__cell" key={eyebrow}>
              <div className="eyebrow eyebrow--green" style={{ marginBottom: 8 }}>{eyebrow}</div>
              <div className="ruled__cell-title">{title}</div>
              <p>{body}</p>
              <a className="ruled__link" href="#quotation">{cta} →</a>
            </div>
          ))}
        </RuledGrid>
      </section>

      <section className="band band--green" style={{ marginTop: 64 }} id="quotation">
        <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div className="row">
            <div className="col" style={{ flexBasis: 280 }}>
              <h2 style={{ fontSize: 'clamp(34px, 3.8vw, 50px)', margin: '0 0 10px' }}>Request a quotation</h2>
              <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--n-800)', maxWidth: '40ch', margin: 0 }}>
                Tell us the school, the levels and the titles. A Longhorn representative replies
                within two working days.
              </p>
            </div>

            <div className="col" style={{ flexBasis: 420 }}>
              {sent ? (
                <div className="form form--white" role="status">
                  <h3 style={{ fontSize: 28, margin: 0 }}>Request received</h3>
                  <p style={{ margin: 0, color: 'var(--n-800)' }}>
                    Thank you. A Longhorn representative will reply within two working days.
                  </p>
                  <button type="button" className="btn btn--secondary" onClick={() => setSent(false)}>
                    Send another
                  </button>
                </div>
              ) : (
                <form className="form form--white" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="form__pair">
                    <div className="field">
                      <label htmlFor="q-school">School name</label>
                      <input className="input" id="q-school" name="school" required placeholder="Placeholder School" />
                    </div>
                    <div className="field">
                      <label htmlFor="q-person">Contact person</label>
                      <input className="input" id="q-person" name="person" required placeholder="Placeholder Name" />
                    </div>
                    <div className="field">
                      <label htmlFor="q-email">Email</label>
                      <input className="input" id="q-email" name="email" type="email" required placeholder="name@school.ac.ke" />
                    </div>
                    <div className="field">
                      <label htmlFor="q-country">Country</label>
                      <select className="input" id="q-country" name="country" defaultValue={FILTERS.country.options[0]}>
                        {FILTERS.country.options.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="q-titles">Titles and quantities</label>
                    <textarea className="input" id="q-titles" name="titles" placeholder="Lorem ipsum dolor sit amet — 40 copies" />
                  </div>
                  <button type="submit" className="btn btn--primary btn--md">Send request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
