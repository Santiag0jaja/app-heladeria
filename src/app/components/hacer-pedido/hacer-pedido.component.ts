import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';
import { SaboresService } from '../../services/sabores.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hacer-pedido',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.css']
})
export class HacerPedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  sabores: any[] = [];

  toppings = [
    { id: 1, nombre: 'Chispas de chocolate', precio: 1000 },
    { id: 2, nombre: 'Nueces', precio: 1500 },
    { id: 3, nombre: 'Frutas frescas', precio: 1800 },
    { id: 4, nombre: 'Caramelo', precio: 1200 }
  ];

  constructor(
    private fb: FormBuilder,
    private pedidoService: PedidoService,
    private saboresService: SaboresService
  ) {
    this.pedidoForm = this.fb.group({
      cliente: ['', Validators.required],
      sabor: [null, Validators.required],
      toppings: [[]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      notas: ['']
    });
  }

  ngOnInit(): void {
    this.saboresService.getSabores().subscribe(data => {
      this.sabores = data;
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
      const pedido = {
        cliente: this.pedidoForm.value.cliente,
        toppings: this.pedidoForm.value.toppings.map((id: number) => {
          const topping = this.toppings.find(t => t.id === id);
          return topping?.nombre || '';
        }),
        total: this.calcularTotal()
      };

      this.pedidoService.agregarPedido(pedido).subscribe(() => {
        alert('¡Pedido realizado con éxito!');
        this.pedidoForm.reset({ cantidad: 1, toppings: [], sabor: null, notas: '', cliente: '' });
      });
    }
  }
}

// Este componente permite a los usuarios hacer pedidos de helados.
// Utiliza un formulario reactivo para capturar los datos del pedido, incluyendo el cliente,