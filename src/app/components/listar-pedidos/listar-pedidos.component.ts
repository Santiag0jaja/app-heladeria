import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {
  pedidos: any[] = [];
  editandoId: number | null = null;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    this.pedidoService.getPedidos().subscribe((data) => {
      this.pedidos = data;
    });
  }

  eliminarPedido(id: number): void {
    if (confirm('¿Estás seguro de eliminar este pedido?')) {
      this.pedidoService.eliminarPedido(id).subscribe(() => {
        this.cargarPedidos();
      });
    }
  }

  habilitarEdicion(id: number): void {
    this.editandoId = id;
  }

  guardarEdicion(pedido: any): void {
    this.pedidoService.actualizarPedido(pedido.id, pedido).subscribe(() => {
      this.editandoId = null;
      this.cargarPedidos();
    });
  }

  cancelarEdicion(): void {
    this.editandoId = null;
    this.cargarPedidos();
  }
}

// Este componente se encarga de listar los pedidos realizados,
//  permitiendo al usuario ver todos los pedidos y eliminarlos si 
// es necesario. Utiliza el servicio PedidoService para obtener y 
// eliminar pedidos de la API. La lista se actualiza automáticamente después de eliminar un pedido.