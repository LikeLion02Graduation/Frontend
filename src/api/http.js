import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.nae-chin-man.link",
});

export const KAKAO_AUTH_URL = `https://nae-chin-man.link/accounts/kakao/`;

http.defaults.withCredentials = true;

const token = localStorage.getItem("token") ?? false;

http.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
