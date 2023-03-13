import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Robert', age: 30 });
myDatabaseClassic.add({ name: 'Joan', age: 25 });
myDatabaseClassic.add({ name: 'Luisa', age: 40 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA); // true
