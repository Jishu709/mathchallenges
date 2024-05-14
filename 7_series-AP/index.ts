function seriesAP(x: number, y: number, n: number) {
	let diff = y - x;
	let index = n;
	let nthItem = x;

	while (index > 1) {
		nthItem = nthItem + diff;
		index--;
	}

	return nthItem;
}

function recSeriesAP(initial: number, difference: number, nth: number) {
	let temp = nth;
	if (temp <= 1) {
		return initial;
	}
	return recSeriesAP(initial + difference, difference, temp - 1);
}

console.log(seriesAP(2, 10, 5), recSeriesAP(2, 8, 5));
