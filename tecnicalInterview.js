// 2 arrays
// the arr could be empty ;

let arr1 = [1, 5, 3, 8, 9, 5];
let arr2 = [3, 8, 5, 3, 1];

const findDuplicates = (arr1, arr2) => {
	// guard clause
	if (arr1.length == 0 || arr2.length == 0) return [];
	let result = [],
		uniqueNum1 = new Set(arr1),
		uniqueNum2 = new Set(arr2);

	for (let secondArr of uniqueNum2) {
		if (uniqueNum1.has(secondArr)) {
			result.push(secondArr);
		}
	}
	return result;
};

console.log(findDuplicates(arr1, arr2));
console.log(findDuplicates([2, 5, 4, 3], [2, 3]));
console.log(findDuplicates([], [8]));
console.log(findDuplicates([], []));

const intersection = (nums1, nums2) => {
	return [...new Set(nums1)].filter((val) => new Set(nums2).has(val));
};
console.log(intersection(arr1, arr2));

// let union = [...new Set([...num1, ...nums2)];

let testArr = [1, 2, 1, 2, 5, 6];

// console.log(...new Set(testArr))
let newSet = new Set(testArr);
console.log(newSet);
console.log(newSet.add(4));
console.log(newSet.delete(1));
console.log(newSet.has(2));

for (let n of newSet) {
	console.log(n);
}
