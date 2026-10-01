import PageHeader from '../components/PageHeader.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import DocRow from '../components/DocRow.jsx';
import { tenders } from '../data/documents.js';

const SOON_DAYS = 7;
const fmtClose = (iso) => new Date(iso).toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Africa/Nairobi' }) + ' (EAT)';

function statusOf(t, now) {
  if (t.awarded) return 'Awarded / archived';
  const left = new Date(t.closes) - now;
  if (left <= 0) return 'Closed';
  return left <= SOON_DAYS * 864e5 ? 'Closing soon' : 'Open';
}
const TONE = { Open: 'green', 'Closing soon': 'maroon', Closed: 'neutral', 'Awarded / archived': 'neutral' };

function Tender({ t, status }) {
  const inactive = status === 'Closed' || status === 'Awarded / archived';
  const meta = [
    t.ref && 'Ref. ' + t.ref,
    t.published && 'Published ' + new Date(t.published).toLocaleDateString('en-GB', { dateStyle: 'long' }),
    (inactive ? 'Closed ' : 'Closes ') + fmtClose(t.closes)
  ].filter(Boolean).join(' · ');
  return (
    <article className="tender">
      <div className="tender__head">
        <span className={'tag tag--' + TONE[status]}>{status}</span>
        <h3>{t.title}</h3>
        <p className="doc-row__meta">{meta}</p>
        <p>{t.summary}</p>
      </div>
      <div className="tender__cats">
        {t.categories.map((c) => (
          <div key={c.code}>
            <h4>{c.code}. {c.name}</h4>
            <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="tender__note">
        {inactive
          ? 'This notice is closed and kept for reference. Applications are no longer being accepted.'
          : 'Submission method and contact details are given in the tender document.'}
      </p>
      <ul className="doc-list">{t.documents.map((d) => <DocRow key={d.title} {...d} />)}</ul>
    </article>
  );
}

export default function Tenders() {
  const now = new Date();
  const rows = tenders.map((t) => ({ t, status: statusOf(t, now) }));
  const active = rows.filter((r) => r.status === 'Open' || r.status === 'Closing soon');
  const archived = rows.filter((r) => !active.includes(r));
  return (
    <main>
      <PageHeader tone="light" title="Tenders" lead="Tender notices and prequalification invitations from Longhorn Publishers PLC." />
      <section className="container" style={{ paddingTop: 44 }}>
        <SectionHeader title="Open notices" />
        {active.length === 0
          ? <div className="empty-state"><h3>No tenders are open right now</h3><p>New notices will be published here with their closing date. Past notices are kept in the archive below.</p></div>
          : active.map(({ t, status }) => <Tender key={t.id} t={t} status={status} />)}
      </section>
      <section className="container" style={{ paddingTop: 44, paddingBottom: 88 }}>
        <SectionHeader title="Closed and archived" />
        {archived.map(({ t, status }) => <Tender key={t.id} t={t} status={status} />)}
      </section>
    </main>
  );
}
