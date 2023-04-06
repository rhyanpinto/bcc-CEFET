import { RemoteControl } from './RemoteControl';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const volume = this.device.getVolume();
    this.device.setVolume(volume + 5);
    console.log(
      `${this.device.getName()} volume is at ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const volume = this.device.getVolume();
    this.device.setVolume(volume - 5);
    console.log(
      `${this.device.getName()} volume is at ${this.device.getVolume()}`,
    );
  }

  mute(): void {
    this.device.setVolume(0);
    console.log(`${this.device.getName()} volume is at 0`);
  }

  unmute(): void {
    this.device.setVolume(50);
    console.log(`${this.device.getName()} volume is at 50`);
  }
}
