function arrow_1() {
  const add = function (a, b) {
    return a + b;
  }

  // implicit return; (a+b)
  // whatever the result of the operation gets returned
  const add2 = (a, b) => (a + b);

  console.log(add2(1, 2));
}

function arrow_2() {
  const double = number => (2 * number);
  console.log(double(8));
}

function arrow_3() {
  const numbers = [1, 2, 3];
  console.log(numbers.map(number => number * 2));
}

function arrow_4() {
  // if you pass a function iterator as a regular function,
  // the 'this' will not be bound to the correct context,
  // therefore, it will be undefined, one way to solve it is to
  // use; function(){}.bind(this);

  // alternatively, use arrow functions to not worry about
  // binding to the correct context
  // when using arrow function, they use a lexical 'this'
  // the 'this' within it refers to the surrounding context

  const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary() {
      return this.members.map(member => `${member} is on team "${this.teamName}"`);
    }
  };
  console.log(team.teamSummary());
}

arrow_4();