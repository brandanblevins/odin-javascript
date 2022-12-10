if (1 || 0) { // Works just like if( true || false )
    console.log('truthy!');
}

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log('The office is closed!');
}

let hour2 = 12;
let isWeekend = true;

if (hour2 < 9 || hour2 > 17 || isWeekend) {
    console.log('The office is closed!');
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // This should return 'SuperCoder'

true || console.log("not printed");
false || console.log("printed");

let hour3 = 12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
    console.log('The time is 12:30.');
}

// Test
// Questions
/* alert( null || 2 || undefined );
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 );
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );

Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.

Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */

// My answer for 1: 2 Actual answer: 2, because it's the first truthy value from the list.
// My answer for 2: 1 Actual answer: first 1, then 2.
// My answer for 3: null Actual answer: null, because it's the first falsy value from the list.
// My answer for 4: 2 Actual answer: 1, and then undefined.
// My answer for 5: 2 Actual answer: 3, The precedence of AND && is higher than ||, so it executes first.
// My answer for 6:
/* let age = 25;
let ageIsRight = true;
if (age < 14 && age > 90 && ageIsRight) {
    console.log('The age is wrong!')
} */
// Actual answer for 6:
// if (age >= 14 && age <= 90)
// My answer for 7:
// I give up.
// Actual answer for 7:
// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)
// My answer for 8: second Actual answer: 
/* Example of a workflow that asks for username and password.
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else if (userName === '' || userName === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
} */