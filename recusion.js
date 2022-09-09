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

// let numbers = [1, 2, 3, 4, 5];

// const addingSum = (numbers, sum = 0) => {
// 	if (numbers.length === 0) return sum;
// 	sum += numbers[0];
// 	console.log(numbers[0]);
// 	console.log(numbers.slice(1));
// 	return addingSum(numbers.slice(1), sum);
// };

// console.log(addingSum(numbers));

// function toArray(str) {
// 	let result = [];
// 	console.log(str);
// 	let split = str.split(",");
// 	console.log(split);
// 	let firstString = split[0].split("_");
// 	console.log(firstString);
// 	for (let i = firstString[0]; i <= firstString[1]; i++) {
// 		console.log(i);
// 		result.push(Number(i));
// 	}
// 	result.push(Number(split[1]));
// 	return result;
// }

// console.log(toArray("3_9,15"));

console.log("hey");

function solution(list) {
	let result = "";
	let i = 0,
		j = i + 1;
	let firstValue = list[0];
	console.log(firstValue);

	// while (j < list.length) {
	// 	if (list[j] - list[i] > 1 && list[j + 1] - list[j] > 1) {
	// 		if (list[j] - list[i] === 1) {
	// 			result += list[i] + ",";
	// 			result += list[j] + ",";
	// 			i = j + 1;
	// 		} else {
	// 			result += list[i] + ",";
	// 			i++;
	// 		}
	// 	} else if (list[j] - list[i] === 1 && list[j + 1] - list[j] === 1) {
	// 		j++;
	// 	} else if (list[j] - list[i] === 1 && list[j + 1] - list[j] > 1) {
	// 		result += firstValue + "-" + list[j];
	// 		i = list[j + 1];
	// 	}
	// }
	console.log(result);
}

console.log(
	solution([
		-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
	])
);

var pivotIndex = function (nums) {
	let i = 0;
	let j = 1;

	// let rightSide = nums.slice(j + 1).reduce((a, b) => a + b);
	// let leftSide = nums.slice(0, i).reduce((a, b) => a + b);

	// console.log(rightSide);
	// console.log(leftside);

	while (i < nums.length - 1) {
		let rightSide = nums.slice(j).reduce((a, b) => a + b, 0);
		let leftSide = nums.slice(0, i).reduce((a, b) => a + b, 0);

		console.log(rightSide);
		console.log(leftSide);

		if (rightSide === leftSide) {
			return i;
		}
		i++;
		j++;
	}
	return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

function letterFrequency(text) {
	text = text.match(/[A-Z]/gi);
	let letterFrequency = {};
	for (let letter of text) {
		letter = letter.toLowerCase();
		if (letterFrequency[letter]) {
			letterFrequency[letter] += 1;
		} else {
			letterFrequency[letter] = 1;
		}
	}

	let sortedNumber = Object.entries(letterFrequency).sort(
		(a, b) => b[1] - a[1]
	);
	console.log(sortedNumber);
	for (let i = 0; i < sortedNumber.length - 1; i++) {
		console.log(sortedNumber[i][0]);
		console.log(sortedNumber[i + 1][0]);

		if (sortedNumber[i][1] === sortedNumber[i + 1][1]) {
			if (sortedNumber[i][0].charAt(0) > sortedNumber[i + 1][0].charAt(0)) {
				[sortedNumber[i]] = [sortedNumber[i + 1]];
			}
		}
	}
	console.log(sortedNumber);
	return sortedNumber;
}

// function letterFrequency(text) {
// 	text = text.match(/[A-Z]/gi);
// 	console.log(text)
// 	let letterFrequency = {};
// 	for (let letter of text) {
// 		letter = letter.toLowerCase();
// 		if (letterFrequency[letter]) {
// 			letterFrequency[letter] += 1;
// 		} else {
// 			letterFrequency[letter] = 1;
// 		}
// 	}
// 	return Object.entries(letterFrequency).sort((a, b) => {
// 		if (a[1] > b[1]) {
// 			return -1;
// 		} else if (a[1] === b[1]) {
// 			if (b[0] > a[0]) {
// 				return -1;
// 			}
// 		}
// 	});
// }

console.log(
	letterFrequency(
		"As long as I'm learning something, I figure I'm OK - it's a decent day."
	)
);

("[['i', 7], ['a', 5], ['e', 5], ['n', 5], ['g', 4], ['s', 4], ['m', 3], ['o', 3], ['t', 3], ['d', 2], ['l', 2], ['r', 2], ['c', 1], ['f', 1], ['h', 1], ['k', 1], ['u', 1], ['y', 1]]");

("[['v', 5], ['h', 4], ['d', 2], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['p', 1], ['u', 1]]");

console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));

// [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];

// Resulting array is wrong - Expected: '[[\'v\', 5], [\'h\', 4], [\'d\', 2], [\'l\', 2], [\'w\', 2], [\'f\', 1], [\'j\', 1], [\'k\', 1], [\'p\', 1], [\'u\', 1]]',
// instead got: 						'[[\'v\', 5], [\'h\', 4], [\'l\', 2], [\'d\', 2], [\'d\', 2], [\'f\', 1], [\'f\', 1], [\'p\', 1], [\'p\', 1], [\'j\', 1]]'
