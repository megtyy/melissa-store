'use strict';

function Cart() {
	this._lineItems = [];
};

Cart.prototype.addLineItem = function (lineItem) {
	this._lineItems.push(lineItem);
};

Cart.prototype.length = function () {
	return this._lineItems.length;
};

Cart.prototype.get = function (index) {
	var item = this._lineItems[index];
	return item;
};

Cart.prototype.total = function (){
	var total = 0;
	for (var i = 0; i < this._lineItems.length; i++) {
		var lineItemI = this._lineItems[i];
		var subtotal = lineItemI.subtotal();
		total = subtotal + total;
	}
	return total;
};