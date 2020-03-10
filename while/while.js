// while
// #1
// var a = process.argv[2];
// a = parseInt(a);
// var b = process.argv[3];
// b = parseInt(b);
// var temp = a;
// while ( temp >= 0 ) {
//   temp -= b;
// }
// console.log( temp + b )
//
// #2
// var a = process.argv[2];
// a = parseInt(a);
// var b = process.argv[3];
// b = parseInt(b);
// var i = 0;
// while ( a >= 0 ) {
//   a -= b;
//   i++;
// }
// console.log( i - 1 )
//
// #3
// var a = process.argv[2];
// a = parseFloat(a);
// var b = process.argv[3];
// b = parseFloat(b);
// var temp = a;
// var i = 0;
// var s = 0;
// while ( temp >= 0 ) {
//   temp -= b;
//   i++;
//   s += b;
// }
// console.log( i - 1 )
// console.log( a - s + b )
//
// #4
// var a = process.argv[2];
// a = parseInt(a);
// var temp = a;
// var s = 1;
// var n = 1;
// while ( a > 3 ) {
//   if ( ( a % 3 ) == 0) {
//   a /= 3;
//   s++;
//   } else {
//   console.log( "false" )
//   return 0;
//   }
// }
// for ( var i = 1; i <= s; i++ )
//   n *= 3;
//   if ( n == temp ) {
//   console.log("true")
//   } else {
//   console.log("false")
// }
//
// #5
// var a = process.argv[2];
// a = parseInt(a);
// var temp = 0;
// var s = 1;
// while ( a > 2 ) {
//   temp = a / 2;
//   s++;
//   a -= temp;
//   //console.log(s)
// }
// console.log(s)
//
// #7
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// while ( a > s * s ) {
//   s++;
// }
// console.log(s)
//
// #8
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// while ( a >= s * s ) {
//   s++;
//   console.log(s)
// }
//
// #9
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var k = 0;
// while ( a > s ) {
//   s *= 3;
//   k++;
// }
// console.log(k)
//
// #10
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var k = 0;
// while ( a > s ) {
//   s *= 3;
//   k++;
// }
// console.log(k-1)
//
// #11
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while ( a > s ) {
//   s += n;
//   n++;
//   console.log(s + " " + (n-1))
// }
//
// #12
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while ( s <= a ) {
//   console.log(s)
//   s += n;
//   n++;
// }
//
// #13
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while ( s < a ) {
//   s += 1 / n;
//   n++;
//   console.log(s)
// }
//
// #14
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while ( s <= a ) {
//   console.log(s + " " + n)
//   s += 1 / n;
//   n++;
// }
//
// #15
// var a = process.argv[2];
// a = parseInt(a);
// var n = 1000;
// var month = 0;
// while ( n < 1100 ) {
//   n += n * a / 100;
//   month++;
//   console.log(n + " " + month)
// }
//
// #16
// var a = process.argv[2];
// a = parseInt(a);
// var n = 10;
// var days = 1;
// while ( n < 200 ) {
//   console.log(n+ " "+ days)
//   n += 10 + n * a / 100;
//   days++;
// }
//
// #17
// var a = process.argv[2];
// a = parseInt(a);
// var n = a;
// var b = a;
// while ( a > 1 ) {
//   console.log(a%10)
//   a = parseInt(a/=10);
// }

//#18
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 0;
// while ( a > 0 ) {
//   console.log( a % 10 )
//   s += a % 10;
//   a = parseInt(a /= 10);
//   n++
// }
// console.log(s + " kol: "+ n)

//20
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 0;
// while ( a > 0 ) {
//   s += a % 10;
//   if ( ( a % 10) == 2) {
//     console.log("true")
//     return 0;
//   }
//   a = parseInt(a /= 10);
//   n++;
// }
// if ( n > 0 ) {
// console.log("false")
// }

//#21
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 0;
// while ( a > 0 ) {
//   s += a % 10;
//   if ( ( a % 2 ) == 1) {
//     console.log("true")
//     return 0;
//   }
//   a = parseInt(a /= 10);
//   n++;
// }
// if ( n > 0 ) {
// console.log("false")
// }

//#22
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var i = 2;
// while ( i < a ) {
//   if( ( a % i ) === 0 ) {
//     s = 0;
//     break;
//   }
//   i++;
// }
// if ( s === 1 ) {
//   console.log("prostoe")
// } else {
//   console.log("zolotoe")
// }

//#24
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var i = 1;
// var i2 = 1;
// while ( i < a ) {
//   i += i2;
//   i2 = s;
//   s = i;
//   console.log(i)
// }
// if ( a == i) {
//   console.log("true")
// } else {
//   console.log("false")
// }

//#25
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var i = 1;
// var i2 = 1;
// while ( i <= a ) {
//   i += i2;
//   i2 = s;
//   s = i;
//   console.log(i)
// }

//#27
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var i = 1;
// var i2 = 0;
// var n = 0;
// while ( i != a ) {
//   i += i2;
//   i2 = s;
//   s = i;
//   n++;
//   //console.log(i)
//   if ( n > a ) {
//     console.log("не является числом Фибоначчи");
//     return 0;
//   }
// }
// console.log(n+1)

//#30
// var a = process.argv[2];
// a = parseInt(a);
// var b = process.argv[3];
// b = parseInt(b);
// var c = process.argv[4];
// c = parseInt(c);
// var n = a*b;
// var s = 0;
// while ( n > 0 ){
//   n = parseInt(n - c * c);
//   s++;
//   if ( n < 0 ) {
//     s -= 1;
//   }
// }
// console.log(s)
