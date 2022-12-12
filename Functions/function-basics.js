// Terminology for a function.
function name(parameter1, parameter2, ... parameterN) {
 // body
}

function showMessage() {
  console.log( 'Hello everyone!' );
}

showMessage();
showMessage();

function showMessage2() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log( message );
}

showMessage2(); // Hello, I'm JavaScript!

console.log( message ); // <-- Error! The variable is local to the function