import { Link, useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import RuledGrid from '../components/RuledGrid.jsx';
import BookCard from '../components/BookCard.jsx';
import BookFilters from '../components/BookFilters.jsx';
import ImageWell from '../components/ImageWell.jsx';
import { books } from '../data/books.js';
import { SERVICES, LOHO_URL, LOGOS } from '../data/services.js';
import { news } from '../data/news.js';
import { useBookFilters } from '../hooks/useBookFilters.js';

const SHORTCUTS = [
  ['01', 'Parents & learners', 'The right book for a grade or exam', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.', 'Find a book', '/books'],
  ['02', 'Teachers', 'Coursebooks, samples and support', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', 'Teaching resources', '/schools'],
  ['03', 'Schools', 'A reliable list, quotation or bulk order', 'Duis aute irure dolor in reprehenderit in voluptate velit esse.', 'Request a quotation', '/schools'],
  ['04', 'Booksellers', 'Catalogue, availability and trade terms', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', 'Contact sales', '/contact']
];

export default function Home() {
  const navigate = useNavigate();
  const { values, set, filtered, query } = useBookFilters();

  return (
    <main>
      {/* hero — full-bleed photograph under a maroon scrim */}
      <section className="hero on-dark">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="kicker">Publishing for Africa since 1965</p>
            <h1>Learning materials made for African classrooms.</h1>
            <div className="rule-green" />
            <p className="hero__lead">
              Find trusted books and digital resources for learners, teachers and schools across the
              continent. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </p>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link className="btn btn--primary btn--lg" to="/books">Find a book</Link>
              <Link className="btn btn--secondary btn--lg" to="/digital-learning">Explore digital learning</Link>
            </div>
          </div>
          <div className="hero__media">
            <img src={`${import.meta.env.BASE_URL}photos/hero-classroom.png`} alt="Learners at work in an East African classroom" />
          </div>
        </div>
      </section>

      {/* quick book finder — lifts over the hero */}
      <section className="container">
        <div className="finder">
          <div className="finder__head">
            <h2>Quick book finder</h2>
            <p>Curriculum, level, subject, type and language — without leaving the page.</p>
          </div>
          <BookFilters
            values={values}
            onChange={set}
            trailing={
              <button
                type="button"
                className="btn btn--primary"
                style={{ minHeight: 44 }}
                onClick={() => navigate('/books' + (query ? '?' + query : ''))}
              >
                Show {filtered.length} books
              </button>
            }
          />
        </div>
      </section>

      {/* 01 audience routes */}
      <section className="container section">
        <SectionHeader
          num="01"
          title="Start where you are"
          note="Am I in the right place? What can I do here? What next?"
          flush
        />
        <RuledGrid variant="4" className="shortcuts" noBottom>
          {SHORTCUTS.map(([num, who, title, body, cta, to]) => (
            <Link className="shortcut" to={to} key={num}>
              <div className="shortcut__num">{num}</div>
              <span className="eyebrow shortcut__eyebrow">{who}</span>
              <div className="shortcut__title">{title}</div>
              <p>{body}</p>
              <span className="shortcut__cta">{cta} →</span>
            </Link>
          ))}
        </RuledGrid>
      </section>

      {/* 02 featured */}
      <section className="container section">
        <SectionHeader
          num="02"
          title="Featured collections"
          action={<Link className="ruled__link" to="/books">Full catalogue →</Link>}
        />
        <div className="book-grid">
          {books.slice(0, 4).map((b) => <BookCard book={b} key={b.id} />)}
        </div>
      </section>

      {/* 03 trust — green tint band */}
      <section className="band band--green" style={{ marginTop: 72 }}>
        <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div className="row">
            <div className="col">
              <span className="section-header__num">03</span>
              <h2 style={{ fontSize: 'clamp(34px, 3.8vw, 50px)', margin: '6px 0 14px' }}>
                Why schools trust Longhorn
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--n-800)', maxWidth: '42ch' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="tag-row">
                <span className="tag tag--maroon">Curriculum approved</span>
                <span className="tag tag--green">Nairobi Securities Exchange</span>
                <span className="tag tag--outline">ISO 9001:2015</span>
              </div>
              <div className="stat-row">
                <div><div className="stat__num">60+</div><div className="stat__label">Years publishing</div></div>
                <div><div className="stat__num">9</div><div className="stat__label">African markets</div></div>
                <div><div className="stat__num">1,000+</div><div className="stat__label">Titles published</div></div>
              </div>
            </div>
            <blockquote className="pull-quote col">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.”
              </p>
              <footer>
                <span className="pull-quote__face">
                  <img src={`${import.meta.env.BASE_URL}photos/quote-headteacher.png`} alt="" />
                </span>
                <span className="pull-quote__who">
                  Placeholder Name<br />Head Teacher, Placeholder School
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 04 digital — deep maroon band */}
      <section className="band band--deep on-dark">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="row row--center">
            <div className="col">
              <span className="section-header__num">04</span>
              <h2 style={{ fontSize: 'clamp(36px, 4vw, 54px)', margin: '6px 0 14px' }}>
                LOHO Learning and e-books, one family of services
              </h2>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--m-200)', margin: '0 0 24px', maxWidth: '44ch' }}>
                LoHo Learning offers CBC-aligned lessons, school administration, accessibility and
                coding tools, alongside LoHo E-Books created by education professionals.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--md" to="/digital-learning">Explore digital learning</Link>
                <a className="btn btn--secondary btn--md" href={LOHO_URL} target="_blank" rel="noreferrer">Visit LoHo Learning ↗</a>
              </div>
            </div>
            <div className="col">
              <ImageWell
                src={`${import.meta.env.BASE_URL}photos/home-digital.png`}
                alt="Learners using tablets on the LOHO Learning platform"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 products and services */}
      <section className="container section">
        <SectionHeader num="05" title="Our products and services" flush />
        <div className="service-grid">
          {SERVICES.map((sv) => (
            <article className="service-card" key={sv.title}>
              {sv.logo && <img className="service-card__logo" src={LOGOS[sv.logo]} alt="" />}
              <h3>{sv.title}</h3>
              <p>{sv.body}</p>
              {sv.href
                ? <a className="ruled__link" href={sv.href} target="_blank" rel="noreferrer">Learn more ↗<span className="visually-hidden"> about {sv.title} (opens in a new tab)</span></a>
                : <Link className="ruled__link" to={sv.to}>Learn more →<span className="visually-hidden"> about {sv.title}</span></Link>}
            </article>
          ))}
        </div>
      </section>

      {/* 06 news — row list */}
      <section className="container section section--last">
        <SectionHeader
          num="06"
          title="News and impact"
          action={<Link className="ruled__link" to="/news">All news →</Link>}
          flush
        />
        <Link className="news-lead" to="/news">
          <ImageWell
            className="news-lead__media"
            ratio=""
            src={news[0].imageUrl}
            alt={news[0].title}
          />
          <span className="news-lead__body">
            <span className="news-lead__head">
              <span className="tag tag--green">{news[0].kind}</span>
              <span className="news-date">{news[0].date}</span>
            </span>
            <h3>{news[0].title}</h3>
            <p className="news-lead__blurb">{news[0].blurb}</p>
            <span className="news-lead__cta">Read the story →</span>
          </span>
        </Link>
        <div className="news-grid news-grid--home">
          {news.slice(1, 4).map((n) => (
            <Link className="news-tile" to="/news" key={n.id}>
              <ImageWell className="news-tile__media" ratio="ar-4-3" src={n.imageUrl} alt={n.title} />
              <span className="news-tile__head">
                <span className="news-tile__kind">{n.kind}</span>
                <span className="news-tile__tick" />
                <span className="news-date">{n.date}</span>
              </span>
              <h3>{n.title}</h3>
              <p>{n.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
