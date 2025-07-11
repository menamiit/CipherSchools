class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const person1 = new Person();
person1.name = "Christopher Moltisanti";
person1.age = 27;
person1.sayHello()

