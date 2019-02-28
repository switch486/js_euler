"use strict";

function mod(number) {
	return function next(value) {
		return value % number;
	}
}

var mod3 = mod (3);
var mod5 = mod (5);

console.log(mod3(8));


function isRelevant(number) {
	return mod3(number) == 0 || mod5(number) == 0;
}

function countRelevantUpTo(number) {
	var sum = 0;
	for (var i = 0; i<number; i++) {
		sum += isRelevant(i) ? i : 0;
	}
	return sum;
}

console.log(countRelevantUpTo(1000));




