"use strict";

function mod(number) {
	return function next(value) {
		return value % number;
	}
}

// function mod3 (value) {
// 	return mod(3) (value);
// }

var mod3 = mod (3);

console.log(mod(2)(11));
console.log(mod3(8));


function isRelevant(number) {
	return (number % 3 == 0) || (number % 5 == 0);
}

function countRelevantUpTo(number) {
	var sum = 0;
	for (var i = 0; i<number; i++) {
		sum += isRelevant(i) ? i : 0;
	}
	return sum;
}

console.log(countRelevantUpTo(1000));




