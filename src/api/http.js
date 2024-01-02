import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

http.defaults.withCredentials = true;

const token = localStorage.getItem("token") ?? false;

http.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
