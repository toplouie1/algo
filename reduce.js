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

let arr = [1, 2, 3, 4];

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
