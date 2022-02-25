import { CanalTwitch } from './../identities/canal-twitch';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanalTwitchService {

  $reproductorTwitchEvent = new EventEmitter<any>();
  $canalActual: number;

  constructor() { }
}
