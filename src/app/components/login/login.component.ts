import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/inicio']).then(() => {
        location.reload(); 
      });
    } else {
      this.error = 'Credenciales incorrectas';
    }
  }
}
// Este componente maneja el inicio de sesión del usuario.
// Verifica las credenciales ingresadas y redirige al usuario a la página de inicio si son correctas.