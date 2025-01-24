import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api/books', // Backend API base URL
});

export default axiosInstance;
