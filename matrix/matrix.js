//MATRIX
//Заполнение массива

// function matrixArray(rows,columns){
//   var arr = new Array();
//   for(var i=0; i<rows; i++){
//     arr[i] = new Array();
//     for(var j=0; j<columns; j++){
//       arr[i][j] = 1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
//     }
//   }
//   console.log(arr);
// }
// var myMatrix = matrixArray(5,5);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const n = 5;
// const m = 5;
// const matrix = [];
//
// for (let i = 0; i < m; i++) {
//   const row = [];
//   for (let j = 0; j < n; j++) {
//     row.push(10 * i);
//   }
//
//   matrix.push(row);
// }
//
// console.log(matrix);

//№1
// var m = process.argv[2];
// m = parseInt(m);
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [];
// for (var i = 0; i < m; i++) {
//   arr[i] = new Array();
//   for (var j = 0; j < n; j++) {
//     arr[i][j] = 10 * (i + 1);
//   }
//
// }
// console.log(arr)

//#2
// var m = process.argv[2];
// m = parseInt(m);
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [];
// for (var i = 0; i < m; i++) {
//   arr[i] = new Array();
//   for (var j = 0; j < n; j++) {
//     arr[i][j] = 5 * (j + 1);
//   }
//
// }
// console.log(arr)

//#3
// var m = process.argv[2];
// m = parseInt(m);
// var n = process.argv[3];
// n = parseInt(n);
//
// var mm = [88,99,0,10,10];
// var arr = [];
// for (var i = 0; i < m; i++) {
//   arr[i] = new Array();
//   for (var j = 0; j < n; j++) {
//     arr[i][j] = mm[i];
//   }
//
// }
// console.log(arr)

//#4
// var m = process.argv[2];
// m = parseInt(m);
// var n = process.argv[3];
// n = parseInt(n);
//
// var mm = [88,99,0,10,10];
// var arr = [];
// for (var i = 0; i < m; i++) {
//   arr[i] = new Array();
//   for (var j = 0; j < n; j++) {
//     arr[i][j] = mm[j];
//   }
//
// }
// console.log(arr)

//#5
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var d = process.argv[4];
// d = parseInt(d);
//
// var mm = [1,2,3,4,5];
// var arr = [];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i];
//
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + d
//   }
// }
// console.log(arr)

//#6
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var d = process.argv[4];
// d = parseInt(d);
//
// var mm = [1,2,3,4,5];
// var arr = [];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i];
//
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] * d
//   }
// }
// console.log(arr)

