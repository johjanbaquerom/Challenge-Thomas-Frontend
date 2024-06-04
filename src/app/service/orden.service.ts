import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Asegúrate de que esta ruta es correcta
import { Orden } from '../ordenes/orden.module';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private apiUrl = 'http://localhost:8080/api/ordenes';

  constructor(private http: HttpClient) {}

  obtenerTop5MasVendidos(): Observable<Orden[]> {
    return this.http.get<Orden[]>(`${this.apiUrl}/top5masvendidos`);
  }

  obtenerTop5ClientesFrecuentes(): Observable<Orden[]> {
    return this.http.get<Orden[]>(`${this.apiUrl}/top5clientesfrecuentes`);
  }
}