import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/IndividualCustomer';
import { CreateVehicleCustomerFactory } from './customerVehicleFactory';
import { IndividualCar } from '../vehicles/IndividualCar';
import { VehicleProtocol } from '../vehicles/vehicleProtocol';

export class IndividualCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
