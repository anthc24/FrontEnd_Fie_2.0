import { Cliente } from "./Tienda";

export class CreditoVF {
    id: number = 0
    fechaInicial: Date = new Date(Date.now());
    fechaFinal: Date = new Date(Date.now());
    TEoN: string = ''
    TEP: string = ''
    monto: number = 0
    TNP: string = ''
    tasa: number = 0
    perio_capitalizacion: number = 0
    client: Cliente = new Cliente()
}