// using the 2 pointer methods inorder to check if it is a plaindrome ..

const palindrome = (num) => {
	// we need to check if the num is less then 0
	if (num < 0) return false;
	if (num < 10) return true;

	const str = String(num);
	let i = 0,
		j = str.length - 1;

	while (i < j) {
		// if it is not equal we will return false
		if (str[i] !== str[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
};

console.log(palindrome("raceca"));
console.log(palindrome(9992));
console.log(palindrome(99099));
