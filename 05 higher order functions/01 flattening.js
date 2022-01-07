/*
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

function flattenArray(nestedArray) {
	let flattenedArrray = [];
	for (let array of nestedArray) {
		flattenedArrray = flattenedArrray.concat(array);
	}
	return flattenedArrray;
}

console.log(flattenArray([[1, 2, 3], [4, 5], [6]]));