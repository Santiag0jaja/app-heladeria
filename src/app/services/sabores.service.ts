import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {
  private apiUrl = 'http://localhost:3000/sabores';

  constructor(private http: HttpClient) {}

  getSabores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearSabor(sabor: { nombre: string; precio?: number }): Observable<any> {
    // Si no se proporciona precio, lo ponemos en 0
    const nuevoSabor = { ...sabor, precio: sabor.precio ?? 0 };
    return this.http.post<any>(this.apiUrl, nuevoSabor);
  }

  eliminarSabor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

// Este servicio maneja las operaciones CRUD para los sabores, interactuando con una API RESTful.
// Utiliza HttpClient para realizar solicitudes HTTP y devuelve observables para que los componentes 
// puedan suscribirse a los datos.