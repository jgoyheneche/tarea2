import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  urlApi = 'http://hp-api.herokuapp.com/api/characters/house/';

  constructor(private http:HttpClient) { }

  getCasa(valor:any):Observable<any>{
    return this.http.get(this.urlApi + valor);
  }
}
