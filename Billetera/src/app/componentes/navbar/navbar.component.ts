import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: any =  localStorage.getItem("tokenPrueba") || null;


  constructor(private navigate:Router) { }

  ngOnInit(): void {
  }

  cerrarSesion():void{
    localStorage.removeItem("tokenPrueba");
    this.navigate.navigate(["/"]) 
    setTimeout(()=>{
      location.reload()
    },50)
  }






}
