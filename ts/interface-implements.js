// Interface -> Class
var User = /** @class */ (function () {
    function User(name, score) {
        this.name = name;
        this.score = score;
    }
    User.prototype.sayHi = function () {
        return "Hi, I am ".concat(this.name);
    };
    User.prototype.showScore = function () {
        return "Score: ".concat(this.score);
    };
    return User;
}());
var Claudia = new User("Claudia", 100);
console.log(Claudia.sayHi());
console.log(Claudia.showScore());
