import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};
// Este guard de autenticación verifica si el usuario está autenticado antes de permitir el acceso a las rutas protegidas.
// Si el usuario no está autenticado, se redirige al login automáticamente.