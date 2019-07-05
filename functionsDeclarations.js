// DECLARE Function, nothing happens until it's called
function hello() {
  console.log('hello');
  //   return stops a function when reached, but does not log it to console or html visably
  return 'Hello';
}

// call function to initiate what is in curly braces
hello();

// DECLARATIONS OUTLINE follows this pattern:
// function nameOfFunction(Paramaters){
//     code to be initiated
// }
// call function wrapped in output function:
// console.log(nameOfFunction(Paramater input));
// EXAMPLE:

function greet(firstName, lastName) {
  return `hello ${firstName} ${lastName}`;
}
console.log(greet('John', 'Doe'));

// FUNCTION EXPRESSIONS

const square = function(x) {
  return x * x;
};
console.log(square(9));

// IIFE (IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS)
// expressions that are declared and ran at the same time

(function(name) {
  console.log(`hello ${name}`);
})('Andrew');

// PROPERTY METHODS
// when a function is put inside of an object
const todo = {
  add: function() {
    console.log('add to do');
  }
};

console.log(typeof todo.add);
// call method
todo.add();
