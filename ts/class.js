// Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // public name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // Same as abobe constructor
    function User(_name) {
        this._name = _name;
        User.count++;
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
    User.showDescription = function () {
        return "User class (".concat(this.count, " users)");
    };
    User.count = 0;
    return User;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    AdminUser.prototype.sayHi = function () {
        return _super.prototype.sayHi.call(this) + " and I am ".concat(this._age, " years old");
    };
    return AdminUser;
}(User));
var Claudia = new User("Claudia");
// console.log(Claudia._name); // Error because _name is private
console.log(Claudia.sayHi());
Claudia.name = 'CLAUDIA';
console.log(Claudia.name);
console.log(Claudia.sayHi());
var Anna = new AdminUser("Anna", 30);
console.log(Anna.sayHi());
console.log(User.count);
console.log(User.showDescription());
