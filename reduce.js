const people = [
	{ id: "1", name: "Leigh", age: 35 },
	{ id: "2", name: "Jenny", age: 30 },
	{ id: "3", name: "Heather", age: 28 },
];

let result;

// count ;
// the call back recieves a accumulator  , and the value that is being passed in.
result = people.reduce((acc, person) => acc + 1, 0);

console.log(result);

// sum all ages ;
let sumAge = people.reduce((acc, person) => acc + person.age, 0);
console.log(sumAge);

let arr = [1, 5, 3, 4];
console.log(arr.sort((a, b) => a - b));

let minDifference = arr.reduce((acc, num, index, ar) => {
	if (ar[index + 1] - ar[index] < acc) {
		acc = ar[index + 1] - ar[index];
	}
	return acc;
}, +Infinity);

console.log(Math.abs(minDifference));
console.log(minDifference);

// let newArr = arr.map((num, index) => {
// 	if (num[index + 1] - num[index] === minDifference) {
// 		return num;
// 	}
// });

// console.log(arr)
// console.log(arr.reduce((acc, num, index, arr) => {
//     console.log(num)
// 	if (arr[index + 1] - arr[index] === minDifference) {
// 		// acc.push([num, arr[index + 1]]);
//         acc.push([num , arr[index + 1] ]);
// 		return acc;
// 	}
// }, []))

const peeps = ["sally", "nick", "dave"];

console.log(
	peeps.reduce((acc, val, index, array) => {
		if (typeof val == "string") {
			acc.push([val, array[index + 1]]);
			return acc;
		}
	}, [])
);

// console.log(newArr);

// array of names ;

let arrayNames = people.reduce(
	(acc, person) => [...acc, [person.name, person.age]],
	[]
);
console.log(arrayNames);

// convert to id  find the person by id ;

let Keyid = people.reduce((acc, person) => {
	return { ...acc, [person.id]: person };
}, {});

console.log(Keyid);

console.log(
	arr.reduce((a, b) => {
		console.log(a);
		return a + b;
	}, 10)
);
