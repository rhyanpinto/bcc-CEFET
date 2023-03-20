export class Deposite {
  getCoffee(): void {
    console.log('Getting coffee in deposit...');
  }
}

export class CoffeeMachine {
  on(): void {
    console.log('Coffee machine is on...');
  }

  prepare(): void {
    console.log('Coffee is ready');
  }
}

export class Delivery {
  deliver(): void {
    console.log('Coffee is delivered');
  }
}
