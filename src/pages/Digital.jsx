import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import ImageWell from '../components/ImageWell.jsx';

export default function Digital() {
  return (
    <main>
      <PageHeader
        tone="deep"
        crumb="Digital Learning"
        title="One family of digital services."
        lead="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
      />

      <section className="container" style={{ paddingTop: 52 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
          <div className="card-outline">
            <div className="eyebrow" style={{ marginBottom: 10 }}>Platform</div>
            <h3>LOHO Learning</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#signin">Sign in</a>
              <a className="btn btn--secondary" href="#how">How it works</a>
            </div>
          </div>
          <div className="card-outline">
            <div className="eyebrow" style={{ marginBottom: 10 }}>Library</div>
            <h3>E-books</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/books">Browse e-books</Link>
              <a className="btn btn--secondary" href="#apps">Reading apps</a>
            </div>
          </div>
          <div className="card-outline">
            <div className="eyebrow" style={{ marginBottom: 10 }}>Support</div>
            <h3>Help and onboarding</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">Get support</Link>
            </div>
          </div>
        </div>

        <ImageWell
          src={`${import.meta.env.BASE_URL}photos/digital-wide.png`}
          alt="Learners using digital devices"
          ratio="ar-21-9"
          style={{ marginTop: 52 }}
        />
      </section>

      <section className="container section section--last">
        <h2 style={{ fontSize: 'clamp(34px, 3.8vw, 50px)', margin: '0 0 18px', borderBottom: '1px solid var(--divider)', paddingBottom: 14 }}>
          How the services fit together
        </h2>
        <table className="table">
          <thead>
            <tr><th>Service</th><th>Who it is for</th><th>What it does</th><th>Next step</th></tr>
          </thead>
          <tbody>
            <tr><td>LOHO Learning</td><td>Schools and teachers</td><td>Lorem ipsum dolor sit amet consectetur.</td><td><a href="#signin">Sign in</a></td></tr>
            <tr><td>E-books</td><td>Learners and parents</td><td>Sed do eiusmod tempor incididunt ut labore.</td><td><Link to="/books">Browse</Link></td></tr>
            <tr><td>Teacher portal</td><td>Teachers</td><td>Ut enim ad minim veniam quis nostrud.</td><td><Link to="/schools">Resources</Link></td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
