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

const binarySearch = (arr, valueToFind) => {
	// Find the middle Index ;
};

// Jump = large Size Datasets

// Exaponential - Very Large Size Datasets
