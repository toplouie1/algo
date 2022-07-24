// // reverse a string

const reverseString = (str) => {
	// return str.split(" ").reverse().join(" ");
	if (str.length === 0) {
		return;
	}
	return reverseString(str.slice(1)) + str.charAt(0);
};

// console.log(reverseString("Hello lets go win "));
console.log(reverseString("cool"));
console.log(reverseString(""));

// let words = "Hello";
// console.log(words.charAt(0));
// console.log(words.slice(1));

// function workOnStrings(a, b) {
// 	let objA = {};
// 	let objB = {};
// 	let result = "";

// 	for (let eachA of a) {
// 		if (objA[eachA]) {
// 			objA[eachA]++;
// 		} else {
// 			objA[eachA] = 1;
// 		}
// 	}

// 	for (let eachB of b) {
// 		if (objB[eachB]) {
// 			objB[eachB]++;
// 		} else {
// 			objB[eachB] = 1;
// 		}
// 	}

// 	for (let each of a) {
// 		if (each in objB) {
// 			if (each === each.toUpperCase()) {
// 				result += each.toLowerCase();
// 			} else {
// 				result += each.toUpperCase();
// 			}
// 		} else {
// 			result += each;
// 		}
// 	}

// 	for (let each of b) {
// 		if (each in objA) {
// 			if (each === each.toUpperCase()) {
// 				result += each.toLowerCase();
// 			} else {
// 				result += each.toUpperCase();
// 			}
// 		} else {
// 			result += each;
// 		}
// 	}

// 	return result;
// }

// console.log(workOnStrings("abc", "cde"));
// console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"));
// console.log(workOnStrings("abcdeFg", "defgG"));
// console.log(workOnStrings("abab", "bababa"));

// function newSum(n) {
// 	return findNthSum(n, 0, 0);
// }

// // function findNthSum(n, sum, count) {
// // 	if (n === 0) return 0;

// // 	if (count === n) {
// // 		return sum;
// // 	}
// // 	count++;
// // 	sum += count;
// // 	return findNthSum(n, sum, count);
// // }

// // console.log(nthSum(5));
// // console.log(nthSum(1));
// // console.log(nthSum(3));

// function newSum(n) {
// 	if (n === 0) return 0;
// 	return n + newSum(n - 1);
// }

// console.log(newSum(5));
// console.log(newSum(1));
// console.log(newSum(3));

// function getCommonDirectoryPath(pathes) {
// 	let arr = [];
// 	let firstPath = pathes[0].split("/");

// 	for (let j = 0; j < firstPath.length; j++) {
// 		for (let i = 1; i < pathes.length; i++) {
// 			let singlePath = pathes[i].split("/");

// 			if (singlePath[j] === firstPath[j]) {
// 				if (i === pathes.length - 1) {
// 					arr.push(firstPath[j]);
// 				}
// 			}
// 		}
// 	}
// 	arr.push("");
// 	return arr.join("/");
// }

// console.log(
// 	getCommonDirectoryPath(["/web/images/image1.png", "/web/images/image2.png"])
// );

let numbers = [1, 2, 3, 4, 5];

const addingSum = (numbers, sum = 0) => {
	if (numbers.length === 0) return sum;
	sum += numbers[0];
	console.log(numbers[0]);
	console.log(numbers.slice(1));
	return addingSum(numbers.slice(1), sum);
};

console.log(addingSum(numbers));

function toArray(str) {
	let result = [];
	console.log(str);
	let split = str.split(",");
	console.log(split);
	let firstString = split[0].split("_");
	console.log(firstString);
	for (let i = firstString[0]; i <= firstString[1]; i++) {
		console.log(i);
		result.push(Number(i));
	}
	result.push(Number(split[1]));
	return result;
}

console.log(toArray("3_9,15"));
