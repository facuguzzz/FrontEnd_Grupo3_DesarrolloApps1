import axios from "axios";
import Constants from "expo-constants";
import { Platform } from "react-native";

const getHost = (): string => {
  if (Platform.OS === "web") return "localhost";
  const expoHost = Constants.expoConfig?.hostUri?.split(":")[0];
  if (expoHost) return expoHost;
  return Platform.OS === "android" ? "10.0.2.2" : "localhost";
};

const BASE_URL = `http://${getHost()}:8080`;

let authToken: string | null = null;
let unauthorizedHandler: (() => void) | null = null;

export function setAuthToken(token: string | null): void {
  authToken = token;
}

export function setUnauthorizedHandler(fn: () => void): void {
  unauthorizedHandler = fn;
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(
      atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")),
    );
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const status: number = error.response?.status ?? 0;
    if ((status === 401 || status === 403) && unauthorizedHandler) {
      unauthorizedHandler();
    }
    const data = error.response?.data;
    const message: string =
      data?.message || data?.error || error.message || `HTTP ${status}`;
    throw new ApiError(status, message);
  },
);
