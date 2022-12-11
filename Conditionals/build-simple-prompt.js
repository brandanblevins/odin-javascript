let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

let age2 = prompt('age?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
    (age2 < 18) ? 'Hello!' :
    (age2 < 100) ? 'Greetings!' :
    'What an unusual age!';

alert(message);