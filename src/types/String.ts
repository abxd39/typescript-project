namespace MyString {
// 模板字符串
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);  // "Hello, Alice!"

// 静态方法
console.log(String.fromCharCode(72, 105)); // "Hi"

// 基本类型 string 和 String 对象的区别
let primitiveString: string = "Hello";
let objectString: String = new String("Hello");

console.log(typeof primitiveString); // "string"
console.log(typeof objectString);    // "object"

// 在条件语句中的行为
if (primitiveString) {
    console.log("This will execute for any non-empty string");
}

if (objectString) {
    console.log("This will always execute, even if the wrapped value is an empty string");
}

// 比较
console.log(primitiveString === "Hello");        // true
console.log(objectString === "Hello");           // false
console.log(objectString.valueOf() === "Hello"); // true

// 字符串插值和多行字符串
let multiline = `
    This is a
    multiline string
    in TypeScript
`;
console.log(multiline);
};