//#7
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (j = 0; j < m; j++) {
//   console.log(arr[k][j])
// }
// console.log(arr)

//#8
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (j = 0; j < m; j++) {
//   console.log(arr[j][k])
// }
// console.log(arr)

//#9
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (j = 0; j < m; j++) {
//   console.log(arr[k][j])
// }
// console.log(arr)

//#9
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (i = 0; i < m; i++) {
//   for (var j = 2; j < n; j += 2) {
//   console.log(arr[i][j])
//   }
// }
//
// console.log(arr)

//#10
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (i = 0; i < m; i++) {
//   for (var j = 1; j < n; j += 2) {
//   console.log(arr[j][i])
//   }
// }
//
// console.log(arr)

//#11
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (i = 0; i < m; i++) {
//   if (i % 2 === 0) {
//     for (var j = 0; j < m; j++) {
//     console.log(arr[i][j])
//     }
//   }
//   if (i % 2 === 1) {
//     for (var j = m - 1; j >= 0; j--) {
//     console.log(arr[i][j])
//     }
//   }
// }
//
// console.log(arr)

//#12
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (j = 0; j < m; j++) {
//   if (j % 2 === 0) {
//     for (var i = 0; i < n; i++) {
//     console.log(arr[i][j])
//     }
//   }
//   if (j % 2 === 1) {
//     for (var i = n - 1; i >= 0; i--) {
//     console.log(arr[i][j])
//     }
//   }
// }
//
// console.log(arr)

//#13!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var a = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n - i; j++) {
//     console.log(arr[i][j])
//   }
//   for (j = i + 1; j < n; j++) {
//     console.log(arr[j][n - i - 1])
//   }
// }
// console.log(arr)

//№15
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k = process.argv[4];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var a = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + k;
//   }
// }
// for (i = 0; i < n; i++) {
//   for (var j = i; j < n - i; j++) {
//     console.log(arr[i][j])
//   }
//   for(var j = i + 1; j < m - i - 1; j++) {
//     console.log(arr[j][m - i - 1])
//   }
//   for (var j = i; j < n - i - 1; j++) {
//     console.log(arr[n - i - 1][n - j - 1])
//   }
//   for(var j = i; j < m - i - 1; j++) {
//     console.log(arr[m - j - 1][i])
//   }
// }
// console.log(arr)

//#17
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var k = process.argv[5];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
// var dev = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// for (i = k - 1; i <= k - 1; i++) {
//   for (j = 0; j < n; j ++) {
//     sum += arr[i][j];
//   }
// }
//
// console.log(arr)
// console.log(sum)

//#18
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var k = process.argv[5];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
// var dev = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// for (i = k - 1; i <= k - 1; i++) {
//   for (j = 0; j < n; j ++) {
//     sum += arr[j][i];
//   }
// }
//
// console.log(arr)
// console.log(sum)

//#19
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var k = process.argv[5];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
// var dev = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j ++) {
//     sum += arr[i][j];
//   }
//   console.log("summa " + (i + 1) + " stroki = " + sum)
//   sum = 0;
// }

//#20
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var k = process.argv[5];
// k = parseInt(k);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 1;
// var dev = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j ++) {
//     sum *= arr[j][i];
//   }
//   console.log("summa " + (i + 1) + " stroki = " + sum)
//   sum = 1;
// }

//#21
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
// for (i = 0; i < n; i += 2) {
//   for (j = 0; j < n; j++) {
//     sum += arr[i][j] / n;
//   }
//   console.log("Srednee arif-e " + (i + 1) + " stroki = " + sum)
//   sum = 0;
// }

//#22
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
// for (i = 1; i < n; i += 2) {
//   for (j = 0; j < n; j++) {
//     sum += arr[j][i];
//   }
//   console.log("summa " + (i + 1) + " stolbca = " + sum)
//   sum = 0;
// }

//#23
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var min = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
//
// for (i = 0; i < n; i++) {
//   min = arr[i][0];
//   for (j = 0; j < n; j++) {
//     if (arr[i][j] < min) {
//       min = arr[i][j];
//     }
//   }
//   console.log(min)
// }

//#24
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var max = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
//
// for (i = 0; i < n; i++) {
//   max = arr[i][0];
//   for (j = 0; j < n; j++) {
//     if (arr[i][j] > max) {
//       max = arr[j][i];
//     }
//   }
//   console.log(max)
// }

//#25
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
// var maxsum = 0;
// var nomer = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
//
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     sum += arr[i][j]
//   }
//   if (maxsum < sum) {
//     maxsum = sum;
//     nomer = i
//   }
//   sum = 0;
// }
// console.log(maxsum, i)

//#27
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [4,7,3,6,1];
// var sum = 0;
// var max = 0;
// var min = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
//
// for (i = 0; i < n; i++) {
//   min = arr[i][0];
//   for (j = 0; j < n; j++) {
//     if (arr[i][j] < min) {
//       min = arr[i][j];
//     }
//   }
//   if (max < min) {
//     max = min;
//   }
//   //console.log(max,min)
// }
// console.log(max,min)

//#29
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
// var kol = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
//
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     sum += arr[i][j] / n;
//   }
//   for (j = 0; j < n; j++) {
//     if (arr[i][j] < sum) {
//       kol++;
//     }
//   }
//   console.log(kol,sum)
//   kol = 0;
// }

//#34
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [3,2,5,2,7];
// var nomer = 0;
// var kol = 0;
//
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
//
// for (i = 0; i < n; i++) {
//   for (j = 0; j < m; j++) {
//     if (arr[i][j] % 2 === 0) {
//       kol++;
//     }
//   }
//   if (kol === n) {
//     nomer = i + 1;
//   }
//   kol = 0;
// }
// console.log(nomer)

//#35
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var a = process.argv[4];
// a = parseInt(a);
//
// var arr = [];
// var mm = [3,1,3,1,7];
// var nomer = 0;
// var kol = 0;
//
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + a;
//   }
// }
// console.log(arr)
//
// for (i = 0; i < n; i++) {
//   for (j = 0; j < m; j++) {
//     if (arr[j][i] % 2 === 1) {
//       kol++;
//     }
//   }
//   if (kol === n) {
//     nomer = i + 1;
//     console.log(nomer)
//     return
//   }
//   kol = 0;
// }

//#36
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[1,2,3],[2,2,3],[2,2,3]];
// var sum = 0;
// var kol = 0;
//
// for (i = 1; i < n; i++) {
//   for (j = 0; j < m; j++) {
//     if (arr[0][j] === arr[i][j]) {
//       kol++;
//     }
//   }
//   if (kol % n === 0) {
//     sum += kol / m;
//   }
//   kol = 0;
// }
// console.log(sum)

//#37
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[1,2,1],[2,1,1],[3,3,3]];
// var sum = 0;
// var kol = 0;
//
// console.log(arr)
//
// for (var i = 0; i < m - 1; i++) {
//   for (var j = 0; j < n; j++) {
//     if (arr[j][i] === arr[j][m - 1]) {
//       kol++;
//     }
//   }
//   if (kol % n === 0) {
//     sum += kol / n;
//   }
//   kol = 0;
// }
// console.log(sum)

//#38
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[3,2,1,5,6],[2,1,3,4,5],[5,1,3,3,3]];
// var sum = 0;
// var kol = 0;
//
// console.log(arr)
//
// for (var i = 0; i < m; i++) {
//   for (var j = 0; j < n; j++) {
//     if (arr[i][j] != arr[i][j + 1]) {
//       kol++;
//       //console.log(kol)
//     }
//   }
//   if (kol % n === 0) {
//     sum += kol / n;
//   }
//   kol = 0;
// }
// console.log(sum)

//#40
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[2,2,2,5,6],[2,2,5,2,2],[1,1,3,1,3]];
// var sum = 0;
// var kol = 0;
// var max = 0;
// var nomer = 0;
// var temp = 0;
//
// for (var i = 0; i < arr.length; i++) {
//   arr[i].sort(function(a, b) {
//     return a - b;
//   });
//   console.log(arr[i])
// }
//
// for (var i = 0; i < m; i++) {
//   for (var j = 0; j < n; j++) {
//     if (arr[i][j] === arr[i][j + 1]) {
//       kol++;
//       //console.log(kol)
//     }
//   }
//   if (kol > max) {
//     max = kol;
//     nomer = i;
//   }
//   kol = 0;
// }
// console.log(nomer)

//#42
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[1,1,3,5,6],[2,1,5,3,4],[6,5,2,1,3]];
// var sum = 0;
// var kol = 0;
//
// for (var i = 0; i < arr.length; i++) {
//   arr[i].sort(function(a, b) {
//     return a - b;
//   });
//   console.log(arr[i])
// }
//
// for (var i = 0; i < m; i++) {
//   for (var j = 0; j < n; j++) {
//     if (arr[i][j] < arr[i][j + 1]) {
//       kol++;
//       console.log(kol)
//     }
//   }
//   if (kol === n) {
//     sum++;
//   }
//   kol = 0;
// }
// console.log(sum)

//43
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[1,1,3,5,2],[-2,-1,5,3,4],[-6,-5,2,1,3]];
// var sum = 0;
// var kol = 0;
// console.log(arr)
// for (var i = 0; i < m; i++) {
//   for (var j = 0; j < n - 1; j++) {
//     if (arr[j][i] > arr[j + 1][i]) {
//       kol++;
//     }
//   }
//   if (kol === n - 1) {
//     sum++;
//   }
//   kol = 0;
// }
// console.log(sum)

//#44
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[1,1,3,4,5],[-2,-1,1,3,4],[-6,-5,0,1,3]];
// var sum = 0;
// var kol = 0;
// var min = 0;
//
// console.log(arr)
//
// for (var i = 0; i < m; i++) {
//   min = arr[i][0];
//   for (var j = 0; j < n; j++) {
//     if (min > arr[i][j]) {
//       min = arr[i][j];
//     }
//   }
//   console.log(min)
// }

