function findMedian(arr: number[]) {
	arr.sort((a, b) => a - b);
	const len = arr.length;
	const middle = len / 2;
	if (len % 2) {
		const median = arr[Math.floor(middle)] / 2;
		return median;
	}

	return arr[middle - 1] + arr[middle];
}
