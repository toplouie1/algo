// You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

// For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".

// You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective initial strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual lexicographical way. If both number of occurences and characters are equal, you should take the characters from the first string to the result. Note that occurrences in the initial strings are compared - they do not change over the merge process.

// Given two strings s1 and s2, return the result of the special merge function you are implementing.

// Example

// For s1 = "dce" and s2 = "cccbd", the output should be
// solution(s1, s2) = "dcecccbd".
// All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.

// For s1 = "super" and s2 = "tower", the output should be
// solution(s1, s2) = "stouperwer".
// Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 104.

// [input] string s2

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 104.

// [output] string

// The string that results by merging s1 and s2 using your special merge function.

function solution(numbers) {
	let changed = false;
	for (let i = 0; i < numbers.length - 1; i++) {
		if (numbers[i] > numbers[i + 1]) {
			let swipefist = reverseNum(numbers[i]);

			let lastSwipe = reverseNum(numbers[i + 1]);

			if (!changed) {
				if (swipefist < numbers[i + 1]) {
					if (numbers[i - 1] !== undefined) {
						if (numbers[i - 1] < swipefist) {
							changed = true;
						} else if (lastSwipe > numbers[i]) {
							numbers[i + 1] = lastSwipe;
							changed = true;
						} else {
							return false;
						}
					} else {
						changed = true;
					}
				} else {
					if (lastSwipe > numbers[i]) {
						numbers[i + 1] = lastSwipe;
						changed = true;
					} else {
						return false;
					}
				}
			} else {
				return false;
			}
		}
	}
	return true;
}

let reverseNum = (num) => {
	return Number(num.toString().split("").reverse().join(""));
};

// test
// a: [100, 86, 22, -1, 38, 4, -50, 85, 31, -59, 42, 89, -51, -12, -16, -15, -43, 47, -71, -87, 54, -98, -80, -42, 57, -9, -25, 48, 9, 19, -100, 50, 44, -75, 10, -18, -20, 66, -60, -11, 97, 34, -4, -31, -97, 72, 64, 93, 80, -39, 62, 15, -72, 82, 69, -56, 56, 70, -93, 77, -83, -85, 53, -62, -37, 3, 98, 99, -95, -48, -3, -44, 46, 18, 51, -28, -47, -65, 17, -96, 1, 41, -24, -78, 25, -13, -84, -35, 6]

// expected
// 121
