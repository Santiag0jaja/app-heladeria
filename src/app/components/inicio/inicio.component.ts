import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule, RouterModule]
})
export class InicioComponent {
  saboresDestacados = [
    { nombre: 'Chocolate', imagen: 'assets/chocolate.jpg' },
    { nombre: 'Vainilla', imagen: 'assets/vainilla.jpg' },
    { nombre: 'Fresa', imagen: 'assets/fresa.jpg' },
    { nombre: 'Menta', imagen: 'assets/menta.jpg' }
  ];
}
// Este componente muestra la página de inicio de la aplicación, destacando algunos sabores de helado.
// Utiliza imágenes locales para representar los sabores y permite navegar a otras secciones de la aplicación.