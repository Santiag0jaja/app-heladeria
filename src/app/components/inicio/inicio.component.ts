import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  sabores = [
    { nombre: 'Vainilla', descripcion: 'Clásico sabor a vainilla', precio: 2.5 },
    { nombre: 'Chocolate', descripcion: 'Delicioso chocolate belga', precio: 3.0 },
    { nombre: 'Fresa', descripcion: 'Fresas naturales', precio: 2.8 },
    { nombre: 'Menta', descripcion: 'Refrescante sabor a menta', precio: 3.2 }
  ];
}