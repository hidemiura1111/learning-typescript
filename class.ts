// Class

class User {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // Same as abobe constructor
  constructor(private _name: string) {}

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

var Claudia = new User("Claudia");
// console.log(Claudia._name); // Error because _name is private
console.log(Claudia.sayHi());

Claudia.name = 'CLAUDIA';
console.log(Claudia.name);
console.log(Claudia.sayHi());
