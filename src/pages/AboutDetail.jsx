import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import RuledGrid from '../components/RuledGrid.jsx';
import ImageWell from '../components/ImageWell.jsx';
import { markets, milestones } from '../data/news.js';
import NotFound from './NotFound.jsx';

const pages = {
  'company-overview': {
    title: 'Company overview', shape: 'arch', image: 'about-press.png', hero: 'headquarters', imageAlt: 'Longhorn Publishers offices and printing', kicker: 'Established 1965 · To enrich lives through knowledge',
    intro: 'Established in 1965, Longhorn Publishers PLC is a leading Pan-African provider of integrated learning solutions, committed to enriching lives through knowledge. Over the decades we have evolved from a traditional publishing house into a diversified education solutions group.',
    paragraphs: ['Our integrated ecosystem spans print learning materials, digital education, institutional procurement, tertiary education support, international curriculum resources, legal publishing, publishing services and professional language solutions.', 'Today we continue to support the education ecosystem through content, technology and services designed to meet the changing needs of modern learning — serving learners, educators, institutions and professionals across Africa.'],
    facts: [['Vision', 'To be the leading African provider of innovative learning solutions.'], ['Mission', 'To enrich lives through knowledge.'], ['Core values', 'Integrity. Innovation. Professionalism. Get It Done.'], ['Governance', 'Listed on the Nairobi Securities Exchange since 2012. ISO 9001:2015 certified.']]
  },
  'our-journey': {
    title: 'Our journey', shape: 'notch', image: 'about-hero.png', hero: 'covers-grade-11',
    intro: 'For more than six decades, Longhorn has paired local insight with a commitment to quality learning materials.',
    paragraphs: ['From our origins as a sales promotion office for UK publications, we have steadily built local publishing capability, expanded across Africa and developed new digital and professional knowledge services.'], timeline: true
  },
  'african-footprint': {
    title: 'Our footprint across Africa', shape: 'pill', image: 'about-map.png', hero: 'africa-map', tone: 'forest',
    intro: 'Longhorn operates, collaborates and serves learners across nine African markets.',
    paragraphs: ['Longhorn Publishers PLC has grown into a leading Pan-African education and knowledge solutions company with operations, subsidiaries and partnerships across nine markets.', 'In each market we collaborate closely with local authors and education experts, so the content we develop is aligned with global educational standards and thoughtfully tailored to the cultural and contextual realities of each country.'], markets: true
  },
  subsidiaries: {
    title: 'Subsidiaries', shape: 'leaf', image: 'about-community.png', hero: 'teacher-reading',
    intro: 'Our group connects specialist businesses that serve the changing needs of education, institutions and professionals.',
    paragraphs: ['Together, these businesses extend Longhorn’s reach from learning content into digital education, institutional procurement and legal and professional knowledge services.'],
    cards: [['LoHo Learning', 'Know. Do. Be More', 'An education technology company born as a strategic spin-off of Longhorn. The flagship platform offers interactive e-content, e-assessments and learning management tools for modern classrooms.'], ['LawAfrica', 'Legal & professional publishing', 'Authoritative statutes, law reports, commentaries and journals in print and digital formats, with an eBooks platform serving over 10,000 subscribers worldwide.'], ['MyBidhaa', 'Institutional procurement', 'A procurement platform that streamlines sourcing and supply chain management for education and professional institutions — learning materials, equipment and services.']]
  },
  'impact-achievements': {
    title: 'Impact and achievements', shape: 'blob', image: 'about-impact.png', hero: 'community-reading', tone: 'forest',
    intro: 'A 60-year legacy marked by continuous innovation and impactful growth — from pioneering educational publishing to leading digital transformation in learning and expanding institutional procurement services.',
    paragraphs: ['Our achievements reflect a commitment to quality content, wider access to learning and a sustainable education ecosystem across the region.'],
    awards: ['The Burt Award', 'Jomo Kenyatta Prize for Literature', 'Digital Tech — Best Publisher in eLearning Solutions', 'Smart SMB Summit — Best Digital Transformation in Education'],
    columns: [['Leadership and governance', 'Our experienced Board of Directors and executive management uphold strong governance, driving strategic growth and sustainable value creation, supported by a culture of integrity, innovation, professionalism and accountability.'], ['Community and social impact', 'Longhorn invests in initiatives that strengthen communities and expand educational access — literacy programmes, teacher training, book donation drives and partnerships supporting vulnerable and marginalised communities.'], ['Commitment to quality', 'We are ISO 9001:2015 certified, underscoring our dedication to the highest standards of quality and continuous improvement across every part of the group.']],
    facts: [['Legacy', 'Over six decades of educational excellence and reliable learning solutions.'], ['Innovation', 'Pioneering digital transformation in learning and institutional services.'], ['Recognition', 'Award-winning educational and creative publishing.'], ['Quality', 'ISO 9001:2015 certified, with a focus on continuous improvement.']]
  },
  'why-partner-with-us': {
    title: 'Why partner with us', shape: 'offset', image: 'about-quality.png', hero: 'partnership',
    intro: 'We are an integrated partner in education, knowledge and institutional development.',
    paragraphs: ['Our experience, regional perspective and connected capabilities help educators, institutions and partners respond confidently to evolving learning needs.'],
    facts: [['Trusted heritage', 'Over six decades of quality, reliability and educational excellence.'], ['Integrated ecosystem', 'Interconnected solutions across content, technology, procurement and professional knowledge services.'], ['Innovation-driven', 'Continued investment in forward-looking solutions for evolving education needs.'], ['Strong governance', 'Experienced leadership and sound governance underpinning long-term sustainability.'], ['Pan-African reach', 'Regional insight and scalable solutions suited to diverse educational contexts.'], ['Partners in learning', 'More than providers of materials — integrated partners in education, knowledge and institutional development.']]
  }
};

