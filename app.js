const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

const person = {
  greet: function greet() {
    console.log('Hello there!');
  }
}

person.greet();

startGameBtn.addEventListener('click', startGame)