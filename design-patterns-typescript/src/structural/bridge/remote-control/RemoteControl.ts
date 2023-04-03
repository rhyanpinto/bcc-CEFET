import { DeviceImplementation } from '../device/DeviceImplementation';

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    //get the name of the device and the power status
    console.log(`${this.device.getName()} power is ${this.device.getPower() ? 'on' : 'off'}`);
  }
}
