// src/app/ver-creditos/ver-creditos.component.ts
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente';
import { Cliente } from 'src/app/model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-creditos',
  templateUrl: './ver-creditos.component.html',
  styleUrls: ['./ver-creditos.component.css']
})
export class VerCreditosComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    }, error => {
      console.error('Error al obtener los créditos', error);
    });
  }

  navigateBack(): void {
    this.router.navigate(['/vista-clienteinicio']);
  }
}
