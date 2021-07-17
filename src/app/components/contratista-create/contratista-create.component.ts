import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormControl,  FormArray,FormGroup, Validators} from '@angular/forms';
import { Ciudad } from 'src/app/shared/models/ciudad';
import { Concepto } from 'src/app/shared/models/concepto';
import { Contratista } from 'src/app/shared/models/contratista';
import { Zona } from 'src/app/shared/models/zona';
import { ABCLiquidacionesService } from 'src/app/shared/services/abcliquidaciones.service';


@Component({
  selector: 'app-contratista-create',
  templateUrl: './contratista-create.component.html',
  styleUrls: ['./contratista-create.component.css']
})
export class ContratistaCreateComponent implements OnInit{

  tiposInstalaciones: FormGroup;
  datosContratista: FormGroup;
  datosPrecios: FormGroup;
  ciudadN = new FormControl();

  vigenciaDesde= new FormControl();
  vigenciaHasta= new FormControl();

  tiposDocumentos = ['CC','NIT'];
  opcionesTipo = [];
  ciudades = [];
  zonas = [];
  tiposSeleccionados = false;
  datosFormularioCargados = false;
  preciosConceptosCargados = false;
  conceptosEquiposInstalaciones = [];
  zonasListas = false;
  contratista:Contratista;

  constructor(private abcLiquidacionesService : ABCLiquidacionesService, private fb: FormBuilder) { 
    this.tiposInstalaciones = fb.group({
      tipos: new FormArray([])
    });
    this.datosContratista = fb.group({
      nombre: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      tipoDocumento: [null, Validators.required],
      documento: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      telefono: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      correo: [null, [Validators.required, Validators.email]],
      ciudad: [null, Validators.required],
      zona: [null, Validators.required],
      vigenciaDesde: [null, Validators.required],
      vigenciaHasta: [null, Validators.required]
    });
  }

  get tiposFormArray() {
    return this.tiposInstalaciones.controls.tipos as FormArray;
  }


  getTiposInstalaciones():void{
    this.abcLiquidacionesService.getTiposInstalacion().subscribe((result)=>{
      result.forEach((e) => {this.opcionesTipo.push(e); this.tiposFormArray.push(new FormControl(false));})
    })
  }

  getCiudades():void{
    this.abcLiquidacionesService.getCiudades().subscribe(result=>this.ciudades=result);
  }


  cargarFormulario():void{
    this.opcionesTipo.forEach((element)=>{
      let conceptos = [];
      let equipos = [];
      this.getCiudades();
      this.abcLiquidacionesService.getConceptosByTipoInstalacion(element.idTipo).subscribe((result)=>{
        conceptos = result; 
        this.abcLiquidacionesService.getEquiposByTipoInstalacion(element.idTipo).subscribe((result2)=>{
          equipos = result2;
          this.conceptosEquiposInstalaciones.push([element.idTipo, element.nombre, conceptos, equipos]);
        })
      })
    })
    console.log(this.conceptosEquiposInstalaciones)
    
    this.datosFormularioCargados = true;
  }

  cargarFormularioPrecios(){
    let group={}    
    this.conceptosEquiposInstalaciones.forEach(tipoInstalacion=>{
      tipoInstalacion[2].forEach((e)=>{
        group[e.nombre]=new FormControl(' ', [Validators.required,Validators.pattern("^[0-9]*$")]);
      })
        
    })
    this.datosPrecios = new FormGroup(group);
    console.log(this.datosPrecios.value)
  }

  submitTiposInstalaciones() {
    const selectedOrderIds = this.tiposInstalaciones.value.tipos
      .map((checked, i) => checked ? {"idTipo":this.opcionesTipo[i].idTipo,  "nombre":this.opcionesTipo[i].nombre}: null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
    this.opcionesTipo = selectedOrderIds;
    this.tiposSeleccionados=true;
    this.cargarFormulario();
  }

  submitDatosContratista() {
    if(this.datosContratista.validator){
      return;
    }
    console.log(this.datosContratista.value);
    this.datosFormularioCargados=false;
    this.contratista = this.datosContratista.value;
    this.preciosConceptosCargados=true;
    this.cargarFormularioPrecios();


  }

  submitDatosPrecios(){

  }

  ngOnInit(): void {
    this.tiposInstalaciones = this.fb.group({
      tipos: new FormArray([])
    });
    this.getTiposInstalaciones()
    this.ciudadN.valueChanges.subscribe(() => {

      this.datosContratista.patchValue({
        ciudad:this.ciudadN.value,
      });
      this.zonasListas=false;
      this.abcLiquidacionesService.getZonasByCiudad(this.ciudadN.value.idCiudad).subscribe((result)=>this.zonas=result);
      this.zonasListas=true;
    });
  }

}
