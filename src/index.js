module.exports = function longestConsecutiveLength(array) {
	// your solution here
	let hash = {}, maxLength = 0;

	for (let i = 0; i < array.length; i++) {
		hash[array[i]] = array[i];
	}

	for (const key in hash) {
		if (hash[+key - 1] === undefined) {
			let j = 0;
			while (hash[+key + j] !== undefined) {
				j++;
			}
			maxLength = Math.max(maxLength, j);
		}
	}

	return maxLength;
}