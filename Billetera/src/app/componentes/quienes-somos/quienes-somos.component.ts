import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { QuienesSomosService } from './services/quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  developers: any[] = [];

  hola :string = ""

  constructor(private services: QuienesSomosService) { }

  ngOnInit(): void {
    this.getQuienesSomos()
  }

  getQuienesSomos(): void{
    this.services.getQuienesSomos().subscribe(
      (data) => this.developers = data,
      (error)=> alert(error)
    )
  }

}
