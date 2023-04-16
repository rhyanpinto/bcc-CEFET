import { MyDataStructure } from "./MyDataStructure";
import { MyIteratorProtocol } from "./myIteratorProtocol";

export class MyDefaultIterator implements MyIteratorProtocol<string> {
  private index = 0;

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this.index = 0;
  }

  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructure.data[this.index]);
    returnValue.done = this.index === this.dataStructure.size();
    this.index++;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return {value, done: false};
  }
}
