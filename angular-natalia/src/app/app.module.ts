import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FigurasComponent } from './figuras/figuras.component';
import { NumerosComponent } from './numeros/numeros.component';
import { ColoresComponent } from './colores/colores.component';
import { LetrasComponent } from './letras/letras.component';

@NgModule({
  declarations: [
    AppComponent,
    FigurasComponent,
    NumerosComponent,
    ColoresComponent,
    LetrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
