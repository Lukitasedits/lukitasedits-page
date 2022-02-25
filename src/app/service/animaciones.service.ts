import { Animacion } from '../identities/animacion';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimacionesService{

  $animaciones:  Animacion[] = [];
  $indiceActual: number = 0;

   constructor() {
    this.$animaciones.push(new Animacion('Annie', 'Movimiento natural', 'Esta es una animación realizada a partir de una imagen con la intensión de crear un movimiento natural sobre el personaje y la escena.'));
    this.$animaciones.push(new Animacion('Fluido', 'Simulación Líquido', 'Una simulación de líquidos para poner en práctica el plugin Real Flow del Cinema 4d.'));
    this.$animaciones.push(new Animacion('Kennedy', 'La Gran Batalla', 'Práctica de trackeo 3d para integrar objetos digitales en un video real.'));
    this.$animaciones.push(new Animacion('Lampara', 'Globo Aerostático', 'Animación 3D con el objetivo de practicar el plugin "Plexus" de After Effects.'));
    this.$animaciones.push(new Animacion('Mano', 'Mano Desintegrándose', 'Animación 3D de mano desintegrándose con el fin de practicar partículas y fractura de elementos.'));
    this.$animaciones.push(new Animacion('Megadat', 'Publicidad Animada Megadat', 'Publicidad animada formato instagram stories para la publicidad de un emprendimiento de reparaciones de laptops y servicio técnico.'));
    this.$animaciones.push(new Animacion('Motorola', 'Animación Celular', 'Modelado y animación 3D de celular en modo de presentación de producto.'));
    this.$animaciones.push(new Animacion('Nado', 'Presentación Animada', 'Este es una animación realizada con el fin de publicitar un producto. Una escultura hecha de cerámica de un hombre nadando.'));
    this.$animaciones.push(new Animacion('PcAnimacion', 'Animación PC', 'Animación 3D de mi Pc en forma de presentación.'));
    this.$animaciones.push(new Animacion('SpotTwitchonario', 'Spot Publicitario Twitchonario', 'Esta es una animación diseñada y desarrollada por mí con el objetivo de explicar y publicitar la participación del juego de manera dinámica y gráfica.'));
    this.$animaciones.push(new Animacion('StarWars', 'Animación Star Wars', 'Animación 2D ambientada en Star Wars con ilustración hecha por @lucasordonezilustrador.'));
    this.$animaciones.push(new Animacion('TwitchonarioUniversal', 'Especial Cine Trailer', 'La idea era representar la temática cinemática para crear una animación para publicitar un stream con invitados especiales.'));
  }

  asignarIndices(){
    for(let i=0; i < this.$animaciones.length; i++){
      this.$animaciones[i].indice = i;
    }
  }

}
