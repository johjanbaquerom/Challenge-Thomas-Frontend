import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProductosComponent } from './productos/productos.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { InventariosComponent } from './inventarios/inventarios.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'inventarios', component: InventariosComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }