import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-sabores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-sabores.component.html',
  styleUrls: ['./gestion-sabores.component.css']
})
export class GestionSaboresComponent {
  sabores: string[] = ['Chocolate', 'Fresa', 'Vainilla'];
  nuevoSabor: string = '';

  agregarSabor() {
    if (this.nuevoSabor.trim() && !this.sabores.includes(this.nuevoSabor)) {
      this.sabores.push(this.nuevoSabor.trim());
      this.nuevoSabor = '';
    }
  }

  eliminarSabor(index: number) {
    this.sabores.splice(index, 1);
  }
}
// Este componente permite gestionar una lista de sabores de helado.
// Incluye funcionalidades para agregar nuevos sabores y eliminar sabores existentes.