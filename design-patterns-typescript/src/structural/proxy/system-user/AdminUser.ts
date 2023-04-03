import { SystemUserAddressProtocol, SystemUserProtocol } from "./systemUserProtocol";

export class AdminUser implements SystemUserProtocol {
  firstName: string;
  userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Street 1', number: 1 },
          { street: 'Street 2', number: 2 },
        ]);
    }, 2000);
    });
  }
}
