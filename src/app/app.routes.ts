import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { InventariosComponent } from './inventarios/inventarios.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    
  { path: 'auth', component: AuthComponent },
  { path: 'productos', component: ProductosComponent, canActivate: [AuthGuard] },
  { path: 'inventarios', component: InventariosComponent, canActivate: [AuthGuard] },
  { path: 'ordenes', component: OrdenesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];
