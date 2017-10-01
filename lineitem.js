'use strict';

function LineItem (LineItemData) {
	this._product = LineItemData.product;
	this._quantity = LineItemData.quantity;
};

LineItem.prototype.product = function () {
	return this._product;
};

LineItem.prototype.quantity = function () {
	return this._quantity;
};

LineItem.prototype.subtotal = function () {
	return this._quantity * this._product.price();
};