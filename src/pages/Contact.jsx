import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';

const ROUTES = [
  ['Sales & trade', 'Booksellers, distributors and bulk orders.'],
  ['Schools', 'Quotations, sample copies and teacher support.'],
  ['Authors', 'Submission guidance and what Longhorn publishes.'],
  ['Investors', 'Reports, announcements and shareholder enquiries.']
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHeader title="Talk to Longhorn" />

      <section className="container" style={{ paddingTop: 52, paddingBottom: 88 }}>
        <div className="row">
          <div className="col" style={{ flexBasis: 300 }}>
            <h2 className="block-title">Head office</h2>
            <address className="contact__address" style={{ fontStyle: 'normal' }}>
              Longhorn Publishers PLC<br />
              Funzi Road, Industrial Area<br />
              P.O. Box 18033 – 00500<br />
              Nairobi, Kenya
            </address>
            <p className="tnum" style={{ marginBottom: 24 }}>
              Tel: <a href="tel:+254722204608">+254 722 204 608</a> / <a href="tel:+254708282260">+254 708 282 260</a><br />
              Email: <a href="mailto:enquiries@longhornpublishers.com">enquiries@longhornpublishers.com</a>
            </p>

            <h2 className="block-title">Regional offices</h2>
            <div className="office-list">
              <div>
                <h4>Uganda</h4>
                <p>Plot 4, Vubyabirenge Road, Ntinda Stretcher, Kampala · <span className="tnum">+256 41 4286093</span></p>
              </div>
              <div>
                <h4>Cameroon</h4>
                <p>Tsinga, next to Total Energies, Yaoundé</p>
              </div>
            </div>

            <h2 className="block-title">Who to contact</h2>
            <div className="route-list">
              {ROUTES.map(([title, body]) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col" style={{ flexBasis: 400 }}>
            {sent ? (
              <div className="form form--card" role="status">
                <h3 style={{ fontSize: 30, margin: 0 }}>Enquiry sent</h3>
                <p style={{ margin: 0, color: 'var(--n-800)' }}>
                  Thank you. The right Longhorn team will be in touch.
                </p>
                <button type="button" className="btn btn--secondary" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="form form--card" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3 style={{ fontSize: 32, margin: 0 }}>Send an enquiry</h3>
                <div className="field">
                  <label htmlFor="c-name">Your name</label>
                  <input className="input" id="c-name" name="name" required placeholder="Placeholder Name" />
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input className="input" id="c-email" name="email" type="email" required placeholder="name@example.com" />
                </div>
                <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
                  <legend style={{ fontSize: 12, marginBottom: 5, color: 'rgba(32,31,29,0.7)', padding: 0 }}>
                    I am contacting as
                  </legend>
                  <div className="radio-row">
                    {['Parent or learner', 'Teacher or school', 'Bookseller'].map((who, i) => (
                      <label className="radio" key={who}>
                        <input type="radio" name="who" value={who} defaultChecked={i === 0} />
                        <span className="dot" />
                        {who}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="field">
                  <label htmlFor="c-message">Message</label>
                  <textarea className="input" id="c-message" name="message" required placeholder="Lorem ipsum dolor sit amet…" />
                </div>
                <button type="submit" className="btn btn--primary btn--md">Send enquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
