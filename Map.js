// // let arr = "nimasherpa";

// // const map1 = new Map();

// // map1.set("n", 1);

// // console.log(map1.get("n"));

// // let map = new Map();
// // for (let i = 0; i < arr.length; i++) {
// // 	arr[i] = map;
// // 	console.log(map.set(arr[i], i));
// // }
// // console.log(map.get("i"));
// // console.log(map.size);

// // console.log(map);

// // John has invited some friends. His list is:

// // const { generateKeySync } = require("crypto");

// // "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// // Could you make a program that makes this string uppercase, and sorts it in alphabetical order by last name. When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// // So the result of function meeting(s) will be:

// // "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)";

// // It can happen that in two distinct families with the same family name two people have the same first name too.

// // "" ==  "";
// // "Fred:Corwill" = "(CORWILL, FRED)"
// // "Fred:Corwill;Barney:Tornbull" => "(CORWILL, FRED)(TORNBULL, BARNEY)"
// // "Fred:Corwill;Wilfred:Corwill" = "(CORWILL, ALFRED)(CORWILL, FRED);
// // "Raphael:Corwill;Raphael:Corwill" = (CORWILL, RAPHAEL)(CORWILL, RAPHAEL);
// // "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" = "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// // formatStringOfFriends;
// // formatNamesOfFriends;
// const sortedFreindsName = (listOfFriends) => {
// 	// create a emty arr ;
// 	if (listOfFriends.length === 0) return "";
// 	let sortedNames = [];
// 	let resultStringFreindsName = "";

// 	// split them in ;
// 	let splittedArr = listOfFriends.split(";");
// 	for (let i = 0; i < splittedArr.length; i++) {
// 		let splitted = splittedArr[i].split(":");
// 		sortedNames.push(splitted);
// 	}
// 	console.log(sortedNames);

// 	let sortedFullName = sortedNames.sort((a, b) => {
// 		if (a[1] !== b[1]) {
// 			if (a[1][0] < b[1][0]) {
// 				return -1;
// 			}
// 		} else {
// 			if (a[0][0] < b[0][0]) {
// 				return -1;
// 			}
// 		}
// 	});

// 	console.log(sortedFullName);

// 	for (let i = 0; i < sortedFullName.length; i++) {
// 		resultStringFreindsName = resultStringFreindsName +=
// 			`(${sortedFullName[i][1].toUpperCase()}` +
// 			"," +
// 			` ${sortedFullName[i][0].toUpperCase()})`;
// 	}
// 	return resultStringFreindsName;
// };

// console.log(sortedFreindsName("") === "");
// console.log(
// 	sortedFreindsName(
// 		"Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
// 	) ===
// 		"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// );
// console.log(sortedFreindsName("Fred:Corwill") === "(CORWILL, FRED)");
// console.log(
// 	sortedFreindsName("Fred:Corwill;Barney:Tornbull") ===
// 		"(CORWILL, FRED)(TORNBULL, BARNEY)"
// );
// console.log(
// 	sortedFreindsName("Raphael:Corwill;Raphael:Corwill") ===
// 		"(CORWILL, RAPHAEL)(CORWILL, RAPHAEL)"
// );

// // const isPalindrome = (str) => {
// // 	return str === str.split("").reverse().join("");
// // };
// // console.log(isPalindrome("racecar"));

// // const codeSignal = (str) => {
// // 	let longest = "",
// // 		j = 0;
// // 	if (isPalindrome(str)) return "";
// // 	while (j < str.length) {
// // 		if (!isPalindrome(longest + str[j])) {
// // 			if (longest.length >= 2 && isPalindrome(longest)) {
// // 				longest = str[j];
// // 			} else {
// // 				longest += str[j];
// // 			}
// // 		} else {
// // 			longest += str[j];
// // 		}
// // 		j++;
// // 	}
// // 	console.log(longest);

// // 	return isPalindrome(longest) && longest.length >= 2 ? "" : longest;
// // };

// // console.log(codeSignal("aaacodedoc") === "");
// // console.log(codeSignal("codesignal") === "codesignal");
// // console.log(codeSignal("racecar") === "");
// // console.log(codeSignal("aaacaaa") === "");

// vowels = 0;
// console.log(vowels);

// // TEAM 3
// // "INTERVIEWERS: Preetiben (Preeti) Shah & Nima Sherpa
// // 2–3pm: Robert Scott
// // 3–4pm: Mubarak Odufade
// // 4–5pm: Jeanelle Campbell"

