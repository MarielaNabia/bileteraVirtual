import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepositoService {
private readonly url: string = "https://localhost:7177/api/billetera/Deposito";
constructor(private http: HttpClient) { 
}

deposito(deposito: any):Observable<any>{
  return this.http.post(this.url, deposito);
}
}
