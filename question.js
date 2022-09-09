// return the longest substring in the strin g

const longestPalindrome = (s) => {
	if (s.length < 1 || s.length == null) return "";

	let maxPallindrome = "";
	for (let i = 0; i < s.length; i++) {
		let oddPalindrome = checkPalindrome(s, i, i);
		//in odd pallindrom the left and right center should be same
		let evenPalindrome = checkPalindrome(s, i, i + 1);
		//in even palindrom the left and right+1 should be center
		//example a b b a [so left will be from b and right will from second b]
		if (oddPalindrome.length > maxPallindrome.length) {
			maxPallindrome = oddPalindrome;
		}
		if (evenPalindrome.length > maxPallindrome.length) {
			maxPallindrome = evenPalindrome;
		}
	}
	return maxPallindrome;
};

let checkPalindrome = (str, left, right) => {
	while (left >= 0 && right < str.length) {
		if (str[left] !== str[right]) break;
		//string from left and right if doesn't matches then its not a palindrom hence break;
		right++;
		left--;
	}
	//we are taking the left and right from the center
	//so we are moving the left to more left (left--)
	//and moving the right to more right (right++)
	return str.substring(left + 1, right);
};

console.log(longestPalindrome("rarraar"));

// --- To Do in the interview ---

// Test case
// Edge case
// Don’t jump in
// Sudo code

// checking if the arr is unique

const uniques = (nums) => {
	return nums.length === new Set(nums).size;
};

console.log(uniques("389"));

const unique = (nums) => {
	const hashTab = {};
	for (let i = 0; i < nums.length; i++) {
		if (!hashTab[nums[i]]) {
			hashTab[nums[i]] = true;
		} else {
			return true;
		}
	}
	return false;
};

// two sum

let nums = [2, 7, 11, 15, 4, 5],
	target = 6;

// var twoSum = function (nums, target) {
// 	let obj = {};
// 	// add them to an obj ;

// 	// loop
// 	for (let i = 0; i < nums.length; i++) {
// 		// if the value is in the obj return the [i,i]
// 		if (nums[i] in obj) {
// 			return [obj[nums[i]], i];
// 		} else {
// 			// add target - nums[i] = i
// 			obj[target - nums[i]] = i;
// 		}
// 		console.log(obj);
// 	}
// 	return -1;
// };

var twoSum = function (nums, target) {
	let obj = {};

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] in obj) {
			return [obj[nums[i]], i];
		} else {
			obj[target - nums[i]] = i;
		}
	}
	return -1;
};
console.log(twoSum(nums, target));

// let newObj = { 1: 0, 2: 3 };
// console.log(newObj);

// let newArr = [];

// for (p in newObj) {
// 	console.log([newObj[p], p]);
// 	newArr.push(p);
// }

// console.log(Object.entries(newObj));
// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));

// console.log(newArr);

// // let sentence = "lets go ";

// console.log(sentence.charCodeAt(3));
// console.log(sentence.charAt(3));

// Cases for format_topics. There are no empty arrays.
// topics = ["Dogs"]
// Dogs

// ["Dogs", "Cats"]
// Dogs and Cats

// ["Dogs", "Cats", "Walking"]
// Dogs, Cats and Walking

let arrs = ["Dogs", "Cats", "Walking", "Knitting"];

console.log(arrs.slice(0, -1) + " " + "and" + " " + arrs[arrs.length - 1]);
// Dogs, Cats, Walking and Knitting

// const sentence = (arr) => {
// 	if (arr.length === 1) {
// 		return `${arr[0]}`;
// 	} else if (arr.length === 2) {
// 		return `${arr[0]} and ${arr[1]}`;
// 	} else if (arr.length === 3) {
// 		return `${arr[0]}, ${arr[1]} and ${arr[2]}`;
// 	} else {
// 		return `${arr[0]}, ${arr[1]}, ${arr[2]} and ${arr[3]}`;
// 	}
// };

function stringJoiner(topics) {
	//base one word case
	if (topics.length === 1) {
		return topics[0];
	} else {
		return `${topics.slice(0, -1).join(", ")} and ${topics[topics.length - 1]}`;
	}
}

const sentence = (arr) => {
	let string = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (i === arr.length - 1) {
			string += " and " + arr[i];
		} else {
			string += ", " + arr[i];
		}
	}
	return string;
};

console.log(sentence(arrs));
console.log(sentence(["Dogs"]));
console.log(sentence(["Dogs", "cats"]));

let ll = [0, 1, 2];
console.log(ll[3]);

const solution = (a) => {
	let b = [];
	let c = [];

	let i = 0;
	let j = a.length - 1;

	let halfLength = a.length / 2;
	console.log(halfLength);

	while (i < j) {
		if (!b.includes(a[i]) && b.length !== halfLength) {
			b.push(a[i]);
		} else {
			if (!c.includes(a[i]) && c.length !== halfLength) {
				c.push(a[i]);
			} else {
				return [];
			}
		}

		if (!c.includes(a[j]) && c.length !== halfLength) {
			c.push(a[j]);
		} else {
			if (!b.includes(a[j]) && b.length !== halfLength) {
				b.push(a[j]);
			} else {
				return [];
			}
		}
		i++;
		j--;
	}
	return [b, c];
};

console.log(solution([2, 1, 2, 3, 3, 4, 7, 8, 9, 10]));
