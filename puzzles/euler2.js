// Fibonacci Sequence, adding previous two terms, starting with 1 and 2. 

// consider fibonacci sequence up to limit 4 million, find the sum of even valued terms.

function evenSum(limit) {
	var temp, a = 0, b = 1, sum = 0;
	while(b < limit) {
		// using temp variable as a placeholder to allow values to transfer values.
		temp = a;
		a = b;
		b += temp;
		if ((b & 1) === 0) {
			sum += b;
		}
	}
	return sum;	
}

console.log("Survey says: " + evenSum(4e6));
