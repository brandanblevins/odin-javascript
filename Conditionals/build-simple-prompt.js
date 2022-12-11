let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);


/* It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

    The first question mark checks whether age < 3.
    If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
    If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
    If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'. */

let age2 = prompt('age?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
    (age2 < 18) ? 'Hello!' :
    (age2 < 100) ? 'Greetings!' :
    'What an unusual age!';

alert(message);

// Test

// Question
/* Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!” */

let company = prompt('What is the "official" name of JavaScript?', '');

if (company == 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don\'t know? ECMAScript!');
}

// The answer (mine still works)
/* <!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>


</body>

</html> */


// Learn about the 'switch' statement

// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();

switch (day) {
    case 0:
        alert("It's Sunday, time to relax!");
        break;
    case 1:
        alert("Happy Monday!");
        break;
    case 2:
        alert("It's Tuesday. You got this!");
        break;
    case 3:
        alert("Hump day already!");
        break;
    case 4:
        alert("Just one more day 'til the weekend!");
        break;
    case 5:
        alert("Happy Friday!");
        break;
    case 6:
        alert("Have a wonderful Saturday!");
        break;
    default:
        alert("Something went horribly wrong...");
}