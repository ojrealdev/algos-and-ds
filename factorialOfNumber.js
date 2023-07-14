// factorial of 5 => 1*2*3*4*5

function factorial(n) {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(3)); //6
