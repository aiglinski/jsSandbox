const id = 100;
let val;

// if equal to, add third = sign to test for value & type
if (id == 100) {
  val = 'true';
} else {
  val = 'false';
}

// if not equal to
if (id !== 100) {
  val = 'true';
} else {
  val = 'false';
}

// curly braces are reccommended but not required for if else statements
if (id == 100) val = 'true';
else val = 'false';

// TERNARY OPERATOR
// Shorthand for if else statements, ? represents if and : represents else

console.log(id === 100 ? 'correct' : 'false');
document.body.innerHTML = val;
