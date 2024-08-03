namespace classclass{
interface Person {
    readonly name: string;
    age?: number;
    sayHello(): void;
  }
  
  class PersonClass implements Person {
    constructor(public name: string, public age?: number) {}
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  let person1: Person = {
    name: '张三',
    age: 25,
    sayHello: () => console.log('Hello')
  };
  
  let person2 = new PersonClass('李四', 30);
};