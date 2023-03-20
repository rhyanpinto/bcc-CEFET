import { Vehicle } from "./vehicle";

export class Car implements  Vehicle {
  constructor(private name: string) {}

  public pickup(customerName: string): void {
    console.log(`${this.name} picked up ${customerName}`);
  }
  public stop(): void {
    console.log(`${this.name} stopped`);
  }
}
