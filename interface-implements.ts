// Interface -> Class

interface GameUser {
  score: number,
  showScore(): void
}

class User implements GameUser {
  name: string;
  score: number;
  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
  sayHi(): string {
    return `Hi, I am ${this.name}`;
  }
  showScore(): string {
    return `Score: ${this.score}`;
  }
}

var Claudia = new User("Claudia", 100);
console.log(Claudia.sayHi());
console.log(Claudia.showScore());