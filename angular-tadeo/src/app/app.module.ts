import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { Lectura1Component } from './lectura1/lectura1.component';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    Lectura1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
