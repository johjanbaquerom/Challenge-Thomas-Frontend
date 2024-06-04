import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventario } from '../inventarios/inventario.module';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private baseUrl = 'http://localhost:8080/api/inventarios';

  constructor(private http: HttpClient) { }

  obtenerInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.baseUrl);
  }

  crearInventario(inventario: Inventario): Observable<Inventario> {
    return this.http.post<Inventario>(this.baseUrl, inventario);
  }
}
