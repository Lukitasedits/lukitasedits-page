import { CanalTwitch } from './../identities/canal-twitch';
import { Injectable, EventEmitter } from '@angular/core';
import canalesData from '../../assets/jsons/canales_twitch.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanalTwitchService {

  $reproductorTwitchEvent = new EventEmitter<any>();
  $canalActual: number;

  constructor() { }

  getCanales(): Observable<CanalTwitch[]>{
    return of(canalesData);
  }
}
