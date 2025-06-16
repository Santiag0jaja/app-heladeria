import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent {
  constructor(public pedidoService: PedidoService) {}

  eliminarPedido(index: number): void {
    this.pedidoService.eliminarPedido(index);
  }

  getNombreTopping(id: number): string {
    const toppings = [
      { id: 1, nombre: 'Chispas de chocolate' },
      { id: 2, nombre: 'Nueces' },
      { id: 3, nombre: 'Frutas frescas' },
      { id: 4, nombre: 'Caramelo' }
    ];
    return toppings.find(t => t.id === id)?.nombre || '';
  }
}
// Este componente lista los pedidos realizados, mostrando el sabor, toppings, cantidad y notas de cada pedido.
// Permite eliminar un pedido específico utilizando el servicio PedidoService.