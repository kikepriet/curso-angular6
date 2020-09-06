import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariableComponent } from './variable/variable.component';
import { ArregloComponent } from './arreglo/arreglo.component';

@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    ArregloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
