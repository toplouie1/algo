var topKFrequent = function (nums, k) {
	if (!nums) return null;

	var numsMap = new Map();
	var solution = [];

	for (let i = 0; i < nums.length; i++) {
		var current = nums[i];
		if (numsMap.has(current)) {
			numsMap.set(current, numsMap.get(current) + 1);
		} else numsMap.set(current, 1);
	}

	console.log(numsMap);
	var freqs = [...numsMap].sort((a, b) => b[1] - a[1]);
	console.log(freqs);

	for (let i = 0; i < k; i++) {
		solution.push(freqs[i][0]);
	}
	return solution;
};

console.log(topKFrequent([1, 1, 12, 2, 2, 3], 2));
// console.log(topKFrequent([1,1,1,2,2,3] , 1))
// console.log(topKFrequent([1,1,1,1,2,2,3,3,3,3,3,3,9,9,9,9,9] , 3))

let doubleArr = [
	[1, 2],
	[12, 2],
	[3, 1],
];
console.log(doubleArr);

for (let d of doubleArr) {
	console.log(d[0]);
}

// valid parenthesis

const isValid = function (s) {
	const stack = [];

	const m = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (const c of s) {
		if (c in m) {
			if (stack[stack.length - 1] !== m[c]) {
				return false;
			} else {
				stack.pop();
			}
		} else {
			stack.push(c);
		}
	}

	return stack.length === 0;
};

console.log(isValid("[]{()()()()}"));
console.log(isValid("{}"));

// const isValid = s => {
//     const stack = []
//     const map = {')':'(','}':'{',']':'['}

//     for (const c of s) {
//         if (c in map) {
//             if (stack[stack.length - 1] !== map[c]) return false
//             stack.pop()
//         } else {
//             stack.push(c)
//         }
//     }

//     return stack.length === 0
// }
