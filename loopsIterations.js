// FOR LOOPS, WHILE LOOPS AND DO WHILE LOOPS

// FOR LOOP
// paramaters: declared variable, condition, increment

// FOR LOOP
// for (let i = 0; i < 10; i++) {
//   console.log('Number ' + i);
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     //     // continue used to move to next iteration
//     continue;
//   }
//   console.log('Number' + i);

//   if (i === 5) {
//     console.log('stop the loop using a break');
//     break;
//   }
//   console.log('number ' + i);
// }

// WHILE LOOP
// set variable outside of while loop, condition as paramater, and output and iteration inside curly braces

// let i = 0;

// while (i < 10) {
//   console.log('number ' + i);
//   i++;
// }

// DO WHILE LOOP
// will always run at least once even if initial condition isn't met

// let i = 100;

// do {
//   console.log('number ' + i);
//   i++;
// } while (i < 10);

// LOOPING THROUGH ARRAYS

const cars = ['honda', 'chevy', 'ford', 'toyota', 'nissan'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOR EACH LOOP THROUGH ARRAY
// cars.forEach(function(anyname) {
//   console.log(anyname);
// });

// map
// const users = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'Steve' },
//   { id: 3, name: 'Kristin' },
//   { id: 4, name: 'Jim' }
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });
// console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'john',
  lastName: 'Doe',
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
