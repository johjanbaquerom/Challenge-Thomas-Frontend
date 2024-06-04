import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../service/inventario.service';
import { Inventario } from './inventario.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.css']
})
export class InventariosComponent implements OnInit {
  inventarios: Inventario[] = [];

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.inventarioService.obtenerInventarios().subscribe(data => {
      this.inventarios = data;
    });
  }
}