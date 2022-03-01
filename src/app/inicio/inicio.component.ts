import { Router } from '@angular/router';
import { AnimacionesService } from './../service/animaciones.service';
import { ModalService } from './../service/modal.service';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Animacion } from '../identities/animacion';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mouseOver: boolean;
  animaciones: Animacion[];
  indice: number = 0;
  leftText: number = 450;

  constructor(public modal:NgbModal, private modalService: ModalService, private animacionesService: AnimacionesService, public router: Router) {
    this.mouseOver = false;
  }

  ngOnInit(): void {
     this.animacionesService.getAnimaciones().subscribe(animaciones =>
      this.animaciones = animaciones);
  }

  entrarTexto(){

  }

  abrirReproductor(){
    this.modalService.$modalEvent.emit(true);
    this.animacionesService.$indiceActual = this.indice;
  }

  siguienteImagen(){
    if(this.indice < this.animaciones.length-1){
      this.indice++;
    }
  }

  anteriorImagen(){
    if(this.indice > 0){
      this.indice--;
    }
  }

  routeToEmprendimientos(){
    this.router.navigate(['/emprendimientos'])
  }

  routeToTwitch(){
    this.router.navigate(['/twitch'])
  }

}
