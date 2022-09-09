// code signal tower merge ..

function solution(s1, s2) {
	let s1Obj = {};
	let s2Obj = {};
	let final = [];

	for (let each of s1) {
		s1Obj[each] ? s1Obj[each]++ : (s1Obj[each] = 1);
	}
	for (let each of s2) {
		s2Obj[each] ? s2Obj[each]++ : (s2Obj[each] = 1);
	}

	let totalLength = s1.length + s2.length;
	let i = 0;
	let j = 0;

	while (i < totalLength / 2 && j < totalLength / 2) {
		// checking which has more character
		if (s1Obj[i] < s2Obj[j]) {
			final.push(s1[i]);
			i++;
		} else if (s1Obj[i] > s2Obj[j]) {
			final.push(s2[j]);
			j++;
		} else {
			if (s1[i] < s2[j]) {
				final.push(s1[i]);
				i++;
			} else if (s1[i] > s2[j]) {
				final.push(s2[j]);
				j++;
			}
		}
	}

	if (s1[i] == undefined && s2[i]) {
		final.push(s2[j]);
		j++;
	} else if (s2[j] == undefined && s1[i]) {
		final.push(s1[i]);
		i++;
	}

	console.log(final);
}
