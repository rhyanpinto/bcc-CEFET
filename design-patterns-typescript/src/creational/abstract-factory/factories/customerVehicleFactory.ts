import { Customer } from '../customer/customer';
import { VehicleProtocol } from '../vehicles/vehicleProtocol';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
