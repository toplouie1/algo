// getting comfortable with regex ;

console.log(/^a...s$/.test("annns"));
console.log(/\w/.test(""));

// match

const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);

let string = "hey how are you";
let newAString = string.replaceAll(" ", "");
console.log(newAString);
