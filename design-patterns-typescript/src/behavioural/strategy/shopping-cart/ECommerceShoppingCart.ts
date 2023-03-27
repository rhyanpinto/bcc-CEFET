import { DiscountStrategy } from "./DiscountStrategy";
import { ECommerceProductProtocol } from "./ECommerceProductProtocol";

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach(product => {
      this.products.push(product);
    });
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getSubTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotal(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
