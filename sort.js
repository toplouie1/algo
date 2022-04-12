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
				wasSwapped = true;
			}
		}
	} while (wasSwapped);
};

console.log(bubbleSort(numArr));
console.log(numArr);
