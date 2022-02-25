import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu_abierto:boolean[] = [false, true, false];
  nombres:string[]= ['Lucas', 'Bruno', 'Juampi'];

  constructor(public modal:NgbModal, public router: Router) { }

  ngOnInit(): void {
  }


  alInicio(){
    this.router.navigate(['/inicio']);
  }
}
