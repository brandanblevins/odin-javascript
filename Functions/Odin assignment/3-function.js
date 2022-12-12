let newWord;

function capitalize(string) {
    let lower = string.toLowerCase();
    return (newWord = lower.charAt(0).toUpperCase() + lower.slice(1));
}

capitalize("dOg runs Fast!");

console.log(newWord);