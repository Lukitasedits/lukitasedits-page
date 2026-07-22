import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { SiteContextService } from '../service/site-context.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  widthLinea: number = 0;

  menu_abierto:boolean[] = [false, true, false];
  nombres:string[]= ['Lucas', 'Bruno', 'Juampi'];

  /** En pragmify.it el menú se limita a Home, Privacidad y Términos. */
  isPragmify = false;

  constructor(public modal:NgbModal, public router: Router, private siteContext: SiteContextService) { }

  ngOnInit(): void {
    this.isPragmify = this.siteContext.isPragmify();
  }

  crecerLinea(){
    this.widthLinea = 100;
  }

  alInicio(){
    this.router.navigate([this.isPragmify ? '/pragmify' : '/inicio']);
  }
}
