//Array
//#1
// var arr = [1,2,3,4,5];
// for (var i = 0; i < arr.length; i++){
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i])
//   }
// }

//#1
// var arr = []
// for (var i = 1; i < 10; i++) {
//   if (i % 2 === 1) {
//     arr.push(i);
//   }
// }
// console.log(arr)

//#2
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var s = 1;
// for (var i = 0; i < arr.length; i++){
//     s *= 2;
//   console.log(s)
// }

//#3
// var a = process.argv[2]
// a = parseInt(a);
// var d = process.argv[3]
// d = parseInt(d);
//
// var arr = [0,1,2,3,4,5,6,7,8,9];
// var s = 1;
// for (var i = 0; i < arr.length; i++){
//     arr[i] = a + d * arr[i];
//   console.log(arr[i])
// }
// console.log(arr)

//#4
// var a = process.argv[2]
// a = parseInt(a);
// var d = process.argv[3]
// d = parseInt(d);
//
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var s = d;
// for (var i = 0; i < arr.length; i++){
//   d *= s;
//   arr[i] = a * d;
//   console.log(arr[i])
// }
// console.log(arr)

//#5
// var arr = [1,1];
// var s = 0;
// for (var i = 0; i < 10; i++){
//   s = arr[i] + arr[i+1];
//   arr.push(s);
// }
// console.log(arr)

//#6
// var a = process.argv[2]
// a = parseInt(a);
// var b = process.argv[3]
// b = parseInt(b);
//
// var arr = [a,b];
// var sum = a;
//
// for (var i = 1; i < 10; i++){
//   sum += arr[i];
//   arr[i + 1] = sum;
// }
// console.log(arr)

//#7
// var arr = [1,2,3,4,5,6,7,8,9,10];
// for (var i = arr.length; i >= 0; i--){
//   console.log(arr[i])
// }

//#8
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// var s = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i])
//     s++;
//   }
// }
// console.log("kol = " + s)

//#9
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// var s = 0;
// for (var i = arr.length; i > 0; i--) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i])
//     s++;
//   }
// }
// console.log("kol = " + s)

//#10
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// var s = 0;
// var t = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i])
//     s++;
//   }
// }
// console.log("kol = " + s)
// for (var j = arr.length; j > 0; j--) {
//   if (arr[j] % 2 === 1) {
//     console.log(arr[j])
//     t++;
//   }
// }
// console.log("kol = " + t)

//#11
// var k = process.argv[2];
// k = parseInt(k);
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = 0; i < arr.length; i += k) {
//   console.log(arr[i])
// }

//#12
// var k = process.argv[2];
// k = parseInt(k);
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = 2; i < arr.length; i += 2) {
//   console.log(arr[i])
// }

//#13
// var k = process.argv[2];
// k = parseInt(k);
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// console.log(arr.length)
// for (var i = arr.length; i > 0; i -= 2) {
//   console.log(arr[i])
// }

//#14
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = 2; i < arr.length; i += 2) {
//   console.log(arr[i])
// }
// console.log("/br")
// for (var i = 1; i < arr.length; i += 2) {
//   console.log(arr[i])
// }

//#16
var arr = [1,2,3,1,5,4,7,1,2,587,6];
for (var i = arr.length - 1; i > 0; i--) {
  for (var k = arr.length - i; k > 0; k = arr.length - i) {
    console.log(arr[k])
  }
  console.log(arr[i])
}
