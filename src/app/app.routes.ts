import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'inicio', 
    loadComponent: () => import('./components/inicio/inicio.component').then(m => m.InicioComponent),
    canActivate: [authGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
  path: 'clientes',
  loadComponent: () => import('./components/clientes/clientes.component').then(m => m.ClientesComponent),
  canActivate: [authGuard]
},
{
  path: 'gestion-sabores',
  loadComponent: () => import('./components/gestion-sabores/gestion-sabores.component').then(m => m.GestionSaboresComponent),
  canActivate: [authGuard]
},
{
  path: 'listar-pedidos',
  loadComponent: () =>
    import('./components/listar-pedidos/listar-pedidos.component').then(m => m.ListarPedidosComponent),
  canActivate: [authGuard]
},
{
  path: 'hacer-pedido',
  loadComponent: () => import('./components/hacer-pedido/hacer-pedido.component').then(m => m.HacerPedidoComponent),
  canActivate: [authGuard]
}

];