//Array
//#1
// var arr = [1,2,3,4,5];
// for (var i = 0; i < arr.length; i++){
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i])
//   }
// }

//#1
// var arr = []
// for (var i = 1; i < 10; i++) {
//   if (i % 2 === 1) {
//     arr.push(i);
//   }
// }
// console.log(arr)

//#2
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var s = 1;
// for (var i = 0; i < arr.length; i++){
//     s *= 2;
//   console.log(s)
// }

//#3
// var a = process.argv[2]
// a = parseInt(a);
// var d = process.argv[3]
// d = parseInt(d);
//
// var arr = [0,1,2,3,4,5,6,7,8,9];
// var s = 1;
// for (var i = 0; i < arr.length; i++){
//     arr[i] = a + d * arr[i];
//   console.log(arr[i])
// }
// console.log(arr)

//#4
// var a = process.argv[2]
// a = parseInt(a);
// var d = process.argv[3]
// d = parseInt(d);
//
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var s = d;
// for (var i = 0; i < arr.length; i++){
//   d *= s;
//   arr[i] = a * d;
//   console.log(arr[i])
// }
// console.log(arr)

//#5
// var arr = [1,1];
// var s = 0;
// for (var i = 2; i < 10; i++){
//   s = arr[i-2] + arr[i-1];
//   arr.push(s);
// }
// console.log(arr)

//#6
// var a = process.argv[2]
// a = parseInt(a);
// var b = process.argv[3]
// b = parseInt(b);
//
// var arr = [a,b];
// var sum = a;
//
// for (var i = 1; i < 10; i++){
//   sum += arr[i];
//   arr[i + 1] = sum;
// }
// console.log(arr)

//#7
// var arr = [1,2,3,4,5,6,7,8,9,10];
// for (var i = arr.length - 1; i >= 0; i--){
//   console.log(arr[i])
// }

//#8
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// var s = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i])
//     s++;
//   }
// }
// console.log("kol = " + s)

//#9
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// var s = 0;
// for (var i = arr.length; i > 0; i--) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i])
//     s++;
//   }
// }
// console.log("kol = " + s)

//#10
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// var s = 0;
// var t = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i])
//     s++;
//   }
// }
// console.log("kol = " + s)
// for (var j = arr.length - 1; j >= 0; j--) {
//   if (arr[j] % 2 === 1) {
//     console.log(arr[j])
//     t++;
//   }
// }
// console.log("kol = " + t)

//#11
// var k = process.argv[2];
// k = parseInt(k);
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = 0; i < arr.length; i += k) {
//   console.log(arr[i])
// }

//#12
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = 2; i < arr.length; i += 2) {
//   console.log(arr[i])
// }

//#13
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = arr.length - 2; i >= 0; i -= 2) {
//   console.log(arr[i])
// }

//#14
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = 2; i < arr.length; i += 2) {
//   console.log(arr[i])
// }
// console.log("\n")
//
// for (var i = 1; i < arr.length - 1; i += 2) {
//   console.log(arr[i])
// }

//#16
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[arr.length - 1 - i])
//   console.log(arr[i])
// }

//#17
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[arr.length - 1 - i])
//   console.log(arr[i])
// }

