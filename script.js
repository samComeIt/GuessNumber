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

/* click event */
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = 'Correct Number :D';

  //const guess = document.querySelector('.guess').value;
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    // 0 - false, 1 - true
    document.querySelector('.message').textContent = 'No number!';
  }
});
