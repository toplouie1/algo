// lil confused

var runningSum = function (nums) {
	for (let i = 1; i < nums.length; i++) {
		console.log(nums);
		nums[i] = nums[i] + nums[i - 1];
	}
	return nums;
};

console.log(runningSum([1, 2, 3, 4]));

//1. Write a function that takes in one character and returns its char code

// '2' => 50
// '#' => 35
// 'a' => 97

const charCode = (num) => {
	return num.charCodeAt();
};
console.log(charCode("2"));
console.log(charCode("#"));
console.log(charCode("a"));

//2. Modify this function so that it only returns the char code of letters (uppercase or lowercase) and returns 0 for any other character

// '2' => 0
// '#' => 0
// 'a' => 97
const charStringCode = (str) => {
	return /[a-z]/gi.test(str) ? str.charCodeAt() : 0;
};
console.log(charStringCode("2"));
console.log(charStringCode("#"));
console.log(charStringCode("a"));

// Write a function that takes in a string of any characters and returns a total of all the char codes for letters

// 'a' => 97
// 'ad' => 197
// 'rT#' => 114 + 84 + 0 = 198
// 'aGp3!d' => 97 + 71 + 112 + 0 + 0 + 100 = 380

// const charCodeSum = (num) => {
// 	let total = 0;
// 	for (let each of num) {
// 		total += charStringCode(each);
// 	}
// 	return total;
// };

function charCodeSum(string) {
	let total = 0;
	for (const char of string) {
		// total += getCharCodeOfLetters(char)
		//char = !
		const upperCaseChar = char.toUpperCase();
		//upperCasecChar = !
		if (upperCaseChar.toLowerCase() !== upperCaseChar) {
			total += char.charCodeAt(0);
		}
	}
	return total;
}

console.log(charCodeSum("2"));
console.log(charCodeSum("#"));
console.log(charCodeSum("a"));
console.log(charCodeSum("ad"));
console.log(charCodeSum("rt#"));

function solve(a, b) {
	let aSet = new Set(a);
	let bSet = new Set(b);
	let result = "";
	for (let char of a) {
		if (!bSet.has(char)) {
			result += char;
		}
	}
	for (let char of b) {
		if (!aSet.has(char)) {
			result += char;
		}
	}
	return result;
}
console.log(solve("xyab", "xzca"));

// code wars problem

let obj = { state: "Maine", capital: "Augusta" };

console.log((1 + 2 * 3 == 3 * 3) == 9);
console.log((1 + 2 * 3 == 3 * 3) != 9);

function capital(capitals) {
	console.log(capitals);
	let arr = [];
	for (let i = 0; i < capitals.length; i++) {
		for (let j = 0; j < i.length; j++) {
			if (
				capitals[j]["state" || "country" || state || country] &&
				capitals[j]["capital"]
			)
				arr.push(
					`The capital of ${
						capitals["country" || "state" || state || country]
					} is ${capitals["capital" || capital]}`
				);
		}
	}
	console.log(arr);
}

console.log(
	capital([
		{ state: "Maine", capital: "Augusta" },
		{ state: "Maine", capital: "Augusta" },
	])
);

// Test.assertEquals(capital(state_capitals)[0], "The capital of Maine is Augusta");

// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// Test.assertEquals(capital(country_capitals)[0], "The capital of Spain is Madrid")

// mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// Test.assertEquals(capital(mixed_capitals)[1], "The capital of Spain is Madrid")

function toRange(arr) {
	let result = [];
	let secondResult = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + 1 == arr[i + 1]) {
			result.push([arr[i]]);
		} else {
			secondResult.push([arr[i]]);
		}
	}
	console.log(result);
	console.log(secondResult);
	return result[0] + "_" + [...secondResult.join("")];
}

console.log(toRange([3, 4, 5, 6, 9]));
console.log(toRange([3, 4, 5, 6, 9, 10]));
console.log(toRange([1, 2, 3, 4, 5, 6, 11, 22, 33, 34, 35, 36]));

// recursive question with angie

// const checkingForA = (str, each = str[(i = 0)]) => {
// 	// base case
// 	if (!str || str.length === 0) return false;

// 	if (str.length >= i) {
// 		if (each.toLowerCase() == "a") {
// 			return true;
// 		}
// 		i++;
// 		return checkingForA(str, str[i]);
// 	}
// 	return false;
// };
const checkA = (str) => {
	// base case
	if (!str || str.length === 0) return false;

	if (str[0].toLowerCase() == "a") return true;

	// recursive call
	return checkA(str.slice(1));
};

console.log(checkA("Hello, Worald!"));
console.log(checkA(""));
console.log(checkA("DBCA"));
console.log(checkA("cdcdcdcddcdc"));
console.log("cdcdcdcddcdc".length);
console.log(checkA("aaa"));

// code wars problem with jordan

// read the problem aloud

// ask questions / put it in your own words

// give examples
// 'man i need a taxi up to ubud'

// 'a' => 'a'
// 'me' => 'me'
// 'me me' => 'me me'
// 'man' => 'man'
// volcano => lovcona

// write the function name and parameter names

function reverseEachWordInSentence(words) {
	// create new array
	let arrOfReversedWords = [];

	// iterate through each word
	for (let word of words.split(" ")) {
		// word equals reverseWordFromMiddle(word)
		word = reverseWordFromMiddle(word);
		// push word to array of reversedWords
		arrOfReversedWords.push(word);
	}

	return arrOfReversedWords.join(" ");
}

function reverseWordFromMiddle(word) {
	// if word length less than 4
	if (word.length < 4) return word;

	let even = word.length % 2 === 0;

	// if even
	if (even) {
		// cut string in 2 halves
		let firstHalf = word.slice(0, word.length / 2);
		let secondHalf = word.slice(word.length / 2);
		// reverse each half
		firstHalf = firstHalf.split("").reverse().join("");
		secondHalf = secondHalf.split("").reverse().join("");

		// return the two halves
		return firstHalf + secondHalf;
	} else {
		// get the first half
		let firstHalf = word.slice(0, Math.floor(word.length / 2));
		let secondHalf = word.slice(Math.ceil(word.length / 2));

		// reverse the first hald
		// get the second
		// reverse the second half
		firstHalf = firstHalf.split("").reverse().join("");
		secondHalf = secondHalf.split("").reverse().join("");
		// return first half, the middle char and the last half

		return firstHalf + word[Math.floor(word.length / 2)] + secondHalf;
	}
}

// console.log(reverseWordFromMiddle('a') === 'a')
// console.log(reverseWordFromMiddle('abc') === 'abc')
// console.log(reverseWordFromMiddle('taxi') === 'atix')
// console.log(reverseWordFromMiddle('climbing') === 'milcgnib')
// console.log(reverseWordFromMiddle('volcano') === 'lovcona')
// console.log(reverseWordFromMiddle('semynak') === 'mesykan')

console.log(
	reverseEachWordInSentence("man i need a taxi up to ubud") ===
		"man i ende a atix up to budu"
);
