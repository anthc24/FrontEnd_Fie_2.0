import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudcredito',
  templateUrl: './solicitudcredito.component.html',
  styleUrls: ['./solicitudcredito.component.css']
})
export class SolicitudCreditoComponent implements OnInit {
[x: string]: any;
  selectedTienda: string = '';
  selectedFrecuencia: string = '';
  selectedPeriodo: string = '';
  selectedNumCuotas: number = 0;
  selectedPeriodoGracia: number = 0;
  fechaInicial: string = '';
  fechaFinal: string = '';
  credito: string = '';
  tipoTasa: string = '';
  tep: number = 0;
  tnp: number = 0;
  tasa: number = 0;
  monto: number = 0;
  cantidadSolicitar: number = 0;
  limiteCredito: number = 2000;  // Este valor debe ser obtenido desde la vista del cliente
  diasPlazo: number = 0;

  
 
  constructor(
    private router: Router,
  ) {}
  
  ngOnInit() {
    // Aquí podrías obtener el límite de crédito desde la vista del cliente
    // this.limiteCredito = ...;
  }

  onTiendaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTienda = selectElement.value;
  }

  onFrecuenciaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFrecuencia = selectElement.value;
  }

  onPeriodoChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedPeriodo = selectElement.value;
  }

  onNumCuotasChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedNumCuotas = parseInt(selectElement.value, 10);
  }

  onPeriodoGraciaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedPeriodoGracia = parseInt(selectElement.value, 10);
  }

  onFechaChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.fechaInicial = inputElement.value;
  }

  onCreditoChange(event: Event, credito: string) {
    this.credito = credito;
    this.tipoTasa = ''; // Reset tipoTasa cuando se cambia el crédito
  }

  onTipoTasaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoTasa = selectElement.value;
  }

  onTEPChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.tep = parseFloat(inputElement.value);
  }

  onTNPChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.tnp = parseFloat(inputElement.value);
  }

  onDiasPlazoChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.diasPlazo = parseInt(inputElement.value, 10);
  }

  onTasaChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.tasa = parseFloat(inputElement.value);
  }

  onMontoChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.monto = parseFloat(inputElement.value);
  }

  onFechaFinalChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.fechaFinal = inputElement.value;
  }

  onCantidadSolicitarChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.cantidadSolicitar = parseInt(inputElement.value, 10);
  }

  irAPagar() {
  this.router.navigate(['/']);
  }

  agregarConsumo() {
    this.router.navigate(['/agregarConsumo1']);
  }

}
