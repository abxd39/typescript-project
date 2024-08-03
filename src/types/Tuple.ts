namespace MyTuple {
// 基本元组定义
let person: [string, number] = ['Alice', 30];
console.log(person[0]); // 'Alice'
console.log(person[1]); // 30

// 元组解构
let [name, age] = person;
console.log(name); // 'Alice'
console.log(age);  // 30

// 可选元素
let optionalTuple: [string, number, boolean?] = ['Bob', 25];
optionalTuple.push(true);

// 剩余元素
let restTuple: [number, ...string[]] = [1, 'a', 'b', 'c'];
console.log(restTuple.length); // 4

// 只读元组
let readonlyTuple: readonly [string, number] = ['Charlie', 35];
// readonlyTuple[0] = 'David'; // 错误：无法分配到 '0' ，因为它是只读属性。

// 命名元组元素
let namedTuple: [name: string, age: number] = ['Eve', 28];
//需要注意的是，‌虽然可以为元组的元素命名，
//‌但元组本身并不支持像对象那样的属性访问方式（‌例如 person.name 或 person.age）‌。‌相反，‌你需要通过索引或解构赋值的方


// 元组类型推断
let inferredTuple = ['Frank', 40] as const;
// inferredTuple[0] = 'George'; // 错误：无法分配到 '0' ，因为它是只读属性。

// 元组作为函数参数
function printPerson(person: [string, number]): void {
    console.log(`Name: ${person[0]}, Age: ${person[1]}`);
}
printPerson(['Grace', 45]);

// 元组作为函数返回值
function getPersonInfo(): [string, number] {
    return ['Henry', 50];
}
let [personName, personAge] = getPersonInfo();

// 使用元组进行状态管理（类似 React 的 useState）
function useState<T>(initial: T): [T, (newValue: T) => void] {
    let value = initial;
    const setValue = (newValue: T) => {
        value = newValue;
    };
    return [value, setValue];
}

const [count, setCount] = useState(0);
console.log(count); // 0
setCount(5);

// 混合类型元组
let mixedTuple: [string, number, boolean, string[]] = ['Ivy', 55, true, ['red', 'green']];

// 嵌套元组
let nestedTuple: [string, [number, boolean]] = ['Jack', [60, false]];
console.log(nestedTuple[1][0]); // 60
};