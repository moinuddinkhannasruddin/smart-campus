import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: "http://localhost:9000/api",
});

// Request interceptor
axiosInterceptor.interceptors.request.use(
  async (request) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      request.headers.Authorization = `${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
