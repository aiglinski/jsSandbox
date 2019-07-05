const numbers = [22, 4, 123, 43, 45, 67, 89];
const numbers2 = new Array(22, 33, 54, 12, 43);
const fruits = ['apples', 'oranges', 'bananas', 'grapes'];
const mixed = [
  22,
  'hello',
  '34',
  true,
  undefined,
  null,
  { a: 1, b: 2 },
  new Date()
];
let val;

// get array length
val = numbers.length;

// check if something is an array
val = Array.isArray(numbers);

// get single value in Array, enter index (starting with zero)
val = numbers[3];

// insert something into array, indexed position in brackets
numbers[2] = 69;

// find index of specific value
val = numbers.indexOf(22);

// MUTATING ARRAYS
// push number to end of array
val = numbers.push(41);
// add value to front of array
val = numbers.unshift(11);
// take off from end of array
val = numbers.pop();
// take off from front
val = numbers.shift();
// splice out 1 or more values using splice, using paramaters (indexStart, indexEnd)
val = numbers.splice(1, 1);
// reverse array
numbers.reverse();
// concat arrays
val = numbers.concat(numbers2);

// SORT ARRAYS
// makes strings alphabetical
val = fruits.sort();
// to sort numbers "compare function" must be used
val = numbers.sort(function(x, y) {
  return x - y;
});

console.log(numbers);
console.log(val);
