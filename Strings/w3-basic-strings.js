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

let text7 = "I AM TYPING THIS IN ALL UPPERCASE.";
let text8 = text7.toLowerCase();

console.log(text8);

let text9 = "       I am putting white spaces on either side of this statement.      ";
let text10 = text9.trim();

console.log(text10);

let text11 = "Hello hello hello.";
let char = text11.charAt(8);

console.log(char);

let text12 = "Apple, Banana, Pear, Orange, Strawberry";
let array1 = text12.split(",");

console.log(array1);