// inicio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule]
})
export class InicioComponent {
  saboresDestacados = [
    { nombre: 'Chocolate', imagen: 'assets/chocolate.jpg' },
    { nombre: 'Vainilla', imagen: 'assets/vainilla.jpg' },
    { nombre: 'Fresa', imagen: 'assets/fresa.jpg' },
    { nombre: 'Menta', imagen: 'assets/menta.jpg' }
  ];
}