//#46!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [[1,6,3,4,5],[-2,7,1,3,4],[-6,8,0,1,3]];
// var min = 0;
// var element = 0;
//
// console.log(arr)
//
// for (var i = 0; i < n; i++) {
//   max = arr[i][0];
//   min = arr[0][i];
//
//   for (var j = 0; j < m; j++) {
//     if (max < arr[i][j]) {
//       max = arr[i][j];
//     }
//   }
//
//   //console.log(max)
//
//   for (var k = 0; k < n; k++) {
//     if (min > arr[k][i]) {
//       min = arr[k][i];
//     }
//   }
//   // console.log(min)
//
//   if (max === min) {
//     element = max;
//   }
//   console.log(element)
// }

//#47
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k1 = process.argv[4];
// k1 = parseInt(k1);
//
// var k2 = process.argv[5];
// k2 = parseInt(k2);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
// var temp = [];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + 2;
//   }
// }
// console.log(arr)
// for (var j = 0; j < m; j++) {
//   temp[j] = arr[k1][j];
//   arr[k1][j] = arr[k2][j];
//   arr[k2][j] = temp[j]
// }
// console.log(arr)

//#48
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var k1 = process.argv[4];
// k1 = parseInt(k1);
//
// var k2 = process.argv[5];
// k2 = parseInt(k2);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var sum = 0;
// var temp = [];
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + 2;
//   }
// }
// console.log(arr)
// for (var j = 0; j < m; j++) {
//   temp[j] = arr[j][k1];
//   arr[j][k1] = arr[j][k2];
//   arr[j][k2] = temp[j]
// }
// console.log(arr)

