const util = require("util");
const numArr = [10, 3, 10, 8, 10, 111, 7, 10, 9, 6, 5, 2, 4];
const initialArr = [4, 8, 7, 2, 11, 1, 2, 4, 20, 2, 1, 2, 3, 4, 5];

// merge sort
const mergeSortRecursive = (arr) => {
	// find the middle index
	const midIndex = Math.floor(arr.length / 2);
	// when the arr has 1 or less it returns the arr..
	if (arr.length < 2) {
		return arr;
	}
	const leftArr = arr.slice(0, midIndex);
	const rightArr = arr.slice(midIndex, arr.length);
	return merge(mergeSortRecursive(leftArr), mergeSortRecursive(rightArr));
	function merge(left, right) {
		let arr = [];
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				arr.push(left.shift());
			} else {
				arr.push(right.shift());
			}
		}
		return [...arr, ...left, ...right];
	}
};
console.log(mergeSortRecursive(initialArr));
console.log(mergeSortRecursive(numArr));

const bSort = (arr) => {
	let wasSwapped;
	do {
		wasSwapped = false;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let tempVal = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tempVal;
				wasSwapped = true;
			}
		}
	} while (wasSwapped);
};
bSort(numArr);

console.log(numArr);

const bubbleSort = (arr) => {
	let wasSwapped;
	do {
		wasSwapped = false;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let tempVal = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tempVal;
				wasSwapped = true;
			}
		}
	} while (wasSwapped);
};

console.log(bubbleSort(numArr));
console.log(numArr);

// Binary - Sorted lists
let newArr = [4, 5, 7, 10, 20, 30];
// log(n)
const binarySearch = (arr, valueToFind) => {
	let frontIndex = 0;
	let backIndex = arr.length - 1;

	while (frontIndex <= backIndex) {
		let midIndex = Math.floor((frontIndex + backIndex) / 2);
		console.log(midIndex);
		if (arr[midIndex] === valueToFind) {
			return midIndex;
		} else if (arr[midIndex] < valueToFind) {
			frontIndex = midIndex + 1;
		} else if (arr[midIndex] > valueToFind) {
			backIndex = midIndex - 1;
		}
	}
	return -1;
};
console.log(binarySearch(newArr, 20));
