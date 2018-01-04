// Prime factors of 13195 are 5, 7, 13 and 29.

// what is the largest prime factor of the number 600851475143?

/* Goals:
 * 1) is a number prime
 * 2) find largest number
 */

function largestPrimeFactor(n) {
	var d = Math.ceil(Math.sqrt(n));

	function isPrime(n) {
		var i, limit = Math.ceil(Math.sqrt(n));
		for(i = 3; i <= limit; i += 2) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	}
	// Ternary statement
	d = (d & 1 === 0) ? d - 1 : d;

	while(!(n % d === 0 && isPrime(d))) {
		d -= 2;
	}
	return d;
}

console.log("The prime phat factor is " + largestPrimeFactor(600851475143));
