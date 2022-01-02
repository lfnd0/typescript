// factory method
function logger(prefix: string) {
  return (target) => {
    console.log(`${prefix} - ${target}`);
  }
}

@logger('awesome')
class Foo { }

// class decorator
function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion;
    }
  }
}

// decorator que anota a versão de uma API
@setAPIVersion('1.0.0')
class API { }

console.log(new API());

// property decorator
function minLength(length: number) {
  return (target, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: o ${key} do filme precisa ter mais de ${length} caracteres!`);
      } else {
        val = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    });
  }
}

class Movie {

  // validação
  @minLength(100)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Homem Aranha: Sem Volta para Casa');
console.log(movie.title);

// method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`Esperando ${ms}...`);

      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    }
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // tempo de espera
  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}!`);
  }
}

const people = new Greeter('Rocky');
people.greet();
