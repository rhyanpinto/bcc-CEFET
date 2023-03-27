import { ECommerceShoppingCart } from "./ECommerceShoppingCart";

export class DiscountStrategy {
  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getSubTotal();
  }
}
