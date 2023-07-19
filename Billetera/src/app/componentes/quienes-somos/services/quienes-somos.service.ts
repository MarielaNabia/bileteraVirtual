import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  private url = " http://localhost:3010"

  constructor(private http: HttpClient) { }

  getQuienesSomos() : Observable<any>{
    return this.http.get(this.url  + "/quienes-somos")
  }
}
