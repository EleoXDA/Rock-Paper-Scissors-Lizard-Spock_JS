const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_USER_WINS = 'USER_WINS';
const RESULT_BOT_WINS = 'BOT_WINS';

let gameIsRunning = false;

const getUserChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase(); // uppercase will make sure to accept user options when it is not in capitals
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getBotChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (
  bChoice,
  uChoice = DEFAULT_CHOICE // when userChoice is undefined, DEFAULT_CHOICE will override it
) =>
  bChoice === uChoice
    ? RESULT_DRAW
    : (bChoice === ROCK && uChoice === PAPER) ||
      (bChoice === PAPER && uChoice === SCISSORS) ||
      (bChoice === SCISSORS && uChoice === ROCK)
    ? RESULT_USER_WINS
    : RESULT_BOT_WINS;

// if (bChoice === uChoice) {
//   return RESULT_DRAW;
// } else if (
//   (bChoice === ROCK && uChoice === PAPER) ||
//   (bChoice === PAPER && uChoice === SCISSORS) ||
//   (bChoice === SCISSORS && uChoice === ROCK)
// ) {
//   return RESULT_USER_WINS;
// } else {
//   return RESULT_BOT_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const userSelection = getUserChoice(); // might be undefined when default option is removed
  const botSelection = getBotChoice();
  let winner;
  if (userSelection) {
    winner = getWinner(botSelection, userSelection);
  } else {
    winner = getWinner(botSelection, userSelection); // we only pass one variable in function, but it still gets forgiven by JS
  }
  let message = `You picked ${
    userSelection || DEFAULT_CHOICE
  }, bot picked ${botSelection}, so you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_USER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});
