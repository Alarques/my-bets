import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadisticaDiaria } from '../models/estadistica-diaria';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaDiariaService {

  selectedEstadistica: EstadisticaDiaria;
  estDiarias: EstadisticaDiaria[];
  readonly URL_API = 'http://localhost:3000/api/estadisticas';

  constructor(private http:HttpClient) {
    this.selectedEstadistica = new EstadisticaDiaria();
  }

  getEstadisticasDiarias() {
    return this.http.get(this.URL_API);
  }

  getEstadisticasDiariasPorMes(mes: number){
    return this.http.get(this.URL_API + `/porMes/${mes}`);
  }

  postEstadisticaDIaria(estDiaria: EstadisticaDiaria) {
    return this.http.post(this.URL_API, estDiaria);
  }

  putEstadisticaDiaria(estDiaria: EstadisticaDiaria) {
    return this.http.put(this.URL_API + `/${estDiaria._id}`, estDiaria);
  }

  deleteEstadisticaDiaria(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
