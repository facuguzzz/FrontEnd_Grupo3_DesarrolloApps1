
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

// Token JWT en memoria. Lo setea el AuthContext tras login o al restaurar la
// sesión guardada. Las llamadas que requieren auth lo envían en el header.
let authToken: string | null = null;

export function setAuthToken(token: string | null): void {
  authToken = token;
}

// Error con el status HTTP y el mensaje que devuelve el backend (ErrorResponse.message).
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...(options?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    let message = text || `HTTP ${res.status}`;
    try {
      const body = JSON.parse(text);
      message = body.message || body.error || message;
    } catch {
      // El cuerpo no es JSON; usamos el texto crudo.
    }
    throw new ApiError(res.status, message);
  }

  // Algunos endpoints (ej: logout) responden 200 sin cuerpo.
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as T;
}
