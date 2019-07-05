const num1 = 100;
const num2 = 50;
let val;
let val1;
let val2;
let val3;
let val4;
let val5;
let val6;

// Basic math operators
val1 = num1 + num2;
val2 = num1 - num2;
val3 = num1 / num2;
val4 = num1 * num2;
val5 = num1 % num2;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);

// math object, has properties and objects

val = Math.PI;
// euler's number
val = Math.E;
// Round a number, use .ceil or .floor to force rounding up or down
val = Math.round(2.4);
// square root
val = Math.sqrt(64);
// absolute value
val = Math.abs(-45);
// using exponents, (number, exponent) Ex: 8^2
val = Math.pow(8, 2);
// find min and max values
val = Math.min(2, 33, 45, 5342, 1, -9);
// random number generator
val = Math.random();
// to get random whole Number, multiply by max number +1 and wrap in .floor method
val = Math.floor(Math.random() * 20 + 1);
console.log(val);
