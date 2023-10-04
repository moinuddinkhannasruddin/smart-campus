import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: "https://fakestoreapi.com/",
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
