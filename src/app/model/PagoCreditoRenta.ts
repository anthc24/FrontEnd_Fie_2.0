import { CreditoRenta } from "./CreditoRenta"

export class PagoRenta {
    id: number = 0
    renta: number = 0
    total_moras: number = 0
    num_cuota: number = 0
    monto_a_pagar: number = 0
    pagado: string = ''
    creditoRenta: CreditoRenta = new CreditoRenta();
}