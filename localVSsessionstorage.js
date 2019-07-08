// // SETS LOCAL Storage, AVAILABLE IN DEVTOOLS => APPLICATION => LOCAL STORAGE; WILL STAY IF BROWSER IS CLOSED AND REOPENED
// localStorage.setItem('Make', 'Honda');
// localStorage.setItem('Model', 'Civic');

// // SET SESSION Storage, WILL DISSAPEAR AFTER CLOSING BROWSER
// sessionStorage.setItem('Make', 'Nissan');

// // GET DATA FROM STORAGE
// const Make = localStorage.getItem('Make');
// const Model = localStorage.getItem('Model');
// console.log(Make, Model);

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);
});
