import { Component, OnInit } from '@angular/core';
import { PrecioPionero } from 'src/app/shared/models/precioPionero';

@Component({
  selector: 'app-pionero-actualizar',
  templateUrl: './pionero-actualizar.component.html',
  styleUrls: ['./pionero-actualizar.component.css']
})
export class PioneroActualizarComponent implements OnInit {

  loadedFile:File
  act:PrecioPionero[] = [];
  errorNoFile:boolean = false;
  errorFileExt:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  public changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
      this.loadedFile = files.item(0); 
    }
  }

  loadFile():void{
    if(this.loadedFile == null){
      this.errorNoFile = true;
      console.log("NO")  
    }
    /* else if(this.loadedFile.type != "csv"){
      this.errorFileExt = true;
      console.log("EXT")  
    } */
    else{
      let reader: FileReader = new FileReader();
      reader.readAsText(this.loadedFile);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        let pionerosTxt:string[] = csv.split("\n")
        let array:PrecioPionero[] = [];
        pionerosTxt.forEach(function (pioTxt) {
          let pioneroInfo:string[] = pioTxt.split(",")
          let precioAct: PrecioPionero = {
            idConcepto: <number><unknown>pioneroInfo[0],
            precio: <number><unknown>pioneroInfo[1],
            vigencia: pioneroInfo[2]
          };
          console.log(precioAct);
          array.push(precioAct);
        }); 
        this.act = array
      }
      console.log(this.act) 
    } 
  }

  getAct():PrecioPionero[]{
    return this.act;
  }

}
