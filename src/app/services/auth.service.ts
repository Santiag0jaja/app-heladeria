import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Usuario simulado
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
// Este servicio de autenticación simula un inicio de sesión con un usuario y contraseña predefinidos.
// Utiliza el almacenamiento local para mantener el estado de inicio de sesión y redirige al usuario al login al cerrar sesión.