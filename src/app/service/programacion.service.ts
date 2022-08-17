import { ElementRef, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  lenguajesElements: ElementRef[];

  constructor() { }

  setLenguajesElements(newLenguajesElements: ElementRef[]){
    this.lenguajesElements = newLenguajesElements;
  }

  pushLenguajesElements(lenguajeElement: ElementRef){
    this.lenguajesElements.push(lenguajeElement);
  }

  getLenguajesElements(): Observable<ElementRef[]>{
    return of(this.lenguajesElements);
  }

  getLenguajeElement(index: number): Observable<ElementRef>{
    return of(this.lenguajesElements[index]);
  }
}
