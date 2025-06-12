import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Iniciar Sesión</h2>
        <form (ngSubmit)="onSubmit()">
          <input [(ngModel)]="username" name="username" placeholder="Usuario" required>
          <input [(ngModel)]="password" type="password" name="password" placeholder="Contraseña" required>
          <button type="submit">Ingresar</button>
          <p *ngIf="error" class="error">{{ error }}</p>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
    .login-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }
    h2 {
      color: #ff9a9e;
      text-align: center;
    }
    input {
      width: 100%;
      padding: 0.8rem;
      margin: 0.5rem 0;
      border: 2px solid #eee;
      border-radius: 5px;
    }
    button {
      width: 100%;
      padding: 0.8rem;
      background: #ff9a9e;
      color: white;
      border: none;
      border-radius: 5px;
      margin-top: 1rem;
      cursor: pointer;
    }
    .error {
      color: #ff6b6b;
      text-align: center;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/inicio']);
    } else {
      this.error = 'Credenciales incorrectas';
    }
  }
}