import { apiFetch } from "./api";

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
  return apiFetch<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function register(payload: RegisterPayload): Promise<AuthResponse> {
  return apiFetch<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
