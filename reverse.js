let str = "heyhowareyou";

var reverseString = function (s) {
	reverseStringRecursive(0, s.length - 1, s);
};

// create a helper function
function reverseStringRecursive(leftIdx, rightIdx, array) {
	// if leftIndex is >= to rightIndex then we return
	if (leftIdx >= rightIdx) {
		return array;
	}
	// we change the value until the indexes are met .
	[array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
	// we called the function by adding left once and - right once and also passing the array .
	reverseStringRecursive(leftIdx + 1, rightIdx - 1, array);
}

console.log(reverseString(str));

// var reverseString = function (s) {
// 	reverseRecursive(0, s.length - 1, s);
// };
// function reverseRecursive(left, right, arr) {
// 	if (left >= right) {
// 		return;
// 	}
// 	[arr[left], arr[right]] = [arr[right], arr[left]];
// 	reverseRecursive(left + 1, right - 1, arr);
// }

// console.log(reverseString(str));
