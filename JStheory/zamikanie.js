// let name = 'Olim'
//
// function sayhi() {
//   console.log(name)
// }
// name = "Jane";
//
// sayhi();

// function sum(a) {
// return function(b){
//   return a + b;
// }
// }
// var result = sum(2);
// console.log(result(3))

// function counter() {
//   var a = 1;
//   return {
//     sayA: function() {
//       return a++;
//       console.log(a)
//     }
//   }
// }
// var counter1 = counter();

var arr = [1,2,3,1,5,4,7,1,2,587,6];
for (var i = 2; i < arr.length; i += 2) {
  console.log(arr[i])
}
for (var i = 1; i < arr.length - 1; i += 2) {
  console.log(arr[i])
}
