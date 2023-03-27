import { ProductDecorator } from './productDecorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 50;
  }

  getName(): string {
    return `${this.product.getName()} + customization`;
  }
}
