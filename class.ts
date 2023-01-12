// Class

class User {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // Same as abobe constructor
  constructor(public name: string) {}

  public sayHi(): string {
    return `Hi! I am ${this.name}`;
  }
}

var Claudia = new User("Claudia");
console.log(Claudia.name);
console.log(Claudia.sayHi());