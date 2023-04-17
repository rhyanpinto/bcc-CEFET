import { resolve } from "path";
import { CustomerDataParserTxt } from "./CutomerDataParserTxt";
import { CustomerDataParserJson } from "./CutomerDataParserJson";

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);

  console.log('----------------------------------');

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserJson.fixCustomerData();
  console.log(customerDataParserJson.customerData);
}

run();
