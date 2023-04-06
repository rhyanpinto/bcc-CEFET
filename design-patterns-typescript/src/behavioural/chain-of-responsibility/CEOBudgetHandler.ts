import { CustomerBudget } from './CustomerBudget';
import { BaseBudgetHandler } from './baseBudgetHandler';

export class CEOBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('CEO aproved the budget');
    budget.aproved = true;
    return budget;
  }
}
