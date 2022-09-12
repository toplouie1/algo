const findAllCombinations = (arr) => {
	let allCombinations = [];

	for (let i = 0; i < arr.length; i++) {
		let temp = [];
		allCombinations.push(arr[i]);
		console.log(arr[i]);

		for (let j = 0; j < allCombinations.length - 1; j++) {
			temp.push(allCombinations[j] + arr[i]);
			console.log(allCombinations[j] + arr[i]);
		}
		// add the temp to the allCombinations

		allCombinations = [...allCombinations, ...temp];
		console.log(allCombinations);
	}
	return allCombinations;
};

console.log(findAllCombinations(["a", "b", "c"]));

// function findAllCombinations(arr) {
// 	let combinations = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		let temp = [];

// 		combinations.push(arr[i]); // ['a', 'b']

// 		for (let j = 0; j < combinations.length - 1; j++) {
// 			// ['a', 'b']
// 			temp.push(combinations[j] + arr[i]); // 'a'+'b' = ['ab']
// 		}

// 		combinations = combinations.concat(temp); // ['a', 'b', 'ab']
// 	}

// 	return combinations;
// }

// console.log(findAllCombinations(["a", "b", "c"]));

// ("a");
