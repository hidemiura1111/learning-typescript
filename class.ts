// Class

class User {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // Same as abobe constructor
  constructor(protected _name: string) {}

  public sayHi(): string {
    return `Hi! I am ${this._name}`;
  }
  get name(): string {
    return this._name;
  }
  set name(vewValue: string) {
    this._name = vewValue;
  }
}

class AdminUser extends User {
  private _age: number;
  constructor(_name: string, _age: number) {
    super(_name);
    this._age = _age;
  }
  public sayHi(): string {
    return super.sayHi() + ` and I am ${this._age} years old`;
  }
}

var Claudia = new User("Claudia");
// console.log(Claudia._name); // Error because _name is private
console.log(Claudia.sayHi());

Claudia.name = 'CLAUDIA';
console.log(Claudia.name);
console.log(Claudia.sayHi());

var Anna = new AdminUser("Anna", 30);
console.log(Anna.sayHi());
