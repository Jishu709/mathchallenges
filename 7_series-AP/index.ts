function seriesAP(x: number, y: number, n: number) {
	let diff = 0;
	if (x > y) {
		diff = x - y;
	}
	diff = y - x;
	let count = 1;
	let nthItem = 0;

	while (count <= n) {
		nthItem = nthItem + diff;
        count++;
	}
	return nthItem;
}

console.log(seriesAP(2, 4, 5));
