var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1> " + this.greeting + " </h1>";
    };
    return Greeter;
}());
var greeter = new Greeter("hello ts");
document.body.innerHTML = greeter.greet();
