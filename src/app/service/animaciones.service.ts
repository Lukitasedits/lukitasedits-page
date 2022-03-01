import { Animacion } from '../identities/animacion';
import { Injectable, EventEmitter } from '@angular/core';
import animacionesData from '../../assets/jsons/animaciones.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimacionesService{

  $indiceActual: number = 0;

   constructor() {
   }

   getAnimaciones(): Observable<Animacion[]>{
     return of(animacionesData);
   }

}
