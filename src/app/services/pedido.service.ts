
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private apiUrl = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarPedido(pedido: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedido);
  }

  eliminarPedido(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  actualizarPedido(id: number, pedido: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, pedido);
  }
}

