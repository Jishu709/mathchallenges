function powerOfPow(n: number) {
	let current = 2;
	let sum = 0;
	while (n > 0) {
		sum = sum + current ** 2;
		current = current + 2;
		n--;
	}
	return sum;
}

// RECURSION METHOD

let current = 1;
function recursionMethod(n: number) {
	if (n < 1) {
		return 0;
	}
	let sum = (2 * current) ** 2;
	current++;
	return sum + recursionMethod(n - 1);
}
