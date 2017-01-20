enum Color {
    Red = 5,
    Green,
    Blue

}
// 可能需要对第一个赋值，保证数值唯一，否则会覆盖之前的定义
enum Color{
    Black
}
let c: Color = Color.Red;
console.log(c);
let b = Color[c];
console.log(b);

enum DiscFlags {
None = 0,
Drive = 1,
Influence = 2,
Steadiness = 4,
Conscientiousness = 8
}
// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;
// Testing flags
// true 1001&0001 = 1
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;
// false 1001&0010 = 0
var hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;
// false 1001&0100 = 0
var hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;
// true 1001&1000 = 8
var hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;

console.log(hasD);
console.log(hasI);
console.log(hasS);
console.log(hasC);