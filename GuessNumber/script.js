'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// document.querySelector('.number').textContent = secretNumber;
console.log();
document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // No number submitted
    document.querySelector('.message').textContent = '🤷‍♀️ No number';

    // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score < highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Player guesses too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;

      // Player loses
    } else {
      document.querySelector('.message').textContent = 'You lost 😢';
      document.querySelector('.score').textContent = 0;
    }

    // Player guesses too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;

      //Player loses
    } else {
      document.querySelector('.message').textContent = 'You lost 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Strat guessing';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
