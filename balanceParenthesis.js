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
	let stack = [],
		parensSet = new Set(["()", "[]", "{}"]);

	for (let each of s) {
		if (
			each == "(" ||
			each == ")" ||
			each == "[" ||
			each == "]" ||
			each == "{" ||
			each == "}"
		)
			stack.push(each);
		if (parensSet.has(stack[stack.length - 2] + stack[stack.length - 1])) {
			stack.pop();
			stack.pop();
		}
	}
	return stack.length === 0;
};

console.log(isValid("()()(())(({}))"));
console.log(isValid("0000{()9[]}"));

var isWalid = function (s) {
	// use hash map to store the values ;
	let validMap = {
		")": "(",
		"]": "[",
		"}": "{",
	};
	// use stack to check if it is a valid value;
	let stack = [];
	// we need to loop over the s
	for (let each of s) {
		// if the value is in the map;
		if (
			each == "(" ||
			each == ")" ||
			each == "[" ||
			each == "]" ||
			each == "{" ||
			each == "}"
		) {
			if (each in validMap) {
				// if the key in validMap then check if the last length for stack is the opposite
				// then if the last value in stack is !== to maps[value] return false;
				if (stack[stack.length - 1] !== validMap[each]) {
					return false;
				} else {
					stack.pop();
				}
			} else {
				stack.push(each);
			}
		}
	}
	return stack == 0;
};

console.log(isWalid("[]"));
console.log(isWalid("[]"));
