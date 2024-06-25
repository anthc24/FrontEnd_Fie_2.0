// src/app/agregarconsumo1/agregarconsumo1.component.ts
/*import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agregarconsumo1',
  templateUrl: './agregarconsumo1.component.html',
  styleUrls: ['./agregarconsumo1.component.css']
})
export class AgregarConsumo1Component implements OnInit {
  cliente: Cliente = {
    rol: '',
    user: {
      id: 0,
      username: ''
    }
  };
  selectedProducto: string = '';
  selectedCantidad: number = 1;
  precio: number = 0;
  fecha: string = '';

  productosPrecios: { [key: string]: number } = {
    papa: 45,
    camote: 34,
    papaya: 22,
    choclo: 41,
    lechuga: 52
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fecha = new Date().toISOString().split('T')[0];
  }

  onProductoChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedProducto = selectElement.value;
    this.calcularPrecio();
  }

  onCantidadChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCantidad = +selectElement.value;
    this.calcularPrecio();
  }

  calcularPrecio(): void {
    const precioProducto = this.productosPrecios[this.selectedProducto] || 0;
    this.precio = precioProducto * this.selectedCantidad;
  }

  onSubmit(): void {
    console.log('Registrando cliente con producto:', this.selectedProducto);
    console.log('Cantidad:', this.selectedCantidad);
    console.log('Precio calculado:', this.precio);
    console.log('Fecha:', this.fecha);

    // Redirigir a la vista de cliente inicio
    this.router.navigate(['/vista-clienteinicio']);
  }
}*/ 
// src/app/agregarconsumo1/agregarconsumo1.component.ts
/*

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente';


@Component({
  selector: 'app-agregarconsumo1',
  templateUrl: './agregarconsumo1.component.html',
  styleUrls: ['./agregarconsumo1.component.css']
})
export class AgregarConsumo1Component implements OnInit {
navigateToVerCreditos() {
throw new Error('Method not implemented.');
}
  cliente: Cliente = {
    rol: 'cliente', // Inicializa el rol como "cliente"
    user: {
      id: 0,
      username: 'Fernanda Amarilis' // Inicializa el nombre de usuario
    },
    selectedProducto: undefined,
    fecha: undefined,
    precio: undefined,
    selectedCantidad: undefined
  };
  selectedProducto: string = '';
  selectedCantidad: number = 1;
  precio: number = 0;
  fecha: string = '';

  productosPrecios: { [key: string]: number } = {
    papa: 45,
    camote: 34,
    papaya: 22,
    choclo: 41,
    lechuga: 52
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.fecha = new Date().toISOString().split('T')[0];
  }

  onProductoChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedProducto = selectElement.value;
    this.calcularPrecio();
  }

  onCantidadChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCantidad = +selectElement.value;
    this.calcularPrecio();
  }

  calcularPrecio(): void {
    const precioProducto = this.productosPrecios[this.selectedProducto] || 0;
    this.precio = precioProducto * this.selectedCantidad;
  }

  onSubmit(): void {
    console.log('Registrando cliente con producto:', this.selectedProducto);
    console.log('Cantidad:', this.selectedCantidad);
    console.log('Precio calculado:', this.precio);
    console.log('Fecha:', this.fecha);
    console.log('Registrando cliente con producto:', this.selectedProducto);
    console.log('Cantidad:', this.selectedCantidad);
    console.log('Precio calculado:', this.precio);
    console.log('Fecha:', this.fecha);
  
    // Redirigir a la vista de cliente inicio
    this.router.navigate(['/vista-clienteinicio'])
    // Aquí podrías guardar el cliente utilizando el servicio
    this.clienteService.createCliente(this.cliente).subscribe((result: any) => {
      console.log('Cliente registrado', result);
      // Redirigir a la vista de cliente inicio
      this.router.navigate(['/vista-clienteinicio']);
    }, (error: any) => {
      console.error('Error al registrar el cliente', error);
    });
  }
}
*/

// src/app/agregarconsumo1/agregarconsumo1.component.ts
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente';
import { Cliente } from 'src/app/model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarconsumo1',
  templateUrl: './agregarconsumo1.component.html',
  styleUrls: ['./agregarconsumo1.component.css']
})
export class AgregarConsumo1Component implements OnInit {
  cliente: Cliente = {
    rol: 'cliente', // Inicializa el rol como "cliente"
    user: {
      id: 0,
      username: 'Fernanda Amarilis' // Inicializa el nombre de usuario
    },
    selectedProducto: '',
    selectedCantidad: 1,
    precio: 0,
    fecha: ''
  };

  productosPrecios: { [key: string]: number } = {
    papa: 45,
    camote: 34,
    papaya: 22,
    choclo: 41,
    lechuga: 52
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.cliente.fecha = new Date().toISOString().split('T')[0];
  }

  onProductoChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.cliente.selectedProducto = selectElement.value;
    this.calcularPrecio();
  }

  onCantidadChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.cliente.selectedCantidad = +selectElement.value;
    this.calcularPrecio();
  }

  calcularPrecio(): void {
    const precioProducto = this.productosPrecios[this.cliente.selectedProducto] || 0;
    this.cliente.precio = precioProducto * this.cliente.selectedCantidad;
  }

  onSubmit(): void {
    // Asegurarse de que todos los datos estén correctamente configurados
    this.cliente.fecha = new Date().toISOString().split('T')[0];
    this.calcularPrecio();  // Recalcular el precio en caso de que no se haya actualizado
    
    console.log('Registrando cliente con producto:', this.cliente.selectedProducto);
    console.log('Cantidad:', this.cliente.selectedCantidad);
    console.log('Precio calculado:', this.cliente.precio);
    console.log('Fecha:', this.cliente.fecha);

    this.clienteService.createCliente(this.cliente).subscribe(
      (result: Cliente) => {
        console.log('Cliente registrado', result);
        // Redirigir a la vista de cliente inicio
        this.router.navigate(['/vista-clienteinicio']);
      },
      (error: any) => {
        console.error('Error al registrar el cliente', error);
      }
    );
  }

  Guardadatos(): void {
    this.router.navigate(['/vista-clienteinicio']);
  }
}