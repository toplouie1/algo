var climbStairs = function (n) {
	var memo = {};
	// Check if we already have a cache/memo
	if (memo[n]) return memo[n];

	// Breaking Step
	if (n <= 1) return 1;

	// Add to memo
	let res = (memo[n] = climbStairs(n - 1) + climbStairs(n - 2));
	console.log(res);
	console.log(memo);
	// return result
	return res;
};

console.log(climbStairs(7));

// climbing stairs

// var climbStairs = function (n) {
// 	if (n <= 1) return n;
// 	return climbStairs(n - 1) + climbStairs(n - 2);
// };

// console.log(climbStairs(2));
