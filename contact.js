'use strict';

function Contact (contactData) {
	this._name = contactData.name;
	this._email = contactData.email;
	this._hear = contactData.hear;
	this._visit = contactData.visit;
	this._comments = contactData.comments;
	this._signup = contactData.signup;
};

Contact.prototype.name = function () {
	return this._name;
};

Contact.prototype.upperCaseName = function () {
	return this._name.toUpperCase();
};

Contact.prototype.email = function () {
	return this._email;
};

Contact.prototype.hear = function () {
	return this._hear;
};

Contact.prototype.visit = function () {
	return this._visit;
};

Contact.prototype.comments = function () {
	return this._comments;
};

Contact.prototype.signup = function () {
	return this._signup;	
};