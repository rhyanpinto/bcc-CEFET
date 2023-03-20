class MySingleton {
  private static instance: MySingleton;
  private constructor() {}
  public static getInstance(): MySingleton {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton();
    }
    return MySingleton.instance;
  }
  anyMethod(): void {
    console.log('Singleton method');
  }
}

const singletonA = MySingleton.getInstance();
const singletonB = MySingleton.getInstance();

console.log(singletonA === singletonB); // true
