import PageHeader from '../components/PageHeader.jsx';
import { news } from '../data/news.js';

export default function News() {
  return (
    <main>
      <PageHeader image="covers-grade-11" title="News & Insights" />
      <section className="container" style={{ paddingTop: 44, paddingBottom: 88 }}>
        <div className="news-grid">
          {news.map((n) => (
            <article className="news-card" key={n.id}>
              <figure className="image-well ar-16-10">
                <img src={n.imageUrl} alt="" loading="lazy" />
              </figure>
              <div className="news-card__head">
                <span className="tag tag--green">{n.kind}</span>
                <span className="news-card__date">{n.date}</span>
              </div>
              <h3>{n.title}</h3>
              <p>{n.blurb}</p>
              <a className="ruled__link" href={'#article-' + n.id}>Read more →</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