//#49
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var temp = [];
// var min = 0;
// var max = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + 2;
//   }
// }
// console.log(arr)
// for (var i = 0; i < n; i++) {
//   var nomerMin1 = i;
//   var nomerMin2 = 0;
//   var nomerMax1 = i;
//   var nomerMax2 = 0;
//   min = arr[i][0];
//   max = arr[i][0];
//   for (var j = 0; j < m; j++) {
//     if (arr[i][j] < min) {
//       min = arr[i][j];
//       nomerMin1 = i;
//       nomerMin2 = j;
//       //  console.log(arr[nomerMin1][nomerMin2])
//     }
//     for (var k = 0; k < m; k++) {
//       if (arr[i][k] > max) {
//         max = arr[i][k];
//         nomerMax1 = i;
//         nomerMax2 = k;
//       //  console.log(arr[nomerMax1][nomerMax2])
//       }
//     }
//   }
//   temp = arr[nomerMin1][nomerMin2];
//   arr[nomerMin1][nomerMin2] = arr[nomerMax1][nomerMax2];
//   arr[nomerMax1][nomerMax2] = temp;
//   console.log(min,max)
// }
// console.log(arr)

//#50
// var m = process.argv[2];
// m = parseInt(m);
//
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [];
// var mm = [1,2,3,4,5];
// var temp = [];
// var min = 0;
// var max = 0;
//
// for (var i = 0; i < m; i++) {
//   arr[i] = [];
//   arr[i][0] = mm[i]
//   for (var j = 1; j < n; j++) {
//     arr[i][j] = arr[i][j - 1] + 2;
//   }
// }
// console.log(arr)
// for (var i = 0; i < n; i++) {
//   var nomerMin1 = 0;
//   var nomerMin2 = i;
//   var nomerMax1 = 0;
//   var nomerMax2 = i;
//   min = arr[0][i];
//   max = arr[0][i];
//   for (var j = 0; j < m; j++) {
//     if (arr[j][i] < min) {
//       min = arr[j][i];
//       nomerMin1 = j;
//       nomerMin2 = i;
//       //  console.log(arr[nomerMin1][nomerMin2])
//     }
//     for (var k = 0; k < m; k++) {
//       if (arr[k][i] > max) {
//         max = arr[k][i];
//         nomerMax1 = k;
//         nomerMax2 = i;
//       //  console.log(arr[nomerMax1][nomerMax2])
//       }
//     }
//   }
//   temp = arr[nomerMin1][nomerMin2];
//   arr[nomerMin1][nomerMin2] = arr[nomerMax1][nomerMax2];
//   arr[nomerMax1][nomerMax2] = temp;
//   console.log(min,max)
// }
// console.log(arr)

//#51

