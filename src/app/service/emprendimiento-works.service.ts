import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmprendimientoModel } from '../identities/emprendimiento-model';
import emprendimientosData from '../../assets/jsons/emprendimientos.json'

@Injectable({
  providedIn: 'root'
})
export class EmprendimientoWorksService {

  //private endPoint: string = "http://localhost:8080";
  //private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) {
  }

  getEmprendimientos(): Observable<EmprendimientoModel[]>{
    return of(emprendimientosData);
    //return this.http.get<EmprendimientoModel[]>(this.endPoint + '/emprendimientos');
  }

}
