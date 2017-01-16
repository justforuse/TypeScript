function add(value: number, ...args: number[]): number {
    var res = value;
    // args相当于一个剩余所有参数的数组
    for (var i = 0; i < args.length; i++) {
        res += args[i];
    }


    return res;
}

console.log(add(1))
console.log(add(1,2))
console.log(add(1,2,3))
console.log(add(1,2,3,4,5))

