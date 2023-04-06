import { DeviceImplementation } from './DeviceImplementation';

export class Tv implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'TV';

  getName(): string {
    return this.name;
  }
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }
  setVolume(volume: number): void {
    if (volume < 0) volume = 0;
    if (volume > 100) volume = 100;
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
