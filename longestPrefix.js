// const longestPrefix = (arr) => {
// 	// initialize the first arr ;
// 	let prefix = arr[0];

// 	for (let i = 1; i < arr.length; i++) {
// 		console.log(arr[i]);

// 		while (arr[i].indexOf(prefix) !== 0) {
// 			prefix = prefix.slice(0, prefix.length - 1);
// 		}
// 	}
// 	return prefix;
// };

// console.log(longestPrefix(["flower", "flow", "flight"]));

// // using reduce ;

// var longestCommonPrefix = function(strs) {
//     'use strict';
//     if (strs === undefined || strs.length === 0) { return ''; }

//     return strs.reduce((prev, next) => {
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     });
// };

var longestCommonPrefix = function (strs) {
	let prefix = "";
	let maxPrefixLength = Math.min(...strs.map((str) => str.length));

	console.log(maxPrefixLength);

	for (let i = 0; i < maxPrefixLength; i++) {
		let char = strs[0][i];
		console.log(char);
		if (strs.every((str) => str[i] === char)) {
			prefix += char;
		} else {
			break;
		}
	}
	return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// sorting them ;

// var longestCommonPrefix = function(strs) {
//     strs.sort();
//     for (let i = 0; i < strs[0].length; i++) {
//       if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
//     }
//     return strs[0];
//   };

// 2 for loop ;
//     // Time Complexity: O(M*N), M = length of shortest word, N = length of given array
//     // Space Complexity: O(1)

// var longestCommonPrefix = function(arr) {
//     if (!arr.length) return "";
//     let prefix = "";
//     for (let i = 0; i < arr[0].length; i++) {
//         for (let j = 0; j < arr.length-1; j++) {
//             if (arr[j][i] !== arr[j+1][i]) return prefix;
//         }
//         prefix += arr[0][i];
//     }
//     return prefix;
// };

// using slice

// let longestCommonPrefix = function(strs) {
//     if(!strs.length) {
//         return '';
//     }
//     for(let i = 0; i < strs[0].length; i++) {
//         for(let s of strs) {
//             if(s[i] !== strs[0][i]) {
//                 return s.slice(0, i);
//             }
//         }
//     }
//     return strs[0];
// };
