import axios from 'axios';

// const myBaseUrl = 'http://127.0.0.1:8000/';

const isDevelopment = process.env.NODE_ENV === 'development';
const myBaseUrl = isDevelopment 
  ? process.env.REACT_APP_VITE_API_BASE_URL_LOCAL || 'http://localhost:8000'
  : process.env.REACT_APP_VITE_API_BASE_URL_DEPLOY || 'http://localhost:8000';

// Log which URL is being used (helpful for debugging)
console.log(`🌍 Environment: ${isDevelopment ? 'DEVELOPMENT' : 'PRODUCTION'}`);
console.log(`🔗 API Base URL: ${myBaseUrl}`);

const AxiosInstance = axios.create({
  baseURL: myBaseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  }
});

export default AxiosInstance;

