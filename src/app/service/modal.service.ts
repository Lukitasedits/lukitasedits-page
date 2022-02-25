import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  $modalEvent = new EventEmitter<any>();

  constructor() { }
}
