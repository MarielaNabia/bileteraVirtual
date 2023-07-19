import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServices {

  private url: string = "https://localhost:7177/api/usuarios"
  usuario: any =  localStorage.getItem("tokenPrueba") || null;

  constructor(private http: HttpClient) { }
  
  getUsuario():Observable<any>{
    return this.http.get(this.url + "/" + this.usuario);
  }

}
