import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {

    this.client = axios.create({ baseURL });
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config);
  }

  // TODO: implement rest http methods
}