// listar-pedidos.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pedido {
  id: number;
  fecha: Date;
  sabor: string;
  toppings: string[];
  cantidad: number;
  total: number;
  estado: 'pendiente' | 'en-proceso' | 'completado';
}

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent {
  pedidos: Pedido[] = [
    {
      id: 1,
      fecha: new Date(2023, 5, 15),
      sabor: 'Chocolate',
      toppings: ['Chispas de chocolate', 'Nueces'],
      cantidad: 2,
      total: 7.0,
      estado: 'completado'
    },
    {
      id: 2,
      fecha: new Date(2023, 5, 16),
      sabor: 'Vainilla',
      toppings: ['Frutas frescas'],
      cantidad: 1,
      total: 3.5,
      estado: 'en-proceso'
    },
    {
      id: 3,
      fecha: new Date(2023, 5, 17),
      sabor: 'Fresa',
      toppings: [],
      cantidad: 3,
      total: 7.5,
      estado: 'pendiente'
    }
  ];

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'estado-pendiente';
      case 'en-proceso': return 'estado-en-proceso';
      case 'completado': return 'estado-completado';
      default: return '';
    }
  }
}