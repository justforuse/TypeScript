var numArr: number[] = [1, 2, 3];
var strArr: string[] = ['a', 'b', 'c'];
var anyArr: any[] = [1, 'allen', { age: 23 }];
console.log(strArr['a']);

var t :any= 123;
var i = <string>t;

var logFn : (rawString:string) => void;
logFn('hello');