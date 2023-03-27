import { DefaultDiscount } from "./shopping-cart/DefaultDiscount";
import { ECommerceShoppingCart } from "./shopping-cart/ECommerceShoppingCart";
import { NewDiscount } from "./shopping-cart/NewDiscount";

const shoppingCart = new ECommerceShoppingCart();

shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: "Tênis", price: 50 });
shoppingCart.addProduct({ name: "Camiseta", price: 50 });
shoppingCart.addProduct({ name: "Boné", price: 50 });
console.log(shoppingCart.getSubTotal());
console.log(shoppingCart.getTotal());

