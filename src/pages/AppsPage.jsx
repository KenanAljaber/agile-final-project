import { Link, useParams } from 'react-router-dom';

const apps = [
  {
    id: 'vector',
    name: 'Vector Studio',
    description: 'Illustration and icon workflows.'
  },
  {
    id: 'motion',
    name: 'Motion FX',
    description: 'Build cinematic motion graphics.'
  },
  {
    id: 'prototype',
    name: 'Prototype Lab',
    description: 'UX flows and interactive demos.'
  },
  {
    id: 'collab',
    name: 'Team Review',
    description: 'Share and gather feedback in one space.'
  }
];

const AppsPage = () => {
  const { projectId } = useParams();

  return (
    <div className="page">
      <header className="topbar">
        <div>
          <Link to="/projects" className="link">← Back to projects</Link>
          <h1>Project {projectId}</h1>
          <p className="subtext">Launch a creative application for this workspace.</p>
        </div>
      </header>

      <section className="gallery">
        {apps.map((app) => (
          <div key={app.id} className="card app-card">
            <div className="app-card__badge">{app.name.charAt(0)}</div>
            <div>
              <h3>{app.name}</h3>
              <p className="subtext">{app.description}</p>
            </div>
            <button className="primary" type="button">
              Open app
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AppsPage;
