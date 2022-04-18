const util = require("util");
const numArr = [10, 3, 10, 8, 10, 111, 7, 10, 9, 6, 5, 2, 4];

let bSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
};

console.log(bSort(numArr));

// merge sort

const mergeSortRecursive = (arr) => {
	// find the middle index
	const midIndex = Math.floor(arr.length / 2);
	// when the arr has 1 or less it returns the arr..
	if (arr.length < 2) {
		return arr;
	}
	// create the left and right
	// the left goes from index 0 to mid
	// the right ges from mid to lastindex

	const leftArr = arr.slice(0, midIndex);
	const rightArr = arr.slice(midIndex, arr.length);
	// then we call them unitl the array is single or less then 1 ..
	const newLeftArr = mergeSortRecursive(leftArr);
	const newRightArr = mergeSortRecursive(rightArr);
	// we have splitted them unitl there is a single element
	return merge(newLeftArr, newRightArr);
	// then create a function that will merge them
	function merge(left, right) {
		let arr = [];
		// while there is no left or no right we stop ...
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				arr.push(left.shift());
			} else {
				arr.push(right.shift());
			}
		}
		// since there is still some numbers left in left and right
		// we need to add them later on .
		console.log(arr);
		console.log(left);
		console.log(right);
		return [...arr, ...left, ...right];
	}
};
let initialArr = [4, 8, 7, 2, 11, 1, 2, 4];
console.log(mergeSortRecursive(initialArr));