// Numbered/tinted tiles with alternating leaf-shaped corners.
function Tiles({ items, numbered }) {
  return (
    <div className={'tiles' + (items.length === 4 ? ' tiles--four' : '')}>
      {items.map((item, i) => {
        const [label, body] = Array.isArray(item) ? item : [item, null];
        return (
          <article className="tile" key={label}>
            {numbered && <span className="tile__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>}
            <h3>{label}</h3>
            {body && <p>{body}</p>}
          </article>
        );
      })}
    </div>
  );
}

export default function AboutDetail() {
  const { section } = useParams();
  const page = pages[section];
  if (!page) return <NotFound />;

  return <main>
    <PageHeader split image={page.hero} tone={page.tone} kicker={page.kicker || 'About Longhorn'} title={page.title} lead={page.intro} />
    <section className="container section--tight section--last">
      <p className={'about-statement' + (page.paragraphs[0].length > 170 ? ' about-statement--long' : '')}>{page.paragraphs[0]}</p>
      {page.markets ? (
        <div className="footprint">
          <figure className="footprint__map">
            <img src={`${import.meta.env.BASE_URL}africa-footprint.svg`} alt="Map of Africa with Kenya, Uganda, Tanzania, Rwanda, Cameroon, DR Congo, Malawi, Zambia and Ethiopia highlighted" />
          </figure>
          <div className="footprint__list">
            <h2>Where Longhorn operates</h2>
            <ul>{markets.map(([name, note], i) => <li key={name}><span className="footprint__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><span className="footprint__name">{name}</span>{note && <span className="footprint__note">{note}</span>}</li>)}</ul>
          </div>
        </div>
      ) : (
        <figure className={'shape-frame shape--' + page.shape}>
          <img src={`${import.meta.env.BASE_URL}photos/${page.image}`} alt={page.imageAlt || ''} />
        </figure>
      )}
      {page.paragraphs.length > 1 && <div className="about-copy">{page.paragraphs.slice(1).map((t) => <p key={t}>{t}</p>)}</div>}
      {page.timeline && <><SectionHeader num="01" title="Milestones" />{milestones.map(([year, text]) => <div className="timeline__row" key={year}><div className="timeline__year">{year}</div><p>{text}</p></div>)}</>}
      {page.markets && <><div className="stat-row about-detail__stats"><div><div className="stat__num">9</div><div className="stat__label">Markets</div></div><div><div className="stat__num">1,000+</div><div className="stat__label">Titles published</div></div><div><div className="stat__num">20+</div><div className="stat__label">African languages</div></div></div></>}
      {page.cards && <div className="about-detail__cards">{page.cards.map(([title, eyebrow, body]) => <article className="card-outline" key={title}><h2>{title}</h2><div className="eyebrow eyebrow--green">{eyebrow}</div><p>{body}</p></article>)}</div>}
      {page.awards && <div className="about-detail__section"><SectionHeader title="Awards and recognition" /><Tiles items={page.awards} /></div>}
      {page.columns && <div className="about-detail__section"><Tiles items={page.columns} /></div>}
      {page.facts && <div className={page.awards || page.columns ? 'about-detail__section' : ''}><Tiles items={page.facts} numbered /></div>}
    </section>
  </main>;
}