// // var matrixReshape = function (mat, r, c) {
// // 	let row = mat.length;
// // 	let col = mat[0].length;
// // 	if (rowcol !== r * c) return mat;
// // 	let newMat = [];
// // 	let temp = [];
// // 	for (let i = 0; i < row; i++) {
// // 		for (let j = 0; j < col; j++) {
// // 			if (temp.length !== c) {
// // 				temp.push(mat[i][j]);
// // 			} else {
// // 				newMat.push(temp);
// // 				temp = [];
// // 				temp.push(mat[i][j]);
// // 			}
// // 		}
// // 	}
// // 	newMat.push(temp);
// // 	return newMat;
// // };

// let question = "1+3-3+9-3";

// console.log();

// let total;
// let Number = "1";
// let operation = "";

// //loop over the string ;

// // if that is number ;
// // if total === undefned '
// // total == currentNum
// // continue;
// // runningSum += operation Number
// // if it is not a numebr;
// // operation = string[i];

// function anagramDifference(w1, w2) {
// 	//..
// 	if (!w1 && !w2) return 0;
// 	if (!w1 || !w2) return 1;

// 	let newObj = {};
// 	let nextObj = {};

// 	for (let i = 0; i < w1.length; i++) {
// 		if (w1[i] in newObj) {
// 			newObj[w1[i]]++;
// 		} else {
// 			newObj[w1[i]] = 1;
// 		}
// 	}
// 	for (let i = 0; i < w2.length; i++) {
// 		if (nextObj[w2[i]]) {
// 			nextObj[w2[i]]++;
// 		} else {
// 			nextObj[w2[i]] = 1;
// 		}
// 	}
// 	let keyArr = Object.keys(newObj);
// 	for (let each of keyArr) {
// 		if (each in newObj) {
// 			if (each in nextObj) {
// 				nextObj[each] = Math.abs(newObj[each] - nextObj[each]);
// 			} else {
// 				nextObj[each] = newObj[each];
// 			}
// 		}
// 	}

// 	return Object.values(nextObj).reduce((a, b) => a + b);
// }

// console.log(anagramDifference("codewars", "hackerrank"));

// let newArr = [1, 2, 3, 4, 5];
// let obj = { 1: 3, 2: 5, 9: 10 };

// for (let index in obj) {
// 	console.log(index, obj[index]);
// }
// for (let index in newArr) {
// 	console.log(index);
// }

// let jj = ["!", "[]", "?", "n"];
// console.log(String(jj));

// var missingNumber = function (nums) {
// 	let n = nums.length;
// 	let sum = Math.floor((n * (n + 1)) / 2);
// 	console.log(sum);

// 	for (let i = 0; i < n; i++) {
// 		sum -= nums[i];
// 	}
// 	return sum;
// };

// console.log(missingNumber([0, 1, 2, 3, 5, 6]));

// const findLongestSequence = (num) => {
// 	let longestSequence = 0,
// 		currSequence = 0;

// 	for (let i = 1; i < num.length; i++) {
// 		if (num[i] - num[i - 1] === 2) {
// 			currSequence++;
// 			if (longestSequence < currSequence) longestSequence = currSequence;
// 		} else {
// 			currSequence = 1;
// 		}
// 	}
// 	return longestSequence;
// };

// console.log(findLongestSequence([2, 4, 6, 8, 2, 4, 1, 3, 5, 7, 9, 2, 4]));
// console.log(findLongestSequence([2, 4, 6, 8, 1]));

const encodeConsecutiveString = (str) => {
	let encodedString = "";
	let pointer = 0;

	for (let i = 1; i <= str.length; i++) {
		if (str[i] !== str[pointer]) {
			let difference = i - pointer;
			if (difference <= 1) {
				encodedString += str[pointer];
			} else {
				encodedString += difference + str[pointer];
			}
			pointer = i;
		}
	}

	return encodedString;
};

console.log(encodeConsecutiveString("aaaa"));
console.log(encodeConsecutiveString("aaabbccaaccaaPPpPpPPpPPPP"));

const secondLongestSequenceIndex = (arr) => {
	// let obj = {};
	let leftPointer = 0;
	let count = 0;

	for (let i = 1; i < arr.length; i++) {
		if (Math.abs(arr[i] - arr[leftPointer]) !== 1) {
		}
		leftPointer = i - 1;
	}
	// find the 2nd longest sequence index ;
	console.log(obj);
};
console.log(secondLongestSequenceIndex([1, 2, 3, 5, 6, 2, 3, 4, 5, 6]));
