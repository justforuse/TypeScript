var str:string = "abc";
var num:number = <number><any>str;

var num2:number = 123;
var str2:string = <string><any>num2;

console.log(num); 
console.log(str2); 