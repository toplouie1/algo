let arr = [[1, 2, 3], [5, [4]], [], [6, 7, 8, [9]]];
const flattenAndSort = (arr) => {
	let flattArr = [].concat(...arr).sort(function (a, b) {
		return a - b;
	});
	return [].concat(...flattArr);
};

console.log(flattenAndSort(arr));

const flatten = (arr) => {
	console.log(arr);
	let newArr = arr.toString().split(",").join("").split("");
	console.log("object");
	return newArr.map(Number);
};

console.log(flatten(arr));

const flattenType = (arr) => {
	// we will push all the values to the res
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			// checking if it is not an array // it its is not we push the values
			console.log(res);
			if (typeof arr[i][j] != "object") res.push(arr[i][j]);
			// else push the remainder of the arr [i][j]
			else res.push(...arr[i][j]);
		}
		console.log(res);
	}
	return res;
};
console.log(flattenType(arr));

let bame = [2, 3, 5];
let last = [6, 7, 8];

console.log(bame.concat(last));
let newName = [...bame, ...last];
console.log(newName);
