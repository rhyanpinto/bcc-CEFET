import { Seller } from "./Seller";
import { SellerProcut } from "./sellerProduct";

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): SellerProcut | void {
    let product: SellerProcut | void;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);
      if (product) {
        console.log('There is a product', product.id, product.name, product.price);
        return;
      }
    }
    console.log("Product with id ", id, " not found");
  }

  showProducts(): void {
    this.sellers.forEach((seller) => {
      seller.showProducts();
    });
  }
}