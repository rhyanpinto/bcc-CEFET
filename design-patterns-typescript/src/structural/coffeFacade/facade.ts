import { CoffeeMachine, Delivery, Deposite } from './subsystems';

export class CoffeeShop {
  private deposite: Deposite;
  private coffeeMachine: CoffeeMachine;
  private delivery: Delivery;

  constructor() {
    this.deposite = new Deposite();
    this.coffeeMachine = new CoffeeMachine();
    this.delivery = new Delivery();
  }

  orderCoffee() {
    this.deposite.getCoffee();
    this.coffeeMachine.on();
    this.coffeeMachine.prepare();
    this.delivery.deliver();
  }
}
