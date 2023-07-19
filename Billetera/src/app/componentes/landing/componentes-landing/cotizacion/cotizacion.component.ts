import { Component, OnInit } from '@angular/core';
import { CotizacionService } from './cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  constructor(private service: CotizacionService) { }
  cotizaciones: any[] = [];
  ngOnInit(): void {
    this.getCotizaciones();
  }

  getCotizaciones(): void{
    this.service.getCotizacion().subscribe((data) => {
      this.cotizaciones = data;
    })
  }

}
