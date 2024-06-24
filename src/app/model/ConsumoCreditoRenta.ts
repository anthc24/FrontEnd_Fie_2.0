import { CreditoRenta } from "./CreditoRenta";
import { Cliente } from "./Tienda";


export class ConsumoCreditoRenta {

    id: number = 0
    fechaInicial: Date = new Date(Date.now());
    fechaFinal: Date = new Date(Date.now());
    credito_limit: number = 0
    TEP: string = '' //mensual, trimestral ...
    tasa: number = 0
    cuotas: number = 0
    renta: number = 0
    plazo_cuotas_gracia: number = 0
    creditoRenta: CreditoRenta = new CreditoRenta()
}