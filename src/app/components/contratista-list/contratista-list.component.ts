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
    this.abcLiquidacionesService.getContratistas().subscribe(contratistas =>this.contratistas=contratistas).add(()=>{
      console.log(this.contratistas);
      this.dataSource = new MatTableDataSource<Contratista>(this.contratistas);
      this.dataSource.paginator = this.paginator;

    });
  }


  ngOnInit(): void {
    this.getContratistas();

  }


}
