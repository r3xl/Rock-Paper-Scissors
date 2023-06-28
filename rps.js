let winMsg = 'Victory';
let loseMsg = 'Defeat';
let tieMsg = 'Draw';
let moveList = ['Rock', 'Paper', 'Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');
let playAgainButton = document.createElement('button');
playAgainButton.textContent = 'Play Again';
playAgainButton.style.display = 'none';

statusDisplay.textContent = 'Choose!';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].textContent = moveList[i];
  buttons[i].style.display = 'inline-block';
  buttons[i].addEventListener('click', () => play(i));
}

playAgainButton.addEventListener('click', playAgain);
document.querySelector('.game-button-wrapper').appendChild(playAgainButton);

function randomMove() {
  return Math.floor(Math.random() * 3);
}

function play(playerChoice) {
  let computerChoice = randomMove();
  let result;

  moveDisplays[0].textContent = `You played  ${moveList[playerChoice]}`;
  moveDisplays[1].textContent = `Computer played  ${moveList[computerChoice]}`;

  if (playerChoice === computerChoice) {
    result = tieMsg;
  } else if (
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 2 && computerChoice === 1)
  ) {
    result = winMsg;
  } else {
    result = loseMsg;
  }

  statusDisplay.textContent = result;

  // Show the play again button
  playAgainButton.style.display = 'block';
  // Hide the move buttons
  buttons.forEach((button) => (button.style.display = 'none'));
}

function playAgain() {
  // Reset UI
  moveDisplays[0].textContent = '';
  moveDisplays[1].textContent = '';
  statusDisplay.textContent = 'Choose!';
  playAgainButton.style.display = 'none';
  // Show the move buttons
  buttons.forEach((button) => (button.style.display = 'inline-block'));
}
