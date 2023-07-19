import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MibilleteraService {

  private url: string = "https://localhost:7177/api/billetera"
  
  constructor(private http: HttpClient) { }
  
  getMonto(id: number):Observable<any>{
    return this.http.get(this.url + "/" + id);
  }

}
