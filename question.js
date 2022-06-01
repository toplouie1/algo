// return the longest substring in the strin g

const longestPalindrome = (s) => {
	if (s.length < 1 || s.length == null) return "";

	let maxPallindrome = "";
	for (let i = 0; i < s.length; i++) {
		let oddPalindrome = checkPalindrome(s, i, i);
		//in odd pallindrom the left and right center should be same
		let evenPalindrome = checkPalindrome(s, i, i + 1);
		//in even palindrom the left and right+1 should be center
		//example a b b a [so left will be from b and right will from second b]
		if (oddPalindrome.length > maxPallindrome.length) {
			maxPallindrome = oddPalindrome;
		}
		if (evenPalindrome.length > maxPallindrome.length) {
			maxPallindrome = evenPalindrome;
		}
	}
	return maxPallindrome;
};

let checkPalindrome = (str, left, right) => {
	while (left >= 0 && right < str.length) {
		if (str[left] !== str[right]) break;
		//string from left and right if doesn't matches then its not a palindrom hence break;
		right++;
		left--;
	}
	//we are taking the left and right from the center
	//so we are moving the left to more left (left--)
	//and moving the right to more right (right++)
	return str.substring(left + 1, right);
};

// --- To Do in the interview ---

// Test case
// Edge case
// Don’t jump in
// Sudo code

// checking if the arr is unique

const uniques = (nums) => {
	return nums.length !== new Set(nums).size;
};

const unique = (nums) => {
	const hashTab = {};
	for (let i = 0, l = nums.length; i < l; i++) {
		if (!hashTab[nums[i]]) {
			hashTab[nums[i]] = true;
		} else {
			return true;
		}
	}
	return false;
};
