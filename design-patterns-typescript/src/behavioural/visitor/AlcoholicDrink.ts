import { VisitableProduct } from "./VisatableProduct";
import { TaxVisitorProtocol } from "./taxVisitorProtocol";

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
