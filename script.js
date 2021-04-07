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

/* Implementinh the Game Logic*/
const guessNumber = Math.trunc(Math.random() * 20) + 1; //Math.random();

let score = 20;

document.querySelector('.number').textContent = guessNumber;

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
  } else if (guess == guessNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
  } else if (guess > guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
