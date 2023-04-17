import { Buyer } from "./Buyer";
import { Mediator } from "./Mediator";
import { Seller } from "./Seller";

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: "1", name: "T-shirt", price: 49.9 });
seller1.addProduct({ id: "2", name: "Pants", price: 99.9 });
const seller2 = new Seller();
seller2.addProduct({ id: "3", name: "Shoes", price: 199.9 });
seller2.addProduct({ id: "4", name: "Hat", price: 29.9 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy("2");
buyer.buy("3");
buyer.viewProducts();
