import { EmprendimientoWorksService } from './../service/emprendimiento-works.service';
import { EmprendimientoModel } from '../identities/emprendimiento-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprendimientos',
  templateUrl: './emprendimientos.component.html',
  styleUrls: ['./emprendimientos.component.css']
})
export class EmprendimientosComponent implements OnInit {

  emprendimientos: EmprendimientoModel[];

  cursorIzq: string[] = [];
  cursorDer: string[] = [];
  izquierdaMov: number[] = [];
  opacidadIzq: number[] = [];
  opacidadDer: number[] = [];
  indices: number[] = [];

  constructor(private emprendimientoWorksService :EmprendimientoWorksService) {
  }

  ngOnInit(): void {
    console.log('Empieza el ngOnInit()');
    this.emprendimientoWorksService.getEmprendimientos().subscribe(
      (emp) => {
        this.emprendimientos = emp;
        console.log(emp);
        this.inicializar();});
  }

  inicializar(){
    console.log(this.emprendimientos);
    for(let i = 0; i < this.emprendimientos.length; i++){

      this.indices[i] = 0;
      this.izquierdaMov[i] = 0;
      this.cursorIzq[i] = 'default';
      this.opacidadIzq[i] = 0;

      if(this.emprendimientos[i].trabajos.length > 1){
        this.cursorDer[i] = 'pointer';
        this.opacidadDer[i] = 1;
      } else {
        this.cursorDer[i] = 'default';
        this.opacidadDer[i] = 0;
      }

    }
  }

  atras(trabajo :number){
    if(this.indices[trabajo] > 0){
      this.izquierdaMov[trabajo] += 475;
      this.indices[trabajo]--;
    }
    if(this.indices[trabajo] == 0){
      this.opacidadIzq[trabajo] = 0;
      this.cursorIzq[trabajo] = 'default';
    }
    this.opacidadDer[trabajo] = 1;
    this.cursorDer[trabajo] = 'pointer';
  }

  adelante(empLength: number, trabajo:number){
    if(this.indices[trabajo] < empLength - 1){
      this.izquierdaMov[trabajo] -= 475;
      this.indices[trabajo]++;
    }
    if(this.indices[trabajo] == empLength-1){
      this.opacidadDer[trabajo] = 0;
      this.cursorDer[trabajo] = 'default';
    }
    this.opacidadIzq[trabajo] = 1;
    this.cursorIzq[trabajo] = 'pointer';
  }

}
