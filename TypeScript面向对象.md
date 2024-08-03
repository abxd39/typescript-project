## TypeScript 类结构详解

### 什么是 TypeScript 类？
TypeScript 类是面向对象编程中的一个重要概念，它提供了一种创建自定义对象的方式。类定义了对象的属性和方法，这些属性和方法将被类的所有实例共享。

### 类的基本结构
```typescript
class MyClass {
    // 属性
    property1: string;
    property2: number;

    // 构造函数
    constructor(param1: string, param2: number) {
        this.property1 = param1;
        this.property2 = param2;
    }

    // 方法
    method1(): void {
        console.log('This is method1');
    }
}
```

* **class 关键字:** 用于声明一个类。
* **类名:** MyClass 是类的名称，遵循驼峰命名法。
* **属性:** 类中声明的变量，用于存储数据。
* **构造函数:** 在创建类的实例时自动调用，用于初始化对象的属性。
* **方法:** 类中定义的函数，用于实现对象的行为。

### 创建类的实例
```typescript
let myObject = new MyClass("Hello", 42);
```
* `new` 关键字用于创建一个类的实例。

### 类的继承
```typescript
class Animal {
    move() {
        console.log("I can move");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
```
* `extends` 关键字用于实现继承。子类继承了父类的属性和方法。

### 访问修饰符
TypeScript 支持三种访问修饰符：
* **public:** 公共的，可以在类内部、子类和外部访问。
* **private:** 私有的，只能在类内部访问。
* **protected:** 受保护的，可以在类内部和子类中访问。

```typescript
class Person {
    public name: string;
    private age: number;
    protected id: number;

    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
```

### 抽象类和接口
* **抽象类:** 不能被实例化，只能被继承。
* **接口:** 定义了一组属性和方法的规范，类可以实现接口。

```typescript
abstract class Shape {
    abstract getArea(): number;
}

interface ShapeInterface {
    getArea(): number;
}
```

### TypeScript 类的高级特性
* **静态成员:** 属于类本身，而不是类的实例。
* **泛型:** 增加类的灵活性和可重用性。
* **命名空间:** 用于组织代码。

### 总结
TypeScript 类提供了一种强大的机制来创建自定义对象，并通过继承、接口和抽象类来实现代码复用和模块化。掌握 TypeScript 类是编写高质量 TypeScript 代码的基础。


## TypeScript 存储器和访问器（Getter 和 Setter）

### 什么是存储器和访问器？

在 TypeScript 中，存储器（getter）和访问器（setter）是用于控制对对象属性的读写访问的一对方法。它们允许你对属性的访问进行更精细的控制，并可以实现一些额外的逻辑。

* **getter:** 用于获取属性的值。
* **setter:** 用于设置属性的值。

### 为什么使用存储器和访问器？

* **数据验证:** 在 setter 中可以对设置的值进行验证，确保数据的合法性。
* **计算属性:** getter 可以返回计算得到的属性值，而不是直接存储的值。
* **延迟加载:** getter 可以延迟加载数据，直到真正需要的时候才去获取。
* **封装:** 隐藏内部实现细节，提供更友好的接口。

### 示例

```typescript
class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge < 0) {
      throw new Error('年龄不能为负数');
    }
    this._age = newAge;
  }
}

let person = new Person(25);
console.log(person.age); // 获取年龄，调用 getter
person.age = 30; // 设置年龄，调用 setter
```

在上面的例子中：

* `_age` 是一个私有属性，用于存储实际的年龄值。
* `age` 是一个公共属性，但实际上是一个 getter 和 setter。
* 当访问 `person.age` 时，会调用 getter 方法，返回 `_age` 的值。
* 当给 `person.age` 赋值时，会调用 setter 方法，对新值进行验证，然后将值赋给 `_age`。

### 存储器和访问器的语法

```typescript
class MyClass {
  private _data: number;

  get data() {
    // getter 方法
    return this._data;
  }

  set data(newData: number) {
    // setter 方法
    this._data = newData;
  }
}
```

* `get` 关键字用于定义 getter 方法。
* `set` 关键字用于定义 setter 方法。
* getter 和 setter 的名称必须与属性名相同。

### 注意事项

* 存储器和访问器可以定义在任何类成员上，包括接口。
* 存储器和访问器可以有参数，但 setter 方法通常只有一个参数，用于设置新的值。
* 存储器和访问器可以访问类的其他成员。

### 总结

存储器和访问器是 TypeScript 中非常有用的特性，它们可以帮助你更好地控制对象的属性访问。通过合理地使用存储器和访问器，可以提高代码的可读性、可维护性和安全性。

**常见应用场景：**

* **数据验证:** 确保数据输入的合法性。
* **计算属性:** 根据其他属性计算得到的值。
* **延迟加载:** 只有在需要时才加载数据。
* **封装:** 隐藏内部实现细节。

**希望这个解释对您有帮助！**

**如果您还有其他关于 TypeScript 存储器和访问器的问题，欢迎继续提问。**

**以下是一些可以进一步探讨的话题：**

* 存储器和访问器与属性的区别
* 存储器和访问器在设计模式中的应用
* 存储器和访问器的性能影响
* TypeScript 中的只读属性

**您可以根据您的需求选择感兴趣的话题。**