// var arr = [[5,7,3,8,3],[5,23,6,87,3],[2,5,7,2,56],[1,5,7,2,6],[6,2,4,32,6]]
// var min = arr[0][0];
// var max = arr[0][0];
// var nomerMin1 = 0;
// var nomerMax1 = 0;
// var temp = [];
// console.log(arr)
// for (var i = 0; i < 5; i++) {
//   for(var j = 0; j < 5; j++) {
//     if (min > arr[i][j]) {
//       min = arr[i][j];
//       nomerMin1 = i;
//     }
//     if (max < arr[i][j]) {
//       max = arr[i][j];
//       nomerMax1 = i;
//     }
//   }
// }
// for (var k = 0; k < 5; k++) {
//   temp[k] = arr[nomerMin1][k];
//   arr[nomerMin1][k] = arr[nomerMax1][k];
//   arr[nomerMax1][k] = temp[k]
// }
// console.log(min,max)
// console.log(nomerMin1,nomerMax1)
// console.log(arr)

//#52
// var arr = [[5,7,3,8,3],[5,23,6,87,3],[2,5,7,2,56],[1,5,7,2,6],[6,2,4,32,6]]
// var min = arr[0][0];
// var max = arr[0][0];
// var nomerMin1 = 0;
// var nomerMax1 = 0;
// var temp = [];
// console.log(arr)
// for (var i = 0; i < 5; i++) {
//   for(var j = 0; j < 5; j++) {
//     if (min > arr[j][i]) {
//       min = arr[j][i];
//       nomerMin1 = i;
//     }
//     if (max < arr[j][i]) {
//       max = arr[j][i];
//       nomerMax1 = i;
//     }
//   }
// }
// for (var k = 0; k < 5; k++) {
//   temp[k] = arr[k][nomerMin1];
//   arr[k][nomerMin1] = arr[k][nomerMax1];
//   arr[k][nomerMax1] = temp[k]
// }
// console.log(min,max)
// console.log(nomerMin1,nomerMax1)
// console.log(arr)

