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
    { nombre: 'Vainilla', descripcion: 'Clásico sabor a vainilla', precio: 2.5, image : 'https://www.loveandlemons.com/wp-content/uploads/2020/06/vanilla-ice-cream.jpg' },
    { nombre: 'Chocolate', descripcion: 'Delicioso chocolate belga', precio: 3.0, image : 'https://www.loveandlemons.com/wp-content/uploads/2020/06/chocolate-ice-cream.jpg' },
    { nombre: 'Fresa', descripcion: 'Fresas naturales', precio: 2.8, image : 'https://www.loveandlemons.com/wp-content/uploads/2020/06/strawberry-ice-cream.jpg' },
    { nombre: 'Menta', descripcion: 'Refrescante sabor a menta', precio: 3.2, Image: 'https://static.guiainfantil.com/pictures/recetas/5109-helado-de-menta-con-chocolate-postre-refrescante-y-ligero.jpg' },
  ];
}