import { Component, OnInit } from '@angular/core';
import { TipoCoche } from './../models/tipo-coche.model';

@Component({
  selector: 'app-lista-coches',
  templateUrl: './lista-coches.component.html',
  styleUrls: ['./lista-coches.component.css']
})
export class ListaCochesComponent implements OnInit {
  coche: TipoCoche[];
  constructor() { 
    this.coche = [];
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean{
    this.coche.push(new TipoCoche(nombre, url));
    // console.log(nombre);
    return false;
  }

}
