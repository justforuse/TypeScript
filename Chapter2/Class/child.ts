
///  <reference path="parent.ts" />

class Dog extends Animal{
    kind:string;
    constructor(name:string, kind:string){
        super(name);
        this.kind =kind;
    }
    getKind(){
        return this.kind;
    }
}

var dog = new Dog("myDog", "Hasuki")
console.log(dog.getName());
console.log(dog.getKind());