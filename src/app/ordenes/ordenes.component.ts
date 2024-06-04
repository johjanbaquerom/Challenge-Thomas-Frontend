import { Component, OnInit } from '@angular/core';
import { Orden } from './orden.module';
import { OrdenService } from '../service/orden.service'; // Asegúrate de importar correctamente OrdenService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  topMasVendidos: Orden[] = [];
  topClientesFrecuentes: Orden[] = [];

  constructor(private ordenService: OrdenService) { } // Asegúrate de que OrdenService esté disponible aquí

  ngOnInit(): void {
    this.ordenService.obtenerTop5MasVendidos().subscribe((data: Orden[]) => {
      this.topMasVendidos = data;
    });

    this.ordenService.obtenerTop5ClientesFrecuentes().subscribe((data: Orden[]) => {
      this.topClientesFrecuentes = data;
    });
  }
}