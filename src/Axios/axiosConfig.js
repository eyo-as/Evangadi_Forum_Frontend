import axios from "axios";

//  This instance is pre-configured to use the base URL specified in the environment variable `VITE_BASE_URL`.
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
