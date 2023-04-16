import { MyDefaultIterator } from "./MyDefaultIterator";
import { MyIteratorProtocol } from "./myIteratorProtocol";

export class MyDataStructure {
  private _data: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  addData(...data: string[]): void {
    data.forEach((item) => this._data.push(item));
  }

  get data(): string[] {
    return this._data;
  }

  size(): number {
    return this._data.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
