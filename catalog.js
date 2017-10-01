'use strict';

function Catalog () {
	this._items = [];
};

Catalog.prototype.addProduct = function (product) {
	this._items.push(product);
};

Catalog.prototype.length = function () {
	return this._items.length;
};

Catalog.prototype.get = function (index) {
	var item = this._items[index];
	return item;
};