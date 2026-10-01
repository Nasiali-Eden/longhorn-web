import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import ImageWell from '../components/ImageWell.jsx';
import { LOHO_URL, LOGOS, SAFARICOM_POST } from '../data/services.js';

const img = (name) => import.meta.env.BASE_URL + 'banners/' + name + '.jpg';

// Source: LoHo Learning's own website (loholearning.co.ke) and public launch coverage.
const PRODUCTS = [
  ['Elimu Pepe Kenya', 'loho-elimu-pepe', 'Two learners sharing a tablet and a CBC textbook in a classroom', 'A K-12 learning platform with CBC-aligned lessons from Grade 1 to Form 4, designed to work offline on low-end devices.'],
  ['LoHo Campus', 'loho-campus', 'A school administrator and teacher reviewing learner analytics at the front office', 'School administration tools covering learner–teacher communication and academic analytics.'],
  ['eSharah', 'loho-esharah', 'Learners using sign language, a braille display and assistive technology in a classroom', 'An accessibility suite with Kenya Sign Language, digital braille and autism support.'],
  ['Qureo Coding', 'loho-qureo-coding', 'Four learners coding together on a laptop beside a small robot', 'An AI-powered coding platform that builds computational thinking and programming skills.']
];

const FEATURES = [
  'Curriculum-aligned content',
  'Works offline on low-end devices',
  'Real-time progress tracking for parents',
  'Teacher–student interaction tools',
  'A child-safe learning environment',
  'Kalamu, an AI-driven tool with an “Ask the Teacher” function for vetted help'
];

export default function Digital() {
  return (
    <main className="theme-loho">
      <PageHeader
        tone="loho"
        image="digital-tablet"
       
        title="Smart learning for a smarter generation."
        lead="LoHo Learning is Longhorn’s digital learning company: interactive content, e-assessments and learning management for modern classrooms."
      >
        <div className="btn-row" style={{ marginTop: 24 }}>
          <a className="btn btn--secondary btn--md" href={LOHO_URL} target="_blank" rel="noreferrer">Visit LoHo Learning <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a>
        </div>
      </PageHeader>

      <section className="container" style={{ paddingTop: 52 }}>
        <img className="loho-logo" src={LOGOS.loho} alt="LoHo Learning" />
        <div className="about-detail__intro">
          <p>LoHo Learning began inside Longhorn Publishers PLC in 2017 and has grown into a dedicated education-technology company based in Nairobi. Its mission is to make education accessible, engaging and inclusive across Africa through connected classrooms and digital tools.</p>
          <p>It serves schools, teachers, parents and learners, as well as NGOs and corporate partners.</p>
        </div>

        <h2 className="about-detail__section" style={{ fontSize: 'clamp(30px, 3.4vw, 44px)' }}>What LoHo offers</h2>
        <div className="loho-products">
          {PRODUCTS.map(([name, image, alt, body]) => (
            <article className="loho-product" key={name}>
              <ImageWell src={img(image)} alt={alt} ratio="ar-4-3" />
              <div className="loho-product__body">
                <h3>{name}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: 28 }}>
          <a className="btn btn--primary btn--md" href={LOHO_URL} target="_blank" rel="noreferrer">Find out more on the LoHo website <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a>
        </div>

        <aside className="partner-strip" aria-label="Partner">
          <img src={LOGOS.safaricom} alt="Safaricom" />
          <p>
            <strong>In partnership with Safaricom.</strong> Announced in April 2024, the partnership brings the LoHo platform to learners on custom tablets pre-loaded with CBC content, with filtered educational internet access and a one-year instalment plan.{' '}
            <a href={SAFARICOM_POST} target="_blank" rel="noreferrer">Read the announcement ↗<span className="visually-hidden"> (opens in a new tab)</span></a>
          </p>
        </aside>
      </section>

      <section className="band band--ink on-dark" style={{ marginTop: 64 }}>
        <div className="container" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="row" style={{ gap: 52 }}>
            <div className="col" style={{ flexBasis: 320 }}>
              <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 44px)' }}>Built for real classrooms</h2>
              <ul className="resource-list resource-list--light">{FEATURES.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
            <div className="col" style={{ flexBasis: 320 }}>
              <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 44px)' }}>LoHo E-Books</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>Digital study materials created by education professionals — scientists, editors and teachers — to sit alongside Longhorn’s printed titles.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" to="/books">Browse the catalogue</Link>
                <Link className="btn btn--secondary" to="/contact">Get support</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section section--last">
        <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', margin: '0 0 18px', borderBottom: '1px solid var(--divider)', paddingBottom: 14 }}>
          How the services fit together
        </h2>
        <table className="table">
          <thead>
            <tr><th>Service</th><th>Who it is for</th><th>What it does</th><th>Next step</th></tr>
          </thead>
          <tbody>
            <tr><td>LoHo Learning</td><td>Schools, teachers, parents and learners</td><td>CBC-aligned lessons, school administration, accessibility and coding tools.</td><td><a href={LOHO_URL} target="_blank" rel="noreferrer">loholearning.co.ke</a></td></tr>
            <tr><td>LoHo E-Books</td><td>Learners and parents</td><td>Digital study materials by education professionals.</td><td><Link to="/books">Browse</Link></td></tr>
            <tr><td>Schools &amp; Teachers</td><td>Teachers and school leaders</td><td>Samples, quotations and teacher resources.</td><td><Link to="/schools">Resources</Link></td></tr>
          </tbody>
        </table>
        <p className="doc-row__meta" style={{ marginTop: 14 }}>Product details are as published by LoHo Learning at loholearning.co.ke.</p>
      </section>
    </main>
  );
}
