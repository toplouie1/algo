function inOrderDFS() {
	// a variable to store the visited nodes
	let result = [];
	// helper function -- accepts a node
	function traverse(node) {
		// if node has left, recursion to find the leftest leaf node
		if (node.left) traverse(node.left);
		// push the node to the result
		result.push(node);
		// if node has right, recurstion to find the rightest leaf node
		if (node.right) traverse(node.right);
	}
	// invoke the helper function with the root
	traverse(root);
	// return the final result
	return result;
}

// l root r ;
// root l r;
// l , r root

function preOrderDFS() {
	// create variable to store the visited nodes
	let result = [];
	// helper function accepts a node
	function traverse(node) {
		// push the node to the result
		result.push(node);
		//if the node has left, recursion to push it to the result
		if (node.left) traverse(node.left);
		// if the node has right, recursion to push it to the result
		if (node.right) traverse(node.right);
	}
	// invoke the helper function with the root
	traverse(root);
	// return final result
	return result;
}

function postOrderDFS() {
	// create a variable to store the visited nodes
	let result = [];
	// helper function accepts a node
	function traverse(node) {
		// if node has left, recursion to find the leftest node
		if (node.left) traverse(node.left);
		// if node has right, recursion to find the rightest node
		if (node.right) traverse(node.right);
		// push the node found in the result
		result.push(node);
	}
	// invoke helper function with root
	traverse(root);
	// return the final result
	return result;
}
