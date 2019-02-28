"use strict";

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




