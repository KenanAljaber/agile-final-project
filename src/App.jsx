import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import AppsPage from './pages/AppsPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/projects"
      element={
        <ProtectedRoute>
          <ProjectsPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/projects/:projectId/apps"
      element={
        <ProtectedRoute>
          <AppsPage />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default App;
