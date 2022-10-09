const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_CHOICE = ROCK

const getUserChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  // uppercase will make sure to accept user options when it is not in capitals
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    return DEFAULT_CHOICE
  }
  return selection;
};

startGameBtn.addEventListener('click', function startText() {
  console.log('Game is starting...');
});
