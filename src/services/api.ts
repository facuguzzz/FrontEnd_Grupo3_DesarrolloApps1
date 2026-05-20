import { Platform } from "react-native";

// En Android el emulador usa 10.0.2.2 para acceder al localhost de la PC
// En iOS simulator y web, localhost funciona directo
const HOST = Platform.OS === "android" ? "10.0.2.2" : "localhost";
const BASE_URL = `http://${HOST}:8080`;

// Reemplazar con el token real antes de probar contra el backend
export const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdWFuLnBlcmV6QGV4YW1wbGUuY29tIiwiaWRVc3VhcmlvIjoxLCJub21icmUiOiJKdWFuIiwiaWF0IjoxNzc5MzAxMDc5LCJleHAiOjE3NzkzODc0Nzl9.qaF-pTg5JThjKUd1qGD4okOBDPCourpsJrcHBhtYkL4";

export async function apiFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
      ...(options?.headers ?? {}),
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}${body ? `: ${body}` : ""}`);
  }
  return res.json() as Promise<T>;
}
