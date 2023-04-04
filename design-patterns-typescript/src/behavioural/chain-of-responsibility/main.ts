import { CEOBudgetHandler } from "./CEOBudgetHandler";
import { CustomerBudget } from "./CustomerBudget";
import { DirectorBudgetHandler } from "./DirectorBudgetHandler";
import { ManagerBudgetHandler } from "./ManagerBudgetHandler";
import { SellerBudgetHandler } from "./SellerBudgetHandler";

const customerBudget = new CustomerBudget(5001);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
