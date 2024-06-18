import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevocliiente',
  templateUrl: './nuevocliiente.component.html',
  styleUrls: ['./nuevocliiente.component.css']
})
export class NuevocliienteComponent {
  tipoCuota = [
    { value: 'nominal-1', viewValue: 'Nominal' },
    { value: 'efectiva-2', viewValue: 'Efectiva' },
  ];
}
