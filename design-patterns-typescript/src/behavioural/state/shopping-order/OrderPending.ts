import { OrderApproved } from './OrderApproved';
import { OrderRejected } from './OrderRejected';
import { ShoppingOrder } from './ShoppingOrder';
import { ShoppingOrderState } from './ShoppingOrderState';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log('The order is already in payment pending status.');
  }

  shipOrder(): void {
    console.log('I cannot ship the order pending payment.');
  }
}
