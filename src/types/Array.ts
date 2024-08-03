namespace Myarray{

    // 创建数组
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ['apple', 'banana', 'orange'];

// 使用 Array 构造函数
let emptyArray: any[] = new Array();
let numberArray: number[] = new Array(1, 2, 3);
let fixedSizeArray: any[] = new Array(5); // 创建一个长度为5的空数组

// 数组属性
console.log(numbers.length); // 5

// 访问和修改数组元素
console.log(numbers[0]); // 1
numbers[1] = 10;
console.log(numbers); // [1, 10, 3, 4, 5]

// 常用数组方法
// push: 添加元素到数组末尾
numbers.push(6);
console.log(numbers); // [1, 10, 3, 4, 5, 6]

// pop: 删除并返回数组的最后一个元素
let lastNumber = numbers.pop();
console.log(lastNumber); // 6
console.log(numbers); // [1, 10, 3, 4, 5]

// unshift: 添加元素到数组开头
numbers.unshift(0);
console.log(numbers); // [0, 1, 10, 3, 4, 5]

// shift: 删除并返回数组的第一个元素
let firstNumber = numbers.shift();
console.log(firstNumber); // 0
console.log(numbers); // [1, 10, 3, 4, 5]

// slice: 返回数组的一部分，不修改原数组
let slicedArray = numbers.slice(1, 3);
console.log(slicedArray); // [10, 3]

// splice: 修改数组，可以删除或添加元素
numbers.splice(1, 1, 20, 30);
console.log(numbers); // [1, 20, 30, 3, 4, 5]

// 高阶函数
// map: 对数组的每个元素执行函数，返回新数组
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 40, 60, 6, 8, 10]

// filter: 返回满足条件的元素组成的新数组
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [20, 30, 4]

// reduce: 对数组元素进行累积操作
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 63

// forEach: 对数组的每个元素执行函数
numbers.forEach(num => console.log(num));

// 数组解构
let [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 20 [30, 3, 4, 5]

// 扩展运算符
let moreNumbers = [...numbers, 7, 8, 9];
console.log(moreNumbers); // [1, 20, 30, 3, 4, 5, 7, 8, 9]

// 类型定义
type User = { id: number, name: string };
let users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// 多维数组
let matrix: number[][] = [
    [1, 2],
    [3, 4]
];
} ;