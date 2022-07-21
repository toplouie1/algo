var firstUniqChar = function (s) {
	let map = {};
	for (let i = 0; i < s.length; i++) {
		if (s[i] in map) {
			map[s[i]].push(i);
		} else {
			map[s[i]] = [i];
		}
	}
	console.log(map);

	for (y in map) {
		if (map[y].length === 1) {
			return map[y];
		}
	}

	console.log(map);

	return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("heyhowareyou"));
console.log(firstUniqChar("loveleetcode"));
