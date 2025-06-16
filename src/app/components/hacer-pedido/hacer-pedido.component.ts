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
    { nombre: 'Chocolate', precio: 5000 },
    { nombre: 'Vainilla', precio: 4500 },
    { nombre: 'Fresa', precio: 4800 }
  ];

  toppings = [
    { nombre: 'Chispas de chocolate', precio: 1000 },
    { nombre: 'Nueces', precio: 1500 },
    { nombre: 'Frutas frescas', precio: 1800 },
    { nombre: 'Caramelo', precio: 1200 }
  ];

  constructor(private fb: FormBuilder, private pedidoService: PedidoService) {
    this.pedidoForm = this.fb.group({
      cliente: ['', Validators.required],
      sabor: [null, Validators.required],
      toppings: [[]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      notas: ['']
    });
  }

  onToppingChange(event: Event, toppingNombre: string): void {
    const checkbox = event.target as HTMLInputElement;
    const selected = this.pedidoForm.get('toppings')?.value || [];
    if (checkbox.checked && !selected.includes(toppingNombre)) {
      selected.push(toppingNombre);
    } else if (!checkbox.checked) {
      const idx = selected.indexOf(toppingNombre);
      if (idx > -1) selected.splice(idx, 1);
    }
    this.pedidoForm.get('toppings')?.setValue(selected);
  }

  calcularTotal(): number {
    const { sabor, toppings, cantidad } = this.pedidoForm.value;
    const saborPrecio = sabor?.precio || 0;
    const toppingsPrecio = toppings.reduce((acc: number, nombre: string) => {
      const topping = this.toppings.find(t => t.nombre === nombre);
      return acc + (topping?.precio || 0);
    }, 0);
    return (saborPrecio + toppingsPrecio) * cantidad;
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      const form = this.pedidoForm.value;
      const nuevoPedido = {
        cliente: form.cliente,
        sabor: form.sabor.nombre,
        toppings: form.toppings,
        total: this.calcularTotal()
      };

      this.pedidoService.agregarPedido(nuevoPedido).subscribe({
        next: res => {
          alert('¡Pedido realizado con éxito!');
          this.pedidoForm.reset({ cantidad: 1, toppings: [], sabor: null, notas: '', cliente: '' });
        },
        error: err => {
          alert('Error al guardar el pedido.');
          console.error(err);
        }
      });
    }
  }
}
// Este componente permite a los usuarios hacer pedidos de helados.
// Utiliza un formulario reactivo para capturar los datos del pedido, incluyendo el cliente,