//#53
// var arr = [[5,7,3,8,3],[-5,-23,6,87,3],[-2,5,-7,2,56],[-1,5,7,-2,6],[6,2,4,32,-6]]
// var s = 0;
// var j = 0;
// var temp = [];
// var nomer = 0;
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5 ; j++) {
//     if (arr[j][i] > 0) {
//       s++;
//     }
//     if (s === 5) {
//       nomer = i;
//     }
//   }
//   s = 0;
// }
// console.log(nomer)
// console.log(arr)
// for (var k = 0; k < 5; k++) {
//   temp[k] = arr[k][0];
//   arr[k][0] = arr[k][nomer];
//   arr[k][nomer] = temp[k];
// }
// console.log(arr)

//#54
// var arr = [[-5,7,-3,8,3],[-5,-23,-6,87,3],[-2,5,-7,2,56],[-1,5,-7,-2,6],[6,2,-4,32,-6]]
// var s = 0;
// var j = 0;
// var temp = [];
// var nomer = 0;
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5 ; j++) {
//     if (arr[j][i] < 0) {
//       s++;
//     }
//     if (s === 5) {
//       nomer = i;
//     }
//   }
//   s = 0;
// }
// console.log(nomer)
// console.log(arr)
// for (var k = 0; k < 5; k++) {
//   temp[k] = arr[k][4];
//   arr[k][4] = arr[k][nomer];
//   arr[k][nomer] = temp[k];
// }
// console.log(arr)
//#55
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// console.log(arr)
// for (var i = 0; i < 6 / 2; i++) {
//   for (var j = 0; j < 6; j++) {
//     temp[i] = arr[6 - 1 - i][j];
//     arr[6 - 1 - i][j] = arr[i][j];
//     arr[i][j] = temp[i]
//   }
// }
// console.log(arr)

// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// console.log(arr)
// var temp = [];
// for (var i = 0; i < 6 / 2; i++) {
//   for (var j = 0; j < 6; j++) {
//     temp[i] = arr[3 + i][j];
//     arr[3 + i][j] = arr[i][j];
//     arr[i][j] = temp[i]
//   }
// }
// console.log(arr)

//#56
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// console.log(arr)
// var temp = [];
// for (var i = 0; i < 6; i++) {
//   for (var j = 0; j < 6 / 2; j++) {
//     temp[j] = arr[i][3 + j];
//     arr[i][3 + j] = arr[i][j];
//     arr[i][j] = temp[j]
//   }
// }
// console.log(arr)

//#57
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// console.log(arr)
// var temp = [];
// for (var i = 0; i < 6 / 2; i++) {
//   for (var j = 0; j < 6 / 2; j++) {
//     temp[i] = arr[3 + i][3 + j];
//     arr[3 + i][3 + j] = arr[i][j];
//     arr[i][j] = temp[i]
//   }
// }
// console.log(arr)

//#58
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// console.log(arr)
// var temp = [];
// for (var i = 0; i < 6 / 2; i++) {
//   for (var j = 0; j < 6 / 2; j++) {
//     temp[i] = arr[i][j + 3];
//     arr[i][j + 3] = arr[i + 3][j];
//     arr[i + 3][j] = temp[i]
//   }
// }
// console.log(arr)

//#59
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// console.log(arr)
// for (var i = 0; i < 6 / 2; i++) {
//   for (var j = 0; j < 6; j++) {
//     temp[i] = arr[6 - 1 - i][j];
//     arr[6 - 1 - i][j] = arr[i][j];
//     arr[i][j] = temp[i]
//   }
// }
// console.log(arr)

//#60
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// console.log(arr)
// for (var i = 0; i < 6 / 2; i++) {
//   for (var j = 0; j < 6; j++) {
//     temp[i] = arr[j][6 - 1 - i];
//     arr[j][6 - 1 - i] = arr[j][i];
//     arr[j][i] = temp[i]
//   }
// }
// console.log(arr)

//#61
// var k = process.argv[2];
// k = parseInt(k);
//
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// console.log(arr)
//
// for (var i = 0; i < arr.length; i++) {
//   for (var j = k; j < arr.length - 1; j++) {
//     arr[j][i] = arr[j + 1][i];
//   }
// }
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   arr[arr.length - 1][i] = temp[i]
// }
// console.log(arr)

// var k = process.argv[2];
// k = parseInt(k);
//
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   arr[k][i] = temp[i]
// }
// console.log(arr)

//#62
// var k = process.argv[2];
// k = parseInt(k);
//
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,-7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   arr[i][k] = temp[i]
// }
// console.log(arr)

//#63
// var k = process.argv[2];
// k = parseInt(k);
//
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// var min = arr[0][0];
// var nomer = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr.length; j++) {
//     if (arr[i][j] < min) {
//       min = arr[i][j];
//       nomer = i;
//     }
//   }
// }
// for (var i = 0; i < arr.length; i++) {
//   arr[nomer][i] = temp[i]
// }
// console.log(min,nomer)
// console.log(arr)

//#64
// var k = process.argv[2];
// k = parseInt(k);
//
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,-6,1],[2,5,7,1,2,7]];
// var temp = [];
// var max = arr[0][0];
// var nomer = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr.length; j++) {
//     if (arr[j][i] > max) {
//       max = arr[j][i];
//       nomer = i;
//     }
//   }
// }
// for (var i = 0; i < arr.length; i++) {
//   arr[i][nomer] = temp[i]
// }
// console.log(max,nomer)
// console.log(arr)

//#65
// var k = process.argv[2];
// k = parseInt(k);
//
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,6,1],[2,-5,7,1,2,-7]];
// var temp = [];
// var nomer = 0;
// var s = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr.length; j++) {
//     if (arr[j][i] > 0) {
//       s++;
//     }
//   }
//   if (s === arr.length) {
//     nomer = i;
//   }
//   s = 0;
// }
// for (var i = 0; i < arr.length; i++) {
//   arr[i][nomer] = temp[i]
// }
// console.log(s,nomer)
// console.log(arr)

//#68
// var k = process.argv[2];
// k = parseInt(k);
// var temp = [0,0,0,0,0,0];
// var pemp = [];
// var arr = [[-5,7,-3,8,3,5],[-5,-2,-6,8,3,5],[-2,5,7,2,6,4],[-1,5,-7,-2,6,2],[6,2,-4,2,6,1]];
// console.log(arr)
// arr.push(temp)
// console.log(arr)
// for (var i = arr.length - 1; i > k; i--) {
//   for (var j = 0; j < arr.length; j++) {
//     pemp[j] = arr[i][j];
//     arr[i][j] = arr[i - 1][j];
//     arr[i - 1][j] = pemp[j];
//   }
// }
// console.log(arr)

