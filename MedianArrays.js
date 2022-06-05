// find the median of two sorted arrays

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

function median(arr1, arr2) {
	console.log(arr1);
	console.log(arr2);

	let merged = [...arr1, ...arr2];
	let sort = merged.sort((a, b) => a - b);
	console.log(sort);
	let first = 0;
	let last = sort.length - 1;
	return (first + last) / 2 + 1;
}

console.log(median(arr1, arr2));
