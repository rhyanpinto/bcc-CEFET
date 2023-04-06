import { VisitableProduct } from "./VisatableProduct";
import { TaxVisitorProtocol } from "./taxVisitorProtocol";

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
