import { DeliveryFlyweight } from "./deliveryFlyweight";
import { DeliveryLocationData } from "./deliveryTypes";

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    console.log(`Delivering ${name}`)
    console.log(`Delivering at ${this.intrinsicState.street}, ${this.intrinsicState.city}`);
    console.log(`Delivering to ${number}`);
    console.log('###');
  }
}
