import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/EnterpriseCustomer';
import { CreateVehicleCustomerFactory } from './customerVehicleFactory';
import { EnterpriseCar } from '../vehicles/EnterpriseCar';
import { VehicleProtocol } from '../vehicles/vehicleProtocol';

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
