import { ProgramacionService } from './../service/programacion.service';
import { ProgramacionComponent } from './../programacion/programacion.component';
import { Router } from '@angular/router';
import { AnimacionesService } from './../service/animaciones.service';
import { ModalService } from './../service/modal.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Animacion } from '../identities/animacion';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  animaciones: Animacion[];
  indice: number = 0;
  leftText: number = 450;
  widthPantalla: number = this.document.documentElement.clientWidth;

  constructor(@Inject(DOCUMENT) private document: Document,public modal:NgbModal, private modalService: ModalService, private animacionesService: AnimacionesService, public router: Router, private programacionService: ProgramacionService ) {
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
    this.document.documentElement.scrollTop = 0;
  }

  routeToTwitch(){
    this.router.navigate(['/twitch'])
    this.document.documentElement.scrollTop = 0;
  }

  goToJava(){
    this.router.navigate(['/programacion'])
    setTimeout(()=>{
      this.programacionService.getLenguajeElement(0).subscribe(e =>{
        e.nativeElement.scrollIntoView({behavior: 'smooth'});
      });
    });
  }

  goToWeb(){
    this.router.navigate(['/programacion'])
    setTimeout(()=>{
      this.programacionService.getLenguajeElement(1).subscribe(e =>{
        e.nativeElement.scrollIntoView({behavior: 'smooth'});
      });
    });
  }

  goToDelphi(){
    this.router.navigate(['/programacion'])
    setTimeout(()=>{
        this.programacionService.getLenguajeElement(2).subscribe(e =>{
          e.nativeElement.scrollIntoView({behavior: 'smooth'});
      })
    });
  }
}
