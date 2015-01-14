"use strict";

if (![].find) {
	Array.prototype.find = find;
}

function find(args){
	if (arguments.length === 0) {
		return [];
	}

	if (arguments.length === 1 && typeof arguments[0] === 'string') {
		var result;

		this.forEach(function(item){
			if (item === args){
				result = item;
				return;
			}
		});

		return [result];
	}
}
