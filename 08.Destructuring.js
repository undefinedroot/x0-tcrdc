function d_1() {
  const expense = {
    type: 'Business',
    amount: '$45 USD'
  };

  const { type: type2, amount } = expense;
  console.log(type2);
}

function d_2() {
  const savedFile = { extension: 'jpg', name: 'repost', size: 14040 };

  function fileSummary({ extension, name, size }, { color }) {
    return `The file ${extension}.${name} is of size ${size} of color: ${color}`;
  }

  // alternate using alias
  function fileSummary2({ extension: f_ex, name: f_nm, size: f_sz }) {
    return `The file ${f_nm}.${f_ex} is of size ${f_sz}`;
  }

  console.log(fileSummary(savedFile, { color: 'red' }));
}

function d_3() {
  const companies = [
    'Google',
    'Facebook',
    'Uber'
  ];

  const [name1, name2, name3] = companies;
  const { length } = companies;
  console.log(name1);
  console.log(name2);
  console.log(name3);
  console.log(`length of array: ${length}`);

  const [name4, ...rest] = companies;
  console.log(name4, rest);
}

function d_4() {
  const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Franscisco' }
  ];

  const [{ location }] = companies;
  console.log(location);

  const [, { name }] = companies;
  console.log(name);
}

function d_5() {
  const Google = {
    locations: ['Mountain View', 'New York', 'London']
  };

  // get locations property via destructuring
  // get second element from array
  const { locations: [, location] } = Google;

  console.log(location);

}

function d_6() {

  const user = {
    username: 'root',
    password: 'p45sw02d!#_1%',
    email: 'test@test',
    dateOfBirth: '1/1/1945',
    city: 'New York'
  }

  // no need to pass according to order, BUT
  // now you need to pass an object
  function signUp({ username, password, email, dateOfBirth, city }) {
    // create new user
  }
  signUp(user);
}

function d_7() {
  const points = [
    [4, 5],
    [10, 1],
    [0, 40]
  ];

  // .map() array helper, arrow function, destructuring of array, enhanced object literal
  console.log(points.map(([x, y]) => ({ x, y })));

}

d_7();