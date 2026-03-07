import axios from "axios";
import { getToken } from "./auth";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/admin",  
});

// Attach token to every request
api.interceptors.request.use((config) => {
  const token = getToken();

  // 🚨 Do NOT attach token to login/register requests
  if (token && !config.url?.includes("/login")) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
