let arr = "nimasherpa";

const map1 = new Map();

map1.set("n", 1);

console.log(map1.get("n"));

let map = new Map();
for (let i = 0; i < arr.length; i++) {
	arr[i] = map;
	console.log(map.set(arr[i], i));
}
console.log(map.get("i"));
console.log(map.size);

console.log(map);
