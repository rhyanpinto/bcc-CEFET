import { Client } from './Client';
import { DataBase } from './DataBase';

export class ModelFacade {
  static listAllClients(): Array<Client> {
    return DataBase.clients;
  }
}
