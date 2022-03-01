import { CanalTwitch } from './../identities/canal-twitch';
import { Component, OnInit } from '@angular/core';
import { CanalTwitchService } from '../service/canal-twitch.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {

  canalesTwitch : CanalTwitch[];

  constructor(private service: CanalTwitchService) { }

  ngOnInit(): void {
    this.service.getCanales().subscribe(canales => {
      this.canalesTwitch = canales;
    })
  }

  abrirReproductor(indice: number){
    this.service.$reproductorTwitchEvent.emit(true);
    this.service.$canalActual = indice;
  }
}
