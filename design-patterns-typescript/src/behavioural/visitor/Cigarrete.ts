import { VisitableProduct } from "./VisatableProduct";
import { TaxVisitorProtocol } from "./taxVisitorProtocol";

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
