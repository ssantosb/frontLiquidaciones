import { Contratista } from "./contratista";
import { Concepto } from "./concepto";

export interface PrecioConcepto{
    idPrecioConcepto: number,
    concepto: Concepto,
    contratista: Contratista, 
    precio: number, 
}