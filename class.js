// Class
var User = /** @class */ (function () {
    // public name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // Same as abobe constructor
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        return "Hi! I am ".concat(this.name);
    };
    return User;
}());
var Claudia = new User("Claudia");
console.log(Claudia.name);
console.log(Claudia.sayHi());
