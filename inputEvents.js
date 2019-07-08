const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.body.querySelector('h5');
// form.addEventListener('submit', runEvent);

// ON SUBMIT EVENT

// function runEvent(e) {
//   console.log(` ${e.type}`);
//   console.log(taskInput.value);

//   //   CLEAR INPUT AFTER SUBMITION
taskInput.value = '';
// }

// ON KEYDOWN EVENT, fires every time any key is pressed

// taskInput.addEventListener('keydown', runEvent);

// function runEvent(e) {
//   //   console.log(`Event Type: ${taskInput}`);
//   console.log(`Input: ${e.target.value}`);

//   //   heading.innerText = e.target.value;
// }

// KEYUP EVENT, TO INITIATE IMMEDIATELY WHEN KEY IS LIFTED RATHER THAN WAIT FOR ANOTHER KEY TO BE PRESSED
// taskInput.addEventListener('keyup', runEvent);
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
//   console.log(e.target.value);
// }

// FOCUS AND BLUR EVENTS
// taskInput.addEventListener('focus', runEvent);

// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }

// taskInput.addEventListener('blur', runEvent);

// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }

// INPUT, INITIATES ON ANY INPUT: Type, DELETE, COPY, PASTE...
taskInput.addEventListener('input', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
}
