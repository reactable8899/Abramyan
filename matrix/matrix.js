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