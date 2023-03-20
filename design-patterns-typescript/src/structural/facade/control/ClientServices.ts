import { Client } from '../model/Client';
import { ModelFacade } from '../model/ModelFacade';

class ClientServices {
  listAllClients(): Array<Client> {
    return ModelFacade.listAllClients();
  }
}
