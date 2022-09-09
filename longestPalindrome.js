// find the longest Palindrome from the string .

var longestPalindrome = function (s) {
	if (s.length === 1) return s;
	let longest = s[0];

	for (let i = 0; i < s.length; i++) {
		let current = s[i];
		let reverseCurrent = s[i];

		for (let j = i + 1; j < s.length; j++) {
			current += s[j];
			reverseCurrent = s[j] + reverseCurrent;
			if (current === reverseCurrent) {
				if (longest.length < current.length) {
					longest = current;
				}
			}
		}
	}
	// current === reverseCurrent
	return longest;
};

console.log(longestPalindrome("heyhyyyheyhey"));
