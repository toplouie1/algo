// 1. Write a function that returns the key of a targeted value as a string
// ({"a":4, "g":2, "f":5}, 2) => returns "g"
let obj = { a: 4, g: 2, f: 5 };
let target = 2;

let first = (obj, target) => {
	// for (let [key, value] of Object.entries(obj)) {
	// 	if (value === target) return key;
	// }
	return Object.keys(obj).find((key) => obj[key] === target);
};
console.log(first(obj, target));

// 2. Write a function that returns the keys of targeted values as an array.
// ({"a":4, "g":2, "f":5, "p", 2}, 2) => returns ["g", "p"]

let second = (obj, target, arr = []) => {
	for (let o in obj) {
		if (obj[o] == target) {
			arr.push(o);
		}
	}
	return arr;
};

console.log(second({ a: 4, g: 2, f: 5, p: 2 }, 2));

// 3. Write a function so that it handles objects at any depth
// ({"a":4, "g":2, "f":5, "r":2 , "z":{"l":2}}, 2) => returns ["g","r","l"]
// ({"a":4, "g":2, "f":5, "r":2 , "z":{"l":2, f: {t: 2}}}, 2)) => [ 'g', 'r', 'l', 't' ]

function objDepth(obj, target, arr = []) {
	for (let key in obj) {
		console.log(obj[key]);
		if (typeof obj[key] == "object") {
			return objDepth(obj[key], target, arr);
		} else if (obj[key] == target) {
			arr.push(key);
		}
	}
	return arr;
}

let testObj = { a: "1", b: "2" };

for (let t in testObj) {
	if (t == "a") {
		console.log(testObj[t]);
	}
}

console.log(objDepth({ a: 4, g: 2, f: 5, r: 2, z: { l: 2, f: { t: 2 } } }, 2));

// object deeper

// const getkeysDeeps=(obj,val,arr=[])=>{
//     for(let key in obj){
//       if(typeof obj[key] === "object") return getkeysDeeps(obj[key],val,arr);
//       else if(obj[key] === val) arr.push(key);
//     }
//     return arr;
//   }

// DAY 2

// 1. Given a string, make the whole string uppercase if it starts with a vowel

// "school" => "school"
// "abacus" => "ABACUS"
// "HELLOW" => "HELLO"
// "Arrives" => "ARRIVES"

const upperCaseIfVowel = (str) => {
	return /[aeiou]/gi.test(str[0]) ? str.toUpperCase() : str;
	let vowels = "aeiouy";
	if (vowels.includes(str[0])) {
		return str.toUpperCase();
	}
	return str;
};
console.log(upperCaseIfVowel("school"));
console.log(upperCaseIfVowel("abacus"));

// 2. Given an array of integers, check for two same, consecutive elements

// [14,6,2,87,3,5,34,2] => false
// [34,7,5,12,12,4,3,8,68] => true
// [5,4,5,4,5] => false

const consecutiveElements = (arr) => {
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		console.log(i);
		if (arr[i] == arr[i + 1]) {
			return true;
		}
	}
	return false;
};
console.log(consecutiveElements([14, 6, 2, 87, 3, 5, 34, 2]));
console.log(consecutiveElements([34, 7, 5, 12, 12, 4, 3, 8, 68]));

// 3. Given a matrix with 3 subarrays, each of those having 3 elements, check if one and only one column, row or diagonal has all the same elements.

// [
//   [1,1,1],
//   [1,1,1],
//   [0,1,0]
// ] => false

// [
//   [0,1,1],
//   [1,1,0],
//   [0,1,0]
// ] => true

// [
//   [2,1,1],
//   [1,2,0],
//   [0,1,2]
// ] => true

let newSet = new Set();
newSet.add("s");
console.log(newSet);
let arr = [1, 2, 3, 4, 5, 6, 6];

let uniqueNum = new Set([...arr]);
console.log(...uniqueNum);

var isAnagram = function (s, t) {
	let first = {};
	let second = {};

	for (let each of s) {
		if (each == " ") continue;
		if (first[each]) {
			first[each]++;
		} else {
			first[each] = 1;
		}
	}

	for (let each of t) {
		if (each == " ") continue;
		if (second[each]) {
			second[each]++;
		} else {
			second[each] = 1;
		}
	}

	for (key in first) {
		if (first[key] !== second[key]) {
			return false;
		}
	}
	return true;
};

console.log(isAnagram("aba", "baa"));
console.log(isAnagram("hub", "huc"));
console.log(isAnagram("aa bb", "a b a b"));
console.log(isAnagram("ABA", "aba"));

function isAnagrams(str1, str2) {
	str1 = str1.replace(/[^a-zA-Z0-9]/g, "");
	str2 = str2.replace(/[^a-zA-Z0-9]/g, "");
	return (
		str1.length === str2.length &&
		str1.replace(new RegExp(`[${str2}]`, "g"), "").length === 0
	);
}
