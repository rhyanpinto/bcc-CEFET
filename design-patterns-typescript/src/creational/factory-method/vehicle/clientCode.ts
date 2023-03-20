import { CarFactory } from "../factories/carFactory";
import { randomVehicleAlgorithm } from "../main/randomVehicleAlgorithm";

const carFactory = new CarFactory();
const customerNames = ["Ana", "Bia", "Carlos", "Daniel"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = customerNames[Math.floor(Math.random() * customerNames.length)];
  vehicle.pickup(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NEW CAR ${i}`);
  newCar.stop();
  console.log("	------------------------	")
}
