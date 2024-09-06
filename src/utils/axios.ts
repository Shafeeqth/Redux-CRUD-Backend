import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2000,
});

export type { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders };
