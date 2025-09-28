import { ApiClient } from "./apiClient";

let browserApiClient: ApiClient | null = null;

// return the same api client instance on client side
export function getBrowserApiClient(): ApiClient {
  if (!browserApiClient) {
    browserApiClient = new ApiClient(process.env.NEXT_PUBLIC_BASE_API_URL!);
  }
  return browserApiClient;
}