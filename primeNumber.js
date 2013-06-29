//sha-bash enviornment variable
//For more info on prime numbers, Visit http://en.wikipedia.org/wiki/Prime_Number

/**
 * Copyright 2013 Verifi, Corp. 
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
var fs = require("fs");
var outfile = "primeNumber.txt";
function pNum(max)	{
var arr = [];
	for(i=1;i<=100;i++) {
		if(i%2 == 0) {
			arr.push(i);
			}
		}
	return arr;	
	};

var frag = function(arr) {
return arr.join("\n");
};
var max=100;

fs.writeFileSync(outfile, frag(pNum(max)));
console.log(frag(pNum(max)));