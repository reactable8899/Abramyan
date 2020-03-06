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
//#12
// var n = process.argv[2];
// n = parseInt(n);
// var s = 1;
// for(var i = 1;i<=n;i++){
//   s*=((10+i)/10)
// }
// console.log(s)
//#13
// var n = process.argv[2];
// n = parseInt(n);
// var s = 0;
// for(var i = 1;i<=n;i+2){
//   s+=(((10+i)/10)-((10+i+1)/10));
// }
// console.log(s)
//#14
// var n = process.argv[2];
// n = parseInt(n);
// var s = 0;
// for(var i = 1;i<=n;i++){
//   s+=2*i-1;
// }
// console.log(s)
//#15
// var a = process.argv[2];
// a = parseInt(a);
// var n = process.argv[3];
// n = parseInt(n);
// var s = 1;
// for(var i = 1;i<=n;i++){
// s*=a;
// }
// console.log(s)
//#16
// var a = process.argv[2];
// a = parseFloat(a);
// var n = process.argv[3];
// n = parseFloat(n);
// var s = 1;
// for(var i = 1;i<=n;i++){
// s*=a;
// console.log(s)
// }
//#17
// var a = process.argv[2];
// a = parseFloat(a);
// var n = process.argv[3];
// n = parseFloat(n);
// var s = 1;
// var x = 1;
// for(var i = 1;i<=n;i++){
// x*=a;
// s+=x;
// console.log(s)
// }
//#18
// var a = process.argv[2];
// a = parseFloat(a);
// var n = process.argv[3];
// n = parseFloat(n);
// var s = 2;
// var x = 2;
// var t = 2;
// for(var i = 2;i<n;i++){
//   x*=a;
//   t*=x;
// console.log(x+" "+ t + " ")
// }
//#19
// var a = process.argv[2];
// a = parseFloat(a);
// var s = 1;
// for(var i = 1;i<=a;i++){
//   s*=i;
//   console.log(s)
// }
//#20
// var a = process.argv[2];
// a = parseFloat(a);
// var s = 1;
// var n = 0;
// for(var i = 1;i<=a;i++){
//   s*=i;
//   n+=s;
//   console.log(n)
// }
//#21
// var a = process.argv[2];
// a = parseFloat(a);
// var s = 1;
// var n = 1;
// for(var i = 1;i<=a;i++){
//   s*=i;
//   n+=1/s;
//   console.log(n)
// }
//#22
// var a = process.argv[2];
// a = parseFloat(a);
// var b = process.argv[3];
// b = parseFloat(b);
// var s = 1;
// var x = 1;
// var t = 1;
// for(var i = 1;i<=b;i++){
// x*=a;
// t*=i;
// s+=x/t;
//   console.log(s)
// }
//#23
// var x = process.argv[2];
// x = parseInt(x);
// var n = process.argv[3];
// n = parseInt(n);
// var znak = 1;
// var pow = 1;
// var factorial = 1;
// var sum = 0;
// for(var i = 1;i<=2*n+1;i+=2){
//   //console.log(i)
//   for(var j = 2;j<=i;j++){
//     factorial*=j;
//   }
//   for(j = 1;j<=i;j++){
//     pow*=x;
//   }
//   sum+=znak*pow/factorial;
//   console.log(sum)
//   znak *=-1;
// }
//#24
// var x = process.argv[2];
// x = parseInt(x);
// var n = process.argv[3];
// n = parseInt(n);
// var znak = 1;
// var pow = 1;
// var factorial = 1;
// var sum = 0;
// for(var i = 0;i<=2*n;i+=2){
//   //console.log(i)
//   for(var j = 1;j<=i;j++){
//     factorial*=j;
//   }
//   for(j = 1;j<=i;j++){
//     pow*=x;
//   }
//   sum+=(znak*pow/factorial);
//   console.log(sum)
//   znak *=-1;
// }
//#25
// var x = process.argv[2];
// x = parseInt(x);
// var n = process.argv[3];
// n = parseInt(n);
// var znak = 1;
// var pow = 1;
// var summa = 0;
// var sum = 0;
// for(var i = 1;i<=n;i++){
//   pow*=x;
//   sum++;
//   summa += znak*pow/sum;
//   znak*=-1;
//   console.log(summa)
// }
//#26
// var x = process.argv[2];
// x = parseInt(x);
// var n = process.argv[3];
// n = parseInt(n);
// var sum = 0;
// var power = 0;
// var pow = 1;
// var znak = 1;
// var summa = 0;
// for(var i = 1;i<=n;i++){
//     pow*=x;
//       if((i%2)==1){
//           power = pow;
//           //console.log(power)
//           sum = i;
//           //console.log(sum)
//           summa += znak*power/sum;
//           znak *=-1;
//       }
//       console.log(summa)
//   }
//#31
var n = process.argv[2];
n = parseInt(n);
