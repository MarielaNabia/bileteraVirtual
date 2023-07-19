import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { LoginServiceService } from 'src/app/componentes/login/service/login-service.service';
import { UsuarioServices } from 'src/app/componentes/usuarios.service';
import { MibilleteraService } from './service/mibilletera.service';

@Component({
  selector: 'app-mibilletera',
  templateUrl: './mibilletera.component.html',
  styleUrls: ['./mibilletera.component.css']
})
export class MibilleteraComponent implements OnInit {
  constructor(private service: MibilleteraService, private serviceUsuario:UsuarioServices) { }
  usuario: any =  localStorage.getItem("tokenPrueba") || null;
  users: any[] = [];
  userActual: any; 
  montoFinal: any; 
  idMontoFinal: any = 0;
  ngOnInit(): void {
    this.getUsuario();
  }
  getUsers(): void{
    this.service.getMonto(this.idMontoFinal).subscribe((data) => {
      this.montoFinal = data;
    });
  }

  getUsuario(): void{
    this.serviceUsuario.getUsuario().subscribe((data) => {
      this.userActual = data;
      this.idMontoFinal = data.idUsuario;
      this.getUsers();
    });
  }

}
