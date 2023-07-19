import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LoginClass from '../loginClass/loginClass';
import RegisterClass from '../RegisterClass/registerClass';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url:string = "https://localhost:7177/api/usuarios" 

  constructor(private http:HttpClient) { }

  login(LoginClass: LoginClass):Observable<any>{
    return this.http.post(this.url + "/Inicio", LoginClass);
  }

  register(RegisterClass: RegisterClass):Observable<any>{
    return this.http.post(this.url, RegisterClass)
  }


}