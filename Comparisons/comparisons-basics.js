console.log(2 > 1); // true (correct)
console.log(2 < 1); // false (wrong)
console.log(2 >= 2); // true (correct)

let result1 = 8 > 6;

console.log(result1);

console.log('U' > 'C'); // should be true
console.log('Banana' > 'Bark'); //should be false

let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true!

console.log(0 === false); // false, because the types are different