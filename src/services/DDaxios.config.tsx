import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://34.193.65.107:3000/',
  headers: {
    'Content-Type': 'application/json'
    }
});

export const addAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;