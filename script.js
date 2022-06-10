'use strict';
/*console.log(document.querySelector('.message').textContent); //getting to console, first selection, then content. we connect html to javascript this way.
document.querySelector('.message').textContent = '🍕Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */
let secretNumber = Math.trunc(Math.random() * 20) + 1; /// --- from 0-20, instead of 19
let score = 20;
let highscore = 0; ///that will change during the game

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; /// simplier and dry code
};

document.querySelector('.check').addEventListener('click', function () {
  //return element(dom manip) first, then event job
  const guess = Number(document.querySelector('.guess').value); //function works only when event happens, because we do not call function anywhere, we just define it
  console.log(guess); //if is 0 or empty
  if (!guess) {
    displayMessage('⛔არ არის რიცხვი!');
  } else if (guess === secretNumber) {
    displayMessage('🍕შენ გამოიცანი და გაიმარჯვე! 🏆');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#008000';

    if (score > highscore) {
      highscore = score; ///that simple :)
      document.querySelector('.highscore').textContent = highscore;
    }

    /// when guess is wrong,   /// simplier and dry code 2
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈ბევრია!' : '📉 ცოტაა!'; /// returns the valie
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 შენ წააგე! სცადე თავიდან');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('ვიწყებ გამოცნობას.... ');
  document.querySelector('.score').textcontent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
