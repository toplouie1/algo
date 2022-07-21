//1.  We have a string of characters representing buns and hot dogs. A bun is represented by 'bb' and a hotdog is represented by 'h'. A hotdog inside of a bun is represented by 'bhb'. All other characters in our string represent other things on the table and can be ignored.

// Our task is to write a few functions to help with our hot dog spread.

// First, write a function to count all hot dogs outside of a bun.

// 'xdhnbhbjbbhh' => 3

// explanation: there are four hotdogs total represented in this string, however one of them is inside of a bun. So we count 3 hot dogs.

// 'hhxxhbb' => 3

// three hot dogs none of them in buns

// First, write a function to count all hot dogs outside of a bun.

const hotDogsOutsideBun = (str) => {
	let count = 0;
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "h") {
			let lastBun = stack.pop();

			if (lastBun !== "b" || str[i + 1] !== "b") {
				count++;
			} else {
				i += 1;
			}
		} else if (str[i] === "b") {
			stack.push("b");
		}
	}
	return count;
};

console.log(hotDogsOutsideBun("hhxxhbb") === 3);
console.log(hotDogsOutsideBun("hh") === 2);
console.log(hotDogsOutsideBun("") === 0);
console.log(hotDogsOutsideBun("bhb") === 0);
console.log(hotDogsOutsideBun("xdhnbhbjbbhh") === 3);
console.log(hotDogsOutsideBun("bbhbb") === 0);
console.log(hotDogsOutsideBun("bhbhbhb") === 1);
