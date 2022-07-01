// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

// Example

// For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].

// For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
// For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, but there is no integer value that would satisfy this equation, so result[1] = false.
// For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
// For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
// For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.

// Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.

// Example

// For a = [25, 2, 3, 57, 38, 41], the output should be solution(a) = [2, 3, 5].

// Here are the number of times each digit appears in the array:

// 0 -> 0
// 1 -> 1
// 2 -> 2
// 3 -> 2
// 4 -> 1
// 5 -> 2
// 6 -> 0
// 7 -> 1
// 8 -> 1
// The most number of times any number occurs in the array is 2, and the digits which appear 2 times are 2, 3 and 5. So the answer is [2, 3, 5].

function solution(a) {
	let map = new Map();
	let newArr = a.join("").split("");
	let result = [];

	for (let i = 0; i < newArr.length; i++) {
		let current = newArr[i];
		if (map.has(current)) {
			map.set(current, map.get(current) + 1);
		} else {
			map.set(current, 1);
		}
	}
	for (let [key, value] of map) {
		if (value == 2) {
			result.push(Number(key));
		}
	}
	return result.sort((a, b) => a - b);
}

console.log(solution([4, 5, 4, 2, 2, 25]));
console.log(solution([1, 10, 20, 10, 30]));

// Input:
// a: [4, 5, 4, 2, 2, 25]
// Output:
// [4, 5]
// Expected Output:
// [2]

// Input:
// a: [1, 10, 20, 10, 30]
// Output:
// []
// Expected Output: [0]

let arr = [1, 2, 3];
arr.join("");
console.log(arr);

var isValid = function (s) {
	let stack = [];
	let i = 0;
	let parens = "() [] {}";

	while (i < s.length) {
		if (parens.includes(s[i])) {
			stack.push(s[i]);
			i++;
		}
		let open = stack[stack.length - 2];
		let closed = stack[stack.length - 1];

		if (parens.includes(open + closed)) {
			stack.pop();
			stack.pop();
		}
	}
	return stack.length === 0;
};

console.log(isValid("[()](())"));
