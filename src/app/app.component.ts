import { CanalTwitchService } from './service/canal-twitch.service';
import { ModalService } from './service/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    title = 'lukitasedits-page-angular';
    reproductor: boolean = false;
    reproductorTwitch: boolean = false;

  constructor(private canalTwitchService: CanalTwitchService, private modalService: ModalService){}

  ngOnInit(): void {
    this.modalService.$modalEvent.subscribe((valor) => {this.reproductor = valor});
    this.canalTwitchService.$reproductorTwitchEvent.subscribe((valor) => {this.reproductorTwitch = valor});
  }
}
