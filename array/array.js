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
// for (var i = 2; i < 10; i++){
//   s = arr[i-2] + arr[i-1];
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
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[arr.length - 1 - i])
//   console.log(arr[i])
// }

//#17
// var arr = [1,2,3,1,5,4,7,1,2,587,6];
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[arr.length - 1 - i])
//   console.log(arr[i])
// }

//#18
// var s = 0;
//  var arr = [7,8,9,7,6,6,7,10,12,13,6];
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[i] < arr[10]) {
//      console.log(arr[i])
//      s = 1;
//      return 0;
//    }
//  }
//  if (s != 1) {
//    console.log(0)
//  }

//#19
// var s = 0;
//  var arr = [1,1,9,7,6,5,7,10,12,13,12];
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[1] < arr[i] && arr[i] < arr[10]) {
//      s = arr[i];
//    }
//  }
//  console.log(s)

//#20
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var sum = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = k; i <= l; i++) {
//   sum +=arr[i]
// }
// console.log(sum)

//#21
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var a = 0;
// var sum = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = k; i <= l; i++) {
//   sum +=arr[i];
//   a++;
// }
// console.log(sum / a)

//#22
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var sum = 0;
// var otvet = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = 0; i < arr.length; i++) {
//   otvet += arr[i];
// }
// for (var i = k; i <= l; i++) {
//   sum +=arr[i]
// }
// console.log(otvet - sum)

//#23
// var k = process.argv[2];
// k = parseInt(k);
// var l = process.argv[3];
// l = parseInt(l);
// var sum = 0;
// var otvet = 0;
// var s = 0;
// var t = 0;
// var arr = [1,1,9,7,6,5,7,10,12,13,12];
// for (var i = 0; i < arr.length; i++) {
//   otvet += arr[i];
//   s++;
// }
// for (var i = k; i <= l; i++) {
//   sum +=arr[i];
//   t++;
// }
// console.log((otvet - sum)/(s-t))

//#24
// var arr = [1,2,3,4,5,6,7,8];
// var s = 0;
// var prov = 0;
// s = arr[1] - arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if ((arr[i + 1] - arr[i]) === s) {
//     prov++;
//   }
// }
//
// if (prov === arr.length - 1 ) {
//   console.log("AR_prog")
//   console.log("raznost = " + s)
// } else {
//   console.log("NOT AR_prog")
// }

//#26            !!!!!!!!
// var arr = [1,1,3,4,5,6,7,8,9,10];
// var s = 0,t = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     s++;
//   }
//   if (arr[i] % 2 === 0) {
//     t++;
//   }
// }
// console.log(arr.length)
// if (s + t === arr.length) {
//   console.log(0)
// }

//#27           !!!!!!!
// var arr = [1,-3,4,-5,7,-8,9];
// var s = 0,t = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && arr[i + 1]) {
//     s++;
//   }
// }
// if (arr.length / 2 === s) {
//   console.log(0)
// } else {
//   console.log("hz")
// }
