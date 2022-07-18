let nums = [1, 12, -5, -6, 50, 3],
	k = 4;

var findMaxAverage = function (nums, k) {
	let max = -Infinity;
	let soFar = 0;
	let windowStart = 0;

	for (let end = 0; end < nums.length; end++) {
		soFar += nums[end];

		if (end - windowStart === k - 1) {
			let avg = soFar / k;

			max = Math.max(max, avg);
			console.log(nums[windowStart]);
			soFar -= nums[windowStart];

			console.log(soFar);

			console.log(nums[windowStart]);

			windowStart++;
		}
	}
	return max;
};

console.log(findMaxAverage(nums, k));
