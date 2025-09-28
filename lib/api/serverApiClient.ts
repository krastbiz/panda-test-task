// lib/api/serverApiClient.ts
import { ApiClient } from "./apiClient";
import { NextApiRequest } from "next";

// return new api client for each request on server side
export function getServerApiClient(): ApiClient {
  return new ApiClient(process.env.API_BASE_URL!);
}
