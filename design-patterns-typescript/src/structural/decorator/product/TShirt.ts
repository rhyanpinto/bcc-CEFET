import { ProductProtocol } from './ProductProtocol';

export class TShirt implements ProductProtocol {
  private name = 'TShirt';
  private price = 49.9;

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
