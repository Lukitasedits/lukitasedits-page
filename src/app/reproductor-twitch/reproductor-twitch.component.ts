import { CanalTwitch } from './../identities/canal-twitch';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';
import canalesData from "../../assets/jsons/canales_twitch.json"
import { CanalTwitchService } from '../service/canal-twitch.service';
import { MediaConTitulo } from '../identities/media-con-titulo';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-reproductor-twitch',
  animations: [
    trigger('changeOpacity',[
      state('invisible', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('invisible <=> visible', [
        animate('0.5s ease-out')
      ])
    ])
  ],
  templateUrl: './reproductor-twitch.component.html',
  styleUrls: ['./reproductor-twitch.component.css']
})
export class ReproductorTwitchComponent implements OnInit {

  canal: CanalTwitch;
  indiceMedia: number = 0;
  isVisible: boolean = true;

  constructor(private service: CanalTwitchService) { }

  ngOnInit(): void {
    this.canal = canalesData[this.service.$canalActual];
  }

  esVideo(media: MediaConTitulo): boolean{
    let extension = media.extension;
    return extension == 'mp4';
  }

  cambiarMedia(indice: number){
    this.isVisible = !this.isVisible;
    setTimeout(() => {
      this.indiceMedia = indice;
    }, 500);
    setTimeout(() => {
      this.isVisible = !this.isVisible;
    }, 1000);
  }

  siguienteMedia(){
    this.cambiarMedia(this.indiceMedia + 1);
  }

  anteriorMedia(){
    this.cambiarMedia(this.indiceMedia - 1)
  }

  cerrar(){
    this.service.$reproductorTwitchEvent.emit(false);
  }

}
