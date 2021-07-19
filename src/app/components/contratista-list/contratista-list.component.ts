import { Component, OnInit, ViewChild } from '@angular/core';
import { Contratista } from 'src/app/shared/models/contratista';
import { ABCLiquidacionesService } from 'src/app/shared/services/abcliquidaciones.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-contratista-list',
  templateUrl: './contratista-list.component.html',
  styleUrls: ['./contratista-list.component.css']
})
export class ContratistaListComponent implements OnInit  {

  constructor(private abcLiquidacionesService : ABCLiquidacionesService) {
    this.contratistas = [];
  }

  tituloPagina="Contratistas"
  contratistas:Contratista[];
  dataSource:MatTableDataSource<Contratista>;

  displayedColumns: string[] = ['tipoDocumento', 'documento', 'nombre', 'telefono', 'zona', 'vigenciaDesde', 'vigenciaHasta', 'detalle'];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  getContratistas():void{
    this.contratistas =
    [
      {
          "idContratista": 371,
          "nombre": "Jorge Salazar",
          "tipoDocumento": false,
          "documento": "1005336538",
          "telefono": "3183580369",
          "correo": "jorge@fake.com",
          "vigenciaDesde": "2000-02-01T05:00:00.000+00:00",
          "vigenciaHasta": "2022-03-02T05:00:00.000+00:00",
          "tipo": 1,
          "zona": {
              "idZona": 8,
              "nombre": "Zona Occidente",
              "ciudad": {
                  "idCiudad": 8,
                  "nombre": "Manizales"
              }
          }
      },
      {
          "idContratista": 6,
          "nombre": "Jacinta Lorne",
          "tipoDocumento": true,
          "documento": "78057465",
          "telefono": "318288012",
          "correo": "jlorne5@cpanel.net",
          "vigenciaDesde": "2001-12-25T05:00:00.000+00:00",
          "vigenciaHasta": "2021-12-17T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 3,
              "nombre": "Zona Oriente",
              "ciudad": {
                  "idCiudad": 7,
                  "nombre": "Pereira"
              }
          }
      },
      {
          "idContratista": 8,
          "nombre": "Joela Hyett",
          "tipoDocumento": false,
          "documento": "77798272",
          "telefono": "315917447",
          "correo": "jhyett7@edublogs.org",
          "vigenciaDesde": "2018-04-01T05:00:00.000+00:00",
          "vigenciaHasta": "2022-03-13T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 8,
              "nombre": "Zona Occidente",
              "ciudad": {
                  "idCiudad": 8,
                  "nombre": "Manizales"
              }
          }
      },
      {
          "idContratista": 4,
          "nombre": "Kristofor Dolder",
          "tipoDocumento": true,
          "documento": "79429132",
          "telefono": "314291228",
          "correo": "kdolder3@bandcamp.com",
          "vigenciaDesde": "2001-09-05T05:00:00.000+00:00",
          "vigenciaHasta": "2022-02-21T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 3,
              "nombre": "Zona Oriente",
              "ciudad": {
                  "idCiudad": 7,
                  "nombre": "Pereira"
              }
          }
      },
      {
          "idContratista": 10,
          "nombre": "Audy Privost",
          "tipoDocumento": true,
          "documento": "72660789",
          "telefono": "316256229",
          "correo": "aprivost9@google.com.au",
          "vigenciaDesde": "2016-05-07T05:00:00.000+00:00",
          "vigenciaHasta": "2021-10-02T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 8,
              "nombre": "Zona Occidente",
              "ciudad": {
                  "idCiudad": 8,
                  "nombre": "Manizales"
              }
          }
      },
      {
          "idContratista": 1,
          "nombre": "Blondell Melhuish",
          "tipoDocumento": true,
          "documento": "40245300",
          "telefono": "315604559",
          "correo": "bmelhuish0@angelfire.com",
          "vigenciaDesde": "2009-05-23T05:00:00.000+00:00",
          "vigenciaHasta": "2020-08-10T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 2,
              "nombre": "Zona Centro",
              "ciudad": {
                  "idCiudad": 3,
                  "nombre": "Barranquilla"
              }
          }
      },
      {
          "idContratista": 2,
          "nombre": "Dayna Easter",
          "tipoDocumento": false,
          "documento": "28856739",
          "telefono": "311948345",
          "correo": "deaster1@newyorker.com",
          "vigenciaDesde": "2000-11-13T05:00:00.000+00:00",
          "vigenciaHasta": "2021-12-28T05:00:00.000+00:00",
          "tipo": 1,
          "zona": {
              "idZona": 2,
              "nombre": "Zona Centro",
              "ciudad": {
                  "idCiudad": 3,
                  "nombre": "Barranquilla"
              }
          }
      },
      {
          "idContratista": 3,
          "nombre": "Marcile Kolakovic",
          "tipoDocumento": false,
          "documento": "79317784",
          "telefono": "319855848",
          "correo": "mkolakovic2@a8.net",
          "vigenciaDesde": "2018-02-02T05:00:00.000+00:00",
          "vigenciaHasta": "2021-09-24T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 1,
              "nombre": "Zona Sur",
              "ciudad": {
                  "idCiudad": 5,
                  "nombre": "Cali"
              }
          }
      },
      {
          "idContratista": 5,
          "nombre": "Nerissa Dowdall",
          "tipoDocumento": true,
          "documento": "59416204",
          "telefono": "315200866",
          "correo": "ndowdall4@sourceforge.net",
          "vigenciaDesde": "2020-08-24T05:00:00.000+00:00",
          "vigenciaHasta": "2021-12-07T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 2,
              "nombre": "Zona Centro",
              "ciudad": {
                  "idCiudad": 3,
                  "nombre": "Barranquilla"
              }
          }
      },
      {
          "idContratista": 7,
          "nombre": "Lacee Tissiman",
          "tipoDocumento": false,
          "documento": "75441863",
          "telefono": "315365735",
          "correo": "ltissiman6@rambler.ru",
          "vigenciaDesde": "2000-05-21T05:00:00.000+00:00",
          "vigenciaHasta": "2021-11-29T05:00:00.000+00:00",
          "tipo": 1,
          "zona": {
              "idZona": 8,
              "nombre": "Zona Occidente",
              "ciudad": {
                  "idCiudad": 8,
                  "nombre": "Manizales"
              }
          }
      },
      {
          "idContratista": 9,
          "nombre": "Agneta Grzegorzewicz",
          "tipoDocumento": false,
          "documento": "87333008",
          "telefono": "311111068",
          "correo": "agrzegorzewicz8@flickr.com",
          "vigenciaDesde": "2013-11-04T05:00:00.000+00:00",
          "vigenciaHasta": "2022-12-10T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 3,
              "nombre": "Zona Oriente",
              "ciudad": {
                  "idCiudad": 7,
                  "nombre": "Pereira"
              }
          }
      },
      {
          "idContratista": 366,
          "nombre": "Misty Gomez",
          "tipoDocumento": false,
          "documento": "123456",
          "telefono": "6578490",
          "correo": "misty@fake.com",
          "vigenciaDesde": "2021-07-01T05:00:00.000+00:00",
          "vigenciaHasta": "2021-07-31T05:00:00.000+00:00",
          "tipo": 0,
          "zona": {
              "idZona": 2,
              "nombre": "Zona Centro",
              "ciudad": {
                  "idCiudad": 3,
                  "nombre": "Barranquilla"
              }
          }
      }
  ]
    this.dataSource = new MatTableDataSource<Contratista>(this.contratistas);
      this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.getContratistas();

  }

  /* N
    ACÁ SEBAS ESTE ES UNO AAAAAAAAAA 
  */
  parseTipoDocumento(td: boolean): string {
    if(td){
      return "NIT";
    }
    else{
      return "CC";
    }
  }

  /* N
    ACÁ SEBAS ESTE ES EL OTROOOOOO AAAAAAAAAATQMAAAAAAAA
  */
  parseDate(d: string): string {
    if(d.includes(":")){
      return d.split("T")[0];
    }
    else{
      return "Fecha inválida";
    }
  }


}
