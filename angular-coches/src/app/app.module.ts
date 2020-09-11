import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoCocheComponent } from './tipo-coche/tipo-coche.component';
import { ListaCochesComponent } from './lista-coches/lista-coches.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoCocheComponent,
    ListaCochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
