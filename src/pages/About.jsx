import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import RuledGrid from '../components/RuledGrid.jsx';
import ImageWell from '../components/ImageWell.jsx';
import { milestones, markets } from '../data/news.js';

const FACTS = [
  ['Vision', 'To be the leading African provider of innovative learning solutions.'],
  ['Mission', 'To enrich lives through knowledge.'],
  ['Core values', 'Integrity. Innovation. Professionalism. Get It Done.'],
  ['Governance', 'Listed on the Nairobi Securities Exchange since 2012. ISO 9001:2015 certified.']
];

const SUBSIDIARIES = [
  ['LoHo Learning', 'Know. Do. Be More', 'An education technology company born as a strategic spin-off of Longhorn. The flagship platform offers interactive e-content, e-assessments and learning management tools for modern classrooms.'],
  ['LawAfrica', 'Legal & professional publishing', 'Authoritative statutes, law reports, commentaries and journals in print and digital formats, with an eBooks platform serving over 10,000 subscribers worldwide.'],
  ['MyBidhaa', 'Institutional procurement', 'A procurement platform that streamlines sourcing and supply chain management for education and professional institutions — learning materials, equipment and services.']
];

const AWARDS = [
  'The Burt Award',
  'Jomo Kenyatta Prize for Literature',
  'Digital Tech — Best Publisher in eLearning Solutions',
  'Smart SMB Summit — Best Digital Transformation in Education'
];

const PARTNER = [
  ['Trusted heritage', 'Over six decades of quality, reliability and educational excellence.'],
  ['Integrated ecosystem', 'Interconnected solutions across content, technology, procurement and professional knowledge services.'],
  ['Innovation-driven', 'Continued investment in forward-looking solutions for evolving education needs.'],
  ['Strong governance', 'Experienced leadership and sound governance underpinning long-term sustainability.'],
  ['Pan-African reach', 'Regional insight and scalable solutions suited to diverse educational contexts.'],
  ['Partners in learning', 'More than providers of materials — integrated partners in education, knowledge and institutional development.']
];

