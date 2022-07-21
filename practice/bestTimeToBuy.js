// [7,1,5,3,6,4] => 5

// arr[numbers] ;

// const biggestValue = (arr) => {
// 	let maxDifference = -Infinity;
// 	let i = 0,
// 		j = 1;

// 	while (j < arr.length - 1) {
// 		if (arr[i] > arr[j]) {
// 			i = j;
// 			j++;
// 		} else if (arr[i] <= arr[j]) {
// 			maxDifference = Math.max(maxDifference, arr[j] - arr[i]);
// 			j++;
// 		}
// 	}
// 	return maxDifference;
// };

// console.log(biggestValue([7, 1, 5, 3, 6, 4]));

var maxProfit = function (prices) {
	// create max and min to hold values
	let max = 0;
	let min = Infinity;

	// loop the prices
	for (let i = 0; i < prices.length; i++) {
		// grabbing the smallest value
		if (prices[i] < min) {
			min = prices[i];
		} else {
			// grabbing the biggest value
			// between max or prices[i] - min
			max = Math.max(max, prices[i] - min);
		}
	}
	return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// a = [25, 2, 3, 57, 38, 41];

// function solution(a) {
// 	let obj = {};
// 	let split = a.join("").split("");
// 	let result = [];
// 	console.log(split);

// 	for (let each of split) {
// 		if (each in obj) {
// 			obj[each]++;
// 		} else {
// 			obj[each] = 1;
// 		}
// 	}
// 	console.log(obj);
// 	let maxValue = Object.values(obj);
// 	let max = Math.max(...maxValue);

// 	for (let [key, value] of Object.entries(obj)) {
// 		if (value === max) {
// 			result.push(key);
// 		}
// 	}
// 	console.log(result.map(Number));
// }

// console.log(solution(a));

// a = [
// 	[3, 3, 4, 2],
// 	[4, 4],
// 	[4, 0, 3, 3],
// 	[2, 3],
// 	[3, 3, 3],
// ];
// [];

// function solution(a) {
// 	let arr = [];
// 	let obj = {};

// 	for (let each of a) {
// 		console.log(each);
// 		let sum = each.reduce((a, b) => a + b) / each.length;
// 		arr.push(sum);
// 	}

// 	for (let i = 0; i < arr.length; i++) {
// 		if (obj[arr[i]]) {
// 			obj[arr[i]].push(i);
// 		} else {
// 			obj[arr[i]] = [i];
// 		}
// 	}
// 	console.log(obj);

// 	console.log(Object.values(obj));
// 	return Object.values(obj);
// }

// console.log(solution(a));

// find the anagram and return the lengthx

// loop  1 time ;

// const sloution = (arr) => {
// 	let i = 0;
// 	let j = 2;
// 	let result = [];

// 	while (j < arr.length) {
// 		if (checking(arr, i, j)) {
// 			result.push(1);
// 		} else {
// 			result.push(0);
// 		}
// 		i++;
// 		j++;
// 	}

// 	return result;
// };

// const checking = (arr, i, j) => {
// 	if (arr[i] < arr[i + 1] && arr[i + 1] > arr[j]) return true;
// 	else if (arr[i] > arr[i + 1] && arr[i + 1] < arr[j]) return true;
// 	else return false;
// };

// console.log(sloution([9, 8, 7, 6, 5]));
// console.log(sloution([1, 3, 2]));
// console.log(sloution([10, 10, 10]));

// true value ;

// count

// function solution(a) {}

// console.log(solution([25, 35, 872, 228, 53, 278, 872]));

const anagramFunction = (arr) => {
	let counter = 0;

	let obj = {};

	// checkAnagram(x, n);
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (checkAnagram(arr[i], arr[j])) {
				let key = arr[i] + "" + arr[j];
				let key2 = arr[j] + "" + arr[i];
				if (!obj[key] && !obj[key2]) {
					obj[key] = true;
					obj[key2] = true;
					counter++;
				}
			}
		}
	}
	return counter;
};

const checkAnagram = (num1, num2) => {
	let obj = {};

	for (let ch of num1.toString()) {
		if (obj[ch]) {
			obj[ch]++;
		} else {
			obj[ch] = 1;
		}
	}

	for (let num of num2 + "") {
		if (obj[num]) {
			obj[num]--;
		} else {
			return false;
		}
	}

	let result = Object.values(obj).reduce((a, b) => a + b);
	return result === 0;
};

// console.log(checkAnagram(35, 53));

console.log(checkAnagram(1503, 5031));
console.log(checkAnagram(4390, 9034));

// console.log(checkAnagram(35, 53));

console.log(anagramFunction([25, 35, 872, 228, 53, 278, 872, 278]));

// 872278 = true ;
// 35 55
// 872 278 ;
// 278 872 ;
