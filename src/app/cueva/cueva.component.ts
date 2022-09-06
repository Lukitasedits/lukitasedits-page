import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cueva',
  templateUrl: './cueva.component.html',
  styleUrls: ['./cueva.component.css']
})
export class CuevaComponent implements OnInit {

  @ViewChild('cueva') cuevaRef!: ElementRef;
  @ViewChildren('light') lightsRef!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mousemove',['$event'])
  public mousemove(event: MouseEvent): void {
    const cueva = this.cuevaRef.nativeElement;
    const ejeX = event.clientX-(document.documentElement.clientWidth/2);
    const ejeY = event.clientY-(document.documentElement.clientHeight/2);
    this.renderer.setStyle(cueva, 'perspective-origin', ejeY + 'px ' + ejeX + 'px')
  }

  turnOffLights(){
    const lights: ElementRef[] = this.lightsRef.toArray();
    for(let i = 0; this.lightsRef.length; i++){
      const actualLight = lights[i].nativeElement;
      this.renderer.setStyle(actualLight, 'opacity', '0%')
    }
  }

  turnOnLights(){
    const lights: ElementRef[] = this.lightsRef.toArray();
    for(let i = 0; this.lightsRef.length; i++){
      const actualLight = lights[i].nativeElement;
      this.renderer.setStyle(actualLight, 'opacity', '100%')
    }
  }

}
