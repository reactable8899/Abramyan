//Series
//#1
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 0;
// // функция для чтения из stdin
// rl.on('line', line => {
//   // читаем строку
//   line = parseInt(line);
//   count++;
//   sum += line;
//   // если количество введенных строк равно N, то перестаем считать и выходим
//   if (count === n) {
//     // выводим ответ перед выходом
//     console.log(sum);
//     rl.close();
//   }
// })

//#2
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 1;
// rl.on('line', line => {
//   line = parseInt(line);
//   count++;
//   sum *= line;
//   if (count === n) {
//     console.log(sum);
//     rl.close();
//   }
// })

//#3
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 0;
// rl.on('line', line => {
//   line = parseInt(line);
//   count++;
//   sum += line;
//   if (count === n) {
//     console.log(sum/count);
//     rl.close();
//   }
// })

//#4
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 0;
// let r = 1;
// rl.on('line', line => {
//   line = parseInt(line);
//   count++;
//   sum += line;
//   r *= line;
//   if (count === n) {
//     console.log(sum);
//     console.log(r);
//     rl.close();
//   }
// })

//#5
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 0;
// rl.on('line', line => {
//   line = parseInt(line);
//   count++;
//   sum += line;
//   if (count === n) {
//     console.log(line);
//     console.log(sum);
//     rl.close();
//   }
// })

//#6
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 0;
// var r = 1;
// rl.on('line', line => {
//     line = parseFloat(line);
//     drob = parseInt(line);
//     count++;
//     sum += line - drob;
//     r *= line - drob;
//   if (count === n) {
//     console.log(sum);
//     console.log(r);
//     rl.close();
//   }
// })

//#7
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 0;
// var r = 1;
// rl.on('line', line => {
//     line = parseInt(line);
//     console.log(line)
//     count++;
//   if (count === n) {
//     rl.close();
//   }
// })

//#8
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// rl.on('line', line => {
//     line = parseInt(line);
//     if ( ( line % 2 ) == 1 ){
//       console.log(line)
//     } else {
//       console.log("четное")
//     }
//     count++;
//   if (count === n) {
//     rl.close();
//   }
// })

//#10
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// let sum = 0;
// var r = 1;
// rl.on('line', line => {
//     line = parseInt(line);
//     if (line > 0) {
//       console.log("true")
//     } else {
//       console.log("false")
//     }
//   if (count === n) {
//     rl.close();
//   }
// })

//№11
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// let k = process.argv[3];
// k = parseInt(k);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// rl.on('line', line => {
//     line = parseInt(line);
//     if (line === k) {
//       console.log("true")
//     } else {
//       console.log("false")
//     }
//     count++;
//   if (count === n) {
//     rl.close();
//   }
// })

//#12
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// rl.on('line', line => {
//     line = parseInt(line);
//     if (line == 0) {
//     rl.close();
//     }
//     console.log(line)
//     count++;
//   if (count === n) {
//     rl.close();
//   }
// })

//#13
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// rl.on('line', line => {
//     line = parseInt(line);
//     if (line == 0) {
//     rl.close();
//     }
//     if ( ( ( line % 2 ) == 0 ) && ( line > 0 ) ) {
//       console.log(line)
//     } else {
//       console.log(0)
//     }
//     count++;
//   if (count === n) {
//     rl.close();
//   }
// })

//#15
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// let k = process.argv[3];
// k = parseInt(k);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// rl.on('line', line => {
//   count++;
//     line = parseInt(line);
//     if (line === k) {
//     s = count;
//       console.log(s)
//     }
//   if (count === n) {
//     rl.close();
//   }
// })

//#17
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// let k = process.argv[3];
// k = parseFloat(k);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// rl.on('line', line => {
//   count++;
//     line = parseInt(line);
//     if (line < k) {
//       console.log(k)
//     }
//     console.log(line)
//   if (count === n) {
//     rl.close();
//   }
// })

//#19
// const readline = require('readline');
// let n = process.argv[2];
// n = parseInt(n);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// var s = 0;
// rl.on('line', line => {
//   count++;
//   if ( s > line ) {
//       console.log( " " + s)
//   }
//   s = line;
//   if (count === 1) {
//     s = 0;
//     return ;
//   }
//   if (count === n) {
//     rl.close();
//   }
// })
