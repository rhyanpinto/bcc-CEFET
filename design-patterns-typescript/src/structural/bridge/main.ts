import { Radio } from "./device/Radio";
import { Tv } from "./device/Tv";
import { RemoteControlWithVolume } from "./remote-control/RemoteControlWithVolume";
import { RemoteControl } from "./remote-control/RemoteControl";

export function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower();

  // Type Guard
  if (!("volumeUp" in abstraction)) return;
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);

