import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TipoCoche } from './../models/tipo-coche.model';

@Component({
  selector: 'app-tipo-coche',
  templateUrl: './tipo-coche.component.html',
  styleUrls: ['./tipo-coche.component.css']
})
export class TipoCocheComponent implements OnInit {
  @Input() coche: TipoCoche;
  @HostBinding('attr.class') cssClass = 'col-md-4 my-2';
  constructor() { }

  ngOnInit(): void {
  }

}
