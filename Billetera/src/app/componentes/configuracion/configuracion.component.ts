import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioServices } from '../usuarios.service';
import ConfigurationClass from './configurationClass/configurationClass';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
})
export class ConfiguracionComponent implements OnInit {
  form: FormGroup;
  usuarioActual: any;
  constructor(
    private fb: FormBuilder,
    public serviceUsuario: UsuarioServices,
    private serviceService: ServicesService,
    private navigate: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  get nombre() {
    return this.form.get('Nombre');
  }

  get apellido() {
    return this.form.get('Apellido');
  }

  get contrasena() {
    return this.form.get('contrasena');
  }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.serviceUsuario.getUsuario().subscribe((data) => {
      this.usuarioActual = data;
    });
  }
  modificar() {
    let idUsuario: number = this.usuarioActual.idUsuario;
    let nombre: string = this.form.get('nombre')?.value;
    let apellido: string = this.form.get('apellido')?.value;
    let dni: string = this.usuarioActual.dni;
    let email: string = this.usuarioActual.email;
    let fechaAlta: string = this.usuarioActual.fechaAlta;
    let fechaBaja: string = this.usuarioActual.fechaBaja;
    let contrasena: string = this.form.get('contrasena')?.value;
    let log: ConfigurationClass = new ConfigurationClass(
      idUsuario,
      nombre,
      apellido,
      dni,
      email,
      fechaAlta,
      fechaBaja,
      contrasena
    );
    this.serviceService.modificar(this.usuarioActual.idUsuario, log).subscribe(
      (result) => {
        location.reload();
      },
      (error) => {
        alert('Error al actualizar los datos del Usuario');
      },
      () => {}
    );
  }
  desactivar() {
    this.serviceService
      .desactivar(this.usuarioActual.idUsuario)
      .subscribe((data) => {
        localStorage.removeItem('tokenPrueba');
        this.navigate.navigate(['/']);
        setTimeout(() => {
          location.reload();
        }, 50);
      });
  }
}
