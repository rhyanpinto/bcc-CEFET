import { MyDataStructure } from "./MyDataStructure";
import { MyReverseIterator } from "./MyReverseIterator";

const dataStructure = new MyDataStructure();

dataStructure.addData("A", "B", "C", "D", "E", "F");

const [a, b] = dataStructure;

console.log(a, b);

console.log();

dataStructure.resetIterator();
for (const item of dataStructure) {
  console.log(item);
}

console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const item of dataStructure) {
  console.log(item);
}
