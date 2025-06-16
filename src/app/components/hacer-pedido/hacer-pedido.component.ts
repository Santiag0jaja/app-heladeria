import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
    const selectedToppings: number[] = this.pedidoForm.get('toppings')?.value || [];

    if (checkbox.checked && !selectedToppings.includes(toppingId)) {
      selectedToppings.push(toppingId);
    } else if (!checkbox.checked) {
      const index = selectedToppings.indexOf(toppingId);
      if (index > -1) selectedToppings.splice(index, 1);
    }

    this.pedidoForm.get('toppings')?.setValue(selectedToppings);
  }

  calcularTotal(): number {
    const form = this.pedidoForm.value;
    const saborPrecio = form.sabor?.precio || 0;

    const toppingsPrecio = form.toppings.reduce((total: number, toppingId: number) => {
      const topping = this.toppings.find(t => t.id === toppingId);
      return total + (topping?.precio || 0);
    }, 0);

    return (saborPrecio + toppingsPrecio) * form.cantidad;
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      const pedido = {
        ...this.pedidoForm.value,
        total: this.calcularTotal(),
        fecha: new Date().toISOString()
      };
      this.pedidoService.guardarPedido(pedido); // guardar en localStorage
      console.log('Pedido enviado:', pedido);
      alert('¡Pedido realizado con éxito!');
      this.pedidoForm.reset({
        cantidad: 1,
        toppings: [],
        sabor: null,
        notas: ''
      });
    }
  }
}
