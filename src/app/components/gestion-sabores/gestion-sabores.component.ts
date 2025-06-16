import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-sabores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-sabores.component.html',
  styleUrls: ['./gestion-sabores.component.css']
})
export class GestionSaboresComponent implements OnInit {
  sabores: string[] = [];
  nuevoSabor: string = '';

  ngOnInit(): void {
    const datosGuardados = localStorage.getItem('sabores');
    if (datosGuardados) {
      this.sabores = JSON.parse(datosGuardados);
    } else {
      this.sabores = ['Chocolate', 'Fresa', 'Vainilla']; // valores por defecto
      this.guardarEnLocalStorage();
    }
  }

  agregarSabor() {
    const sabor = this.nuevoSabor.trim();
    if (sabor && !this.sabores.includes(sabor)) {
      this.sabores.push(sabor);
      this.nuevoSabor = '';
      this.guardarEnLocalStorage();
    }
  }

  eliminarSabor(index: number) {
    this.sabores.splice(index, 1);
    this.guardarEnLocalStorage();
  }

  guardarEnLocalStorage() {
    localStorage.setItem('sabores', JSON.stringify(this.sabores));
  }
}

// Este componente permite gestionar una lista de sabores de helado.
// Incluye funcionalidades para agregar nuevos sabores y eliminar sabores existentes.