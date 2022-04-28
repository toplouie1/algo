var reverseString = function (s) {
	reverseStringRecursive(0, s.length - 1, s);
};

// create a helper function
function reverseStringRecursive(leftIdx, rightIdx, array) {
	// if leftIndex is >= to rightIndex then we return
	if (leftIdx >= rightIdx) {
		return;
	}

	// we change the value until the indexes are met .
	[array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];

	// we called the function by adding left once and - right once and also passing the array .
	reverseStringRecursive(leftIdx + 1, rightIdx - 1, array);
}
