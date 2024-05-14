'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20, // State variable.
  highscore = 0; // State Variable.

// Function wherever the message needs to updated.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Usually data retieved from user interface are generally string.

  // When there is no input.
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    // When player wins.
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update highscore.
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // When guess is wrong.
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset the game when clicked on Again! button.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
