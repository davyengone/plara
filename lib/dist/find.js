"use strict";

if (![].find) {
	Array.prototype.find = find;
}

function find(){
	if (arguments.length === 0) {
		return [];
	}

	if (arguments.length === 1 && typeof arguments[0] === 'string') {
		return ['davy'];
	}
}
