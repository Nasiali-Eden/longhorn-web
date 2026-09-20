export default function SectionHeader({ num, title, note, action, flush }) {
  return (
    <div className={'section-header' + (flush ? ' section-header--flush' : '')}>
      {num && <span className="section-header__num">{num}</span>}
      <h2>{title}</h2>
      {note && <p className="section-header__note">{note}</p>}
      {action && <span style={{ marginLeft: 'auto' }}>{action}</span>}
    </div>
  );
}
