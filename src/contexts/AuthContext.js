import React, { createContext, useContext, useState, useEffect } from 'react';
import AxiosInstance from '../config/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      // Set default authorization header for all requests
      AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await AxiosInstance.post('/api/login/', {
        username,
        password
      });
      
      const { access, refresh } = response.data;
      
      // Store tokens and user data
      localStorage.setItem('token', access);
      localStorage.setItem('refreshToken', refresh);
      
      // Get user info
      const userInfo = { username }; // In a real app, you might want to fetch more user details
      localStorage.setItem('user', JSON.stringify(userInfo));
      
      // Set default authorization header
      AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${access}`;
      
      setUser(userInfo);
      return true;
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      await AxiosInstance.post('/api/register/', {
        username,
        email,
        password
      });
      
      // After registration, log the user in
      return await login(username, password);
    } catch (err) {
      setError(err.response?.data || 'Registration failed');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    delete AxiosInstance.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);