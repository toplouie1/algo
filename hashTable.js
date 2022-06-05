const animals = [
	"otter",
	"dog",
	"dog",
	"dog",
	"parakeet",
	"woodchuck",
	"cat",
	"tardigrade",
	"dog",
	"cat",
];

// function makeUnique(arr) {
// 	let obj = {};
// 	for (let a of arr) {
// 		obj[a] = true;
// 	}
// 	console.log(Object.keys(obj));
// }

function makeUnique(arr) {
	let newArr = [];
	let obj = {};
	for (let a of arr) {
		if (!obj[a]) {
			newArr.push(a);
		}
		obj[a] = true;
	}
	console.log(obj);
	console.log(newArr);
	return newArr;
}

console.log(makeUnique(animals));
