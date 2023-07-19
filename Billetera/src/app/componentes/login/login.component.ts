import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import LoginClass from './loginClass/loginClass';
import RegisterClass from './RegisterClass/registerClass';
import { LoginServiceService } from './service/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  formRegister: FormGroup;

  titulo: string = 'Iniciar Sesion';
  estado: boolean = false;

  users: any[] = [];

  constructor(private fb: FormBuilder, private service: LoginServiceService) {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3,4})+$/'),
        ],
      ],
      Password: ['', Validators.required],
    });

    this.formRegister = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3,4})+$/'),
        ],
      ],
      pasword: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('Password');
  }

  get emailR() {
    return this.formRegister.get('email');
  }

  get PasswordR() {
    return this.formRegister.get('pasword');
  }

  get Nombre() {
    return this.formRegister.get('nombre');
  }

  get Apellido() {
    return this.formRegister.get('apellido');
  }
  get Dni() {
    return this.formRegister.get('dni');
  }


  ngOnInit(): void {

  }


  login(): void {
    let email: string = this.form.get('email')?.value;
    let Password: string = this.form.get('Password')?.value;
    let log: LoginClass = new LoginClass(email, Password);
    this.service.login(log).subscribe(
      (result) => {
        this.form.reset();
        localStorage.setItem('tokenPrueba', result.token);
        location.reload();
      },
      (error) => {
        this.form.reset();
        alert('Usuario Incorrecto');
        this.form.markAllAsTouched();
      },
      () => {}
    );
  }

  register(): void {
    let email: string = this.formRegister.get('email')?.value;
    let Password: string = this.formRegister.get('pasword')?.value;
    let nombre: string = this.formRegister.get('nombre')?.value;
    let apellido: string = this.formRegister.get('apellido')?.value;
    let dni: string = this.formRegister.get('dni')?.value;
    const fecha = new Date();


    let log: RegisterClass = new RegisterClass(
      email,
      Password,
      nombre,
      apellido,
      dni
    );
    this.service.register(log).subscribe(
      (result) => {
        this.formRegister.reset();
        localStorage.setItem('tokenPrueba', result.token);
        location.reload();
      },
      (error) => {
        this.formRegister.reset();
        alert('No se pudo crear el usuario');
        this.formRegister.markAllAsTouched();

      },
      () => {}
    );
  }

  cambioRegistrarse(): void {
    this.titulo = 'Registrarse';
    this.estado = true;
  }

  cambioLogin(): void {
    this.titulo = 'Iniciar Sesion';
    this.estado = false;
  }

}