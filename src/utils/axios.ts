import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  return localStorage.getItem("auth_token") || "";
};

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

console.log(localStorage.getItem("auth_token"));
export const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${JSON.parse(getToken())}`,
  },
  withCredentials: true,
});
