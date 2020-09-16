import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TadeoComponent } from './tadeo/tadeo.component';
import { NataliaComponent } from './natalia/natalia.component';
import { MenuComponent } from './menu/menu.component';
import { SonicComponent } from './sonic/sonic.component';
import { MarioComponent } from './mario/mario.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { CaballoComponent } from './caballo/caballo.component';
import { VocalesComponent } from './vocales/vocales.component';
import { NumerosComponent } from './numeros/numeros.component';
import { FigurasComponent } from './figuras/figuras.component';
import { ColoresComponent } from './colores/colores.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'tadeo', component: TadeoComponent},
  {path: 'natalia', component: NataliaComponent},
  {path: 'sonic', component: SonicComponent},
  {path: 'mario', component: MarioComponent},
  {path: 'minecraft', component: MinecraftComponent},
  {path: 'caballo', component: CaballoComponent},
  {path: 'vocales', component: VocalesComponent},
  {path: 'numeros', component: NumerosComponent},
  {path: 'figuras', component: FigurasComponent},
  {path: 'colores', component: ColoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TadeoComponent,
    NataliaComponent,
    MenuComponent,
    SonicComponent,
    MarioComponent,
    MinecraftComponent,
    CaballoComponent,
    VocalesComponent,
    NumerosComponent,
    FigurasComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
