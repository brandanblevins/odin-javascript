if (1 || 0) { // Works just like if( true || false )
    console.log('truthy!');
}

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log('The office is closed!');
}