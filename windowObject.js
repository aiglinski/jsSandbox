// WINDOW METHODS OBJECTS AND PROPERTIES

// ALERT
// window.alert('Sandbox');

// PROMPT, similar to alert but takes an input
// const input = prompt();
// alert(input);

// CONFIRM
// if (confirm('are you sure?')) {
//   console.group('yes');
// } else {
//   console.log('no');
// }

// GET HEIGHT AND WIDTH OF WINDOW
let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width (not including scroll Bars, console etc)
val = window.innerHeight;
val = window.innerWidth;

// GET X OR Y VALUE SCROLL POINTS
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT
val = window.location;
val = window.location.port;

// REDIRECT USING LOCATION
// window.location.href = 'http://google.com';

// NAVIGATOR OBJECT
val = window.navigator;

console.log(val);
