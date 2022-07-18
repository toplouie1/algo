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

function workOnStrings(a, b) {
	let objA = {};
	let objB = {};
	let result = "";

	for (let eachA of a) {
		if (objA[eachA]) {
			objA[eachA]++;
		} else {
			objA[eachA] = 1;
		}
	}

	for (let eachB of b) {
		if (objB[eachB]) {
			objB[eachB]++;
		} else {
			objB[eachB] = 1;
		}
	}

	for (let each of a) {
		if (each in objB) {
			if (each === each.toUpperCase()) {
				result += each.toLowerCase();
			} else {
				result += each.toUpperCase();
			}
		} else {
			result += each;
		}
	}

	for (let each of b) {
		if (each in objA) {
			if (each === each.toUpperCase()) {
				result += each.toLowerCase();
			} else {
				result += each.toUpperCase();
			}
		} else {
			result += each;
		}
	}

	return result;
}

console.log(workOnStrings("abc", "cde"));
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"));
console.log(workOnStrings("abcdeFg", "defgG"));
console.log(workOnStrings("abab", "bababa"));
