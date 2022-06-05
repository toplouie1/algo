let arr = [5, 4, 7, 9, 11, 66, 22];

const bubbleSort = (arr) => {
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log(arr);
};
console.log(bubbleSort(arr));

let mergeArr = [5, 4, 7, 9, 11, 66, 22];

// merge sort is usually recursive
const mergeSort = (arr) => {
	let midIndex = Math.floor((arr.length - 1) / 2);

	if (arr.length < 2) {
		return arr;
	}
	const leftIndex = arr.slice(0, midIndex + 1);
	const rightIndex = arr.slice(midIndex + 1);

	const newLeftArr = mergeSort(leftIndex);
	const newRightArr = mergeSort(rightIndex);

	return merge(newLeftArr, newRightArr);

	function merge(left, right) {
		let arr = [];
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				arr.push(left.shift());
			} else if (right[0] <= left[0]) {
				arr.push(right.shift());
			}
		}
		return [...arr, ...left, ...right];
	}
};

console.log(mergeSort(mergeArr));

let userName = "nasty";
let index = 3;

console.log(userName.charCodeAt(3));

let obj = [
	{
		id: 1,
		name: "linked-list-practice",
		virtual_meeting_link: "https://us06web.zoom.us/j/5789795503",
		start_time: "5/12/2022 6:00",
		end_time: "5/12/2022 9:00",
		number_of_attendees: 40,
		cancelled: false,
		study_group_id: 1,
	},
	{
		id: 2,
		name: "virtual walk",
		virtual_meeting_link: "https://us06web.zoom.us/j/57896666503",
		start_time: "5/20/2022 2:00",
		end_time: "5/20/2022 8:00",
		number_of_attendees: 300,
		cancelled: false,
		study_group_id: 5,
	},
	{
		id: 3,
		name: "interview-prep",
		virtual_meeting_link: "https://us06web.zoom.us/j/578000005503",
		start_time: "5/12/2022 6:00",
		end_time: "5/12/2022 9:00",
		number_of_attendees: 40,
		cancelled: false,
		study_group_id: 4,
	},
	{
		id: 4,
		name: "introducing-react",
		virtual_meeting_link: "https://us06web.zoom.us/j/511119795503",
		start_time: "5/12/2022 6:00",
		end_time: "5/12/2022 9:00",
		number_of_attendees: 40,
		cancelled: false,
		study_group_id: 3,
	},
	{
		id: 5,
		name: "stacks-queues",
		virtual_meeting_link: "https://us06web.zoom.us/j/5780090095503",
		start_time: "5/12/2022 6:00",
		end_time: "5/12/2022 9:00",
		number_of_attendees: 40,
		cancelled: true,
		study_group_id: 1,
	},
	{
		id: 6,
		name: "virtual bike-ride",
		virtual_meeting_link: "https://us06web.zoom.us/j/511119795503",
		start_time: "5/12/2022 6:00",
		end_time: "5/12/2022 9:00",
		number_of_attendees: 40,
		cancelled: true,
		study_group_id: 5,
	},
];

let filter = obj.filter((fil) => fil.cancelled === true && fil.id === 6);
console.log(filter);
// let asceding = obj.sort(
// 	(a, b) => a.number_of_attendees - b.number_of_attendees
// );

// for (let a of obj) {
// 	console.log(a);
// 	a.number_of_attendees.sort((a, b) => a - b);
// }

// console.log(asceding);

// if the parmas are balanced

let checking = (str) => {
	let stack = [];
	let parens = "() [] {}";
	for (let i = 0; i < str.length; i++) {
		// add each of them to a stack
		stack.push(str[i]);
		let open = stack[stack.length - 2];
		let close = stack[stack.length - 1];

		if (parens.includes(open + close)) {
			stack.pop();
			stack.pop();
		}
	}
	// then check if the length is === to 0
	return stack.length === 0;
};

console.log(checking("[]"));
console.log(checking("((()))"));
console.log(checking("("));

let bSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};

console.log(bSort([3, 5, 6, 7, 3, 3]));

let mSort = (arr) => {
	let midIndex = Math.floor((arr.length - 1) / 2);

	// merge sort is always recursive
	if (arr.length < 2) {
		return arr;
	}

	let leftSide = arr.slice(0, midIndex + 1);
	let rightSide = arr.slice(midIndex + 1);

	let left = mSort(leftSide);
	let right = mSort(rightSide);

	return merge(left, right);

	function merge(left, right) {
		let arr = [];
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				arr.push(left.shift());
			} else if (right[0] <= left[0]) {
				arr.push(right.shift());
			}
		}
		return [...arr, ...left, ...right];
	}
};

console.log(mSort([9, 8, 7, 6, 5, 4, 3]));

// const mergeSort = (arr) => {
// 	let midIndex = Math.floor((arr.length - 1) / 2);

// 	if (arr.length < 2) {
// 		return arr;
// 	}
// 	const leftIndex = arr.slice(0, midIndex + 1);
// 	const rightIndex = arr.slice(midIndex + 1);

// 	const newLeftArr = mergeSort(leftIndex);
// 	const newRightArr = mergeSort(rightIndex);

// 	return merge(newLeftArr, newRightArr);

// 	function merge(left, right) {
// 		let arr = [];
// 		while (left.length && right.length) {
// 			if (left[0] < right[0]) {
// 				arr.push(left.shift());
// 			} else if (right[0] <= left[0]) {
// 				arr.push(right.shift());
// 			}
// 		}
// 		return [...arr, ...left, ...right];
// 	}
// };
