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
			return i + 1;
		}
	}
	return -1;
};
console.log(linearSearch(classArr, "Nima Sherpa"));

// Binary - Sorted lists
let numArr = [1, 2, 3, 4, 5, 7, 10, 16, 20, 33, 44];
// o log(n)
const binarySearch = (arr, valueToFind) => {
	let startIndex = 0;
	let endIndex = arr.length - 1;

	while (startIndex <= endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2);
		console.log(midIndex);
		if (valueToFind === arr[midIndex]) {
			return midIndex;
		} else if (valueToFind > arr[midIndex]) {
			startIndex = midIndex + 1;
		} else if (valueToFind < arr[midIndex]) {
			endIndex = midIndex - 1;
		}
	}

	return -1;
};
console.log(binarySearch(numArr, 44));

// console.log(binarySearch(numArr, 16));
// Jump = large Size Datasets
// Exaponential - Very Large Size Datasets

let numString = "11";

let newNum = numString.toString();
console.log(newNum);
