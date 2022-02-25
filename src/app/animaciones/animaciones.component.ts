import { AnimacionesService } from './../service/animaciones.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';
import { Animacion } from '../identities/animacion';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css'],
})
export class AnimacionesComponent implements OnInit {

  //urls: string[] =  ['Annie', 'Fluido', 'Kennedy', 'Lampara', 'Mano','Megadat', 'Motorola', 'Nado', 'PcAnimacion', 'SpotTwitchonario', 'StarWars', 'TwitchonarioUniversal'].sort();
  indice: number = 0;
  carruselPos: number = 0;
  animaciones: Animacion[] = [];

  tamPantalla:number = document.documentElement.clientWidth;
  widthCImagen: number = 267;
  widthCaruel:number;

  constructor(private modalService: ModalService, public modal: NgbModal, private animacionesService: AnimacionesService) { }

  ngOnInit(): void {
    this.animaciones = this.animacionesService.$animaciones;
    this.indice = this.animacionesService.$indiceActual;
    this.widthCaruel = this.widthCImagen * this.animaciones.length;
  }

  reproducir(i: number){
    this.indice = i;
  }

  cerrarReproductor(){
    this.modalService.$modalEvent.emit(false);
  }

  moverCarruselIzq(){
    if(this.carruselPos <= 0){
      this.carruselPos+= this.widthCImagen;
    }
  }

  moverCarruselDer(){
    if(this.carruselPos > -(this.widthCaruel-this.widthCImagen)){
     this.carruselPos-= this.widthCImagen;
    }
  }

  anteriorAnimacion(){
    if(this.indice > 0){
      this.indice--;
    }
  }

  siguienteAnimacion(){
    if(this.indice < this.animaciones.length-1){
      this.indice++;
    }
  }

}
