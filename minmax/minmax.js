//minmax

//#1
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// let count = 0;
// var min = 0;
// var max = 0;
//
// if (n <= 0) {
//   rl.close();
// }
//
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     max = line;
//     min = line;
//   }
//   if (line > max) {
//     max = line;
//   }
//   if (line < min) {
//     min = line
//   }
//   if (count === n) {
//     console.log("Максимум = " + max)
//     console.log("Минимум = " + min)
//     rl.close();
//   }
// })

//#2
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n === 0) {
//   rl.close();
// }
// var s = 0;
// var sum = 1;
// var min = 0;
// rl.on('line', line => {
//
//   line = parseInt(line)
//   count++;
//   s++;
//   sum *= line;
//
//   if (count === 2) {
//     min = sum;
//   }
//   if (s % 2 === 0) {
//     if (min > sum) {
//       min = sum;
//     }
//     console.log(sum)
//     sum = 1;
//   }
//
//   if (count === n * 2) {
//     console.log("Минимум = " + min)
//     rl.close();
//   }
// })
//#3
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var s = 0;
// var sum = 0;
// var max = 0;
// rl.on('line', line => {
//
//   line = parseInt(line)
//   count++;
//   s++;
//   sum += 2 * line;
//
//   if (count === 2) {
//     max = sum;
//   }
//   if (s % 2 === 0) {
//     if (max < sum) {
//       max = sum;
//     }
//     console.log(sum)
//     sum = 0;
//   }
//
//   if (count === n * 2) {
//     console.log("Максимальный периметр = " + max)
//     rl.close();
//   }
// })

//№4
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var sum = 0;
// var nomer = 0;
// var min = 0;
// rl.on('line', line => {
//
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min = line;
//     nomer = count;
//   }
//   if (min > line) {
//     min = line;
//     nomer = count;
//   }
//
//   if (count === n) {
//     console.log("Номер минимального элемента = " + nomer)
//     rl.close();
//   }
// })

//#5
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var sum = 0;
// var nomer = 0;
// var max = 0;
// var p = 1;
// var m = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count % 2 === 0) {
//     line = 1 / line;
//   }
//   p *= line;
//   if (count === 2) {
//     max = p;
//     nomer = 1;
//   }
//   if (count % 2 === 0) {
//     m++;
//     if (max < p) {
//       max = p;
//       nomer = m;
//     }
//     console.log(p)
//     p = 1;
//   }
//
//   if (count === n * 2) {
//     console.log("Максимум = " + max + " " + "Номер = " + nomer)
//     rl.close();
//   }
// })

//#6
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var sum = 0;
// var nomerMin = 0;
// var nomerMax = 0;
// var max = 0;
// var min = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min = line;
//     nomerMin = count;
//     max = line;
//     nomerMax = line;
//   }
//   if (line < min) {
//     min = line;
//     nomerMin = count;
//   }
//   if (min === line) {
//     nomerMin = nomerMin;
//   }
//   if (line > max) {
//     max = line;
//     nomerMax = count;
//   }
//   if (max === line) {
//     nomerMax = count;
//   }
//   if (count === n) {
//     console.log("Номер первого минимального элемента = " + nomerMin)
//     console.log("Номер последнего максимального элемента = " + nomerMax)
//     rl.close();
//   }
// })

//#7
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var sum = 0;
// var nomerMin = 0;
// var nomerMax = 0;
// var max = 0;
// var min = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min = line;
//     nomerMin = count;
//     max = line;
//     nomerMax = line;
//   }
//   if (line < min) {
//     min = line;
//     nomerMin = count;
//   }
//   if (min === line) {
//     nomerMin = count;
//   }
//   if (line > max) {
//     max = line;
//     nomerMax = count;
//   }
//   if (max === line) {
//     nomerMax = nomerMax;
//   }
//   if (count === n) {
//     console.log("Номер первого максимального элемента = " + nomerMax)
//     console.log("Номер последнего минимального элемента = " + nomerMin)
//     rl.close();
//   }
// })

//#8
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var nomerMin = 0;
// var nomerMinP = 0;
// var min = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min = line;
//     nomerMin = count;
//     nomerMinP = count;
//   }
//   if (line < min) {
//     min = line;
//     nomerMin = count;
//   }
//   if (min === line) {
//     nomerMin = nomerMin;
//     nomerMinP = count;
//   }
//   if (count === n) {
//     console.log("Номер первого минимального элемента = " + nomerMin)
//     console.log("Номер последнего минимального элемента = " + nomerMinP)
//     rl.close();
//   }
// })

//#9
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var nomerMax = 0;
// var nomerMaxP = 0;
// var max = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     max = line;
//     nomerMax = count;
//     nomerMaxP = count;
//   }
//   if (line > max) {
//     max = line;
//     nomerMax = count;
//   }
//   if (max === line) {
//     nomerMax = nomerMax;
//     nomerMaxP = count;
//   }
//   if (count === n) {
//     console.log("Номер первого максимального элемента = " + nomerMax)
//     console.log("Номер последнего максимального элемента = " + nomerMaxP)
//     rl.close();
//   }
// })

//№12
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// if (n <= 0) {
//   rl.close();
// }
// var count = 0;
// var min = 0;
// var smin = 0;
// var s = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line < 0) {
//     smin++;
//   }
//   if (line < 0) {
//     s = line
//   }
//   if (line >= 0 & line < min) {
//     min = line;
//   }
//
//   if (smin === n) {
//     count = 0;
//     console.log(0)
//     rl.close();
//   }
//   if (count === n) {
//     console.log(min)
//     rl.close();
//   }
// })
