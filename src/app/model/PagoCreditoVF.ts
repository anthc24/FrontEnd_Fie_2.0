import { CreditoVF } from "./CreditoVF"

export class PagoVF {
    id: number = 0
    total_moras: number = 0
    total_monto_consumos: number = 0
    monto_a_pagar: number = 0
    pagado: string = ''
    creditoVF: CreditoVF = new CreditoVF()
}