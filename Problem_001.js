"use strict";

function mod(result) {
	return function next(divider) {
		return function again(value) {
			return value % divider == result;
		}
	}
}

function or (fun1, fun2) {
	return function logicalOr (args) {
		return fun1(args) || fun2(args);
	}
}

var mod0_3 = mod (0) (3);
var mod0_5 = mod (0) (5);

var isRelevant = or(mod0_3, mod0_5);

console.log (isRelevant(9));
console.log (isRelevant(11));

// refactor below

function countRelevantUpTo(number) {
	var sum = 0;
	for (var i = 0; i<number; i++) {
		sum += isRelevant(i) ? i : 0;
	}
	return sum;
}

console.log(countRelevantUpTo(1000));




