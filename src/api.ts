import axios from 'axios';
// Create an Axios instance
const api = axios.create({
  baseURL:  `${process.env.REACT_APP_API_BASE}/api`, // Set your base URL here
  timeout: 5000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});
// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add the token to the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
