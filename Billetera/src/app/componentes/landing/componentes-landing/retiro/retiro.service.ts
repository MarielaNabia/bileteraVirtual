import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RetiroService {
private readonly url: string = "https://localhost:7177/api/billetera/Retiro";
constructor(private http: HttpClient) { 
}

retiro(retiro: any):Observable<any>
{
  return this.http.post(this.url, retiro);
}
}