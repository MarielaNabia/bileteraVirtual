import { Component, OnInit } from '@angular/core';
import * as historyApiFallback from 'connect-history-api-fallback';
import { UsuarioServices } from 'src/app/componentes/usuarios.service';
import { MibilleteraService } from '../mibilletera/service/mibilletera.service';
import { DepositoService } from './deposito.service';
@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  response: boolean = false;
  isLoading: boolean = true;
  monto: number = 0;
  montoActual: number = 0;
  idUsuario: number = 0;
  depositoBody: object = {};
  constructor(private service: DepositoService, private serviceUser: UsuarioServices) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.serviceUser.getUsuario().subscribe((data) =>
    {
        this.idUsuario = data.idUsuario;
    })
  }
  deposito()
  {
    this.depositoBody = {"idUsuario": this.idUsuario, "saldo": this.monto}
    this.service.deposito(this.depositoBody).subscribe((data) => {
      location.reload();
    })
  }
  deshabilitado(): boolean {
      if(this.monto <= 0) 
        return false;
      return true;
  }

}
