const banner = (name) => import.meta.env.BASE_URL + 'banners/' + name + '.jpg';

// `image` is a file name in public/banners. With an image the band becomes a photo hero
// with a tone-coloured overlay on the left so the white title stays readable.
// With `split`, the photo is shown clean beside a solid-colour text panel (no overlay).
export default function PageHeader({ title, lead, kicker, tone = 'maroon', image, split, tall, children }) {
  const text = (
    <>
      {kicker && <p className="kicker">{kicker}</p>}
      <h1>{title}</h1>
      {lead && <><div className="rule-green" /><p className="page-header__lead">{lead}</p></>}
      {children}
    </>
  );
  if (image && split) {
    return (
      <div className={'band band--' + tone + ' on-dark page-header page-header--split'}>
        <div className="page-header__panel"><div className="page-header__panel-inner">{text}</div></div>
        <img className="page-header__photo" src={banner(image)} alt="" />
      </div>
    );
  }
  return (
    <div
      className={'band band--' + tone + ' on-dark page-header' + (tall ? ' page-header--tall' : '') + (image ? ' page-header--photo' : '')}
      style={image ? { '--hero-img': 'url(' + banner(image) + ')' } : undefined}
    >
      <div className="container">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {lead && <><div className="rule-green" /><p className="page-header__lead">{lead}</p></>}
        {children}
      </div>
    </div>
  );
}
