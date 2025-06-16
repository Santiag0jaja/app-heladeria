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
  nuevoSabor: string = '';

  constructor(private saboresService: SaboresService) {}

  ngOnInit(): void {
    this.cargarSabores();
  }

  cargarSabores(): void {
    this.saboresService.getSabores().subscribe((data) => {
      this.sabores = data;
    });
  }

  agregarSabor(): void {
    const nombre = this.nuevoSabor.trim();
    if (nombre) {
      const nuevo = { nombre };
      this.saboresService.crearSabor(nuevo).subscribe(() => {
        this.nuevoSabor = '';
        this.cargarSabores();
      });
    }
  }

  eliminarSabor(id: number): void {
    this.saboresService.eliminarSabor(id).subscribe(() => {
      this.cargarSabores();
    });
  }
}
