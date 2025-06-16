import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-hacer-pedido',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.css']
})
export class HacerPedidoComponent {
  pedidoForm: FormGroup;

  sabores = [
    { id: 1, nombre: 'Chocolate', precio: 5000 },
    { id: 2, nombre: 'Vainilla', precio: 4500 },
    { id: 3, nombre: 'Fresa', precio: 4800 },
    { id: 4, nombre: 'Menta', precio: 4700 },
    { id: 5, nombre: 'Limón', precio: 4300 },
    { id: 6, nombre: 'Café', precio: 5200 }
  ];

  toppings = [
    { id: 1, nombre: 'Chispas de chocolate', precio: 1000 },
    { id: 2, nombre: 'Nueces', precio: 1500 },
    { id: 3, nombre: 'Frutas frescas', precio: 1800 },
    { id: 4, nombre: 'Caramelo', precio: 1200 }
  ];

  constructor(private fb: FormBuilder, private pedidoService: PedidoService) {
    this.pedidoForm = this.fb.group({
      sabor: [null, Validators.required],
      toppings: [[]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      notas: ['']
    });
  }

  onToppingChange(event: Event, toppingId: number): void {
    const checkbox = event.target as HTMLInputElement;
    const selected = this.pedidoForm.get('toppings')?.value || [];
    if (checkbox.checked && !selected.includes(toppingId)) {
      selected.push(toppingId);
    } else if (!checkbox.checked) {
      const idx = selected.indexOf(toppingId);
      if (idx > -1) selected.splice(idx, 1);
    }
    this.pedidoForm.get('toppings')?.setValue(selected);
  }

  calcularTotal(): number {
    const { sabor, toppings, cantidad } = this.pedidoForm.value;
    const saborPrecio = sabor?.precio || 0;
    const toppingsPrecio = toppings.reduce((acc: number, id: number) => {
      const topping = this.toppings.find(t => t.id === id);
      return acc + (topping?.precio || 0);
    }, 0);
    return (saborPrecio + toppingsPrecio) * cantidad;
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      this.pedidoService.agregarPedido(this.pedidoForm.value);
      alert('¡Pedido realizado con éxito!');
      this.pedidoForm.reset({ cantidad: 1, toppings: [], sabor: null, notas: '' });
    }
  }
}
// Este componente permite a los usuarios hacer pedidos de helados, seleccionando un sabor, toppings, cantidad y notas.
// Utiliza un formulario reactivo para manejar la entrada del usuario y el servicio PedidoService para almacenar los pedidos.