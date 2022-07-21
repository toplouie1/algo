// breadth first search

function breadthFirstSearch() {
	// create a queue and a variable to store the values of nodes visited
	let queue = [];
	let result = [];
	// initiate a node variable to store the current node
	let node;
	// push the root node to the queue
	queue.push(root);
	// loop as long as there is anything in the queue
	while (queue.length) {
		// dequeue a node from the queue
		// push the visited node into the result
		node = queue.shift();
		result.push(node);
		// push children to the queue
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}
	//return final traversed nodes array
	return result;
}
