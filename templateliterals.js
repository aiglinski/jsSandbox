const job = 'Developer';
const age = 30;
const loc = 'Milwaukee';
const sex = 'Male';
let html;

// creating template literals using backticks, not single quotes

html = ` <ul>
<li>job: ${job}</li>
<li>age: ${age}</li>
<li>loc: ${loc}</li>
<li>sex: ${sex}</li>
</ul>`;

document.body.innerHTML = html;
