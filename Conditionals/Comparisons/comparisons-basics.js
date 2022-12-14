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

// Summary
//    Comparison operators return a boolean value.
//    Strings are compared letter-by-letter in the “dictionary” order.
//    When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
//    The values null and undefined equal == each other and do not equal any other value.
//    Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

// Test

console.log(5 > 4); // My guess: true Actual: true
console.log("apple" > "pineapple"); // My guess: true Actual: false
console.log("2" > "12"); // My guess: false Actual: true
console.log(undefined == null); // My guess: false Actual: true
console.log(undefined === null); // My guess: false Actual: false
console.log(null == "\n0\n"); // My guess: true Actual: false
console.log(null === +"\n0\n"); // My guess: false Actual: false

// Test answers explained

/* Some of the reasons:

    Obviously, true.
    Dictionary comparison, hence false. "a" is smaller than "p".
    Again, dictionary comparison, first char "2" is greater than the first char "1".
    Values null and undefined equal each other only.
    Strict equality is strict. Different types from both sides lead to false.
    Similar to (4), null only equals undefined.
    Strict equality of different types.
 */