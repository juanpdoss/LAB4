import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amb-productos',
  templateUrl: './amb-productos.component.html',
  styleUrls: ['./amb-productos.component.css'],
})
export class AmbProductosComponent implements OnInit {
  colorAsignado: string;
  arrayProductos: any = [];

  constructor() {
    this.colorAsignado = 'negro';
  }

  CambiarColor(color: string) {
    this.colorAsignado = color;
  }

  AgregarNuevoProducto(producto: any) {
    this.arrayProductos.push(producto);

    console.info('producto en abm', producto);
  }

  ngOnInit(): void {}
}
