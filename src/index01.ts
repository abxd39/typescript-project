import { log } from 'console'
export namespace myPick {
  type User = {
    Id: number
    Name: string
    Age: number
  }

  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  type pickUser = MyPick<User, 'Id' | 'Name'>

  type uskey = pickUser[keyof pickUser]
  let uss: uskey = 10
  uss = '100'
  log(JSON.stringify(uss))

  type obj = Pick<OriginalObject, 'name'>

  class OriginalObject {
    name: string
    age: number
    location: string
    constructor(name: string, age: number, location: string) {
      this.name = name
      this.age = age
      this.location = location
    }
  }
  class NewObject {
    name: string
    //age: number
    location: string
    constructor(name: string,  location: string) {
      this.name = name
      //this.age = age
      this.location = location
    }
  }
  const original = new OriginalObject('Jane', 27, 'New York')
  const updated = new NewObject('',  '')
  Object.assign(updated, original) //
  console.log(updated)
  type j=Pick<OriginalObject,keyof NewObject>
 type aliceOjb=Array<j>|undefined
  function tem<aliceOjb>(param:OriginalObject[]){
  type p= Pick<OriginalObject,"age"|"name" >
  let pp:j;
  
  }
  var employees = {   
    kiran: { age:30,salary:10000},  
    john: { age:35,salary:15000},  
    Tom: { age: 21, salary:5000}  
}  


  
};

//将原始对象的值复制到新对象console.log(updated); \u002F\u002F 打印新对象，注意值已更改但键未更改```在此示例中，我们首先创建了两个类，即OriginalObject和NewObject，它们具有相同的属性和构造函数。然后我们创建了一个原始对象并将其传递给一个空的新对象，并使用Object.assign()方法将原始对象的值复制到新对象中。最后我们打印出新对象作为输出。值已更改但键未更改。这就是将Typescript类对象转换为另一个对象，仅更改值而保留键的方法。"],
