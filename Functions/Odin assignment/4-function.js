let letter;

function lastLetter(str) {
    return (letter = str[str.length - 1]);
}

lastLetter("abcd");

console.log(letter);