import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from './produc.module';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  nuevoProducto: Producto = { id: 0, nombre: '', precio: 0, activo: true };

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.obtenerProductosActivos();
  }

  obtenerProductosActivos() {
    this.productoService.obtenerProductosActivos().subscribe(data => {
      this.productos = data;
    });
  }

  crearProducto() {
    this.productoService.crearProducto(this.nuevoProducto).subscribe(() => {
      this.obtenerProductosActivos();
      this.nuevoProducto = { id: 0, nombre: '', precio: 0, activo: true };
    });
  }

  eliminarProducto(id: number) {
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.obtenerProductosActivos();
    });
  }
}