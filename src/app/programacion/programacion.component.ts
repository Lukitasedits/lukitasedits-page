import { LenguajeModel } from './../identities/lenguaje-model';
import { Component, OnInit } from '@angular/core';
import lenguajesData from '../../assets/jsons/lenguajes.json';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {

  lenguajesProgramacion = lenguajesData;

  constructor() {

  }

  ngOnInit(): void {
  }

}
