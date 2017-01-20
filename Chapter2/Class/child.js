/// <reference path="parent.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, kind) {
        _super.call(this, name);
        this.kind = kind;
    }
    Dog.prototype.getKind = function () {
        return this.kind;
    };
    return Dog;
})(Animal);

var dog = new Dog("myDog", "Hasuki");
console.log(dog.getName());
console.log(dog.getKind());
