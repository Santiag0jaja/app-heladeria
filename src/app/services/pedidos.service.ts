import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private apiUrl = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPedido(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crearPedido(pedido: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedido);
  }

  actualizarPedido(id: number, pedido: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, pedido);
  }

  eliminarPedido(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
// Este servicio maneja las operaciones CRUD para los pedidos, interactuando con una API RESTful.
// Utiliza HttpClient para realizar solicitudes HTTP y devuelve observables para que los componentes puedan suscribirse a los datos.