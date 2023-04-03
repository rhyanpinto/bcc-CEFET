import { MealCompositeProtocol } from "../interfaces/mealCompositeProtocol";

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(protected name: string, protected price: number) {}
  getPrice(): number {
    return this.price;
  }
}
