export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} is now ${this.getPowerStatus()}`);
    return this.isOn;
  }

  off(): boolean {
    if (!this.isOn) return this.isOn;
    this.isOn = false;
    console.log(`${this.name} is now ${this.getPowerStatus()}`);
    return this.isOn;
  }

  increseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 10;
    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;
    this.intensity -= 10;
    return this.intensity;
  }
}
