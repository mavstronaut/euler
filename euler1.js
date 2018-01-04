// Find the sum of all the multiples of 3 or 5 below 1000.

function multiplesum(limit) {
	var i, sum = 0;
	for(i = 3; i < limit; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log("Answer " + multiplesum(1000));
