function g_1() {

  const colors = ['red', 'green', 'blue'];

  // for-of loop
  for (let color of colors) {
    console.log(color);
  }

  const numbers = [1, 2, 3, 4];
  let total = 0;
  for (let number of numbers) {
    total += number;
  }

  console.log(total);
}

// generators
// a function that can be entered and exited multiple times
function g_2() {
  function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';  // .next(); {value:'cash',done:false}

    const cleanClothes = yield 'laundry'; // .next(); {value: 'laundry',done:false}

    // walking back home
    return [stuffFromStore, cleanClothes]; // .next(); {value: ['previous next value', 'current next value' ],done:true}
  }

  // stuff in the store
  const gen = shopping();  // required to assign to a constant variable to use it
  console.log(gen.next()); // leaving our house
  // walked into the store
  // walking up and down the aisles
  // purchase our stuff

  // --- reenter the 'yield' with 'groceries' value, argument value can be anything
  // if there is another 'yield', the argument passed gets inserted on the 1st yield value
  console.log(gen.next('groceries')); //leaving the store with groceries

  console.log(gen.next('clean clothes'));

  // operation of above;
  // .next();
  //      {value:'cash',done:false}
  // .next('groceries');
  //      {value:'laundry',done:false}
  // .next('clean clothes');
  //      {value:['groceries','clean clothes'],done:true}
  // NOTE = the return value needs to be an array of both 1st and 2nd yield, or else
  // the value that gets returned is only 'groceries' from 1st yield
  // NOTE2 = if you don't use yield, it will return all values in an array on first .next()

}

function g_3() {
  /*

    function* gen_() {
      const a = yield 'a';
      const b = yield 'b';
      return [a,b];
    }

    const gen = gen_();
    gen.next();
      >> { value:'a', done:false }
    gen.next('c');
      >> { value:'b', done:false }
    gen.next('d');
      >> { value:['a','b'], done:true }

  */

}

// generators are used on for-of loops
// to iterate to different data structures
function g_4() {
  function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
  }
  // const gen = colors();
  // console.log(gen.next());
  // console.log(gen.next());
  // console.log(gen.next());
  // console.log(gen.next());

  const myColors = [];
  for (let color of colors()) {
    myColors.push(color);
  }
  console.log(myColors);

}

// example use-case
function g_5() {

  const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
  }

  const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
  };

  function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    // --- generator delegation ---
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
    // --- generator delegation ---
  }

  function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
  }

  const names = [];
  for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
  }

  console.log(names);
}

// symbol iterator; teaches objects to respond to for-of loops
// [Symbol.iterator] tells for-of loop to iterate
function g_6() {
  const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    *[Symbol.iterator]() {
      yield this.lead;
      yield this.tester;
    }
  }

  const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    *[Symbol.iterator]() {
      yield this.lead;
      yield this.manager;
      yield this.engineer;
      yield* this.testingTeam;
    }
  };

  const names = [];
  for (let name of engineeringTeam) {
    names.push(name);
  }

  console.log(names);
}

// remember: you cannot yield from inside of an array helper or callbacks
// you can yield an array
function g_7() {
  class Comment {
    constructor(content, children) {
      this.content = content;
      this.children = children;
    }
    *[Symbol.iterator]() { // this is called recursively
      yield this.content;
      for (let child of this.children) {
        yield* child; // you yield the array
      }
    }
  }

  const children = [
    new Comment('good comment', [new Comment('test1', []), new Comment('test2', [])]),
    new Comment('bad comment', []),
    new Comment('neutral comment', [new Comment('test3', [])])
  ];

  const tree = new Comment('Great post!', children);
  const values = [];
  for (let value of tree) {
    values.push(value);
  }
  console.log(values);

}

g_7();


