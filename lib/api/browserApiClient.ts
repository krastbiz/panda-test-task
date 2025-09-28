import { ApiClient } from "./apiClient";

let browserApiClient: ApiClient | null = null;

// return the same api client instance on client side
export function getBrowserApiClient(): ApiClient {
  if (!browserApiClient) {
    browserApiClient = new ApiClient(process.env.API_BASE_URL!);
  }
  return browserApiClient;
}