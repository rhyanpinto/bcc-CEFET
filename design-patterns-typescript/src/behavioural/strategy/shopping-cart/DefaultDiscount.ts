import { DiscountStrategy } from './DiscountStrategy';
import { ECommerceShoppingCart } from './ECommerceShoppingCart';

export class DefaultDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const subTotal = cart.getSubTotal();

    if (subTotal >= 100 && subTotal < 200) {
      this.discount = 10;
    } else if (subTotal >= 200 && subTotal < 300) {
      this.discount = 20;
    } else {
      this.discount = 30;
    }

    return subTotal - subTotal * (this.discount / 100);
  }
}
