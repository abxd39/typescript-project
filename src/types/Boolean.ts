// 创建 Boolean 对象
let boolObj1: Boolean = new Boolean(true);
let boolObj2: Boolean = new Boolean(false);

// 使用 Boolean 构造函数
let boolObj3: Boolean = Boolean(""); // false
let boolObj4: Boolean = Boolean("hello"); // true
let boolObj5: Boolean = Boolean(0); // false
let boolObj6: Boolean = Boolean(1); // true

// Boolean 对象的方法
console.log(boolObj1.valueOf()); // true
console.log(boolObj2.toString()); // "false"

// 基本类型 boolean 和 Boolean 对象的区别
let primitiveBoolean: boolean = true;
let objectBoolean: Boolean = new Boolean(true);

console.log(typeof primitiveBoolean); // "boolean"
console.log(typeof objectBoolean); // "object"

// 在条件语句中的行为
if (primitiveBoolean) {
    console.log("This will always execute");
}

if (objectBoolean) {
    console.log("This will always execute, even if the wrapped value is false");
}

// 注意：直接比较可能导致意外结果
console.log(new Boolean(false) == false); // false
console.log(new Boolean(false) === false); // false

// 正确的比较方式
console.log(Boolean(false) === false); // true
console.log(new Boolean(false).valueOf() === false); // true