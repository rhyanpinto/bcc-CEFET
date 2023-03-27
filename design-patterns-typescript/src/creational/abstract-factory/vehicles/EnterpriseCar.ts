import { Customer } from '../customer/customer';
import { VehicleProtocol } from './vehicleProtocol';

export class EnterpriseCar implements VehicleProtocol {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} is picking ${this.customer.name} up (Enterprise)`,
    );
  }
}
