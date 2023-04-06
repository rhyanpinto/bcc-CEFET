import { DiscountStrategy } from './DiscountStrategy';
import { ECommerceShoppingCart } from './ECommerceShoppingCart';

export class NewDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const subTotal = cart.getSubTotal();

    if (subTotal >= 150) {
      this.discount = 5;
    }

    return subTotal - subTotal * (this.discount / 100);
  }
}
