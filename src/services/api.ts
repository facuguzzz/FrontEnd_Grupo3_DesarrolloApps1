
import { Platform } from "react-native";
import Constants from "expo-constants";

// En web y simuladores, localhost funciona directo.
// En dispositivos físicos (iOS y Android), hay que usar la IP de la PC.
// Constants.expoConfig.hostUri tiene la IP del servidor de Expo (ej: "192.168.1.5:8081"),
// de la cual extraemos la IP para armar la URL del backend.
const getHost = (): string => {
  if (Platform.OS === "web") return "localhost";
  const expoHost = Constants.expoConfig?.hostUri?.split(":")[0];
  if (expoHost) return expoHost;
  // Fallback: emulador Android
  return Platform.OS === "android" ? "10.0.2.2" : "localhost";
};

const BASE_URL = `http://${getHost()}:8080`;

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
    const detail = body ? `: ${body}` : "";
    throw new Error(`HTTP ${res.status}${detail}`);
  }
  return res.json() as Promise<T>;
}
