import { BicycleFactory } from "../factories/bicycleFactory";
import { CarFactory } from "../factories/carFactory";
import { Vehicle } from "../vehicle/vehicle";

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Gol");
  const bicycle = bicycleFactory.getVehicle("Caloi");

  const vehicles = [car1, car2, bicycle];
  const randomIndex = Math.floor(Math.random() * vehicles.length);

  return vehicles[randomIndex];
}
