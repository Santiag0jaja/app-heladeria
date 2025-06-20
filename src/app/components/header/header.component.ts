import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isAdmin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.isAdmin = this.authService.isLoggedIn(); 
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

 logout(): void {
  this.authService.logout();
  this.router.navigate(['/login']).then(() => {
    location.reload(); 
  });
}
// Este componente de encabezado incluye enlaces de navegación y un botón de cierre de sesión.
// Utiliza el servicio de autenticación para manejar el cierre de sesión y verificar si el usuario es administrador.
}