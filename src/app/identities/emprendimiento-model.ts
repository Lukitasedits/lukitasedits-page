import { MediaModel } from "./media-model";

export class EmprendimientoModel {
  id: number;
  titulo: string;
  descripcion: string;
  ruta:string;
  trabajos: MediaModel[];

  constructor(/*id: number, titulo: string, descripcion:string, ruta:string, trabajos: Media[]*/){
    /*this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.ruta = ruta;
    this.trabajos = trabajos;*/
  }

  /*
  set titulo(titulo: string){
    this._titulo=titulo;
  }

  get titulo(): string{
    return this._titulo;
  }

  set descripcion(descripcion: string){
    this._descripcion=descripcion;
  }

  get descripcion(): string{
    return this._descripcion;
  }

  set ruta(ruta: string){
    this._ruta=ruta;
  }

  get ruta(): string{
    return this.ruta;
  }

  set trabajos(trabajos: Media[]){
    this._trabajos=trabajos;
  }

  get trabajos(): Media[]{
    return this.trabajos;
  }
  */
}
