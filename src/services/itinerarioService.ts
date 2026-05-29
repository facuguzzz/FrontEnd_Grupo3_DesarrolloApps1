import {
  CategoriaItinerario,
  ItinerarioSistemaResumenDTO,
  Provincia,
} from "../types/itinerario";
import { apiClient } from "./api";

export interface BuscarParams {
  provincia?: Provincia;
  tags?: CategoriaItinerario[];
  fechaInicio?: string;
  fechaFin?: string;
}

export async function buscarPorPreferencias(
  params: BuscarParams,
): Promise<ItinerarioSistemaResumenDTO[]> {
  const query = new URLSearchParams();
  if (params.provincia) query.append("provincia", params.provincia);
  params.tags?.forEach((t) => query.append("tags", t));
  if (params.fechaInicio) query.append("fechaInicio", params.fechaInicio);
  if (params.fechaFin) query.append("fechaFin", params.fechaFin);
  const qs = query.toString();
  return apiClient
    .get<ItinerarioSistemaResumenDTO[]>(`/itinerario/buscar${qs ? `?${qs}` : ""}`)
    .then((r) => r.data);
}
