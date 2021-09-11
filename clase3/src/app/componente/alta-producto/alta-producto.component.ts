import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css'],
})
export class AltaProductoComponent implements OnInit {
  @Output() seCreoProducto: EventEmitter<any> = new EventEmitter<any>();

  producto = {
    nombre: 'coquita',
    precio: '100',
  };

  constructor() {}

  Guardar() {
    let nuevoProducto = {
      nombre: this.producto.nombre,
      precio: this.producto.precio,
    };

    this.seCreoProducto.emit(nuevoProducto);

    console.info('producto', this.producto);
  }

  ngOnInit(): void {}
}
