// ADD EVENT LISTENER TO CLEAR BUTTON

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log('test works');
//   e.preventDefault();
// });

// SAME AS ABOVE BUT MORE SIMPLISTIC CODE

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e) {
  //   console.log('clicked');
  let val;

  val = e;

  val = e.target;

  //   CHANGE TEXT INSIDE BUTTON ON CLICK
  //   val = e.target.innerText = 'shit';

  //   GET X AND Y COORIDINATES OF CLICK RELATIVE TO WINDOW

  val = e.clientY;
  val = e.clientX;

  //   GET X AND Y COORIDINATES RELATIVE TO ELEMENT
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
  e.preventDefault();
}
