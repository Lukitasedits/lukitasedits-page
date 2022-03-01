import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {

  posBanda: number = 0;
  opaIzq:number = 0;
  opaDer:number = 1;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  bandaIzq(){
    if(this.posBanda <= -400){
      this.posBanda+= 400;
    }
    if(this.posBanda == 0){
      this.opaIzq = 0;
    }
    this.opaDer = 1;
  }

  bandaDer(){
    if(this.posBanda > -800){
      this.posBanda-= 400;
    }
    if(this.posBanda == -800){
      this.opaDer = 0;
    }
    this.opaIzq = 1;
  }

  haciaCortometraje(){
    this.router.navigate(['https://www.youtube.com/watch?v=7TDKccXnWSM&t=28s'])
  }
}
