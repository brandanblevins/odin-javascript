// Terminology for a function.
function name(parameter1, parameter2, ... parameterN) {
 // body
}

// Basic function
function showMessage() {
  console.log( 'Hello everyone!' );
}

showMessage();
showMessage();

// Function 2, commented out the point which is the variable being entirely local to the function.
function showMessage2() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log( message );
}

showMessage2(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function


// Function 3, which is to show that functions can access outside variables as well.

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John