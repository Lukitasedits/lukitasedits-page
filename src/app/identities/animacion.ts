export class Animacion {
  private _nombre: string;
  private _titulo: string;
  private _descripcion: string;
  private _indice: number;

  constructor(nombre: string, titulo: string, descripcion: string){
    this._nombre = nombre;
    this._titulo = titulo;
    this._descripcion = descripcion;
  }

  set nombre(nombre: string){
    this._nombre=nombre;
  }

  get nombre(): string{
    return this._nombre;
  }

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

  set indice(indice: number){
    this._indice=indice;
  }

  get indice(): number{
    return this._indice;
  }


}
