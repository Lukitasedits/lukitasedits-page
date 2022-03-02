import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  widthLinea: number = 0;

  menu_abierto:boolean[] = [false, true, false];
  nombres:string[]= ['Lucas', 'Bruno', 'Juampi'];

  constructor(public modal:NgbModal, public router: Router) { }

  ngOnInit(): void {
  }

  crecerLinea(){
    this.widthLinea = 100;
  }

  alInicio(){
    this.router.navigate(['/inicio']);
  }
}
