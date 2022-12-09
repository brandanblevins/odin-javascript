let text = "sdflajfksdjlaflkfjlksalfjdkdasfdsaf";
let length = text.length;

console.log(length);

let text2 = "Apple, Banana, Pear, Orange";
let part = text2.slice(5, 17);

console.log(part);

let text3 = "Apple, Banana, Pear, Orange";
let part3 = text3.slice(6);

console.log(part3);

let text4 = "Apple, Banana, Pear, Orange";
let part4 = text4.slice(-14);

console.log(part4);

let str = "Apple, Banana, Pear, Orange";
let part5 = str.substring(5, 12);

console.log(part5);

let str2 = "Apple, Banana, Pear, Orange";
let part6 = str2.substr(5, 4);

console.log(part6);

let replaceText = "Please visit this store!";
let newText = replaceText.replace("this store", "Sprouts");

console.log(newText);

let replaceText2 = "Have a nice day!";
let newText2 = replaceText2.replace("nice", "bad");

console.log(newText2);

let replaceText3 = "I love DOGS. DOGS are very easy to love. I would like more DOGS.";
replaceText3 = replaceText3.replaceAll("DOGS", "cats");

console.log(replaceText3);

let text5 = "i am typing this in all lowercase.";
let text6 = text5.toUpperCase();

console.log(text6);