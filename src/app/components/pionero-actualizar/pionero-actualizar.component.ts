import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pionero-actualizar',
  templateUrl: './pionero-actualizar.component.html',
  styleUrls: ['./pionero-actualizar.component.css']
})
export class PioneroActualizarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
            let csv: string = reader.result as string;
            console.log(csv);
         }
      }
  }

}
