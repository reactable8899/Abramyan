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
//
// rl.on('line', line => {
//   line = parseInt(line);
//   count++;
//   sum *= line;
//
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
//     console.log(sum / count);
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

//     if ( ( line % 2 ) == 1 ) {
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
//
// rl.on('line', line => {
//     line = parseInt(line);
//     count++;
//     if (line == 0) {
//       console.log(count - 1)
//     rl.close();
//     }
//
//   if (count === n) {
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
// let count = 0;
// var sum = 0;
//
// rl.on('line', line => {
//     line = parseInt(line);
//     if (line == 0) {
//     rl.close();
//     }
//
//     if ( ( ( line % 2 ) == 0 ) && ( line > 0 ) ) {
//       sum += line
//     }
//     count++;
//
//   if (count === n) {
//     console.log(sum)
//     rl.close();
//   }
// })

//#15
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// let k = process.argv[3];
// k = parseInt(k);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
//
// rl.on('line', line => {
//   count++;
//     line = parseInt(line);
//
//     if (line === k) {
//     s = count;
//       console.log(s)
//     }
//
//   if (count === n) {
//     rl.close();
//   }
// })

//#17
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// let k = process.argv[3];
// k = parseFloat(k);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
//
// rl.on('line', line => {
//   count++;
//     line = parseInt(line);
//
//     if (line < k) {
//       console.log(k)
//     }
//     console.log(line)
//
//   if (count === n) {
//     rl.close();
//   }
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
// let count = 0;
// var s = 0;
//
// rl.on('line', line => {
//   count++;
//
//   if (count === 1) {
//     s = 0;
//     return ;
//   }
//
//   if ( s > line ) {
//       console.log( " " + s)
//   }
//
//   s = line;
//
//   if (count === n) {
//     console.log( " " + s)
//     rl.close();
//   }
// })

//#21
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
//
// })
// let count = 0;
// var s = 0;
// var k = 0;
//
// rl.on('line', line => {
//   count++;
//
//   if (s < line) {
//     k++;
//   }
//
//   s = line;
//   if (count === n & k === count) {
//     console.log(true)
//     rl.close();
//   } else{
//       if (count === n) {
//         console.log(false)
//     rl.close();
//       }
//     }
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
// let count = 0;
// var s = n;
// var k = 0;
// var nomer = 0;
// var ss = false;
//
// rl.on('line', line => {
//   count++;
//
//   if (line <= s) {
//     k++
//   }
//
//   if (s < line & ss === false) {
//     nomer = count;
//     console.log(nomer)
//     ss = true;
//   }
//
//   s = line;
//   if (count === n) {
//     if (k === count) {
//       console.log(0)
//     }
//     rl.close()
//   }
//
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
// let count = 0;
// var s = n;
// var k = 0;
// var t = 0;
// var m = 0;
//
// rl.on('line', line => {
//   count++;
//   if (count === 1) { t = line; return; }
//   if (count === 2) { s = line; return; }
//   if ( s > line && s > t || s < line && s < t) {
//     t = s;
//     s = line;
//   }
//   console.log(s)
//   if (n === count) {
//     console.log("0")
//     rl.close();
//   }
// })

//#25
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// var s = 0;
// var k = 0;
// var t = 0;
//
// rl.on('line', line => {
//   count++;
//   if ( line === 0 ) {
//     t++;
//   }
//   if (t > 0) {
//     s += line;
//   }
//   if ( t > 1) {
//     console.log(s)
//     rl.close();
//   }
//
//   if (n === count) {
//     console.log("0")
//     rl.close();
//   }
// })

//#26
// const readline = require('readline');
//
// let k = process.argv[2];
// k = parseInt(k);
//
// let n = process.argv[3];
// n = parseInt(n);
//
// var s = 0;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
//
// rl.on('line', line => {
//   s = line;
//   for (var i = 0; i < k ; i++){
//     line *= s;
//   }
//   console.log(line)
//   count++;
//   if (n === count) {
//     rl.close();
//   }
// })

//#27
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// var s = 0;
// rl.on('line', line => {
//   count++;
//   s = line;
//   for (var i = 1; i < count ; i++){
//     line *= s;
//   }
//   console.log(line)
//   if (n === count) {
//     rl.close();
//   }
// })

//#28
// const readline = require('readline');

// let n = process.argv[2];
// n = parseInt(n);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// var s = 0;
// var t = n;
// rl.on('line', line => {
//   count++;
//   s = line;
//   for (var i = 1; i < t ; i++) {
//     line *= s;
//     console.log(line)
//   }
//   t--;
//   if (n === count) {
//     rl.close();
//   }
// })

