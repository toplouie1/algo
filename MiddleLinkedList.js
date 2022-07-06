function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
let newList = new ListNode(1);
console.log(newList);

// Given a singly linked list with head node head, return a middle node of linked list.

// 1 -> 2 -> 3 -> 4 -> 5 -> nil
// 3 -> 4 -> 5 -> nil

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> nil
// 4 -> 5 -> 6 -> nil
//      l    r

const findMiddleNode = (head) => {
	let current = head;
	let count = 0;

	while (current) {
		count++;
		current = current.next;
	}

	if (count % 2 == 1) {
		let odd = Math.ceil(count / 2);
	} else {
		let even = count / 2 + 1;
	}

	let currentSteps = 0;
	let CurrCount = count % 2 === 1 ? odd : even;

	while (current) {
		currentSteps++;
		if (CurrCount == currentSteps) {
			return current;
		}
		current = current.next;
	}
};
// console.log(Math.ceil(5/2))
