// 1. Write a function that returns the key of a targeted value as a string
// ({"a":4, "g":2, "f":5}, 2) => returns "g"
let obj = { a: 4, g: 2, f: 5 };
let target = 2;

let first = (obj, target) => {
	// for (let [key, value] of Object.entries(obj)) {
	// 	if (value === target) return key;
	// }
	return Object.keys(obj).find((key) => obj[key] === target);
};
console.log(first(obj, target));

// 2. Write a function that returns the keys of targeted values as an array.
// ({"a":4, "g":2, "f":5, "p", 2}, 2) => returns ["g", "p"]

let second = (obj, target, arr = []) => {
	for (let o in obj) {
		if (obj[o] == target) {
			arr.push(o);
		}
	}
	return arr;
};

console.log(second({ a: 4, g: 2, f: 5, p: 2 }, 2));

// 3. Write a function so that it handles objects at any depth
// ({"a":4, "g":2, "f":5, "r":2 , "z":{"l":2}}, 2) => returns ["g","r","l"]
// ({"a":4, "g":2, "f":5, "r":2 , "z":{"l":2, f: {t: 2}}}, 2)) => [ 'g', 'r', 'l', 't' ]

function objDepth(obj, target, arr = []) {
	for (let key in obj) {
		if (typeof obj[key] == "object") return objDepth(obj[key], target, arr);
		else if (obj[key] == target) arr.push(key);
	}
	return arr;
}

console.log(objDepth({ a: 4, g: 2, f: 5, r: 2, z: { l: 2, f: { t: 2 } } }, 2));

// object deeper

// const getkeysDeeps=(obj,val,arr=[])=>{
//     for(let key in obj){
//       if(typeof obj[key] === "object") return getkeysDeeps(obj[key],val,arr);
//       else if(obj[key] === val) arr.push(key);
//     }
//     return arr;
//   }
