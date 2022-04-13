// Bubble Sort
const numArr = [10, 3, 10, 8, 10, 111, 7, 10, 9, 6, 5, 2, 4];

// regular bubble sort
// It is distructive ..

// const bubbleSort = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				// swapping if it is smaller than the current ...
// 				let tempVal = arr[j + 1];
// 				arr[j + 1] = arr[j];
// 				arr[j] = tempVal;
// 			}
// 		}
// 	}
// 	return arr;
// };

// Optimized bubble sort

const bubbleSort = (arr) => {
	let wasSwapped;
	do {
		wasSwapped = false;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let tempVal = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tempVal;

				// [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				wasSwapped = true;
			}
		}
	} while (wasSwapped);
};

console.log(bubbleSort(numArr));
console.log(numArr);

// Merge sort
// Will be recursive

const mergeSortRecursive = (arr) => {
	const midIndex = Math.floor((arr.length - 1) / 2);

	if (arr.length < 2) {
		return arr;
	}

	const leftArr = arr.slice(0, midIndex + 1);
	const rightArr = arr.slice(midIndex + 1);

	const newLeftArr = mergeSortRecursive(leftArr);
	const newRightArr = mergeSortRecursive(rightArr);
	// Split Stops, Join begins
	return merge(newLeftArr, newRightArr);

	function merge(left, right) {
		let arr = [];
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				arr.push(left.shift());
			} else if (right[0] <= left[0]) {
				arr.push(right.shift());
			}
		}
		return [...arr, ...left, ...right];
	}
};

let initialArr = [4, 8, 7, 2, 11, 1, 3];
let sortedResult = mergeSortRecursive(initialArr);
console.log(sortedResult);
