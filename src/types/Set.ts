namespace Myset{
    // 创建 Set 对象
let numberSet: Set<number> = new Set([1, 2, 3, 4, 5]);
let stringSet: Set<string> = new Set(['apple', 'banana', 'orange']);

// 添加元素
numberSet.add(6);
stringSet.add('grape');

// 检查元素是否存在
console.log(numberSet.has(3)); // true
console.log(stringSet.has('pear')); // false

// 删除元素
numberSet.delete(4);

// 获取 Set 的大小
console.log(numberSet.size); // 5

// 清空 Set
stringSet.clear();
console.log(stringSet.size); // 0

// 遍历 Set
numberSet.forEach(value => console.log(value));

// 使用 for...of 循环
for (let value of numberSet) {
    console.log(value);
}

// 转换为数组
let numberArray: number[] = Array.from(numberSet);
let stringArray: string[] = [...stringSet];

// Set 的唯一性
let uniqueSet: Set<number> = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueSet.size); // 4

// 使用 Set 去重数组
let numbers: number[] = [1, 2, 2, 3, 3, 4, 5, 5];
let uniqueNumbers: number[] = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Set 与对象
type Person = { name: string, age: number };
let personSet: Set<Person> = new Set();
personSet.add({ name: 'Alice', age: 30 });
personSet.add({ name: 'Bob', age: 25 });

// 注意：两个看似相同的对象被认为是不同的
personSet.add({ name: 'Alice', age: 30 });
console.log(personSet.size); // 3

// 使用 Set 进行集合操作
function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA].filter(x => setB.has(x)));
}

function union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA, ...setB]);
}

function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA].filter(x => !setB.has(x)));
}

let setA: Set<number> = new Set([1, 2, 3, 4]);
let setB: Set<number> = new Set([3, 4, 5, 6]);

console.log([...intersection(setA, setB)]); // [3, 4]
console.log([...union(setA, setB)]);        // [1, 2, 3, 4, 5, 6]
console.log([...difference(setA, setB)]);   // [1, 2]

// 使用 Set 检查数组中的唯一值
function hasUniqueValues<T>(arr: T[]): boolean {
    return new Set(arr).size === arr.length;
}

console.log(hasUniqueValues([1, 2, 3, 4, 5])); // true
console.log(hasUniqueValues([1, 2, 2, 3, 4])); // false
};