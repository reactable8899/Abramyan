//#1
// var n = process.argv[2];
// var k = process.argv[3];
// k = parseInt(k);
// n = parseInt(n);
// for(var i=0;i<n;i++){
//   console.log(k);
// }
//#2
// var n = process.argv[2];
// var k = process.argv[3];
// var s=0;
// k = parseInt(k);
// n = parseInt(n);
// for(var i = n;i<k;i++){
//   console.log(i);
//   s++;
// }
// console.log("kol " +s);
//#3
// var n = process.argv[2];
// var k = process.argv[3];
// var s=0;
// k = parseInt(k);
// n = parseInt(n);
// for(var i = k-1;i>n;i--){
//   console.log(i);
//   s++;
// }
// console.log("kol " +s);
//#4
// var n = process.argv[2];
// var k = process.argv[3];
// var s=0;
// k = parseInt(k);
// n = parseInt(n);
// for(var i = 1;i<=n;i++){
//   s = k*i/10;
//   console.log(s);
// }
//#5
// var k = process.argv[2];
// var s=0;
// k = parseInt(k);
// for(var i = 1;i<=10;i++){
//   s = k * i /10
//   console.log(s);
// }
//#6
// var k = process.argv[2];
// var s=0;
// k = parseInt(k);
// for(var i = 6;i<=10;i++){
//   s = k * i / 10
//   console.log(s);
// }
//#7
// var n = process.argv[2];
// var k = process.argv[3];
// var s=0;
// k = parseInt(k);
// n = parseInt(n);
// for(var i = n;i<=k;i++){
//   s+=i;
// }
// console.log(s);
//#8
// var n = process.argv[2];
// var k = process.argv[3];
// var s=1;
// k = parseInt(k);
// n = parseInt(n);
// for(var i = n;i<=k;i++){
//   s*=i;
// }
// console.log(s);
//#9
// var n = process.argv[2];
// var k = process.argv[3];
// var s=0;
// k = parseInt(k);
// n = parseInt(n);
// for(var i = n;i<=k;i++){
//   s+=i*i;
// }
// console.log(s);
//#10
// var n = process.argv[2];
// n = parseInt(n);
// var s = 0;
// for(var i = 1;i<=n;i++){
//   s+=1/i;
// }
// console.log(s)
//#11
var n = process.argv[2];
n = parseInt(n);
var s = 0;
for(var i = 1;i<=n;i++){
  s+=(n+i)(n+i);
}
console.log(s)
