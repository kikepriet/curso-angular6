import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { Lectura1Component } from './lectura1/lectura1.component';
import { Lectura2Component } from './lectura2/lectura2.component';
import { Lectura3Component } from './lectura3/lectura3.component';
import { Lectura4Component } from './lectura4/lectura4.component';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    Lectura1Component,
    Lectura2Component,
    Lectura3Component,
    Lectura4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
