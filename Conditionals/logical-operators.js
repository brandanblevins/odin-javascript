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