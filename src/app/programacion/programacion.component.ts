import { LenguajeModel } from './../identities/lenguaje-model';
import { Component, OnInit } from '@angular/core';
import lenguajes from '../../assets/jsons/lenguajes.json';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {

  lenguajesProgramacion: LenguajeModel[] = lenguajes;

  constructor() { }

  ngOnInit(): void {
  }

}
