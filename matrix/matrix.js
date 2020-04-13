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
var m = process.argv[2];
m = parseInt(m);
var n = process.argv[3];
n = parseInt(n);
var d = process.argv[4];
d = parseInt(d);
var sum = 0;
var mm = [1,2,3,4,5];
var arr = [];
for (var i = 0; i < m; i++) {
  arr[i] = new Array();
  for (var j = 0; j < n; j++) {
    arr[i][j] = mm[i];
  }
  sum = 0;
}
console.log(arr)
