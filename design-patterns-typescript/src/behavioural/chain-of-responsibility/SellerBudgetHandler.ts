import { CustomerBudget } from './CustomerBudget';
import { BaseBudgetHandler } from './baseBudgetHandler';

export class SellerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('Seller aproved the budget');
      budget.aproved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
