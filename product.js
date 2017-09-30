'use strict';

function Product (productData) {
	this._name = productData.name;
	this._description = productData.description;
	this._size = productData.size;
	this._color = productData.color;
	this._price = productData.price;
};

Product.prototype.name = function () {
	return this._name;
};

Product.prototype.upperCaseName = function () {
	return this._name.toUpperCase();
};

Product.prototype.description = function () {
	return this._description;
};

Product.prototype.size = function () {
	return this._size;
};

Product.prototype.color = function () {
	return this._color;
};

Product.prototype.price = function () {
	return this._price;
};

Product.prototype.tax = function () {
	return this._price * .10;
};