//#29
// const readline = require('readline');
//
// let k = process.argv[2];
// k = parseInt(k);
//
// let n = process.argv[3];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// var s = 0;
// var sum = 0;
//
//   rl.on('line', line => {
//     line = parseInt(line)
//     count++;
//
//     if (count % n === 1) {
//       s++;
//     }
//
//     sum += line;
//
//     if (n * k === count) {
//       console.log(sum)
//       console.log(s)
//       rl.close();
//     }
//   })

//#30
// const readline = require('readline');
//
// let k = process.argv[2];
// k = parseInt(k);
//
// let n = process.argv[3];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let count = 0;
// var s = 0;
// var sum = 0;
//
//   rl.on('line', line => {
//     line = parseInt(line)
//     count++;
//     sum += line;
//     if (count / n === 1) {
//       console.log(sum)
//       sum = 0;
//     }
//
//     if (n * k === count) {
//       console.log(sum)
//       rl.close();
//     }
//   })

//#31
// const readline = require('readline');
//
// let k = process.argv[2]
// k = parseInt(k);
//
// let n = process.argv[3];
// n = parseInt(n);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// let count = 0;
// let answer = 0;
// let groupNumber = 1;
// let alreadyFoundInGroup = false;
//
// // функция для чтения из stdin
// rl.on('line', line => {
//   // читаем строку
//   line = parseInt(line);
//   count++;
//
//   // если остаток деления кол-во элементов на N равна 1, то это
//   // значит, что вводят новый элемент следующей группы
//   // Например,
//   // k = 2, n = 2;
//   // 1 - count = 1
//   // 2 - count = 2
//   // 3 - count = 3 -> это уже элемент из другой группы
//   // 4 - count = 4
//   // ...
//   if (count % n === 1) {
//     alreadyFoundInGroup = false;
//   }
//
//   // Если число равно 2, и мы уже в этой группе нашли такой элемент
//   // то нам не нужно увеличивать счетчик ответа ans
//   if (line === 2 && alreadyFoundInGroup === false) {
//     answer++;
//     alreadyFoundInGroup = true;
//   }
//
//   // если количество введенных строк равно N, то перестаем считать и выходим
//   if (count === n * k) {
//     console.log(answer);
//
//     // выводим ответ перед выходом
//     // console.log(sum);
//     rl.close();
//   }
// })

//#31
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// let k = process.argv[3];
// k = parseInt(k);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// let count = 0;
// var s = 0;
// var sum = 0;
// var gr = false;
//   rl.on('line', line => {
//     line = parseInt(line)
//     count++;
//
//     if (count % k === 1) {
//       gr = false;
//     }
//
//     if (line === 2 & gr === false) {
//       sum++;
//       gr = true;
//     }
//
//     if (n * k === count) {
//       console.log(sum)
//       rl.close();
//     }
//   })

//#32
  // const readline = require('readline');
  //
  // let n = process.argv[2];
  // n = parseInt(n);
  //
  // let k = process.argv[3];
  // k = parseInt(k);
  //
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // })
  // var nomer = 0;
  // let count = 0;
  // var s = 0;
  // var sum = 0;
  // var gr = false;
  // rl.on('line', line => {
  // line = parseInt(line)
  // count++;
  // sum++;
  //
  // if (line === 2 & gr === false) {
  //   nomer = sum;
  //   gr = true;
  // }
  //
  // if (sum % k === 0) {
  //   gr = false;
  //   sum = 0;
  //   console.log(nomer)
  //   nomer = 0;
  // }
  //
  // if (n * k === count) {
  //   rl.close();
  // }
  // })

//#33
 // const readline = require('readline');
 //
 //  let n = process.argv[2];
 //  n = parseInt(n);
 //
 //  let k = process.argv[3];
 //  k = parseInt(k);
 //
 //  const rl = readline.createInterface({
 //    input: process.stdin,
 //    output: process.stdout
 //  })
 //  var nomer = 0;
 //  let count = 0;
 //  var s = 0;
 //  var sum = 0;
 //  var gr = false;
 //  rl.on('line', line => {
 //
 //    line = parseInt(line)
 //    count++;
 //    sum++;
 //
 //    if (line === 2 & gr === false) {
 //      nomer = sum;
 //    }
 //
 //    if (sum % k === 0) {
 //      gr = false;
 //      sum = 0;
 //      console.log(nomer)
 //      nomer = 0;
 //    }
 //
 //    if (n * k === count) {
 //      rl.close();
 //    }
 //  })

//#34
// const readline = require('readline');
//
// let n = process.argv[2];
// n = parseInt(n);
//
// let k = process.argv[3];
// k = parseInt(k);
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// let count = 0;
// var s = 0;
// var sum = 0;
// var gr = false;
// var t = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   sum += line;
//   s++;
//
//   if (line === 2) {
//     t++;
//   }
//
//   if (s / k === 1 & t != 0) {
//     console.log(sum)
//     t = 0;
//     s = 0;
//     sum = 0;
//   }
//   if (s / k === 1 & t === 0) {
//     console.log(0)
//     t = 0;
//     s = 0;
//     sum = 0;
//   }
//
//   if (n * k === count) {
//     rl.close();
//   }
// })

