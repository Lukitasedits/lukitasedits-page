import { ProgramacionService } from './../service/programacion.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import lenguajesData from '../../assets/jsons/lenguajes.json';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit, AfterViewInit {
  @ViewChildren('Lenguajes') lenguajes: QueryList<ElementRef>;
  @ViewChild('imagenMegadat') imagenMegadat: ElementRef;
  lenguajesProgramacion = lenguajesData;

  constructor(private renderer: Renderer2, private programacionService: ProgramacionService) {
  }
  ngAfterViewInit(): void {
    console.log(this.lenguajes.toArray());

    this.reSizeImagen();
    this.programacionService.setLenguajesElements(this.lenguajes.toArray());
  }

  ngOnInit(): void {

  }

  @HostListener('window: resize')
  reSizeImagen(){
    if(document.documentElement.clientWidth > 900){
      const imagen = this.imagenMegadat.nativeElement;
      this.renderer.setStyle(imagen, 'height', (0.22*document.documentElement.clientWidth) + 'px');
    }
  }

}
