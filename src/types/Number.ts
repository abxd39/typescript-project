namespace MyNumber{
    // 创建 Number 对象
let num1: Number = new Number(123);
let num2: Number = Number(456);

// Number 对象的属性
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);  // 5e-324
console.log(Number.NaN);        // NaN
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity

// Number 对象的方法
let num = 123.456;
console.log(num.toFixed(2));     // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toString(16));   // "7b.74bc6a7ef9db"

// 静态方法
console.log(Number.isInteger(123));    // true
console.log(Number.isNaN(NaN));        // true
console.log(Number.parseFloat("123.45")); // 123.45
console.log(Number.parseInt("123", 10));  // 123

// 基本类型 number 和 Number 对象的区别
let primitiveNumber: number = 123;
let objectNumber: Number = new Number(123);

console.log(typeof primitiveNumber); // "number"
console.log(typeof objectNumber);    // "object"

// 在条件语句中的行为
if (primitiveNumber) {
    console.log("This will execute for any non-zero number");
}

if (objectNumber) {
    console.log("This will always execute, even if the wrapped value is 0");
}

// 比较
console.log(primitiveNumber === 123);        // true
console.log(objectNumber === 123);           // false
console.log(objectNumber.valueOf() === 123); // true


// 创建 String 对象
let str1: String = new String("Hello");
let str2: String = String("World");

// String 对象的属性
console.log(str1.length);  // 5

// String 对象的方法
let text = "Hello, TypeScript!";
console.log(text.charAt(0));          // "H"
console.log(text.indexOf("Type"));    // 7
console.log(text.slice(0, 5));        // "Hello"
console.log(text.toUpperCase());      // "HELLO, TYPESCRIPT!"
console.log(text.toLowerCase());      // "hello, typescript!"
console.log(text.split(", "));        // ["Hello", "TypeScript!"]

};