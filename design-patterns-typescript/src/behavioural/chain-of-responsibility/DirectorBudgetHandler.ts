import { CustomerBudget } from "./CustomerBudget";
import { BaseBudgetHandler } from "./BaseBudgetHandler";

export class DirectorBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if(budget.total <= 50000) {
          console.log('Director aproved the budget');
          budget.aproved = true;
          return budget;
        }
        return super.handle(budget);
    }
}
