import { SmartHouseCommand } from './Command';
import { SmartHouseLight } from './SmartHouseLight';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increseIntensity();
    console.log(`Light intensity of ${this.light.name} is now ${intensity}`);
  }
  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Light intensity of ${this.light.name} is now ${intensity}`);
  }
}
