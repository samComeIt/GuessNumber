'use script';

console.log(document.querySelector('.message').textContent);

/*
DOM - DOcument Object Model
Structured representation of HTML Documents allows javascript to access HTML elements and styles to manipulate(change text, HTML, attributes, and even CSS styles) them.
*/

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
