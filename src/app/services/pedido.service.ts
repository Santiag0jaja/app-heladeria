import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private STORAGE_KEY = 'pedidos';

  obtenerPedidos(): any[] {
    const pedidosJSON = localStorage.getItem(this.STORAGE_KEY);
    return pedidosJSON ? JSON.parse(pedidosJSON) : [];
  }

  guardarPedido(pedido: any): void {
    const pedidos = this.obtenerPedidos();
    pedidos.push(pedido);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(pedidos));
  }

  limpiarPedidos(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
// Este servicio maneja el almacenamiento de pedidos en el almacenamiento local del navegador.
// Permite obtener, guardar y limpiar pedidos, facilitando la persistencia de datos entre sesiones.