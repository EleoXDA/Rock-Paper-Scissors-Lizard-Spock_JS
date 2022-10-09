const startGameBtn = document.getElementById('start-game-btn');

// if you store a function in right side of equation -> it is no longer global and you need to call the left-side variable/constant name
// it is now an expression, instead of declaration/statement
// if function name is removed -> it is called an anonymous function
// const start = function() {
//   console.log('Game is starting...');
// };

// const person = {
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// }
// this creates function stored an object -> called as method
// person.greet();

//event listener is also a method on startGameBtn object
startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
});

// console.log(typeof startGame); //will reveal that it is a function, not an object
// console.dir(typeof startGame); //will reveal that function is an object that has key-value pair properties