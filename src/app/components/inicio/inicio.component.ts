import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ⬅️ Agrega esto

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule, RouterModule] // ⬅️ Asegúrate de incluir RouterModule
})
export class InicioComponent {
  saboresDestacados = [
    { nombre: 'Chocolate', imagen: 'assets/chocolate.jpg' },
    { nombre: 'Vainilla', imagen: 'assets/vainilla.jpg' },
    { nombre: 'Fresa', imagen: 'assets/fresa.jpg' },
    { nombre: 'Menta', imagen: 'assets/menta.jpg' }
  ];
}
