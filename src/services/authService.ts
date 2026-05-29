import { apiClient } from "./api";

export interface AuthResponse {
  token: string;
  idUsuario: number;
  nombre: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  contrasenia: string;
}

export interface RegisterPayload {
  nombre: string;
  apellido: string;
  email: string;
  contrasenia: string;
}

export function login(payload: LoginPayload): Promise<AuthResponse> {
  return apiClient.post<AuthResponse>("/auth/login", payload).then((r) => r.data);
}

export function register(payload: RegisterPayload): Promise<AuthResponse> {
  return apiClient.post<AuthResponse>("/auth/register", payload).then((r) => r.data);
}