//#69
// var k = process.argv[2];
// k = parseInt(k);
// var pemp = [];
// var arr = [[-5,7,-3,3],[-2,-6,3,5],[-2,7,6,4],[-1,-7,6,2],[6,2,6,1]];
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   arr[i].push(0)
// }
// console.log(arr)
// for (var i = arr.length - 2; i > k; i--) {
//   for (var j = 0; j < arr.length; j++) {
//     pemp[i] = arr[j][i];
//     arr[j][i] = arr[j][i + 1];
//     arr[j][i + 1] = pemp[i];
//   }
// }
// console.log(arr)

//#70
// var arr = [[-5,7,-3,3,7],[7,1,3,5,8],[-2,7,6,4,1],[-1,-7,6,2,2],[6,2,6,1,4]];
// var max = arr[0][0];
// var nomerMax = 0;
// var temp = [];
// var pemp = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (max < arr[i][j]) {
//         max = arr[i][j];
//         nomerMax = i;
//       }
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     temp[i] = arr[nomerMax][i];
//   }
//   arr.push(temp)
//   console.log(arr)
//   for (var i = arr.length - 1; i > nomerMax; i--) {
//     for (var j = 0; j < arr.length - 1; j++) {
//       pemp[j] = arr[i][j];
//       arr[i][j] = arr[i - 1][j];
//       arr[i - 1][j] = pemp[j];
//     }
//   }
//   console.log(arr)

//#71
// var arr = [[-5,7,-3,3,7],[7,1,3,5,8],[-2,7,6,4,1],[-1,-7,6,2,2],[6,2,6,1,4]];
// var min = arr[0][0];
// var nomerMin = 0;
// var temp = [];
// var pemp = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (min > arr[j][i]) {
//         min = arr[j][i];
//         nomerMin = i;
//       }
//     }
//   }
//   console.log(arr)
//   for (i = 0; i < arr.length; i++) {
//     temp[i] = arr[i][nomerMin];
//   }
//   console.log(temp,nomerMin)
//   for (var i = 0; i < arr.length; i++) {
//     arr[i].push(temp[i])
//   }
//   console.log(arr)
//   for (var i = arr.length - 1; i > nomerMin; i--) {
//     for (var j = 0; j < arr.length; j++) {
//       pemp[i] = arr[j][i];
//       arr[j][i] = arr[j][i + 1];
//       arr[j][i + 1] = pemp[i];
//     }
//   }
//   console.log(arr)

