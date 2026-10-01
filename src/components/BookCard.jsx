import { Link } from 'react-router-dom';

export default function BookCard({ book, showFormat }) {
  return (
    <Link className="book-card" to={'/books/' + book.slug}>
      <figure className="image-well ar-3-4" style={{ marginBottom: 14 }}>
        <img src={book.coverUrl} alt={'Cover of ' + book.title} loading="lazy" />
      </figure>
      <div className="book-card__meta">{book.meta}</div>
      <div className="book-card__title">{book.title}</div>
      <div className="book-card__price">{showFormat ? book.type + ' · ' + book.language : book.type}</div>
    </Link>
  );
}
