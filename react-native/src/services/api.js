import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack6-backend.herokuapp.com/'
});

export default api;