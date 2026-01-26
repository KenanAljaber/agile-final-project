import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import apiClient from '../api/client.js';

const UserContext = createContext(null);

const demoUser = {
  id: 'u-1',
  name: 'Creative Lead',
  role: 'Administrator',
  avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&w=96&h=96&q=80'
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const storedToken = window.localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      setUser(demoUser);
    }
  }, []);

  const login = async (credentials) => {
    setIsAuthenticating(true);
    try {

      // await apiClient.post('/auth/login', credentials);

      setUser(demoUser);
      setToken('demo-token');
      window.localStorage.setItem('authToken', 'demo-token');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem('authToken');
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(user),
      isAuthenticating,
      login,
      logout
    }),
    [user, token, isAuthenticating]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
