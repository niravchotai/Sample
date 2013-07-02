#!/usr/bin/env node

//sha-bash enviornment variable
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

 // Fibonacci
 // http://en.wikipedia.org/wiki/Fibonacci_number
 var fibonacci = function(n) {
 if(n < 1) { return 0;}
 else if(n == 1 || n == 2) { return 1;}
 else if(n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
 };// JavaScript Document
 // Fibonacci: closed form expression
//http://en.wikipedia.org/wiki/Golden_ratio#Relationship_to_Fibonacci_sequence
 var fibonacci2 = function(n) {
 var phi = (1 + Math.sqrt(5))/2;
 return Math.round((Math.pow(phi, n) - Math.pow(1-phi, n))/Math.sqrt(5));
 };

 // Find first K Fibonacci numbers via basic for loop
 var firstkfib = function(k) {
 var i = 1;
 var arr = [];
 for(i = 1; i < k+1; i++) {
 arr.push(fibonacci2(i));
 }
 return arr;
 };

 // Print to console
 var fmt = function(arr) {
 return arr.join(" ");
 };

 var k = 20;
 console.log("firstkfib(" + k + ")");
 console.log(fmt(firstkfib(k)));
