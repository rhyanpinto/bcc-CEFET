import { MainDishBuilder } from './classes/MainDishBuilder';
import { VeganDishBuilder } from './classes/VeganDishBuilder';
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const meal3 = veganDishBuilder.makeMeal().getMeal();
console.log(meal3);
