import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="logo" (click)="goHome()">🍦 Heladería Mierda</div>
      <nav>
        <button *ngIf="isLoggedIn" (click)="logout()">Cerrar sesión</button>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      color: white;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }
    button {
      background: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      color: #ff6b6b;
      font-weight: bold;
    }
  `]
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(private router: Router) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  goHome() {
    this.router.navigate(['/inicio']);
  }
}