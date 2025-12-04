// API Configuration
// Uses VITE_API_BASE_URL_LOCAL for development and VITE_API_BASE_URL_DEPLOY for production
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE_URL = isDevelopment 
  ? process.env.REACT_APP_VITE_API_BASE_URL_LOCAL || 'http://localhost:8000'
  : process.env.REACT_APP_VITE_API_BASE_URL_DEPLOY || 'http://localhost:8000';

export default API_BASE_URL;

