import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Contratista } from 'src/app/shared/models/contratista';
import { Instalacion } from 'src/app/shared/models/instalacion';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ABCLiquidacionesService } from 'src/app/shared/services/abcliquidaciones.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { number } from 'joi';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Servicio } from 'src/app/shared/models/servicio';


@Component({
  selector: 'app-contratista-detail',
  templateUrl: './contratista-detail.component.html',
  styleUrls: ['./contratista-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContratistaDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router,
    private viewRef: ViewContainerRef,
    private abcLiquidacionesService : ABCLiquidacionesService) { 

  }

  loader;any;
  dataSource: MatTableDataSource<Contratista>;
  idContratista:number;
  contratista:Contratista;
  subtitulo="Información del contratista";
  subtituloPrecios="Información precios";
  subtituloServicios="Servicios realizados";


  dataColumns = ['nombre', 'tipoDocumento', 'documento', 'telefono', 'zona', 'vigenciaDesde', 'vigenciaHasta'];

  data = []
  labels = [
    'Nombre',
    'Tipo Documento',
    'Documento',
    'Telefono',
    'Zona',
    'Vigencia desde',
    'Vigencia hasta'
  ];

  displayedColumns = [];
  preciosConceptos = [];
  preciosEquipos = [];
  precios = [];
  preciosTabla=[];
  tiposInstalacion = [];
  instalaciones=[];
  servicios = [];
  columnsToDisplayServicios = ['idServicio', 'fecha'];
  expandedServicio: Servicio;
  dataSourceServicios:Servicio[];


  getContratista(id:number):Subscription{
    return this.abcLiquidacionesService.getContratistaById(id).subscribe((result)=>{this.contratista=result; this.data = [this.contratista]; console.log(this.contratista)})
  }

  getPreciosConceptos(id:number):Subscription{
    return this.abcLiquidacionesService.getPreciosConceptosByContratista(id).subscribe((result)=>{this.preciosConceptos = result; console.log(this.preciosConceptos)})
  }

  getPreciosEquipos(id:number):Subscription{
    return this.abcLiquidacionesService.getEquiposPrecioByContratista(id).subscribe((result)=>{this.preciosEquipos = result; console.log(this.preciosEquipos)})
  }

  getInstalaciones(id:number):Subscription{
    return this.abcLiquidacionesService.getInstalacionesByContratista(id).subscribe((result)=>{this.instalaciones = result; console.log(this.instalaciones)})
  }

  getServicios(id:number):Subscription{
    return this.abcLiquidacionesService.getServiciosByContratista(id).subscribe((result)=>{this.servicios=result; console.log(this.servicios)})
  }

  getTextInstalaciones(instalaciones:Instalacion[]):String{
    let cadena = ""
    instalaciones.forEach((e)=>cadena = cadena + e.tipoInstalacion.nombre + ", ")
    return cadena;

  }

  transformar() {
    let transposedData = [];
    for (let column = 0; column < this.dataColumns.length; column++) {
      transposedData[column] = {
        label: this.labels[column]
      };

      for (let row = 0; row < this.data.length; row++) {
        transposedData[column][`column${row}`] = this.data[row][this.dataColumns[column]];
      }
    }
    this.dataSource = new MatTableDataSource(transposedData);
  }

  llenarLabels() {
    this.displayedColumns = ['label'];
    for (let i = 0; i < this.data.length; i++) {
      this.displayedColumns.push('column' + i);
    }
  }

  listarPrecios(){
    this.precios = this.precios.concat(this.preciosConceptos).concat(this.preciosEquipos)
    console.log(this.precios)
    this.tiposInstalacion = [...new Set(this.preciosEquipos.map(item => item.tipo))];
    console.log(this.tiposInstalacion)

    for(let i=0;i<this.tiposInstalacion.length;i++){
      let nom = this.tiposInstalacion[i]
      let arr = this.precios.filter(e => e.tipo==nom)
      let j = this.instalaciones.filter(e=>e.tipoInstalacion.nombre==nom)[0]
      this.preciosTabla.push([nom,arr,j.precioLiquidar, j.precioTotal])
    }
    console.log(this.precios)
    console.log(this.preciosTabla)

  }

  onLoad(params) {
    this.idContratista = parseInt(params['id']);
  }

  ngOnInit(): void {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.idContratista = +this.route.snapshot.paramMap.get('id');
    this.getInstalaciones(this.idContratista)
    this.getServicios(this.idContratista).add(()=>this.dataSourceServicios=this.servicios)
    this.getContratista(this.idContratista).add(()=>{this.transformar();this.llenarLabels();});
    this.getPreciosConceptos(this.idContratista).add(()=>(this.getPreciosEquipos(this.idContratista).add(()=>{console.log("llegue aqui"); this.listarPrecios()
  })))


  }

}
