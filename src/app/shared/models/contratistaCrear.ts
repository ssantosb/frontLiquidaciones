import { PrecioConcepto } from "./precioConcepto";

export interface Contratista{
    nombre:String;
	tipoDocumento:boolean;
    documento:string;
    telefono:string;
    correo:string;
    vigenciaDesde:Date;
    vigenciaHasta:Date;
    tipo:number;
    idZona:number;
    preciosConceptos:PrecioConcepto[];
}