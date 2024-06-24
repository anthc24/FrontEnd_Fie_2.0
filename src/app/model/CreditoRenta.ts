import { Cliente } from "./Tienda";

export class CreditoRenta {
    id: number = 0
    fechaInicial: Date = new Date(Date.now());
    fechaFinal: Date = new Date(Date.now());
    credito_limit: number = 0
    TEP: string = ''
    tasa: number = 0
    cuotas: number = 0
    renta: number = 0
    plazo_cuotas_gracias: number = 0
    client: Cliente = new Cliente()
}