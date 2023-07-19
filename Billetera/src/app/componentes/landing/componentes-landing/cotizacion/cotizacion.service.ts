import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  private url: string = "http://localhost:3010"

  constructor(private http: HttpClient) { }

  getCotizacion():Observable<any>{
    return this.http.get(this.url + "/cryptos")
    
  }
}
