import { myPick } from './index01'
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

