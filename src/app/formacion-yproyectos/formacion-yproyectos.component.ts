import { Component, OnInit } from '@angular/core';
import formacionData from '../../assets/jsons/formaciones.json'
import { Formacion } from '../identities/formacion';

@Component({
  selector: 'app-formacion-yproyectos',
  templateUrl: './formacion-yproyectos.component.html',
  styleUrls: ['./formacion-yproyectos.component.css']
})
export class FormacionYProyectosComponent implements OnInit {
  formaciones : Formacion[] = formacionData;
  formacionesRealizadas: Formacion[];
  proyeccionesAcademicas: Formacion[];
  constructor() { }

  ngOnInit(): void {
    this.formacionesRealizadas = this.formaciones.filter(form => !form.pendiente);
    this.proyeccionesAcademicas = this.formaciones.filter(form => form.pendiente);
  }

}
