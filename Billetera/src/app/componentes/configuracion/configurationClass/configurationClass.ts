export default class ConfigurationClass{

    idUsuario: number = 0;
    nombre: string = "";
    apellido: string = "";
    dni: string = "";
    email: string = "";
    fechaAlta: string = "";
    fechaBaja: string = "";
    password: string = "";

   constructor(idUsuario: number, nombre: string, apellido: string, dni: string, email: string, fechaAlta: string, fechaBaja: string, contrasena: string, 
    ){
       this.idUsuario = idUsuario;
       this.nombre = nombre;
       this.apellido = apellido;
       this.dni = dni;
       this.email = email;
       this.fechaAlta = fechaAlta;
       this.fechaBaja = fechaBaja;
       this.password = contrasena;
   }

}