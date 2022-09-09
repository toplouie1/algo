// each lemonad cost 5

// customer are standing in line
// and can order 1 a the time
// each customer can buy 1 lemondade
// cusomer can buy
// 5,10,20

// total = 0

// cost =  5
// can but only 1 lemonade

// [5][(5, 10, 20)];

// const lemonade = (arr) => {
// 	// return false if you do not have change
// 	// else opposite
// 	let fives = 0;
// 	let tens = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 5) {
// 			fives++;
// 		} else if (arr[i] === 10) {
// 			tens++;
// 			fives--;
// 		} else if (arr[i] === 20) {
// 			if (tens > 0) {
// 				tens--;
// 				fives--;
// 			} else {
// 				fives -= 3;
// 			}
// 		}

// 		if (fives < 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// console.log(lemonade([5, 10, 5, 5, 5, 5, 5, 20]));

// var lemonadeChange = function (bills) {
// 	let fives = 0,
// 		tens = 0;
// 	for (let bill of bills) {
// 		if (bill === 5) {
// 			fives++;
// 		} else if (bill === 10) {
// 			fives--;
// 			tens++;
// 		} else if (bill === 20 && tens > 0) {
// 			fives--;
// 			tens--;
// 		} else {
// 			fives -= 3;
// 		}
// 		if (fives < 0) return false;
// 	}
// 	return true;
// };

// let matrix = [
// 	[1, 3, 5, 7],
// 	[10, 11, 16, 20],
// 	[23, 30, 34, 60],
// ];
// let target = 7;

// // time complexity log of  n * m ;

// const findTarget = () => {
// 	let row = matrix.length;
// 	let column = matrix[0].length;

// 	let total = row * column;
// 	let i = 0,
// 		j = total - 1;

// 	while (i <= j) {
// 		let mid = Math.floor((i + j) / 2);
// 		let currentMid = matrix[Math.floor(mid / column)][mid % column];

// 		if (target === currentMid) {
// 			return true;
// 		} else if (target < currentMid) {
// 			j = mid - 1;
// 		} else {
// 			i = mid + 1;
// 		}
// 	}
// 	return false;
// };

// console.log(findTarget(matrix, target));
// const string = "";
// console.log(string.split("").join(" "));

// console.log(100 * -1);

// const adjacent = (str) => {
// 	let stack = [];

// 	for (let i = 0; i < str.length; i++) {
// 		if (stack[stack.length - 1] === str[i]) {
// 			stack.pop();
// 		} else {
// 			stack.push(str[i]);
// 		}
// 	}
// 	return stack.join();
// };

// console.log(adjacent("hheeynnyoff"));

// var removeDuplicates = function (nums) {
// 	if (nums.length < 1) return 0;

// 	let currentUniqueNumIndex = 0;

// 	for (let index = 0; index < nums.length; index++) {
// 		const currentNum = nums[index];
// 		const currentUniqueNum = nums[currentUniqueNumIndex];

// 		if (currentNum !== currentUniqueNum) {
// 			currentUniqueNumIndex++;
// 			nums[currentUniqueNumIndex] = currentNum;
// 		}
// 	}

// 	console.log(nums);
// 	return currentUniqueNumIndex + 1;
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var spiralOrder = function (matrix) {
	const res = [];

	let left = 0,
		right = matrix[0].length - 1;
	let top = 0,
		bottom = matrix.length - 1;

	while (left <= right && top <= bottom) {
		for (let i = left; i <= right; i++) {
			res.push(matrix[top][i]);
		}
		top++;

		for (let i = top; i <= bottom; i++) {
			res.push(matrix[i][right]);
		}
		right--;

		if (left <= right && top <= bottom) {
			for (let i = right; i >= left; i--) {
				res.push(matrix[bottom][i]);
			}
			bottom--;
		}

		if (left <= right && top <= bottom) {
			for (let i = bottom; i >= top; i--) {
				res.push(matrix[i][left]);
			}
			left++;
		}
	}

	return res;
};

console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);

console.log("s" < "t");
console.log("u" < "t");
console.log("u" < "w");

// console.log(Number.isInteger(2.5))
