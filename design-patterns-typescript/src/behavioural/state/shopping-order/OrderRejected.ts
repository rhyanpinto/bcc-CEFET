import { ShoppingOrder } from "./ShoppingOrder";
import { ShoppingOrderState } from "./ShoppingOrderState";

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('I can\'t approve the payment because the order was declined.');
  }

  rejectPayment(): void {
    console.log(
      'I cannot refuse the payment because the order is already declined.',
    );
  }

  waitPayment(): void {
    console.log('I cannot move to pending because the order was declined.');
  }

  shipOrder(): void {
    console.log('I cannot ship an order with payment declined.');
  }
}
