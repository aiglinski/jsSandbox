let val;
// number
val = 5;
// number to string
val = String(5);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// array to string
val = String([1, 2, 3, 4, 5]);

// toString method
val = (5).toString();
// val = true.toString();

// string to number
val = Number('5.32456');
console.log(val);
console.log(typeof val);
// .length only works on strings
// console.log(val.length);
// .toFixed determines number of decimals for numbers only
console.log(val.toFixed(2));
