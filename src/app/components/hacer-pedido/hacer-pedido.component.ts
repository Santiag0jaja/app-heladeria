// hacer-pedido.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
    { id: 1, nombre: 'Chocolate', precio: 2.5 },
    { id: 2, nombre: 'Vainilla', precio: 2.0 },
    { id: 3, nombre: 'Fresa', precio: 2.5 },
    { id: 4, nombre: 'Menta', precio: 2.0 },
    { id: 5, nombre: 'Limón', precio: 2.0 },
    { id: 6, nombre: 'Café', precio: 3.0 }
  ];
  toppings = [
    { id: 1, nombre: 'Chispas de chocolate', precio: 0.5 },
    { id: 2, nombre: 'Nueces', precio: 1.0 },
    { id: 3, nombre: 'Frutas frescas', precio: 1.5 },
    { id: 4, nombre: 'Caramelo', precio: 0.5 }
  ];

  constructor(private fb: FormBuilder) {
    this.pedidoForm = this.fb.group({
      sabor: ['', Validators.required],
      toppings: [[]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      notas: ['']
    });
  }
  // Add this method to handle topping checkbox changes
  onToppingChange(event: Event, toppingId: number): void {
    const checkbox = event.target as HTMLInputElement;
    const selectedToppings: number[] = this.pedidoForm.get('toppings')?.value || [];
    if (checkbox.checked) {
      if (!selectedToppings.includes(toppingId)) {
        selectedToppings.push(toppingId);
      }
    } else {
      const index = selectedToppings.indexOf(toppingId);
      if (index > -1) {
        selectedToppings.splice(index, 1);
      }
    }
    this.pedidoForm.get('toppings')?.setValue(selectedToppings);
  }
  onSubmit() {
    if (this.pedidoForm.valid) {
      console.log('Pedido enviado:', this.pedidoForm.value);
      alert('Pedido realizado con éxito!');
      this.pedidoForm.reset({
        cantidad: 1,
        toppings: []
      });
    }
  }

  calcularTotal(): number {
    const form = this.pedidoForm.value;
    const saborSeleccionado = this.sabores.find(s => s.id === form.sabor);
    const saborPrecio = saborSeleccionado ? saborSeleccionado.precio : 0;
    
    const toppingsPrecio = form.toppings.reduce((total: number, toppingId: number) => {
      const topping = this.toppings.find(t => t.id === toppingId);
      return total + (topping ? topping.precio : 0);
    }, 0);
    
    return (saborPrecio + toppingsPrecio) * form.cantidad;
  }
}