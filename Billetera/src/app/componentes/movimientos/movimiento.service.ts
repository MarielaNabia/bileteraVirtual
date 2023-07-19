import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  private url: string = "https://localhost:7177/api/Operaciones"
  
  constructor(private http: HttpClient) { }
  
  getMovimientos(idUsuario: number):Observable<any>{
    return this.http.get(this.url + "/" + idUsuario);
  }

}

