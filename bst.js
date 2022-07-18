class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BST {
	constructor(value) {
		this.root = new Node(value);
		this.count = 0;
	}

	size() {
		return this.count;
	}
	insert(value) {
		this.count++;
		let newNode = new Node(value);
		const searchTree = (node) => {
			// ask if the value is smaller then the node.val ;l
			if (value < node.value) {
				// if there is no node.left we could append the value
				if (!node.left) {
					node.left = newNode;
				} else {
					// we do a recursive call on the node.left
					searchTree(node.left);
				}
				// else if the value is greater then the node.value it means
				// it is most likely in the right side ...
			} else if (value > node.value) {
				if (!node.right) {
					node.right = newNode;
				} else {
					searchTree(node.right);
				}
			}
		};
		searchTree(this.root);
	}

	min() {
		let currentNode = this.root;
		// only go towards left because the smallest is all the way at the left
		while (currentNode.left) {
			currentNode = currentNode.left;
		}
		return currentNode.value;
	}
	max() {
		let currentNode = this.root;
		// only go towards the right because the right has the biigest value ..
		while (currentNode.right) {
			currentNode = currentNode.right;
		}
		return currentNode.value;
	}

	contains(value) {
		let currentNode = this.root;
		while (currentNode) {
			if (value === currentNode.value) {
				return true;
			}
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return false;
	}

	// depth first search
	// searching algrorithms

	//inorder;
	inorder() {}

	// pre order ;
	preOrder() {}
	// post order;
	postOrder() {}

	// breadth for search
}
