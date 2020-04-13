//matrixArray
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

//№1
// var m = process.argv[2];
// m = parseInt(m);
// var n = process.argv[3];
// n = parseInt(n);
//
// var arr = [];
// for (var i = 1; i <= m; i++) {
//   arr[i] = new Array();
//   for (var j = 0; j < n; j++) {
//     arr[i][j] = 1;
//     arr[i][0] = 10 * i;
//   }
// }
// console.log(arr)

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
