// each lemonad cost 5

// customer are standing in line
// and can order 1 a the time
// each customer can buy 1 lemondade
// cusomer can buy
// 5,10,20

// total = 0

// cost =  5
// can but only 1 lemonade

[5][(5, 10, 20)];

const lemonade = (arr) => {
	// return false if you do not have change
	// else opposite
	let fives = 0;
	let tens = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 5) {
			fives++;
		} else if (arr[i] === 10) {
			tens++;
			fives--;
		} else if (arr[i] === 20) {
			if (tens > 0) {
				tens--;
				fives--;
			} else {
				fives -= 3;
			}
		}

		if (fives < 0) {
			return false;
		}
	}
	return true;
};

console.log(lemonade([5, 10, 5, 5, 5, 5, 5, 20]));

var lemonadeChange = function (bills) {
	let fives = 0,
		tens = 0;
	for (let bill of bills) {
		if (bill === 5) {
			fives++;
		} else if (bill === 10) {
			fives--;
			tens++;
		} else if (bill === 20 && tens > 0) {
			fives--;
			tens--;
		} else {
			fives -= 3;
		}
		if (fives < 0) return false;
	}
	return true;
};
