import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticating } = useUser();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(formState);
    navigate('/projects');
  };

  return (
    <div className="page page--center">
      <div className="card login-card">
        <div className="login-card__header">
          <span className="pill">Creative Suite</span>
          <h1>Welcome back</h1>
          <p>Sign in to access your design workspaces and applications.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email address</span>
            <input
              type="email"
              name="email"
              placeholder="you@studio.com"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formState.password}
              onChange={handleChange}
              required
            />
          </label>
          <button className="primary" type="submit" disabled={isAuthenticating}>
            {isAuthenticating ? 'Signing in...' : 'Sign in'}
          </button>
          <div className="helper-row">
            <span>Need access? Contact your admin.</span>
            <span className="link">Reset password</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
