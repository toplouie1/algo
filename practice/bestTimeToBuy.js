// [7,1,5,3,6,4] => 5

// arr[numbers] ;

const biggestValue = (arr) => {
	let maxDifference = -Infinity;
	let i = 0,
		j = 1;

	while (j < arr.length - 1) {
		if (arr[i] > arr[j]) {
			i = j;
			j++;
		} else if (arr[i] <= arr[j]) {
			maxDifference = Math.max(maxDifference, arr[j] - arr[i]);
			j++;
		}
	}
	return maxDifference;
};

console.log(biggestValue([7, 1, 5, 3, 6, 4]));

var maxProfit = function (prices) {
	// create max and min to hold values
	let max = 0;
	let min = Infinity;

	// loop the prices
	for (let i = 0; i < prices.length; i++) {
		// grabbing the smallest value
		if (prices[i] < min) {
			min = prices[i];
		} else {
			// grabbing the biggest value
			// between max or prices[i] - min
			max = Math.max(max, prices[i] - min);
		}
	}
	return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
