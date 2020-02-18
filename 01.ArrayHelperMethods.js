// forEach() throws away return values and always returns undefined
function forEach_1() {
  const colors = ['red', 'blue', 'green'];
  colors.forEach(color => console.log(color));
}
function forEach_2() {
  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  function adder(number) {
    sum += number;
  }
  // call by reference, not adder() which is invoking
  numbers.forEach(adder);
  console.log(sum);
}

// map() allocates memory and stores return values.
// produce new array so that you don't mutate the source array
function map_1() {
  const numbers = [1, 2, 3];
  let doubledNumbers = numbers.map(number => number * 2);
  console.log(doubledNumbers);
}
function map_2() {
  const cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'EXPENSIVE' }
  ];

  let prices = cars.map(car => car.price);

  console.log(prices);

}

// filter() constructs a new array of all the values for which
// callback returns a value that coerces to true
function filter_1() {
  const products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
  ];
  const result = products.filter(product => product.type === 'fruit');
  console.log(result);
}
function filter_2() {
  const products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
  ];
  const result = products.filter(
    product =>
      product.type === 'vegetable' &&
      product.price < 10 &&
      product.quantity > 0
  );
  console.log(result);
}
function filter_3() {
  const post = { id: 4, title: 'New Post' };
  const comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }
  ];

  function commentsForPost(post, comments) {
    return comments.filter(comment => comment.postId === post.id);
  }

  console.log(commentsForPost(post, comments));
}

// find() search array, as soon as a record is found,
// exit out of iterator function
// other search criteria does not get return,
// only the first instance
function find_1() {
  const users = [
    { id: 0, name: 'Jill' },
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'Alex' }
  ];
  const user = users.find(user => user.name === 'Alex');
  console.log(user);
}
function find_2() {
  function Car(model) {
    this.model = model;
  }

  const cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus'),
  ];

  console.log(cars.find(car => car.model === 'Focus'));
}
function find_3() {
  const posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
  ];
  const comment = { postId: 1, content: 'Great Post' };
  function postForComment(posts, comment) {
    return posts.find(post => post.id === comment.postId);
  }
  console.log(postForComment(posts, comment));
}

// every(), returns boolean; if all true within
// collection according to condition, then return true
function every_1() {
  const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
  ];
  console.log(computers.every(computer => computer.ram > 16));
}
// some(), works like every(), but if just one is true
// then return true, so if one condition satisfy the criteria,
// then it will return true
function some_1() {
  const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
  ];
  console.log(computers.some(computer => computer.ram > 16));
}

function every_some_1() {
  const names = [
    "Alexandria",
    "Matthew",
    "Joe"
  ];
  console.log(names.every(name => name.length > 4));
  console.log(names.some(name => name.length > 4));
}

// every() ; commonly used for form validation
function validation_1() {
  function Field(value) {
    this.value = value;
  }

  Field.prototype.validate = function () {
    return this.value.length > 4;
  }

  const username = new Field('root');
  const password = new Field('my_password');

  const fields = [username, password];

  console.log(fields.every(field => field.validate()));

}

// reduce(callback(initialValue, currentElement), initialValue)
// the iterator function takes in arguments in order; initialValue, currentElement
// then returns the result of operation which will be the first argument of the next
// condense entire value of array into one value
// recursion
function reduce_1() {
  const numbers = [10, 20, 30];

  let result = numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);

  console.log(result);
}
function reduce_2() {
  // product === 720
  console.log([1, 2, 3, 4, 5, 6].reduce((initVal, num) => (initVal * num), 1));
}
function reduce_3() {
  // average grade
  const gradesPerTerm = [84, 94, 87, 96];
  const avg = gradesPerTerm.reduce((initVal, grade) => (initVal + grade), 0);
  console.log(`Average Subject "X" Grade for School Year: ${(avg / 4)}`);
}
// can also be achieved by map()
function reduce_4() {
  const primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
  ];

  const arr = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color);
    return previous;
  }, []);

  console.log(arr);

}
// is the parenthesis balanced?
function reduce_5() {
  function balancedParens(string) {
    // step 1. turn the value into an array
    // step 2. apply reduce
    // step 3. the initialValue is 0
    // everytime (  ++initialValue
    // everytime )  --initialValue
    // if initialValue != 0 then not balanced

    // step 4. append (!)
    // flip values,
    // interpret number into False
    // interpret 0 into True

    return !string.split("").reduce((previous, char) => {
      // if incorrect order, start with )(
      if (previous < 0) return previous;
      // if (
      if (char === "(") return ++previous;
      // if )
      if (char === ")") return --previous;
      return previous;
    }, 0);
  }

  const value = "(((((())))))";

  console.log(`"${value}" ${balancedParens(value)}`);
}









