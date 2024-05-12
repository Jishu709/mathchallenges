// using the above solution is not optimal as it takes big-O of "n" time complexity
function sum1(n: number) {
	let temp = n;
	let sum = 0;
	while (temp >= 1) {
		sum = sum + temp;
		temp--;
	}
	return sum;
}

// Using the mathematical approach for finding the sum of n consecutive numbers from [1,n]
// the sum is given by ( n * (n+1) / 2 )
function sum2(n: number) {
	let sum = 0;
	if (n > 0) {
		sum = (n * (n + 1)) / 2;
	}
	return sum;
}
