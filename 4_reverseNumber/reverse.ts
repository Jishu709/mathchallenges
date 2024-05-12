function reverse(n: number) {
	let temp = n;
	let rev = 0;
	while (temp > 0) {
		rev = rev * 10 + (temp % 10);
		temp = Math.floor(temp / 10);
	}
	return rev;
}

let rev = 0;

function recReverse(n: number) {
	let temp = n;
	if (temp > 0) {
		rev = rev * 10 + (temp % 10);
		recReverse(Math.floor(temp / 10));
	}
	return rev;
}
