// Class
var User = /** @class */ (function () {
    // public name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // Same as abobe constructor
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        return "Hi! I am ".concat(this._name);
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (vewValue) {
            this._name = vewValue;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Claudia = new User("Claudia");
// console.log(Claudia._name); // Error because _name is private
console.log(Claudia.sayHi());
Claudia.name = 'CLAUDIA';
console.log(Claudia.name);
console.log(Claudia.sayHi());