//#18
// var s = 0;
//  var arr = [7,8,9,7,6,6,7,10,12,13,6];
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[i] < arr[10]) {
//      console.log(arr[i])
//      s = 1;
//      return 0;
//    }
//  }
//  if (s !== 1) {
//    console.log(0)
//  }

//#19
// var s = 0;
//  var arr = [1,1,9,7,6,5,7,10,12,13,12];
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[1] < arr[i] && arr[i] < arr[10]) {
//      s = arr[i];
//    }
//  }
//  console.log(s)

//#20
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var sum = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = k; i <= l; i++) {
//   sum +=arr[i]
// }
// console.log(sum)

//#21
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var a = 0;
// var sum = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = k; i <= l; i++) {
//   sum +=arr[i];
//   a++;
// }
// console.log(sum / a)

//#22
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var sum = 0;
// var otvet = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = 0; i < arr.length; i++) {
//   otvet += arr[i];
// }
// for (var i = k; i <= l; i++) {
//   sum +=arr[i]
// }
// console.log(otvet - sum)

//#23
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var sum = 0;
// var otvet = 0;
// var s = 0;
// var t = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = 0; i < arr.length; i++) {
//   otvet += arr[i];
//   s++;
// }
// for (var i = k; i <= l; i++) {
//   sum +=arr[i];
//   t++;
// }
// console.log((otvet - sum)/(s-t))

//#24
// var arr = [2,4,6,8,10,12];
// var s = 0;
// var prov = 0;
// s = arr[1] - arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if ((arr[i + 1] - arr[i]) === s) {
//     prov++;
//   }
// }
//
// if (prov === arr.length - 1 ) {
//   console.log("AR_prog")
//   console.log("raznost = " + s)
// } else {
//   console.log("NOT AR_prog")
// }

//#26
// var arr = [1,2,3,4,5,4,7,8];
// var s = 0,t = 0;
// for (var i = 0; i < arr.length - 1; i++) {
//   if ((arr[i] % 2 === 1 && arr[i + 1] % 2 === 0) || (arr[i] % 2 === 0 && arr[i + 1] % 2 === 1)){
//     s++;
//   } else {
//     console.log(arr[i])
//     return 0;
//   }
// }
// if (s === arr.length - 1) {
//   console.log("chereduyutsya")
// } else {
//   console.log("0")
// }

//#27
// var arr = [1,-3,-4,-5,7,-8];
// var s = 0,t = 0;
// for (var i = 0; i < arr.length; i++) {
//   if ((arr[i] > 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] > 0)){
//     s++;
//   }
// }
// if (s === arr.length - 1) {
//   console.log("chereduyutsya")
// } else {
//   console.log("0")
// }

//#28
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   min = arr[0];
//   for (var i = 0; i < arr.length; i += 2) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   console.log("min = " + min)
// }

//#29
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   max = arr[1];
//   console.log(arr[1])
//   for (var i = 1; i < arr.length; i += 2) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log("min = " + max)
// }

//#30
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       console.log(i)
//       s++;
//     }
//   }
//   console.log("kol = " + s)
// }

//#31
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   for (var i = arr.length; i > 0; i--) {
//     if (arr[i] > arr[i - 1]) {
//       console.log(i)
//       s++;
//     }
//   }
//   console.log("kol = " + s)
// }

//32
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var min = 0;
//   for (var i = 1; i < arr.length;i++) {
//     if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) {
//       console.log(i);
//        i = arr.length;
//     }
//   }
// }

//#34
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var max = 0;
//   for (var i = 1; i < arr.length;i++) {
//     if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1] && arr[i] > max) {
//       max = arr[i];
//       console.log(max)
//     }
//   }
// }

//#35
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var min = 0;
//   min = arr[1];
//   for (var i = 1; i < arr.length;i++) {
//     if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1] && arr[i] < min) {
//       min = arr[i];
//
//     }
//   }
//   console.log(min)
// }

//#37 38 39
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var num = 0;
//   for (i = 2; i <= n; i++) {
//     if ((arr[i - 2] < arr[i - 1]) && !(arr[i - 1] < arr[i])){
//         num++;
//     }
// }
// console.log(num)
// }

//#38
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var num = 0;
//   for (i = 2; i <= n; i++) {
//     if ((arr[i - 2] > arr[i - 1]) && !(arr[i - 1] > arr[i])){
//         num++;
//     }
// }
// console.log(num)
// }

//#39
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var num = 0;
//   var num2 = 0;
//   for (i = 2; i <= n; i++) {
//     if ((arr[i - 2] > arr[i - 1]) && !(arr[i - 1] > arr[i])){
//         num++;
//     }
//     if ((arr[i - 2] < arr[i - 1]) && !(arr[i - 1] < arr[i])){
//         num2++;
//     }
// }
// console.log(num + num2)
// }

//#40
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var r = process.argv[3];
// r = parseInt(r);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var min = arr[0] - r;
//   var nomer = 0;
//   var num = 0;
//   for (var i = 1; i < arr.length; i++) {
//     if ((arr[i] - r) < min) {
//       min = (arr[i] - r)
//       nomer = i;
//       num = arr[i]
//     }
//   }
// console.log("nomer chisla = " + (nomer + 1),"chislo = " + num)
// }

//#41
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var max = 0;
//   var sum = 0;
//   for (var i = 1; i < arr.length - 1; i++) {
//     sum = (+arr[i - 1] + +arr[i + 1]);
//     console.log(sum)
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   console.log(" " + max)
// }

//#42
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var r = process.argv[3];
// r = parseInt(r);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var max = (+arr[0] + +arr[2]) - r;
//   var n1,n2;
//   var sum = 0;
//   var max = 0;
//   for (var i = 0; i < arr.length - 2; i++) {
//     max = +arr[i] + +arr[i + 2]
//     if ((max - r) > max) {
//       sum = max;
//       n1 = i;
//       n2 = i + 2;
//       console.log(sum)
//     }
// }
// console.log(n1,n2,sum)
// }

//#43

//#44
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//       console.log(i,j)
//       }
//     }
//   }
//   //console.log(i,j)
// }

//#45
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var min = 0;
//   var n1 = 0;
//   var n2 = 0;
//   min = arr[0] - arr[1];
//   for (var i = 0; i < arr.length; i++) {
//     if ((arr[i] - arr[i + 1]) > min) {
//       min = (arr[i] - arr[i + 1])
//       n1 = i;
//       n2 = i + 1;
//       console.log(n1,n2)
//     }
//   }
// }

//#46

//#47
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   var temp = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for(var j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   for (i = 0; i < arr.length; i++){
//     if (arr[i] != arr[i + 1]) {
//       s++;
//     }
//   }
//   console.log(s)
// }

//#48
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var max = 0;
//   var s = 1;
//   for (i = 0; i < arr.length; i++){
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         s++;
//       }
//     }
//     if (s > max) {
//       max = s;
//     }
//     s = 0;
//   }
//   console.log(max)
// }

//#49!!!!!!!!!!!!!!
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line);
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1() {
//   var s = 0;
//   var temp = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for(var j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//
//   for (i = 1; i <= n; i++) {
//     if (arr[i - 1] === i) {
//       s++;
//     } else {
//       tmp = arr[i - 1];
//     }
//   }
//   if (s === n) {
//     console.log(0)
//   }
// }

//#50
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       s++;
//     }
//   }
//   console.log(s)
// }

//#51
// var arr = [1,2,3,4,5,6];
// var arr2 = [1,3,5,7,9,1];
// var tmp = [];
//   tmp = arr;
//   arr = arr2;
//   arr2 = tmp;
//   console.log(arr,arr2)

//#52
// var arr = [1,2,3,6,7,8,9];
// var arr2 = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] <= 5) {
//       arr2[i] = arr[i]
//     }
//     if (arr[i] > 5) {
//       arr2[i] = arr[i] / 2;
//     }
//   }
//   console.log(arr2)

//#53
// var a = [5,6,7,2,10];
// var b = [1,12,6,11,7];
// var c = [];
// var maxA = a[0];
// var maxB = b[0];
// var indexA = a[0];
// var indexB = b[0];
//   for(var i = 1; i < a.length; i++) {
//     if (a[i] > maxA) {
//       maxA = a[i];
//       indexA = i;
//     }
//     if (b[i] > maxB) {
//       maxB = b[i];
//       indexB = i;
//     }
//   }
//   c[indexA] = maxA;
//   c[indexB] = maxB;
// console.log(c)

// #54
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//       b[j++] = a[i];
//     }
//   }
// console.log(b,b.length)

// #55
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
//   for (var i = 1; i < a.length; i += 2) {
//     b[j++] = a[i];
//   }
// console.log(b,b.length)

//#56
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
//   for (var i = 3; i < a.length; i += 3) {
//     b[j++] = a[i];
//   }
// console.log(b,b.length)

//57
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
//   for (var i = 2; i < a.length; i += 2) {
//     b[j++] = a[i];
//   }
//   for (var i = 1; i < a.length; i += 2) {
//     b[j++] = a[i];
//   }
// console.log(b,b.length)

//#58
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
// var sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     sum += a[i];
//     b[j++] = sum;
//   }
// console.log(b,b.length)

//#59
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
// var sum = 0;
// var sr = 0;
// var n = 0;
//   for (var i = 0; i < a.length; i++) {
//     n++;
//     sum += a[i];
//     sr = sum / n;
//     b[j++] = sr;
//   }
// console.log(b,b.length)

//#60
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
// var sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     for (var k = i; k < a.length; k++) {
//       sum += a[k];
//       b[i] = sum;
//     }
//     sum = 0;
//   }
// console.log(b,b.length)

//61
// var a = [1,2,3,4,5,6,7,8,9];
// var b = [];
// var j = 0;
// var sr = 0;
// var n = 0;
// var sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     for (var k = i; k < a.length; k++) {
//       n++;
//       sum += a[k];
//       sr = sum / n;
//       b[i] = sr;
//     }
//     sum = 0;
//     n = 0;
//   }
// console.log(b,b.length)

//#63
// var a = [1,3,5,7,9];
// var b = [4,8,11,6,10];
// var c = [];
// var k = 0;
// var temp = 0;
// for (var i = 0; i < 5; i++) {
//   c[k++] = a[i];
//   c[k++] = b[i];
// }
// console.log(c)
//
// for(var i = 0; i < c.length; i++) {
//   for(var j = 0; j < c.length; j++){
//     if (c[j] > c[j + 1]) {
//       temp = c[j];
//       c[j] = c[j + 1];
//       c[j + 1] = temp;
//     }
//   }
// }
// console.log(c)

//#64
// var a = [1,14,15,7,9];
// var b = [4,8,11,5,10];
// var c = [2,13,3,6,12];
// var d = [];
// var k = 0;
// var temp = 0;
// for (var i = 0; i < 5; i++) {
//   d[k++] = a[i];
//   d[k++] = b[i];
//   d[k++] = c[i];
// }
// console.log(d)
//
// for(var i = 0; i < d.length; i++) {
//   for(var j = 0; j < d.length; j++){
//     if (d[j] < d[j + 1]) {
//       temp = d[j];
//       d[j] = d[j + 1];
//       d[j + 1] = temp;
//     }
//   }
// }
// console.log(d)

//#65
// var arr = [1,5,2,4,6,8];
// for (var i = 0; i < arr.length; i++) {
//   arr[i] += arr[i];
// }
// console.log(arr)

//#66
// var arr = [2,5,4,4,10,16];
// var f = 0;
// var znak = true;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0 && znak === true) {
//     f = arr[i];
//     znak = false;
//   }
//   if (arr[i] % 2 === 0) {
//     arr[i] += f;
//   }
// }
// console.log(arr)

//#67
// var arr = [2,5,4,4,11,16];
// var f = 0;
// var znak = true;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     f = arr[i];
//   }
// }
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     arr[i] += f;
//   }
// }
// console.log(arr)

//#68
// var arr = [4,5,1,4,11,16];
// var max = arr[0];
// var min = arr[0];
// var nomerMin = 0, nomerMax = 0;
//
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     nomerMax = i;
//   }
// }
// console.log(max,nomerMax + 1)
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       nomerMin = i;
//     }
// }
// console.log(min,nomerMin + 1)
// arr[nomerMax] = min;
// arr[nomerMin] = max;
// console.log(arr)

//#69
// var arr = [4,5,67,7,1,2,4,3];
// var temp = 0;
// for (var i = 0; i < arr.length; i += 2) {
//   temp = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = temp;
// }
// console.log(arr)

//#70
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var temp = 0;
//   for (var i = 0; i < n / 2;i++) {
//     temp = arr[i + n / 2];
//     arr[i + n / 2] = arr[i];
//     arr[i] = temp;
//   }
//   console.log(arr)
// }

//#71
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var j = 0;
//   var arr2 = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     arr2[j++] = arr[i];
//   }
//   console.log(arr2)
// }

//#72
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// var l = process.argv[4];
// l = parseInt(l);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var j = 0;
//   var arr2 = [];
//   for (var i = l; i >= k; i--) {
//     arr2[j++] = arr[i];
//   }
//   console.log(arr2)
// }

//#73
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// var l = process.argv[4];
// l = parseInt(l);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var j = 0;
//   var arr2 = [];
//   for (var i = l - 1; i > k; i--) {
//     arr2[j++] = arr[i];
//   }
//   console.log(arr2)
// }

//#74
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var j = 0;
//   var max = arr[0];
//   var min = arr[0];
//   var nomerMax = arr[0];
//   var nomerMin = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       nomerMax = i + 1;
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//       nomerMin = i + 1;
//     }
//   }
//   console.log(nomerMax,nomerMin)
//   for (var j = nomerMin; j < nomerMax - 1; j++) {
//     arr[j] = 0;
//   }
//   console.log(arr)
// }

//#75
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var k = 0;
//   var temp = 0;
//   var max = arr[0];
//   var min = arr[0];
//   var nomerMax = arr[0];
//   var nomerMin = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       nomerMax = i + 1;
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//       nomerMin = i + 1;
//     }
//   }
//   console.log(nomerMax,nomerMin)
//   for (var j = nomerMax - 1; j > nomerMin - 1; j--) {
//     temp = arr[nomerMin++];
//     arr[nomerMin] = arr[j];
//     arr[j] = temp;
//   }
//   console.log(arr)
// }

//#76
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//       arr[i] = 0;
//     }
//   }
// console.log(arr)
// }

//#77
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) {
//       arr[i] *= arr[i];
//     }
//   }
// console.log(arr)
// }

//#78
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   for (var i = 1; i < arr.length - 1; i++) {
//     s = (arr[i] + arr[i - 1] + arr[i + 1]) / 3;
//     arr[i] = s
//   }
//   arr[0] = (arr[0] + arr[1]) / 2;
//   arr[arr.length - 1] = (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
// console.log(arr)
// }

//#79
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   for (var i = arr.length - 1; i >= 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = 0;
// console.log(arr)
// }

//#80
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   for (var i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = 0;
// console.log(arr)
// }

//81
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   for (var i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - k];
//   }
//   for (var j = 0; j < k; j++) {
//     arr[j] = 0;
//   }
// console.log(arr)
// }

//#82
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + k];
//   }
//   for (var j = arr.length - 1; j >= arr.length - k; j--) {
//     arr[j] = 0;
//   }
// console.log(arr)
// }

//#83
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var temp = 0;
//   temp = arr[arr.length - 1];
//   for (var i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = temp;
// console.log(arr)
// }

//#84
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var temp = 0;
//   temp = arr[0];
//   for (var i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
// console.log(arr)
// }

//#85
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var arr2 = [];
//   for (var j = arr.length - 1; j > arr.length - 1 - k; j--) {
//     arr2.push(arr[j])
//   }
//   for (var i = arr.length - 1; i >= 0; i--) {
//     arr[i] = arr[i - k];
//   }
//   for (i = 0; i < k; i++) {
//     arr[i] = arr2[i]
//   }
// console.log(arr)
// }

//#86
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var arr2 = [];
//   var s = 0;
//   for (var j = 0; j < k; j++) {
//     arr2.push(arr[j])
//   }
//   for (var i = 0; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + k];
//   }
//   for (i = k - 1; i < arr.length; i++) {
//     arr[i] = arr2[s++];
//   }
// // console.log(arr2)
// console.log(arr)
// }

//#87
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var temp = arr[0];
//   arr[arr.length] = arr[0];
//   for (var i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1]
//   }
// console.log(arr)
// }

//#90
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 0; i < arr.length - 1; i++) {
//     if (i === k) {
//       delete arr[i];
//     }
//   }
// console.log(arr)
// }

//#91
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// var l = process.argv[4];
// l = parseInt(l);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = k; i <= l; i++) {
//       delete arr[i];
//   }
// console.log(arr,arr.length)
// }

//#92
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 1) {
//         delete arr[i];
//       }
//   }
// console.log(arr,arr.length)
// }

//93
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 2; i < arr.length; i += 2) {
//         delete arr[i];
//   }
// console.log(arr,arr.length)
// }

//#94
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 1; i < arr.length; i += 2) {
//         delete arr[i];
//   }
// console.log(arr,arr.length)
// }

//#95
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === arr[i + 1]) {
//         delete arr[i + 1];
//       }
//   }
// console.log(arr,arr.length)
// }

//#96
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         delete arr[j];
//       }
//     }
//   }
// console.log(arr,arr.length)
// }

//#97
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// var arr = [];
// var n = process.argv[2];
// n = parseInt(n);
//
// let count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         delete arr[i];
//       }
//     }
//   }
// console.log(arr,arr.length)
// }
