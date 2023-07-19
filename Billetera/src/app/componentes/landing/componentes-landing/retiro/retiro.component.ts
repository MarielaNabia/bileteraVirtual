import { Component, OnInit } from '@angular/core';
import * as historyApiFallback from 'connect-history-api-fallback';
import { UsuarioServices } from 'src/app/componentes/usuarios.service';
import { MibilleteraService } from '../mibilletera/service/mibilletera.service';
import { RetiroService } from './retiro.service';
@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css'],
})
export class RetiroComponent implements OnInit {
  response: boolean = false;
  isLoading: boolean = true;
  monto: number = 0;
  usuario: any = localStorage.getItem('tokenPrueba') || null;
  users: any[] = [];
  userActual: any;
  idUsuario: number = 0;
  retiroBody: object = {};
  movimiento: object = {};
  montoActual: number = 0;

  constructor(private service: RetiroService, private serviceUser: UsuarioServices, private serviceBilletera: MibilleteraService) {}

  ngOnInit(): void {
    this.getUser();
  }
  getMontoBilletera(id: number){
    this.serviceBilletera.getMonto(id).subscribe((data) =>
    {
        this.montoActual = data;
    })
  }
  getUser(){
    this.serviceUser.getUsuario().subscribe((data) =>
    {
        this.idUsuario = data.idUsuario;
        this.getMontoBilletera(this.idUsuario);
    })
  }

  retirar(){
    
    this.retiroBody = {"idUsuario": this.idUsuario, "saldo": this.monto}
    this.service.retiro(this.retiroBody).subscribe((data) => {
      location.reload();
    })
  }

  deshabilitado(): boolean {
      if (this.monto <= this.montoActual && this.monto >= 0) {
        return false;
      }
    return true;
  }

}
