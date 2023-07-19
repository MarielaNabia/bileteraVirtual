import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from '../usuarios.service';
import { MovimientoService } from './movimiento.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  constructor(private service: MovimientoService, private serviceUser: UsuarioServices) { }
  usuario: any =  localStorage.getItem("tokenPrueba") || null;
  users: any[] = [];
  userActual: any; 
  montoFinal: any; 
  idMontoFinal: any = 0;
  idUsuario: number = 0;
  movimientos: any;

  retiro: string = "retiro";

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.serviceUser.getUsuario().subscribe((data) =>
    {
        this.idUsuario = data.idUsuario;
        this.getMovimientos();
    })
  }
  getMovimientos(): void{
     this.service.getMovimientos(this.idUsuario).subscribe((data) => {
       this.movimientos = data;
     });
   }

}
