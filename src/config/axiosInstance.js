import axios from 'axios';

// const myBaseUrl = 'http://127.0.0.1:8000/';

const isDevelopment = process.env.NODE_ENV === 'development';

// For production, always use the deployed Render backend URL
// For development, use localhost or env variable
const myBaseUrl = isDevelopment 
  ? (process.env.REACT_APP_VITE_API_BASE_URL_LOCAL || 'http://localhost:8000')
  : 'https://project-manager-4-cycf.onrender.com';

// Log which URL is being used (helpful for debugging)
console.log(`🌍 Environment: ${isDevelopment ? 'DEVELOPMENT' : 'PRODUCTION'}`);
console.log(`🔗 API Base URL: ${myBaseUrl}`);
console.log(`📝 Env Var Check - LOCAL: ${process.env.REACT_APP_VITE_API_BASE_URL_LOCAL || 'not set'}`);
console.log(`📝 Env Var Check - DEPLOY: ${process.env.REACT_APP_VITE_API_BASE_URL_DEPLOY || 'not set'}`);

const AxiosInstance = axios.create({
  baseURL: myBaseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  }
});

export default AxiosInstance;