//#35
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
// var sum = 0;
// var kol = 0;
// var obsheeKolvo = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   obsheeKolvo++;
//
//   if (line === 0) {
//     kol++;
//   }
//
//   if (line === 0) {
//     sum = count;
//     count = 0;
//     console.log(sum)
//   }
//
//   if (kol === n) {
//     console.log(obsheeKolvo)
//     rl.close();
//   }
// })

//#36
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
// var sum = 0;
// var kol = 0;
// var obsheeKolvo = 0;
// var next = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line === 0 & sum === count - 1) {
//     console.log("vozr")
//     sum = 0;
//     count = 0;
//     obsheeKolvo++;
//   }
//
//   if (line === 0) {
//     kol++;
//     sum = 0;
//     count = 0;
//   }
//
//   if (line > next) {
//     sum++;
//   }
//
//   next = line;
//   if (kol === n) {
//     console.log("Kolvo vozr-x naborov: " + obsheeKolvo)
//     rl.close();
//   }
// })

//#37
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
// var sum = 0;
// var kol = 0;
// var obsheeKolvo = 0;
// var next = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line === 0 & sum === count - 1) {
//     console.log("vozr")
//     sum = 0;
//     count = 0;
//     obsheeKolvo++;
//   }
//
//   if (line === 0) {
//     kol++;
//     sum = 0;
//     count = 0;
//   }
//
//   if (line > next) {
//     sum++;
//   }
//
//   next = line;
//   if (kol === n) {
//     console.log("Kolvo vozr-x naborov: " + obsheeKolvo)
//     rl.close();
//   }
// })

//#37
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
// var sum = 0;
// var kol = 0;
// var obsheeKolvo = 0;
// var next = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line === 0 & sum === count - 1) {
//     console.log("vozr")
//     sum = 0;
//     count = 0;
//     obsheeKolvo++;
//   }
//
//   if (line === 0) {
//     kol++;
//     sum = 0;
//     count = 0;
//   }
//
//   if (line > next) {
//     sum++;
//   }
//
//   next = line;
//   if (kol === n) {
//     console.log("Kolvo vozr-x naborov: " + obsheeKolvo)
//     rl.close();
//   }
// })

//#37
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
// var sum = 0;
// var kol = 0;
// var obsheeKolvo = 0;
// var obsheeKolvo2 = 0;
// var next = 0;
// var prev = 10000;
// var sum2 = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line === 0 & sum === count - 1) {
//     console.log("vozr")
//     sum = 0;
//     count = 0;
//     obsheeKolvo++;
//   }
//
//   if (line === 0 & sum2 === count - 1) {
//     console.log("ubiv")
//     sum2 = 0;
//     count = 0;
//     obsheeKolvo2++;
//   }
//
//   if (line === 0) {
//     kol++;
//     sum = 0;
//     sum2 = 0;
//     count = 0;
//   }
//
//   if (line > next) {
//     sum++;
//   }
//   if (line < prev) {
//     sum2++;
//   }
//   next = line;
//   prev = line;
//   if (kol === n) {
//     console.log("Kolvo vozr-x naborov: " + obsheeKolvo)
//     console.log("Kolvo ubiv-x naborov: " + obsheeKolvo2)
//     rl.close();
//   }
// })

//#38
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
// var sum = 0;
// var kol = 0;
// var obsheeKolvo = 0;
// var obsheeKolvo2 = 0;
// var obsheeKolvo3 = 0;
// var next = 0;
// var prev = 10000;
// var sum2 = 0;
// rl.on('line', line => {
//   line = parseInt(line)
//   count++;
//   if (line === 0 & sum === count - 1) {
//     console.log("vozr")
//     sum = 0;
//     count = 0;
//     obsheeKolvo++;
//   }
//
//   if (line === 0 & sum2 === count - 1) {
//     console.log("ubiv")
//     sum2 = 0;
//     count = 0;
//     obsheeKolvo2++;
//   }
//   if (line === 0 & sum2 != count & sum != count) {
//     console.log(0)
//     obsheeKolvo3++;
//   }
//   if (line === 0) {
//     kol++;
//     sum = 0;
//     sum2 = 0;
//     count = 0;
//   }
//
//   if (line > next) {
//     sum++;
//   }
//   if (line < prev) {
//     sum2++;
//   }
//   next = line;
//   prev = line;
//   if (kol === n) {
//     console.log("Kolvo vozr-x naborov: " + obsheeKolvo)
//     console.log("Kolvo ubiv-x naborov: " + obsheeKolvo2)
//     console.log("Kolvo razn naborov: " + obsheeKolvo3)
//     rl.close();
//   }
// })
