export class MediaModel {
  idmedia: number;
  nombre: string;
  extension: string;

  constructor(idmedia:number, nombre:string, extension:string){
    this.idmedia = idmedia;
    this.nombre = nombre;
    this.extension = extension;
  }

  /*set nombre(nombre: string){
    this._nombre=nombre;
  }

  get nombre(): string{
    return this.nombre;
  }

  set extencion(extencion: string){
    this._extencion=extencion;
  }

  get extencion(): string{
    return this.extencion;
  }*/
}
