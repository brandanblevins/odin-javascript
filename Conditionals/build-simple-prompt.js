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

let question = prompt('What is the "official" name of JavaScript?', '');

if (company == 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don\'t know? ECMAScript!');
}