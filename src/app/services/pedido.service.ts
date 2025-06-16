import { Injectable } from '@angular/core';

interface Pedido {
  sabor: any;
  toppings: number[];
  cantidad: number;
  notas: string;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidos: Pedido[] = [];

  agregarPedido(pedido: Pedido) {
    this.pedidos.push(pedido);
  }

  obtenerPedidos(): Pedido[] {
    return this.pedidos;
  }

  eliminarPedido(index: number) {
    this.pedidos.splice(index, 1);
  }
}
// Este servicio maneja los pedidos de helados, permitiendo agregar, obtener y eliminar pedidos.
// Se utiliza para almacenar los pedidos en memoria durante la sesión de la aplicación.