import { OrderPending } from './OrderPending';
import { OrderRejected } from './OrderRejected';
import { ShoppingOrder } from './ShoppingOrder';
import { ShoppingOrderState } from './ShoppingOrderState';

export class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('The order is already in payment approved status.');
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log('Sending order to customer...');
  }
}
