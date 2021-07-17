import { Concepto } from "./concepto";

export interface TipoInstalacion{
    idTipo: number,
    nombre: string,
    conceptos: Concepto[],
}