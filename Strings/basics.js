const string = "The revolution will not be televised.";

console.log(string);

const badString = string;
console.log(badString);

const sgl = 'Single quotes.';
const dbl = "Double quotes.";

console.log(sgl);
console.log(dbl);

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

const name = `Chris`;
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const nameFront = "Front ";
const number = 242;
console.log(`${nameFront}${number}`); // "Front 242"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

const output2 = `I like the song.
I gave it a score of 90%.`;
console.log(output2);

/*
I like the song.
I gave it a score of 90%.
*/