//#72
// var arr = [[-5,7,-3,3,7],[7,1,3,-5,8],[-2,7,6,4,1],[-1,7,6,2,2],[6,2,6,1,4]];
// var min = arr[0][0];
// var nomer = 0;
// var temp = [];
// var pemp = [];
// var s = 0;
// var sign = true;
//
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j][i] > 0) {
//         s++;
//       }
//     }
//     if (s === 5 && sign === true) {
//       nomer = i;
//       sign = false;
//     }
//     s = 0;
//   }
//    console.log(arr,nomer)
//
//   for (var i = 0; i < arr.length; i++) {
//     arr[i].push(1)
//   }
//   console.log(arr)
//     for (var i = arr.length - 1; i >= nomer; i--) {
//       for (var j = 0; j < arr.length; j++) {
//         pemp[i] = arr[j][i];
//         arr[j][i] = arr[j][i + 1];
//         arr[j][i + 1] = pemp[i];
//       }
//     }
//     console.log(arr)

//#76 - 80!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var temp = [];
// console.log(arr)
// for (var i = 0; i < arr.length - 1; i++) {
//   if (arr[i][0] > arr[i + 1][0]) {
//     for (var j = 0; j < arr.length - 1; j++) {
//       for (var k = 0; k < arr.length; k++) {
//         temp[k] = arr[j][k];
//         arr[j][k] = arr[j + 1][k];
//         arr[j + 1][k] = temp[j];
//       }
//     }
//   }
// }
// console.log(arr)

//#80
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   s += arr[i][i];
// }
// console.log(s)

//#81
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var s = 0;
// var j = arr.length - 1;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   s += arr[i][j--]
// }
// console.log(s)

//#82
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var s = 0;
// var sum = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     sum += arr[j][s]
//   //  console.log(arr[s][j])
//     s++;
//   }
//   console.log(sum)
//   sum = 0;
// }

//#83
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var s = 0;
// var sum = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     sum += arr[j][s]
//     console.log(arr[j][s])
//     s++;
//   }
//   console.log(sum)
//   sum = 0;
// }

//#84
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var s = 0;
// var sum = 0;
// var sr = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     sum += arr[s][j]
//   //  console.log(arr[s][j])
//     s++;
//   }
//   sr = sum / (arr.length - i);
//   console.log(sum,sr)
//   sum = 0;
// }

//#85
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var s = 0;
// var sum = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     sum += arr[j][s]
//     //console.log(arr[j][s])
//     s++;
//   }
//   sr = sum / (arr.length - i);
//   console.log(sum,sr)
//   sum = 0;
// }

//#86
// var arr = [[8,7,-3,3,7],[7,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,6,1,4]];
// var s = 0;
// var min = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   min = arr[0][i];
//   for (var j = i; j < arr.length; j++) {
//     if (arr[s][j] < min) {
//       min = arr[s][j]
//     }
//     s++;
//   }
//   console.log(min)
// }

//#87
// var arr = [[8,7,-3,9,7],[10,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// var max = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   max = arr[i][0];
//   for (var j = i; j < arr.length; j++) {
//     if (arr[j][s] > max) {
//       max = arr[j][s]
//     }
//     s++;
//   }
//   console.log(max)
// }

//#88
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     arr[j][s] = 0;
//     s++;
//   }
// }
// console.log(arr)

//#89
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = arr.length - 2; i >= 0; i--) {
//   s = 0;
//   for (var j = i; j >= 0; j--) {
//     arr[j][s] = 0;
//     s++;
//   }
// }
// console.log(arr)

//#90
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   s = arr.length - 1;
//   for (var j = i; j < arr.length; j++) {
//     arr[j][s] = 0;
//     s--;
//   }
// }
// console.log(arr)

//#91
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     arr[s][j] = 0;
//     s++;
//   }
// }
// console.log(arr)

//#92
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     arr[s][j] = 0;
//     s++;
//   }
// }
// for (var i = arr.length - 2; i >= 0; i--) {
//   s = 0;
//   for (var j = i; j >= 0; j--) {
//     arr[j][s] = 0;
//     s++;
//   }
// }
// console.log(arr)

//#93
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// var t = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = arr.length - 1;
//   for (var j = i; j < arr.length; j++) {
//     arr[j][s] = 0;
//     s--;
//   }
//   for (var k = i; k < arr.length; k++) {
//     arr[t][k] = 0;
//     t++;
//   }
//   t = 0;
// }
// console.log(arr)

//#94
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     arr[j][s] = 0;
//     s++;
//   }
// }
// for (var i = arr.length - 1; i >= 0; i--) {
//   s = 0;
//   for (var j = i; j >= 0; j--) {
//     arr[j][s] = 0;
//     s++;
//   }
// }
// console.log(arr)

//#95
// var arr = [[8,7,-3,9,7],[1,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     arr[j][s] = 0;
//     s++;
//   }
//   s = arr.length - 1;
//   for (var j = i; j < arr.length; j++) {
//     arr[j][s] = 0;
//     s--;
//   }
// }
// console.log(arr)

//#96
// var arr = [[8,7,-3,9,7],[10,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// var temp = 0;
// console.log(arr)
// for (var i = 1; i < arr.length; i++) {
//   s = 0;
//   for (var j = i; j < arr.length; j++) {
//     arr[j][s] = arr[s][j];
//     s++;
//   }
// }
// console.log(arr)

//#97
// var arr = [[8,7,-3,9,7],[10,1,3,-5,8],[3,7,6,4,1],[2,7,6,2,2],[6,2,9,1,4]];
// var s = 0;
// var temp = 0;
// console.log(arr)
// for (var i = 0; i < arr.length - 1; i++) {
//   s = 0;
//   for (var j = i; j >= 0; j--) {
//     arr[j][s] = 0;
//     s++;
//     console.log("!#!!@#")
//   }
// }
// console.log(arr)
