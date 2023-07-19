import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DepositoComponent } from './componentes/landing/componentes-landing/deposito/deposito.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MibilleteraComponent } from './componentes/landing/componentes-landing/mibilletera/mibilletera.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RetiroComponent } from './componentes/landing/componentes-landing/retiro/retiro.component';
import { CotizacionComponent } from './componentes/landing/componentes-landing/cotizacion/cotizacion.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { HttpClientModule } from '@angular/common/http';
import { MovimientosComponent } from './componentes/movimientos/movimientos.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositoComponent,
    NavbarComponent,
    MibilleteraComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    RetiroComponent,
    CotizacionComponent,
    LandingComponent,
    AcercaDeComponent,
    MovimientosComponent,
    QuienesSomosComponent,
    HomeComponent,
    ConfiguracionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
