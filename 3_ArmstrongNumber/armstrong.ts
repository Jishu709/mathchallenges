function armstrong(n: number) {
	let temp = n;
	let res = 0;
	while (temp > 10) {
		res = res + cube(temp % 10);
		temp = Math.floor(temp / 10);
		console.log(temp, res);
	}
	res = res + cube(temp);
	if (res === n) {
		return "Yes";
	} else {
		return "No";
	}
}

// Using recursion:
function iaArmstrong(n: number) {
	const recResult = recArmstrong(n);
	if (recResult === n) {
		return "Yes";
	}
	return "No";
}

function recArmstrong(n: number) {
	if (n < 10) {
		return cube(n);
	}
	let temp = n;
	return cube(temp % 10) + recArmstrong(Math.floor(temp / 10));
}

function cube(x: number) {
	return x * x * x;
}
