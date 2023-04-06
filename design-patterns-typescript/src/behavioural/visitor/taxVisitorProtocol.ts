import { AlcoholicDrink } from "./AlcoholicDrink";
import { Cigarette } from "./Cigarrete";
import { Food } from "./Food";


export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
