import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext.jsx';

const projects = [
  {
    id: 'aurora',
    title: 'Aurora Brand System',
    updatedAt: 'Today · 5 collaborators',
    description: 'Identity refresh for enterprise partners.'
  },
  {
    id: 'lumen',
    title: 'Lumen Motion Kit',
    updatedAt: 'Yesterday · 2 collaborators',
    description: 'Animation library for social campaigns.'
  },
  {
    id: 'isle',
    title: 'Isle Commerce UI',
    updatedAt: '2 days ago · 7 collaborators',
    description: 'Commerce experience for next-gen retail.'
  },
  {
    id: 'atlas',
    title: 'Atlas Annual Report',
    updatedAt: 'Last week · 3 collaborators',
    description: 'Editorial toolkit for leadership reports.'
  }
];

const ProjectsPage = () => {
  const { user, logout } = useUser();

  return (
    <div className="page">
      <header className="topbar">
        <div>
          <p className="eyebrow">All projects</p>
          <h1>Creative Suite projects</h1>
          <p className="subtext">Choose a project to open its workspace applications.</p>
        </div>
        <div className="topbar__actions">
          <div className="user-chip">
            <img src={user.avatar} alt={user.name} />
            <div>
              <strong>{user.name}</strong>
              <span>{user.role}</span>
            </div>
          </div>
          <button className="ghost" type="button" onClick={logout}>
            Sign out
          </button>
        </div>
      </header>

      <section className="gallery">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}/apps`} className="card project-card">
            <div>
              <h3>{project.title}</h3>
              <p className="subtext">{project.updatedAt}</p>
            </div>
            <p>{project.description}</p>
            <div className="project-card__footer">
              <span className="pill">Open</span>
              <span className="arrow">→</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
