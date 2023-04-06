import { DeliveryFactory } from "./delivery/DeliveryFactory";
import { deliveryContext } from "./delivery/deliveryContext";


const factory = new DeliveryFactory();
deliveryContext(factory, 'Jhon', '20A', 'Brazil Avenue', 'RJ');
deliveryContext(factory, 'Ana', '20A', 'Brazil Avenue', 'RJ');
deliveryContext(factory, 'Emma', '502', 'Brazil Avenue', 'RJ');
deliveryContext(factory, 'Elie', '2', 'Street A', 'SP');
deliveryContext(factory, 'Brad', '501', 'Street B', 'BH');

console.log();
console.log(factory.getLocations());
