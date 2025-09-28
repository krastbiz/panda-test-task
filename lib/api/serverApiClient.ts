// lib/api/serverApiClient.ts
import { ApiClient } from "./apiClient";
import { NextApiRequest } from "next";

// return new api client for each request on server side
export function getServerApiClient(): ApiClient {
  return new ApiClient(process.env.NEXT_PUBLIC_BASE_API_URL!);
}
