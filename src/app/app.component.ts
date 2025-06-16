import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer />
  `,
  styles: [`
    .main-content {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      min-height: calc(100vh - 160px); /* Ajusta según la altura del header y footer */
    }
  `]
})
export class AppComponent {}
// Este componente principal de la aplicación incluye el header, el footer y un outlet para las rutas.
// El estilo asegura que el contenido principal tenga un padding adecuado y un ancho máximo, 
// además de un mínimo de altura para evitar que el footer se superponga al contenido.