import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes = [
    { nombre: 'Sofía Rodríguez', email: 'sofia@gmail.com' },
    { nombre: 'Carlos Torres', email: 'carlos@gmail.com' },
    { nombre: 'Valentina Mejía', email: 'valentina@gmail.com' }
  ];
}
// Este componente muestra una lista de clientes con sus nombres y correos electrónicos.
// Puedes agregar funcionalidades adicionales como editar o eliminar clientes según sea necesario.