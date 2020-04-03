//Стандартное отклонение
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// var n = process.argv[2];
// n = parseInt(n);
//
// var arr = [];
// var count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//
//   if (line === 0) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 0;
//   var n = count - 1;
//   var q = 0;
//   for (var i = 0; i < arr.length - 1; i++) {
//     s += arr[i] / n;
//   }
//
//   for (var j = 0; j < arr.length - 1; j++) {
//     q += (arr[j] - s) * (arr[j] - s);
//   }
//   q = Math.sqrt(q / (n - 1))
//   console.log(q)
// }

//Максимальное число идущих подряд равных элементов
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// var n = process.argv[2];
// n = parseInt(n);
//
// var arr = [];
// var count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//
//   if (line === 0) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var s = 1;
//   for (var i = 0; i < arr.length - 2; i++) {
//     if (arr[i] === arr[i + 1]) {
//       s++;
//     }
//   }
//   console.log(s)
// }

//A[0], A[2], A[4]
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// var n = process.argv[2];
// n = parseInt(n);
//
// var arr = [];
// var count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   for (var i = 0; i < arr.length; i += 2) {
//     console.log(arr[i])
//   }
// }

//Переставить соседние элементы
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// var n = process.argv[2];
// n = parseInt(n);
//
// var arr = [];
// var count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   var temp = 0;
//   for (var i = 0; i < arr.length - 1; i += 2) {
//     temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//   }
//   console.log(arr)
// }

//Шеренга
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// var n = process.argv[2];
// n = parseInt(n);
//
// var k = process.argv[3];
// k = parseInt(k);
//
// var arr = [];
// var count = 0;
//
// rl.on('line', line => {
//   line = parseInt(line)
//   arr.push(line);
//   count++;
//
//   if (count === n) {
//     array1();
//     rl.close();
//   }
// })
//
// function array1(){
//   arr.push(k);
//   var temp = 0;
//   var nomer = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === k) {
//       nomer = i;
//     }
//   }
//   console.log(arr)
//   console.log(nomer + 1)
// }
