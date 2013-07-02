/**
 * Copyright  © 2013  Verifi, Corp. 
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
//This commented area below  is a try. A try to recieve input from command prompt. but unfortunately it is not working. 
var getIn = function ()	{ 
var numberFromPrompt=0;
var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

	prompts.question("Untill How much do you wanna fing the prime Number Series? ", function  (numberFromPrompt) {
		console.log(numberFromPrompt);
			});
};
/*
the function above is not working as i decided. this function was designed to recieve maximum limit from the command line itself.
need some modifications.
*/
var fs=require("fs"); //file stream object initialized
var arr=[]; //array initialized, to push prime numbers 
var outfile = "primeNumber.txt"; // file to be created and prime numbers to be shown
/*
 The pusher function is a  small, intelligent function to do much more things. Simply pushes the prime number parametered from function 'loopMe' to the array.
*/
var pusher = function(number) {
	arr.push(number);
	};		
/*
the function fmt is used to concatanate items in the array with " " for console/file friendly output.
*/		
var fmt = function(arr) {
	return arr.join(" ");
	};		
/*
This is the major function in this snippet. this function gives us the result that is the number is prime or not. it recieves input from 'loopMe' and returns is it a prime or not.
*/
var isPrime = function(num) {
	if(num < 2)	{
		return false;
	}
	for (var i = 2; i < num; i++)	{
		if(num%i==0)	{
			return false;
		}
	}
return true;
};
var printMe =function()	{		
	console.log(fmt(arr));
	fs.writeFileSync(outfile, fmt(arr));
};
var loopMe = function (maxim)	{
	for (numb=0;numb<=maxim;numb++)	{
		var bool=isPrime(numb);
			if(bool===true)	{
				pusher(numb);
			}
	}
printMe();
};


loopMe(100);
