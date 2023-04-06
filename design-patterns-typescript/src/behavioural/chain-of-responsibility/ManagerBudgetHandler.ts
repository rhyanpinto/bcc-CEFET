import { CustomerBudget } from './CustomerBudget';
import { BaseBudgetHandler } from './baseBudgetHandler';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('Manager aproved the budget');
      budget.aproved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
