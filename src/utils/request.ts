import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const instance: AxiosInstance = axios.create({});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error),
);

export default instance;
