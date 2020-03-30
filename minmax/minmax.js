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
//      }
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
//   if (line <= min) {
//     min = line;
//     nomerMin = count;
//   }
//   if (line >= max) {
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
//   if (line >= max) {
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
//   if (count === 1) {
//     min = line;
//   }
//   if (count === 2 & line > min) {
//     min = line;
//   }
//   if (line < 0) {
//     smin++;
//   }
//   if (line >= 0 & line < min) {
//     min = line;
//   }
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

//#13
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
// var max = 0;
// var nomer = 0;
// var s = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1 && line % 2 === 1) {
//     max = line;
//     nomer = count;
//   }
//   if ((line % 2 === 1) && line > max) {
//     max = line;
//     nomer = count;
//   }
//   if (count === n) {
//     console.log(nomer)
//     rl.close();
//   }
// })

//#14
// const readline = require('readline');
//
// let b = process.argv[2];
// b = parseInt(b);
//
// let n = process.argv[3];
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
// var nomer = 0;
// var s = true;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line > b && s === true) {
//     min = line;
//     nomer = count;
//     s = false;
//   }
//   if (line < min && line > b) {
//     min = line;
//     nomer = count;
//   }
//
//   if (count === n) {
//     console.log(nomer)
//     rl.close();
//   }
// })
//#15
// const readline = require('readline');
//
// let b = process.argv[2];
// b = parseInt(b);
//
// let c = process.argv[3];
// c = parseInt(c);
//
// let n = process.argv[4];
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
// var max = 0;
// var nomer = 0;
// var s = true;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (b < line && line < c && line > max) {
//     max = line;
//     nomer = count;
//   }
//   if (count === n) {
//     console.log("max = " + max)
//     console.log("nomer = " + nomer)
//     rl.close();
//   }
// })
//#16
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
// var kol = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min = line;
//     kol++;
//   }
//   if (line < min) {
//     min = line;
//     kol = count;
//   }
//   if (kol === 0) {
//     console.log(0);
//     rl.close();
//   }
//   else {
//     if (count === n) {
//       console.log(kol - 1)
//       rl.close();
//     }
// }
// })
//#17
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
// var max = 0;
// var kol = 0;
// var znak = true;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   kol++;
//   if (count === 1) {
//     max = line;
//     kol = 0;
//   }
//   if (line > max) {
//     max = line;
//     kol = 0;
//   }
//   if (count === n) {
//     console.log(kol)
//     rl.close();
//
// }
// })
//#18
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
// var maxP = 0;
// var kol = 0;
// var znak = true;
// var s = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line < maxP && znak === true) {
//     kol++;
//   }
//   if (line === maxP) {
//     znak = false;
//   }
//   if (line > maxP) {
//     maxP = line;
//     kol = 0;
//   }
// if (count === n) {
//   if (s > 0) {
//     console.log(0)
//     rl.close();
//   }
//   console.log(kol)
//   rl.close();
// }
// })
//#19
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
// var kol = 0;
// var s = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min = line;
//   }
//   if (line < min) {
//     min = line;
//     kol = 0;
//   }
//   if (min === line) {
//     kol++;
//   }
//
//   if (count === n) {
//     console.log("kol-vo min elementov = " + kol)
//     rl.close();
// }
// })

//#22
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
// var min1 = 0;
// var min2 = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min1 = line;
//     min2 = line;
//   }
//   if (min2 > line) {
//     if (min1 > line) {
//       min2 = min1;
//       min1 = line;
//     } else {
//       min2 = line;
//     }
//   }
//   if (min1 === min2) {
//     min2 = line;
//   }
//   if (count === n) {
//     console.log(min1,min2)
//     rl.close();
//   }
// })

//#23
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
// var max1 = 0;
// var max2 = 0;
// var max3 = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     max3 = line;
//     max2 = line;
//     max1 = line;
//   }
//   if (line > max3) {
//     if (line > max2) {
//       if (line > max1) {
//         max3 = max2;
//         max2 = max1;
//         max1 = line;
//       } else {
//         min3 = max2;
//         max2 = line;
//       }
//     } else {
//       max3 = line;
//     }
//   }
//   if (max1 === max2) {
//     max2 = line;
//   }
//   if (max3 === max1 || max3 ===max2) {
//     max3 = line;
//   }
//   if (count === n) {
//     console.log(max1,max2,max3)
//     rl.close();
//   }
// })

//#24
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
// var r = 0;
// var result = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   sum += line;
//   if (sum > r) {
//     result = sum;
//   }
//   if (count % 2 === 0) {
//     r = sum;
//     sum = 0;
//   }
//   if (count === n) {
//     console.log(result)
//     rl.close();
// }
// })

//№25
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
// var sum = 1;
// var r = 0;
// var result = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   sum *= line;
//   if (count === 2) {
//     r = sum;
//   }
//   if (sum < r) {
//     result = sum;
//   }
//   if (count % 2 === 0) {
//     r = sum;
//     sum = 1;
//   }
//   if (count === n) {
//     console.log(result)
//     rl.close();
// }
// })

//#26
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
// var r = 0;
// var result = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line % 2 === 0) {
//     sum++;
//   }
//   if (sum > result) {
//     result = sum;
//   }
//   if (line % 2 === 1) {
//     sum = 0;
//   }
//   if (count === n) {
//     console.log(result)
//     rl.close();
//   }
// })

//#29
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
// var r = 1;
// var znak = true;
// var lineup = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (count === 1) {
//     min = line;
//   }
//   if (min === line && lineup === line) {
//     r++;
//   }
//   if (line < min) {
//     min = line;
//     r = 1;
//   }
//   lineup = line;
//
//   if (count === n) {
//     console.log(r)
//     rl.close();
//   }
// })

//#30
