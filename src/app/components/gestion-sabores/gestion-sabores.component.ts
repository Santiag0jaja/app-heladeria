import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaboresService } from '../../services/sabores.service';

@Component({
  selector: 'app-gestion-sabores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-sabores.component.html',
  styleUrls: ['./gestion-sabores.component.css']
})
export class GestionSaboresComponent implements OnInit {
  sabores: any[] = [];
  nuevoSabor = {
    nombre: '',
    precio: 0
  };

  constructor(private saboresService: SaboresService) {}

  ngOnInit(): void {
    this.cargarSabores();
  }

  cargarSabores(): void {
    this.saboresService.getSabores().subscribe((data) => {
      // Clonamos para que no se afecten accidentalmente los datos originales
      this.sabores = data.map(s => ({ ...s }));
    });
  }

  agregarSabor(): void {
    const nombre = this.nuevoSabor.nombre.trim();
    const precio = this.nuevoSabor.precio;

    if (nombre && precio > 0) {
      const nuevo = { nombre, precio };
      this.saboresService.crearSabor(nuevo).subscribe(() => {
        this.nuevoSabor = { nombre: '', precio: 0 };
        this.cargarSabores();
      });
    }
  }

  eliminarSabor(id: number): void {
    this.saboresService.eliminarSabor(id).subscribe(() => {
      this.cargarSabores();
    });
  }

  actualizarSabor(sabor: any): void {
    const actualizado = {
      nombre: sabor.nombre,
      precio: +sabor.precio // Aseguramos que sea número
    };

    this.saboresService.actualizarSabor(sabor.id, actualizado).subscribe(() => {
      alert('Sabor actualizado correctamente.');
      this.cargarSabores();
    });
  }
}

// Este componente se encarga de gestionar los sabores disponibles en la heladería,
// permitiendo al usuario agregar nuevos sabores y eliminarlos. Utiliza el servicio SaboresService