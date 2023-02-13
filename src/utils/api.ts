import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://tech-shopping-api-production.up.railway.app/produto'
})