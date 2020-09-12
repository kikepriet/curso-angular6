import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {
  @Input() nombre: string;
  constructor() { 
    this.nombre = 'hola desde variable';
   }

  ngOnInit(): void {
  }

}
