import { CustomerBudget } from './CustomerBudget';

export abstract class BaseBudgetHandler {
  protected nextHandler: BaseBudgetHandler | null = null;

  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) {
      this.nextHandler.handle(budget);
    }
    return budget;
  }
}
