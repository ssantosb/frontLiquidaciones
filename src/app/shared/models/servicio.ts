import { Contratista } from "./contratista";
import { Instalacion } from "./instalacion";

export interface Servicio{
    idServicio: number,
    fecha: Date, 
    estado: number,
    precioLiquidar: number,
    precioTotal: number,
    contratista: Contratista, 
    instalaciones: Instalacion[],
}