import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import DocRow from '../components/DocRow.jsx';
import { annualReports, financialReports, policies, POLICY_GROUPS, notices, NOTICE_TYPES } from '../data/documents.js';

const AREAS = [
  ['reports', 'Reports', 'Annual reports and half-year and full-year financial results.'],
  ['policies', 'Company Policies', 'Governance, ethics, risk, procurement, people, privacy and sustainability documents.'],
  ['notices', 'Notices & Downloads', 'AGM materials, corporate announcements and the event calendar.']
];

function Landing() {
  return (
    <main>
      <PageHeader tone="light" title="Investor Relations" lead="Reports, governance documents and shareholder notices for Longhorn Publishers PLC." />
      <section className="container" style={{ paddingTop: 72, paddingBottom: 96 }}>
        <p className="about-statement about-statement--long">Everything a shareholder needs, in one place: results, governance and notices.</p>
        <div className="tiles tiles--link" style={{ marginTop: 56 }}>
          {AREAS.map(([slug, title, blurb], i) => (
            <Link className="tile tile--link" key={slug} to={'/investors/' + slug}>
              <span className="tile__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{blurb}</p>
              <span className="tile__go">Open <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function Reports() {
  return (
    <>
      <SectionHeader title="Annual Reports" note={annualReports.length + ' reports'} />
      <ul className="doc-list">{annualReports.map((r) => <DocRow key={r.id} {...r} />)}</ul>
      <SectionHeader title="Financial Reports" note={financialReports.length + (financialReports.length === 1 ? ' report' : ' reports')} />
      <ul className="doc-list">{financialReports.map((r) => <DocRow key={r.id} {...r} />)}</ul>
    </>
  );
}

function Policies() {
  return POLICY_GROUPS.map((g) => (
    <section key={g}>
      <SectionHeader title={g} note={policies.filter((p) => p.group === g).length + ' documents'} />
      <ul className="doc-list">
        {policies.filter((p) => p.group === g).map((p) => <DocRow key={p.title} title={p.title} url={p.url} type="Policy" />)}
      </ul>
    </section>
  ));
}

function Notices() {
  const [type, setType] = useState('All');
  const groups = NOTICE_TYPES.filter((t) => type === 'All' || t === type).map((t) => [t, notices.filter((n) => n.type === t)]).filter(([, items]) => items.length);
  return (
    <>
      <div className="field" style={{ maxWidth: 360, marginBottom: 36 }}>
        <label htmlFor="notice-type">Show</label>
        <select id="notice-type" className="input" value={type} onChange={(e) => setType(e.target.value)}>
          <option>All</option>
          {NOTICE_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      {groups.map(([t, items]) => (
        <section key={t}>
          <SectionHeader title={t} note={items.length + (items.length === 1 ? ' document' : ' documents')} />
          <ul className="doc-list">{items.map((n) => <DocRow key={n.title} title={n.title} url={n.url} />)}</ul>
        </section>
      ))}
    </>
  );
}

const VIEWS = { reports: Reports, policies: Policies, notices: Notices };

export default function Investors() {
  const { area } = useParams();
  if (!area) return <Landing />;
  const View = VIEWS[area];
  if (!View) return <Navigate to="/investors" replace />;
  const [, title, blurb] = AREAS.find((a) => a[0] === area);
  return (
    <main>
      <PageHeader tone="light" title={title} lead={blurb} />
      <section className="container" style={{ paddingTop: 32, paddingBottom: 88 }}><View /></section>
    </main>
  );
}
