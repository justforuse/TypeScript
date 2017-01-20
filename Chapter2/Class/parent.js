var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
})();
