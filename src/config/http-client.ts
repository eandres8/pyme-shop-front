import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const httpClient = axios.create({
  baseURL: apiBaseUrl,
});
