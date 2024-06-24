import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Users } from '../model/User';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const base_url = environment.base


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}/api/v1`;
  private listaCambio = new Subject<Users[]>();

  constructor(private http: HttpClient) {}

  insert(us: Users) {
    console.log("hola")
    return this.http.post(`${this.url}/users`, us);
  }

  insertarRol(authority: string, id: number) {
    const body = { authority, id: id }; 
    return this.http.post<any>(`${this.url}/insert_role`, body);
  }

  setList(listaNueva: Users[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  list() {
    return this.http.get<Users[]>(`${this.url}/users`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.url}/login/${username}/${password}`);
  }
}


