import { CreditoVF } from "./CreditoVF";
import { Product } from "./Products";
import { Cliente } from "./Tienda";

export class ConsumoCreditoVF {
    id: number = 0
    producto: Product = new Product()
    fechaInicial: Date = new Date(Date.now());
    fechaFinal: Date = new Date(Date.now());
    interes: number = 0
    montoConsumo: number = 0
    creditoVF: CreditoVF = new CreditoVF();
}