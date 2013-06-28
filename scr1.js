// JavaScript Document
var os=require('os');
var message = 'Running on Node.js'
	+ process.version +
	os.type() ;
console.log(message);