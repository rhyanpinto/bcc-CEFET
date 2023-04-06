import { SystemUserProxy } from './system-user/systemUserProxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('John', 'admin');
  //This will take 2 seconds to execute
  console.log('This will take 2 seconds to execute');
  console.log(await user.getAddresses());
  console.log('This will be instant');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
