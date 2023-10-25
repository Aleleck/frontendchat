import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo';
@Injectable({
  providedIn: 'root'
})
export class GruposService {
  url = 'http://localhost:4000/api/grupos';

  constructor(private http: HttpClient){}

  getGrupos(): Observable<any>{
      return this.http.get(this.url);
  }

  guardarGrupo(grupo: Grupo):Observable<any>{
      return this.http.post(this.url, grupo);
  }
}
