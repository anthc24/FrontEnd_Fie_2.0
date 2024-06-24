import { CreditoRenta } from "./CreditoRenta"

export class MoraCreditoRenta {
    id: number = 0
    TEPm: string = ''
    tasa: number = 0
    num_cuota: number = 0
    dias_atraso: number = 0
    total_moras: number = 0
    creditoRenta: CreditoRenta = new CreditoRenta()
}