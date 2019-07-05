// switches are identical to else/if statements but are useful when there are many possible conditions

let color = 'blue';
color = 'green';
switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'green':
    console.log('color is green');
    break;
  case 'purple':
    console.log('color is purple');
    break;
  default:
    console.log('I dont know what that color is');
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednsday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday!';
    break;
  case 6:
    day = 'Saturday';
    break;
}

document.body.innerHTML = `Today is ${day}`;
