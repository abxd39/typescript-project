
namespace myPick {

// 循环语句

let numbers: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//foreach map
let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);

myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

for (let value of myMap.values()) {
    console.log(value);
}

for (let key of myMap.keys()) {
    console.log(key); // 输出: name, age
}

for (let [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`); // 输出: name: Alice, age: 30
}


}