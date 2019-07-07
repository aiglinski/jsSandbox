// SELECTING SINGLE ELEMENTS

// document.getElementById('idOfElement');

// Get things from the element

// console.log(document.getElementById('title-test').className);

// QUERYSELECTOR, ONLY SELECTS SINGLE ITEM
console.log(document.querySelector('#elementid'));
console.log(document.querySelector('.elementClass'));
// WILL SELECT ONLY FIRST H1
console.log(document.querySelector('tag name'));

// DOM SELECTORS FOR MULTIPLE ELEMENTS

// get elements by class name

const items = document.getElementsByClassName('title');
console.log(items);
