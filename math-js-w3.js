let x = 75 + 45;

console.log(x);

let a = 120;
let b = 240;

let y = a + b;

console.log(y);

let c = 500 + 250 * 4;

console.log(c);

let d = 123e5; // Scientific notation

console.log(d);

let e = x + y;

console.log(e); // Adding two numbers results in a number.

let f = "20";

let g = e + f;

console.log(g); // Adding a string plus a number results in a string concatenation.

let h = "100";

let i = "200";

let j = h * i;

console.log(j); // JS will apply math functions to strings for division, multiplication, and subtraction, but not addition (you get the string concatentation from above).

let k = 200 / "Banana";
isNaN(k);

let l = new Number(123);