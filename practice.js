let arr = [5, 4, 7, 9, 11, 66, 22];

const bubbleSort = (arr) => {
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log(arr);
};
console.log(bubbleSort(arr));

let mergeArr = [5, 4, 7, 9, 11, 66, 22];

// merge sort is usually recursive
const mergeSort = (arr) => {
	let midIndex = Math.floor((arr.length - 1) / 2);

	if (arr.length < 2) {
		return arr;
	}
	const leftIndex = arr.slice(0, midIndex + 1);
	const rightIndex = arr.slice(midIndex + 1);

	const newLeftArr = mergeSort(leftIndex);
	const newRightArr = mergeSort(rightIndex);

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

console.log(mergeSort(mergeArr));
