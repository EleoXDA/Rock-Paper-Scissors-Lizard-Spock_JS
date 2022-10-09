const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

const person = {
  greet: function greet() {
    console.log('Hello there!');
  }
}
// this creates function stored an object -> called as method
person.greet();

//event listener is also a method on startGameBtn object
startGameBtn.addEventListener('click', startGame)