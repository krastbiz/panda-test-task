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

let browserApiClient: ApiClient | null = null;

// return the same api client instance on client side and new instance each time on server side
export function getApiClient(): ApiClient {
  if (typeof window === 'undefined') return new ApiClient(process.env.NEXT_PUBLIC_BASE_API_URL!)

  if (!browserApiClient) {
    browserApiClient = new ApiClient(process.env.NEXT_PUBLIC_BASE_API_URL!);
  }
  return browserApiClient;
}