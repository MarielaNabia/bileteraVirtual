import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from '../componentes/acerca-de/acerca-de.component';
import { LandingComponent } from '../componentes/landing/landing.component';
import { QuienesSomosComponent } from '../componentes/quienes-somos/quienes-somos.component';
import { MovimientosComponent } from '../componentes/movimientos/movimientos.component';
import { HomeComponent } from '../componentes/home/home.component';
import { ConfiguracionComponent } from '../componentes/configuracion/configuracion.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: LandingComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'movimientos', component: MovimientosComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