export default function About() {
  return (
    <main>
      <PageHeader
        crumb="About Longhorn"
        kicker="Established 1965 · A Pan-African learning solutions group"
        title="To enrich lives through knowledge."
        tall
      />

      <section className="container" style={{ paddingTop: 52 }}>
        <SectionHeader num="01" title="Company overview" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 36, columnGap: 52 }}>
          <p style={{ color: 'var(--n-800)', margin: 0 }}>
            Established in 1965, Longhorn Publishers PLC is a leading Pan-African provider of
            integrated learning solutions, committed to enriching lives through knowledge. Over the
            decades we have evolved from a traditional publishing house into a diversified education
            solutions group.
          </p>
          <p style={{ color: 'var(--n-800)', margin: 0 }}>
            Our integrated ecosystem spans print learning materials, digital education,
            institutional procurement, tertiary education support, international curriculum
            resources, legal publishing, publishing services and professional language solutions.
          </p>
          <p style={{ color: 'var(--n-800)', margin: 0 }}>
            Today we continue to support the education ecosystem through content, technology and
            services designed to meet the changing needs of modern learning — serving learners,
            educators, institutions and professionals across Africa.
          </p>
        </div>

        <ImageWell
          src="/photos/about-press.png"
          alt="Longhorn Publishers offices and printing"
          ratio="ar-21-9"
          style={{ margin: '48px 0' }}
        />

        <RuledGrid variant="facts" top>
          {FACTS.map(([label, body]) => (
            <div key={label}>
              <h4 className="label-sm" style={{ margin: '0 0 8px' }}>{label}</h4>
              <p style={{ fontSize: 15, color: 'var(--n-800)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </RuledGrid>
      </section>

      <section className="band band--green" style={{ marginTop: 56 }}>
        <div className="container" style={{ paddingTop: 52, paddingBottom: 52 }}>
          <SectionHeader num="02" title="Our journey" flush />
          {milestones.map(([year, text]) => (
            <div className="timeline__row" key={year}>
              <div className="timeline__year">{year}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section--tight" style={{ paddingTop: 56 }}>
        <SectionHeader num="03" title="Our footprint across Africa" />
        <div className="row" style={{ gap: 52 }}>
          <div className="col" style={{ flexBasis: 340 }}>
            <p style={{ color: 'var(--n-800)', margin: '0 0 14px' }}>
              Longhorn Publishers PLC has grown into a leading Pan-African education and knowledge
              solutions company with operations, subsidiaries and partnerships across nine markets.
            </p>
            <p style={{ color: 'var(--n-800)', margin: 0 }}>
              In each market we collaborate closely with local authors and education experts, so the
              content we develop is aligned with global educational standards and thoughtfully
              tailored to the cultural and contextual realities of each country.
            </p>
            <div className="stat-row">
              <div><div className="stat__num">9</div><div className="stat__label">Markets</div></div>
              <div><div className="stat__num">1,000+</div><div className="stat__label">Titles published</div></div>
              <div><div className="stat__num">20+</div><div className="stat__label">African languages</div></div>
            </div>
          </div>
          <div className="col" style={{ flexBasis: 300 }}>
            <RuledGrid variant="markets" top>
              {markets.map(([name, note]) => (
                <div key={name}>
                  {name}
                  {note && <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--n-600)' }}>{note}</div>}
                </div>
              ))}
            </RuledGrid>
          </div>
        </div>
      </section>

      <section className="container section--tight" style={{ paddingTop: 56 }}>
        <SectionHeader num="04" title="Subsidiaries" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
          {SUBSIDIARIES.map(([name, eyebrow, body]) => (
            <div className="card-outline" key={name}>
              <h3>{name}</h3>
              <div className="eyebrow eyebrow--green" style={{ marginBottom: 12 }}>{eyebrow}</div>
              <p style={{ margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band band--deep on-dark" style={{ marginTop: 64 }}>
        <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <SectionHeader num="05" title="Impact and achievements" />
          <div className="row" style={{ gap: 52 }}>
            <p className="col" style={{ flexBasis: 340, margin: 0, fontSize: 20, lineHeight: 1.45, color: 'var(--on-maroon-body)' }}>
              A 60-year legacy marked by continuous innovation and impactful growth — from pioneering
              educational publishing to leading digital transformation in learning and expanding
              institutional procurement services.
            </p>
            <div className="col award-list" style={{ flexBasis: 320 }}>
              {AWARDS.map((a) => <div key={a}>{a}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container section--tight" style={{ paddingTop: 56 }}>
        <div className="row" style={{ gap: 52 }}>
          <div className="col" style={{ flexBasis: 300 }}>
            <h3 style={{ fontSize: 29 }}>Leadership and governance</h3>
            <p style={{ fontSize: 15.5, color: 'var(--n-800)', margin: 0 }}>
              Our experienced Board of Directors and executive management uphold strong governance,
              driving strategic growth and sustainable value creation, supported by a culture of
              integrity, innovation, professionalism and accountability.
            </p>
          </div>
          <div className="col" style={{ flexBasis: 300 }}>
            <h3 style={{ fontSize: 29 }}>Community and social impact</h3>
            <p style={{ fontSize: 15.5, color: 'var(--n-800)', margin: 0 }}>
              Longhorn invests in initiatives that strengthen communities and expand educational
              access — literacy programmes, teacher training, book donation drives and partnerships
              supporting vulnerable and marginalised communities.
            </p>
          </div>
          <div className="col" style={{ flexBasis: 300 }}>
            <h3 style={{ fontSize: 29 }}>Commitment to quality</h3>
            <p style={{ fontSize: 15.5, color: 'var(--n-800)', margin: 0 }}>
              We are ISO 9001:2015 certified, underscoring our dedication to the highest standards of
              quality and continuous improvement across every part of the group.
            </p>
          </div>
        </div>
      </section>

      <section className="container section--tight section--last" style={{ paddingTop: 56 }}>
        <SectionHeader num="06" title="Why partner with us" flush />
        <RuledGrid variant="6">
          {PARTNER.map(([title, body]) => (
            <div className="ruled__cell" key={title}>
              <div className="ruled__cell-title">{title}</div>
              <p style={{ marginBottom: 0 }}>{body}</p>
            </div>
          ))}
        </RuledGrid>
        <div className="btn-row" style={{ marginTop: 36 }}>
          <Link className="btn btn--primary btn--md" to="/contact">Work with us</Link>
          <Link className="btn btn--secondary btn--md" to="/books">Browse the catalogue</Link>
        </div>
      </section>
    </main>
  );
}
