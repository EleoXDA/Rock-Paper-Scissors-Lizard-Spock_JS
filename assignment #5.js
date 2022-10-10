// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// 5-1: Rewrite the function above as an arrow function
const sayHello = name => console.log('Hi' + name);

sayHello(Eleo);

// 5-2: Adjust the arrow function with three different syntaxes: two arguments, no arguments, and with one returned value

// 5-2-1:
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
// 5-2-2:
const sayHello3 = () => console.log('Hi Eleo');
// 5-2-3:
const sayHello4 = name => 'Hi' + name;

// call these functions:
sayHello2('Eleo', 'Hello');
sayHello3();
console.log(sayHello4('Eleo'));


// 5-3: Add a default argument to the function you created: A fallback value for the phrase if no value is provided


// 5-4: Add a new checkInput fn with takes unlimited strings and executes a cb fn with no argument