import { CanalTwitch } from './../identities/canal-twitch';
import { Component, OnInit } from '@angular/core';
import canalesData from "../../assets/jsons/canales_twitch.json"
import { ModalService } from '../service/modal.service';
import { CanalTwitchService } from '../service/canal-twitch.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {

  canalesTwitch : CanalTwitch[] = canalesData;

  constructor(private service: CanalTwitchService) { }

  ngOnInit(): void {
  }

  abrirReproductor(indice: number){
    this.service.$reproductorTwitchEvent.emit(true);
    this.service.$canalActual = indice;
  }
}
