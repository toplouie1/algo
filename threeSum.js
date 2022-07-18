var threeSum = function (nums) {
	let result = [];
	// sort the number
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		// if num is ever greater then 0 it means all the others wouldn't be possible.
		if (nums[i] > 0) break;

		// checking for duplicates
		if (i > 0 && nums[i - 1] === nums[i]) continue;

		// create pointers
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				// if sum == 0 push the values
				result.push([nums[i], nums[left], nums[right]]);
				left++;
				right--;
				// while left is smaller and nums[left] == prev
				// it means its a duplicate number ..
				while (left < right && nums[left] === nums[left - 1]) {
					left++;
				}
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
