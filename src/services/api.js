import axios from 'axios';

const API_BASE_URL = 'localhost:3000/api'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
});

export default api;