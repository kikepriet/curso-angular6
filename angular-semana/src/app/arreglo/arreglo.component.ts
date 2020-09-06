import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arreglo',
  templateUrl: './arreglo.component.html',
  styleUrls: ['./arreglo.component.css']
})
export class ArregloComponent implements OnInit {
  arreglo: string[];
  constructor() { 
    this.arreglo = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
   }

  ngOnInit(): void {
  }

}
