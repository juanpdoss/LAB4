import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  //input, para ingresar datos a cada pantalla
  //declaro que valorRecibido es un input, necesita el decorador @Input
  @Input() valorRecibido: string = 'DetalleComponent.ts';
  @Output() cambioColor: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  Mostrar() {
    console.log(this.valorRecibido);
    // this.valorRecibido = 'purpura'; esto ESTA MAL, piso la referencia
    // console.log(this.valorRecibido);
    this.cambioColor.emit('azul'); //emit deberia recibir un objeto con todo lo necesario
    
  }

  ngOnInit(): void {}
}
