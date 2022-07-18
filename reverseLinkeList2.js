var reverseBetween = function (head, left, right) {
	// create dummyNode which is gonna new head ;
	let temp = new ListNode(0, head);

	// create two variable with prev as the temp and current as the temp.next ;

	let [lPrev, current] = [temp, temp.next];

	for (let i = 0; i < left - 1; i++) {
		// moving the node forward
		lPrev = current;
		current = current.next;
	}

	let prev = null;

	for (let i = 0; i < right - left + 1; i++) {
		// have a refrence to the previous c.next;
		let nextNode = current.next;
		// current.next points to prev;
		current.next = prev;
		// prev is the new current;
		prev = current;
		// traverse with the prev pointers;
		current = nextNode;
	}

	lPrev.next.next = current;
	lPrev.next = prev;

	return temp.next;
};
