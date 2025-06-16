// src/app/components/listar-pedidos/listar-pedidos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {
  pedidos: any[] = [];

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
        this.cargarPedidos(); // Actualizar la lista después de borrar
      });
    }
  }
}
// Este componente se encarga de listar los pedidos realizados,
//  permitiendo al usuario ver todos los pedidos y eliminarlos si 
// es necesario. Utiliza el servicio PedidoService para obtener y 
// eliminar pedidos de la API. La lista se actualiza automáticamente después de eliminar un pedido.