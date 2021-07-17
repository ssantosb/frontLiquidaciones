import { TipoInstalacion } from "./tipoInstalacion";
import { Contratista } from "./contratista";


export interface Instalacion{
    idInstalacion: number,
    precioLiquidar: number, 
    precioTotal: number,
    tipoInstalacion: TipoInstalacion,
    contratista: Contratista,
}