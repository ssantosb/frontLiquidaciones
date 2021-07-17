import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../models/ciudad';
import { Contratista } from '../models/contratista';
import { Concepto } from '../models/concepto';
import { Equipo } from '../models/equipo';
import { Instalacion } from '../models/instalacion';
import { PrecioConcepto } from '../models/precioConcepto';
import { Servicio } from '../models/servicio';
import { TipoInstalacion } from '../models/tipoInstalacion';
import { Zona } from '../models/zona';


@Injectable({
  providedIn: 'root'
})
export class ABCLiquidacionesService {
  baseUrl = environment.urlApi;
  constructor(private httpClient: HttpClient) { }

  //CIUDAD SERVICES
  getCiudades():Observable<Ciudad[]>{
      return this.httpClient.get<Ciudad[]>(this.baseUrl + `ciudades/`);
  }

  //CONCEPTO SERVICES
  getConceptosByTipoInstalacion(idTipoInstalacion):Observable<Concepto[]>{
    return this.httpClient.get<Concepto[]>(this.baseUrl + `conceptos/tipoInstalacion/${idTipoInstalacion}`);
  }

  //CONTRATISTA SERVICES
  getContratistas():Observable<Contratista[]>{
    return this.httpClient.get<Contratista[]>(this.baseUrl + `contratistas/`);
  }

  getContratistaById(idContratista):Observable<Contratista>{
    return this.httpClient.get<Contratista>(this.baseUrl + `contratistas/${idContratista}`);
  }
    
  createContratista(contratista): Observable<Contratista> {
    return this.httpClient.post<Contratista>(this.baseUrl + `contratistas/`, contratista);
  }

  putContratista(idContratista, contratista): Observable<Contratista> {
    return this.httpClient.put<Contratista>(this.baseUrl + `contratistas/${idContratista}`, contratista);
  }

  deleteContratista(idContratista): Observable<String> {
    return this.httpClient.delete<String>(this.baseUrl + `contratistas/${idContratista}`);
  }

  //EQUIPO SERVICES
  getEquiposByTipoInstalacion(idTipoInstalacion):Observable<Equipo[]>{
    return this.httpClient.get<Equipo[]>(this.baseUrl + `/equipos/tipoInstalacion/${idTipoInstalacion}`);
  }

  getEquiposPrecioByContratista(idContratista):Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl + `/equipos/contratista/${idContratista}/precios`);
  }

  //INSTALACION SERVICES
  getInstalacionById(idInstalacion):Observable<Instalacion>{
    return this.httpClient.get<Instalacion>(this.baseUrl + `instalaciones/${idInstalacion}`);
  }

  getInstalacionesByContratista(idContratista):Observable<Instalacion[]>{
    return this.httpClient.get<Instalacion[]>(this.baseUrl + `instalaciones/contratista/${idContratista}`);
  }

  createInstalacion(instalacion): Observable<Instalacion> {
    return this.httpClient.post<Instalacion>(this.baseUrl + `instalaciones/`, instalacion);
  }

  //PRECIOCONCEPTO SERVICES
  getPreciosConceptosByContratista(idContratista):Observable<PrecioConcepto[]>{
    return this.httpClient.get<PrecioConcepto[]>(this.baseUrl + `preciosConceptos/contratista/${idContratista}/precios`);
  }

  getPreciosConceptosByContratistaAndConcepto(idContratista, idConcepto):Observable<PrecioConcepto>{
    return this.httpClient.get<PrecioConcepto>(this.baseUrl + `preciosConceptos/contratista/${idContratista}/concepto/${idConcepto}`);
  }

  createPrecioConcepto(precioConcepto): Observable<PrecioConcepto> {
    return this.httpClient.post<PrecioConcepto>(this.baseUrl + `preciosConceptos/`, precioConcepto);
  }

  //SERVICIO SERVICES
  getServiciosByContratista(idContratista):Observable<Servicio[]>{
    return this.httpClient.get<Servicio[]>(this.baseUrl + `servicios/contratista/${idContratista}`);
  }

  createServicio(servicio): Observable<Servicio> {
    return this.httpClient.post<Servicio>(this.baseUrl + `servicios/`, servicio);
  }

  //TIPOSINSTALACION SERVICES
  getTiposInstalacion():Observable<TipoInstalacion[]>{
    return this.httpClient.get<TipoInstalacion[]>(this.baseUrl + `tiposInstalacion/`);
  }

  //ZONA SERVICES
  getZonasByCiudad(idCiudad):Observable<Zona[]>{
    return this.httpClient.get<Zona[]>(this.baseUrl + `zonas/ciudad/${idCiudad}`);
  }

}