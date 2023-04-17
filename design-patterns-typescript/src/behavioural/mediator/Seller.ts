import { Mediator } from "./Mediator";
import { SellerProcut } from "./sellerProduct";

export class Seller {
  private products: SellerProcut[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) => {
      console.log(`Product: ${product.name} - Price: ${product.price}`);
    });
  }

  addProduct(...products: SellerProcut[]): void {
    products.forEach((product) => {
      this.products.push(product);
    });
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(id: string): SellerProcut | void {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      console.log("Product not found");
      return;
    }
    const prouct = this.products.splice(productIndex, 1);
    return prouct[0];
  }
}