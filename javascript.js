let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const inputguess = Number(document.querySelector('.guess').value);
  if (!inputguess) {
    document.querySelector('.message').textContent = 'Please Enter Number';
  } else if (inputguess === secretnumber) {
    document.querySelector('.message').textContent = 'Your guess is right';
    document.querySelector('body').style.backgroundColor = ' green';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputguess > secretnumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        'you picked a high number';
    } else {
      document.querySelector('.message').textContent =
        'you lost the game .... try again';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (inputguess < secretnumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        'you picked a low number';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing.........';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
});
