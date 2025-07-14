import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((request) => {
  try {
    // Axios configs go here
    return request;
  } catch (error) {
    console.error("Error in axios interceptor", error);
    return request;
  }
});

export default axiosInstance;
