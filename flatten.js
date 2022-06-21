let arr = [[1, 2, 3], [5, [4]], [], [6, 7, 8, [9]]];
const flattenAndSort = (arr) => {
	let flattArr = [].concat(...arr).sort(function (a, b) {
		return a - b;
	});
	return [].concat(...flattArr);
};

console.log(flattenAndSort(arr));

const flatten = (arr) => {
	console.log(arr);
	let newArr = arr.toString().split(",").join("").split("");
	console.log("object");
	return newArr.map(Number);
};

console.log(flatten(arr));

const flattenType = (arr) => {
	// we will push all the values to the res
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			// checking if it is not an array // it its is not we push the values
			console.log(res);
			if (typeof arr[i][j] != "object") res.push(arr[i][j]);
			// else push the remainder of the arr [i][j]
			else res.push(...arr[i][j]);
		}
		console.log(res);
	}
	return res;
};
console.log(flattenType(arr));

let bame = [2, 3, 5];
let last = [6, 7, 8];

console.log(bame.concat(last));
let newName = [...bame, ...last];
console.log(newName);

console.log("hey how are you doing ");

console.log(4 ** 5);

console.log(3 | 3);
console.log(3 & 2);
console.log(3 ^ 2);

let all = 2;

console.log((all -= 1));
console.log((all -= -1));
console.log((all -= 1));
console.log((all -= -1));
console.log((all -= 1));

var maxSubArray = function (nums) {
	let max = nums[0];
	let sum = nums[0];

	for (let i = 0; i < nums.length; i++) {
		sum = sum + nums[i];
		if (sum > max) {
			max = sum;
		}
		if (sum < 0) sum = 0;
		console.log(sum);
		console.log(max);
	}
	return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// const fixParentheses = (str) => {
// 	let open = "(";
// 	let close = ")";
// 	let i = 0,
// 		j = 1;
// 	let openCount = 0,
// 		closeCount = 0;

// 	while (i < str.length) {
// 		if (str[i] == open && str[j] == close) continue;
// 		if (str[i] == open && str[j] == open) {
// 			openCount++;
// 		} else if (str[i] == close && str[j] == close) {
// 			closeCount++;
// 		}
// 		console.log(openCount);
// 		i++;
// 		j++;
// 	}
// };
const fixParentheses = (str) => {
	let result = "";
	let i = 0,
		j = 1;

	while (i < str.length) {
		if (str[i] == "(" && str[j] == ")") {
			result += "()";
			i += 2;
			j += 2;
		}
		if (str[i] == "(") {
			result = "(" + result + ")";
			i++;
			j++;
		} else {
			result = "(" + result;
			i++;
			j++;
		}
	}
	return result;
};

console.log(fixParentheses("(()()("));

// higher number

const checking = (arr) => {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			count++;
		}
	}
	return count < 2;
};
console.log(checking([1, 2, 1, 2, 5]));
console.log(checking([1, 3, 1, 5, 1]));
console.log(checking([1, 2, 1, 2, 5]));
console.log(checking([1, 2, 1, 2, 5]));
console.log(checking([2, 1, 2, 1]));
