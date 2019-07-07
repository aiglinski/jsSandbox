const clearBTN = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBTN.addEventListener('click', runEvent);

// // RUN EVENT WHEN MOUSE ENTERS ELEMENT
// card.addEventListener('mouseenter', runEvent);

// // RUN EVENT WHEN MOUSE LEAVES ELEMENT
// card.addEventListener('mouseleave', runEvent);

// MOUSE OVER AND MOUSE OUT

// // RUN EVENT WHEN CLICK IS RELEASED
// clearBTN.addEventListener('mouseup', runEvent);

// // CLICK AND HOLD
// clearBTN.addEventListener('mousedown', runEvent);

// clearBTN.addEventListener('dblclick', runEvent);

// MOUSE MOVE, EVENT TRIGGERED BY ANY MOVEMENT INSIDE ELEMENT
card.addEventListener('mousemove', runEvent);

// EVENT HANDLER
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MOUSE X: ${e.offsetX}, MOUSE Y: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;
}
