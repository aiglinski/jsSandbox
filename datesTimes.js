let val;
let date;
let month;
let year;

const today = new Date();
let birthday = new Date('04-19-1988');

date = today.getDate();
month = today.getMonth();
year = today.getFullYear();

let datePrintOut = `${month + 1}/${date}/${year}`;
console.log(typeof val);
document.body.innerHTML = datePrintOut;
