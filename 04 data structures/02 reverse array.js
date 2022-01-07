/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(array) {
	let reversedArray = [];
	for (let id in array) {
		reversedArray[array.length - 1 - id] = array[id];
	}
	return reversedArray;
}

function reverseArrayInPlace(array) {
	for (let id = 0; id < Math.floor(array.length / 2); id += 1) {
		[array[id], array[array.length - 1 - id]] = [array[array.length - 1 - id], array[id]];
	}
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]