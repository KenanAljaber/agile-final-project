import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';

import SignupPage from './pages/SignupPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import AppsPage from './pages/AppsPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ChatbotWidget from './components/ChatbotWidget.jsx';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
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
    <ChatbotWidget />
  </>

);

export default App;
