import { TipoInstalacion } from "./tipoInstalacion";
export interface Equipo{
    idEquipo: number,
    nombre: string,
    precio: number,
    tipoInstalacion: TipoInstalacion,
}