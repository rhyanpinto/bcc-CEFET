import { SmartHouseCommand } from './Command';
import { SmartHouseLight } from './SmartHouseLight';

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
