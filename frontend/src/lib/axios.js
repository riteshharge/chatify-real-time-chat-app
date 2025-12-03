import axios from "axios";

// If VITE_BACKEND_URL is given → use it (separate domain)
// Else → use same-domain "/api"
const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL && import.meta.env.VITE_BACKEND_URL !== ""
    ? import.meta.env.VITE_BACKEND_URL
    : "/api";

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});
