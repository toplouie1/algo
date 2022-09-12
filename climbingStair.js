// memoizing;
// let memo = {};

// var climbStairs = function (n) {
// 	if (n < 3) return n;
// 	if (memo[n]) return memo[n];
// 	// obj
// 	memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
// 	// recursive function.
// 	return memo[n];
// };

// console.log(climbStairs(23));

// climbStairs(2) => 2

// 4

// climbStairs(3) = 4
// climbStairs(4)
// climbStairs(5)

// 2 + 2   = 4 ;

// climbStairs(2) => 2

// climbStairs(4) = 4

var climbStairs = function (n) {
	// making room for the value
	let memo = new Array(n).fill(null);
	function inner(n) {
		if (n < 3) return n;
		if (memo[n]) return memo[n];
		memo[n] = inner(n - 1) + inner(n - 2);
		return memo[n];
	}
	return inner(n);
};

console.log(climbStairs(44));
