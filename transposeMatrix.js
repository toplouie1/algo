function transpose(matrix) {
	let transposedMatrix = new Array();

	for (let i = 0; i < matrix[0].length; i++) {
		transposedMatrix.push([]);
	}

	for (let i = 0; i < matrix[0].length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			console.log(matrix[j]);
			transposedMatrix[i].push(matrix[j][i]);
		}
	}
	return transposedMatrix;
}

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
	])
);
