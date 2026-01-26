import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/client.js';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      await apiClient.post('/auth/signup', formState);
      setStatus('Account created! You can sign in now.');
      navigate('/login');
    } catch (error) {
      setStatus('Unable to create your account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page page--center">
      <div className="card login-card">
        <div className="login-card__header">
          <span className="pill">Creative Suite</span>
          <h1>Create your account</h1>
          <p>Join the studio and start building your next project.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Full name</span>
            <input
              type="text"
              name="name"
              placeholder="Alex Johnson"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span>Work email</span>
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
            <span>Company</span>
            <input
              type="text"
              name="company"
              placeholder="Studio name"
              value={formState.company}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create a secure password"
              value={formState.password}
              onChange={handleChange}
              required
            />
          </label>
          <button className="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>
          {status ? <p className="status-message">{status}</p> : null}
          <div className="helper-row">
            <span>Already have an account?</span>
            <Link className="link" to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
