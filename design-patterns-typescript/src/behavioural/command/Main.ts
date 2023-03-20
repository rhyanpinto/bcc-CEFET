import { LightIntensityCommand } from './LightIntesityCommand';
import { LightPowerCommand } from './LightPowerCommand';
import { SmartHouseApp } from './SmartHouseApp';
import { SmartHouseLight } from './SmartHouseLight';

const bedroomLight = new SmartHouseLight('Bedroom Light');
const kitchenLight = new SmartHouseLight('Kitchen Light');

const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const kitchenLightPowerCommand = new LightPowerCommand(kitchenLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);

const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', kitchenLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomLightIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

smartHouseApp.executeCommand('btn-3');
smartHouseApp.undoCommand('btn-3');
