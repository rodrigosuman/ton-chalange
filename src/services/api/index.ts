import axios from 'axios';

const api = axios.create();

api.interceptors.response.use(response => response.data);

export default api;
