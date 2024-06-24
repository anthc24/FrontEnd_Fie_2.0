import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cliente } from '../model/Tienda';


const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = `${base_url}/api/v1/`;
  private listaCambio = new Subject<Cliente[]>()

  constructor(private http: HttpClient) { }

  insertar(userId: number, storeId: number, cliente: Cliente){
    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('storeId', storeId.toString());

    return this.http.post(`${this.url}/clients`, cliente, {params})
  }
  
}
