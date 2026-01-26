import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../context/UserContext.jsx';

const initialProjects = [
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
  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  const handleCreateProject = (event) => {
    event.preventDefault();
    if (!newProjectName.trim()) {
      return;
    }
    const slug = newProjectName.toLowerCase().replace(/\s+/g, '-');
    setProjects((prev) => [
      {
        id: slug,
        title: newProjectName,
        updatedAt: 'Just now · 1 collaborator',
        description: 'New creative workspace.'
      },
      ...prev
    ]);
    setNewProjectName('');
    setIsModalOpen(false);
  };

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
          <button className="primary" type="button" onClick={() => setIsModalOpen(true)}>
            + New project
          </button>
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

      {isModalOpen ? (
        <div className="modal">
          <div className="modal__card">
            <div className="modal__header">
              <h2>Create a new project</h2>
              <button className="ghost" type="button" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
            </div>
            <form className="modal__form" onSubmit={handleCreateProject}>
              <label className="field">
                <span>Project title</span>
                <input
                  type="text"
                  placeholder="e.g. Atlas Rebrand"
                  value={newProjectName}
                  onChange={(event) => setNewProjectName(event.target.value)}
                  required
                />
              </label>
              <div className="modal__actions">
                <button className="ghost" type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button className="primary" type="submit">
                  Create project
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectsPage;
