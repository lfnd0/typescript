class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} year old.`)
  }
}

abstract class AbstractUserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} year old.`)
  }
}

class CharAccount extends AbstractUserAccount {
  private nickname: string;
  // readonly level: number;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`);
  }
}

const user = new UserAccount('George', 16);

console.log(user);
user.logDetails();

const player = new CharAccount('Gunner', 14, 'gunn3r', 42);

console.log(player);
console.log(player.level);

player.logDetails();
player.logCharDetails();

player.setLevel = 208;
console.log(player.getLevel);
