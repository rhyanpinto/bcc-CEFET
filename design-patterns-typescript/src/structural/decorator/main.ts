import { ProductCustomizationDecorator } from './product/ProductCustomizationDecorator';
import { ProductStampDecorator } from './product/productStampDecorator';
import { TShirt } from './product/TShirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtStampFrontandBack = new ProductStampDecorator(tShirtWithStamp);
const tShirtCustomized = new ProductCustomizationDecorator(tShirt);
console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(
  tShirtStampFrontandBack.getPrice(),
  tShirtStampFrontandBack.getName(),
);
console.log(tShirtCustomized.getPrice(), tShirtCustomized.getName());
