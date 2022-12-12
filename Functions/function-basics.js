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

function showMessage3() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

// Function 4, which shows hot to set a default value for a parameter in the function declaration.

showMessage4(); // Hello, John

function showMessage4(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage4("Ann"); // Ann: no text given

/* function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
} */

// Function 5, which shows hot to assign default values for parameters at a later stage after the function declaration.

function showMessage5(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  console.log(text);
}

showMessage5(); // empty message

// Function 6, which shows a function can return a value back into the calling code as the result.

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3

// Function 7, iteration on Function 6.

/* function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
} */

// Test

// Question 1
// The following function returns true if the parameter age is greater than 18.
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

// My answer to question 1: Yes, it would behave differently if 'else' is removed. Actual answer: No difference! In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

// Question 2, The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// Rewrite it, to perform the same, but without if, in a single line.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}