namespace MyMap {
    // 创建 Map 对象
    let numberMap: Map<string, number> = new Map([
        ['one', 1],
        ['two', 2],
        ['three', 3]
    ]);

    let anyMap: Map<any, any> = new Map();

    // 添加键值对
    numberMap.set('four', 4);
    anyMap.set('key', 'value');
    anyMap.set(42, 'answer');
    anyMap.set({ obj: 'key' }, { obj: 'value' });

    // 获取值
    console.log(numberMap.get('two')); // 2
    console.log(anyMap.get(42)); // 'answer'

    // 检查键是否存在
    console.log(numberMap.has('three')); // true
    console.log(anyMap.has('nonexistent')); // false

    // 删除键值对
    numberMap.delete('one');

    // 获取 Map 的大小
    console.log(numberMap.size); // 3

    // 清空 Map
    anyMap.clear();
    console.log(anyMap.size); // 0

    // 遍历 Map
    numberMap.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // 使用 for...of 循环
    for (let [key, value] of numberMap) {
        console.log(`${key}: ${value}`);
    }

    // 获取所有的键或值
    console.log([...numberMap.keys()]); // ['two', 'three', 'four']
    console.log([...numberMap.values()]); // [2, 3, 4]

    // 转换为数组
    let entries: [string, number][] = [...numberMap];
    console.log(entries); // [['two', 2], ['three', 3], ['four', 4]]

    // 使用对象作为键
    type Person = { name: string };
    let personMap: Map<Person, string> = new Map();

    let alice: Person = { name: 'Alice' };
    let bob: Person = { name: 'Bob' };

    personMap.set(alice, 'Developer');
    personMap.set(bob, 'Designer');

    console.log(personMap.get(alice)); // 'Developer'

    // 使用 Map 实现简单的缓存
    function memoize<T, U>(fn: (arg: T) => U): (arg: T) => U {
        const cache: Map<T, U> = new Map();
        return (arg: T) => {
            if (cache.has(arg)) {
                return cache.get(arg)!;
            }
            const result = fn(arg);
            cache.set(arg, result);
            return result;
        };
    }

    const factorial = memoize((n: number): number => {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    });

    console.log(factorial(5)); // 计算并缓存
    console.log(factorial(5)); // 直接从缓存返回

    // 使用 Map 进行分组
    let people: Person[] = [
        { name: 'Alice' },
        { name: 'Bob' },
        { name: 'Alice' },
        { name: 'Charlie' }
    ];

    let groupedPeople: Map<string, Person[]> = people.reduce((map, person) => {
        const key = person.name;
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [person]);
        } else {
            collection.push(person);
        }
        return map;
    }, new Map<string, Person[]>());

    console.log(groupedPeople.get('Alice')?.length); // 2
    console.log(groupedPeople.get('Bob')?.length); // 1

    // 使用 Map 实现简单的状态机
    type State = 'idle' | 'loading' | 'success' | 'error';
    type Action = 'fetch' | 'resolve' | 'reject' | 'reset';

    const stateMachine1: Map<string, Map<Action, State>> = new Map();
    stateMachine1.set(
        'idle', new Map([
            ['fetch', 'loading']
        ]));
    stateMachine1.set(
        'loading', new Map([
            ['resolve', 'success'],
            ['reject', 'error']
        ]));
    stateMachine1.set(
        'success', new Map([
            ['reset', 'idle'],
            ['fetch', 'loading']
        ]));
    stateMachine1.set(
        'error', new Map([
            ['reset', 'idle'],
            ['fetch', 'loading']
        ]));


    function transition(currentState: State, action: Action): State {
        const nextState = stateMachine1.get(currentState)?.get(action);
        return nextState || currentState;
    }

    console.log(transition('idle', 'fetch')); // 'loading'
    console.log(transition('loading', 'resolve')); // 'success'
};