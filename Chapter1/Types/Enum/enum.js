var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
// 可能需要对第一个赋值，保证数值唯一，否则会覆盖之前的定义
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
var b = Color[c];
console.log(b);
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlags || (DiscFlags = {}));
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
