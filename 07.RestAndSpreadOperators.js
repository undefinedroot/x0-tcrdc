function raso_1() {

  function addNumbers(numbers) {
    return numbers.reduce((sum, number) => (sum + number), 0);
  }

  console.log(addNumbers([1, 2, 3, 4, 5]));

}

function raso_2() {

  // rest operator; ...
  // we have no definite number of arguments
  // we capture those elements into one array
  function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }

  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

}

function raso_3() {
  const defaultColors = ['red', 'green'];
  const userFavoriteColors = ['orange', 'yellow'];
  const fallColors = ['fire red', 'fall orange'];

  console.log(`using .concat(): ${defaultColors.concat(userFavoriteColors)}`);

  console.log(`using ... spread: ${['blue', ...defaultColors, ...userFavoriteColors, ...fallColors]}`);
}

function raso_4() {
  function validateShoppingList(...groceries) {
    if (items.indexOf('milk') < 0) {
      return ['milk', ...items];
    }
    return items;
  }
  validateShoppingList('oranges', 'bread');
}

function raso_5() {
  const MathLibrary = {
    calculateProduct(...rest) {
      return this.multiply(...rest);
    },
    multiply(a, b) {
      return a * b;
    }
  };
}

raso_3();