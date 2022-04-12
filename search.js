// Linear - Unsorted Lists

// Input - Array of strings
let classArr = [
	"Christina Loiacono",
	"David Vidals",
	"Deborah Campos",
	"Hannah Inkabi",
	"Hector Ilarraza",
	"James Russell",
	"Jenna Qian",
	"Jerry De Jesus",
	"Joshuel Marte",
	"Laiba Sajid",
	"Larisa Shapkina",
	"Lili Huang",
	"Milton Clark",
	"Mukayila Alao",
	"Name Ping Louie",
	"Nima Sherpa",
	"Oliver Chuzan",
	"Rae Charles",
	"Rob Walker",
	"Ronnie Garcia",
	"Sara D'Arce",
	"Stephanie Reyes",
	"Theodore Frazier",
	"Xiaoming Yang",
];
// big 0(n)
// Linear Search is the fastest way to sort an unshorted array ;;
const linearSearch = (arr, valueToFind) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === valueToFind) {
			return i;
		}
	}
	return -1;
};

console.log(linearSearch(classArr, "Nima Sherpa"));

// Binary - Sorted lists
let numArr = [4, 5, 7, 10, 16, 20];
// Find the middle Index ;
// check if the middle is the one - if yes return it
// then checck is it smaller or bigger
// if it is bigger we take the right side
// if it is smaller we take the left sdie .
// until we find it or if we don't we can return -1 or not found ..

const binarySearch = (arr, valueToFind) => {
	let startIndex = 0;
	let endIndex = arr.length - 1;
	// console.log(startIndex, endIndex);

	while (startIndex <= endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2);
		if (valueToFind === arr[midIndex]) {
			console.log(midIndex);
			return;
		} else if (valueToFind > arr[midIndex]) {
			startIndex = midIndex + 1;
		} else if (valueToFind < arr[midIndex]) {
			endIndex = midIndex - 1;
		}
	}
	return -1;
	// Find the middle index, Choose smaller if there are two // 0
	// Array is empty, return -1
	// Is the value at the middle equal to valueToFind  // 20 === 20 true
	// return index
	// Is it less than
	// grab the left
	// Is it greater than
	//grab the right
};

// Jump = large Size Datasets

// Exaponential - Very Large Size Datasets
