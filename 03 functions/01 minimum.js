/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

function min(a, b) {
	if (a >= b) {
		return b;
	}
	return a;
}

console.log(min(3, 5));