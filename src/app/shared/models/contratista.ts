import {Zona} from './zona'
export interface Contratista{
    correo: string, 
    documento: string,
    idContratista: number,
    nombre: string,
    telefono: string, 
    tipo: number, 
    tipoDocumento: boolean, 
    vigenciaDesde: any, 
    vigenciaHasta: any,
    zona: Zona,
}