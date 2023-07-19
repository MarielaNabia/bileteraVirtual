import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ConfigurationClass from './configurationClass/configurationClass';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url: string = "https://localhost:7177/api/usuarios"
  
  constructor(private http: HttpClient) { }
  
  desactivar(id: number):Observable<any>{
    return this.http.post(this.url + "/baja/" + id, id);
  }

  modificar(id: number, usuario: ConfigurationClass):Observable<any>{
    return this.http.post(this.url + "/" + id, usuario)
  }
}
