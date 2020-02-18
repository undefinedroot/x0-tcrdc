// prototypal inheritance
function c_1() {
  function Car(options) {
    this.title = options.title;

  }

  Car.prototype.drive = function () {
    return 'vroom';
  }

  const car = new Car({ title: 'Focus' });
  console.log(car);
  console.log(car.drive());
}

// object oriented prototypal inheritance
function c_2() {
  function Car(options) {
    this.title = options.title;

  }

  Car.prototype.drive = function () {
    return 'vroom';
  }

  function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
  }

  Toyota.prototype = Object.create(Car.prototype);
  Toyota.prototype.constructor = Toyota;
  Toyota.prototype.honk = function () {
    return 'beep';
  }

  const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
  console.log(toyota);
  console.log(toyota.drive());
  console.log(toyota.honk());
}

// ES6 class
function c_3() {
  class Car {
    constructor({ title = "" }) {
      this.title = title;
    }
    drive() {
      return `vrroom ${this.title}`;
    }
  }
  class Toyota extends Car {
    constructor({ color, title }) {
      super({ title }); // Car.constructor()
      this.color = color;
    }
    honk() {
      return 'beep';
    }
  }
  const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
  console.log(toyota.honk());
  console.log(toyota);
  console.log(toyota.drive());
}

c_3();