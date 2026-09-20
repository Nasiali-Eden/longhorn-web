import { Link } from 'react-router-dom';

export default function PageHeader({ crumb, title, lead, kicker, tone = 'maroon', tall, children }) {
  return (
    <div className={'band band--' + tone + ' on-dark page-header' + (tall ? ' page-header--tall' : '')}>
      <div className="container">
        <p className="breadcrumb">
          <Link to="/">Longhorn</Link> / <strong>{crumb}</strong>
        </p>
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {lead && <><div className="rule-green" /><p className="page-header__lead">{lead}</p></>}
        {children}
      </div>
    </div>
  );
}
