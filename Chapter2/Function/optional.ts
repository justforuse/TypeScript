// 有类型有默认值的可选参数
function calculate(value: number, flag: boolean = false): number {
    console.log(flag);
    if (flag) {
        return 123;
    } else {
        return value * 2;
    }
}

// 有类型无默认值的可选参数 ?:
function calculate2(value: number, flag?: boolean) {
    console.log(flag);
    if (flag) {
        return 123;
    } else {
        return value * 2;
    }
}

console.log(calculate(10)); // false, 20
console.log(calculate2(10)); // undefined, 20
console.log(calculate(10, true)); // true, 123
console.log(calculate2(10, true)); // true,123 