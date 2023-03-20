import { EnterpriseCreateVehicleCustomerFactory } from "./factories/EnterpriseCustomerVehicle";
import { IndividualCreateVehicleCustomerFactory } from "./factories/IndividualCustomerVehicleFactory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const enterpriseCar = enterpriseFactory.createVehicle("Civic", "Maria");

const individualCar = individualFactory.createVehicle("Corolla", "John");

enterpriseCar.pickUp();
individualCar.pickUp();
