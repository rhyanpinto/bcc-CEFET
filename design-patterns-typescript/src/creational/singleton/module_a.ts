import { MyDatabaseFunction } from "./db/my-database-function";


const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'John Doe', age: 30 });
myDatabaseClassic.add({ name: 'Mary Doe', age: 25 });
myDatabaseClassic.add({ name: 'John Smith', age: 40 });

export { myDatabaseClassic };
