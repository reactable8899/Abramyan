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
