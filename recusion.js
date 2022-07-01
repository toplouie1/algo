// reverse a string

const reverseString = (str) => {
	// return str.split(" ").reverse().join(" ");
	if (str.length == 0) {
		return "";
	}
	return reverseString(str.slice(1)) + str.charAt(0);
};

console.log(reverseString("Hello lets go win "));
console.log(reverseString("cool"));

let words = "Hello";
console.log(words.charAt(0));
console.log(words.slice(1));
