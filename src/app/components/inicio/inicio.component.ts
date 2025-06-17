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
    { nombre: 'Chocolate', imagen: 'https://images.cookforyourlife.org/wp-content/uploads/2020/06/Chocolate-Whipped-Ice-Cream-shutterstock_1010248351.jpg' },
    { nombre: 'Vainilla', imagen: 'https://tse1.mm.bing.net/th/id/OIP.rFc1KpEQyuB5eLQQtkycRwHaE7?rs=1&pid=ImgDetMain' },
    { nombre: 'Fresa', imagen: 'https://assets.unileversolutions.com/recipes-v2/231124.jpg' },
    { nombre: 'Menta', imagen: 'https://mandolina.co/wp-content/uploads/2023/11/helado-de-menta-1080X550.jpg' }
  ];
}
// Este componente muestra la página de inicio de la aplicación, destacando algunos sabores de helado.
// Utiliza imágenes para representar los sabores y permite navegar a otras secciones de la aplicación.