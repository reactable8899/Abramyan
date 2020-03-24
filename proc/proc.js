//PROC
//#1
// function proc1(a) {
//   let b = a * a * a;
//   console.log(b)
// }
// proc1(2);

//#2
// function proc2(a) {
//   let b = a * a;
//   let c = b * a;
//   let d = c * a;
//   console.log("b = " + b + " c = " + c + " d = " + d)
// }
// proc2(2);

//#3
// let a = 2;
// let b = 5;
// let c = 3;
// let d = 4;
// function proc3(a, b) {
//   let aMean = (a + b) / 2;
//   let gMean = (a * b);
//   console.log(aMean);
//   console.log(gMean);
// }
// proc3(a,b);
// proc3(a,c);
// proc3(a,d);

//#4
// function proc4(a) {
//   let p = 3*a;
//   let s = a * a * Math.sqrt(4) / 4;
//   console.log(p + " " + s)
// }
// proc4(2);

//#6
// var s = 0;
// var t = 0;
// var a = 12;
// var k;
// function proc5(c) {
//   c = parseInt(c);
//   while (c != 0) {
//    s += c % 10;
//    t++;
//    c = c / 10;
//    console.log(s + " " + t)
//   }
// }
// proc5(1234)

//#8
// function proc8(k,d) {
//   console.log(k)
//   console.log(k + "" + d)
//   let d1 = 1;
//   let d2 = 2;
//   console.log(k + "" + d +"" + d1)
//   console.log(k+ "" + d + d1 + "" + d2)
// }
// proc8(2,5)

//#9
// function proc9(k,d) {
//   console.log(k)
//   console.log(d + "" + k)
//   let d1 = 1;
//   let d2 = 2;
//   console.log(d1 + "" + d + "" + k)
//   console.log(d2 + "" + d1 + "" + d + "" + k)
// }
// proc8(2,5)

//#10
// function proc10(x,y) {
//   let c;
//   c = x;
//   x = y;
//   y = c;
//   console.log(x+" "+y)
// }
// proc10(2,5)

//#11
// let a = 3;
// let b = 4;
// let c = 5;
// let d = 6;
// function proc11(x,y) {
//   if (x > y) {
//     min = y;
//     max = x;
//   } else {
//     min = x;
//     max = y;
//   }
//   console.log(min + " " + max)
// }
// proc11(5,3)
// proc11(a,b)
// proc11(b,c)
// proc11(c,d)
// proc11(a,d)

//#14
// function proc14(a,b,c) {
//   let y = a,x = b,z = c;
//   b = y;
//   c = x;
//   a = z;
//   console.log(a+ " "+ b + " " +c)
// }
// proc14(2,3,4)

//#15
// function proc15(a,b,c) {
//   let y = a,x = b,z = c;
//   a = x;
//   b = z;
//   c = y;
//   console.log(a+ " "+ b + " " +c)
// }
// proc15(2,3,4)

//#16
// function proc16(a) {
//   let b;
//   if (a > 0)
//   console.log(1)
//   if (a < 0)
//   console.log(-1)
//   if (a === 0)
//   console.log(0)
// }
// proc16(1)

//#17
// function proc17(a,b,c) {
//   let d = b*b-4*a*c;
//   if (d > 0)
//   console.log("Корней два")
//   if (d === 0)
//   console.log("1 корень")
//   if (d < 0)
//   console.log("2 комплексных корня")
// }
// proc17(1,3,1)

//#18
// function proc18(r) {
//   let p = 3.14;
//   let s = p*r*r;
//   console.log(s)
// }
// proc18(2)

//#20
// function proc20(a,h) {
//   let b = Math.sqrt((a/2)*(a/2) + h*h)
//   console.log(b)
// }
// proc20(2,3)

//#21
// function proc21(a,b) {
//   let s = 0;
//   if( a > b ) {
//     console.log(0)
//     return 0;
//   }
//   for (var i = a; i <= b; i++) {
//     s += i;
//   }
//   console.log(s)
// }
// proc21(1,6)
// proc21(6,10)

//#22
// function proc22(a,b,o) {
//   if (o == 1) {
//     console.log(a-b);
//   }
//   if (o == 2) {
//     console.log(a*b);
//   }
//   if (o == 3) {
//     console.log(a/b);
//   }
//   if (o > 3) {
//     console.log(a+b)
//   }
// }
// proc22(2,3,4)

//#23
// function proc23(x,y) {
//   if (x >= 0 && y >= 0) {
//     console.log("первая четверть")
//   }
//   if (x <= 0 && y >= 0) {
//     console.log("вторая четверть")
//   }
//   if (x <= 0 && y <= 0) {
//     console.log("третья четверть")
//   }
//   if (x >= 0 && y <= 0) {
//     console.log("четвертая четверть")
//   }
// }
// proc23(2,-3)

//#24
// let s = 0;
// function proc24(k) {
//   if((k % 2) == 0){
//     console.log("true")
//     s++;
//   } else {
//     console.log("false")
//   }
// }
// for(var i = 1;i <= 10; i++) {
//   proc24(i)
// }
// console.log(s)

//№25
// function isSquare(n) {
//   let otvet = Math.sqrt(n);
//   if (otvet * otvet === n) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// isSquare(621)

//#26
// var sum = 0,s = 0,t = 1;
// function isPower(n) {
//   while (n > 1) {
//     n /= 5;
//     s++;
//   }
//   for (let i = 0; i < s ; i++){
//   t *= 5;
//   }
//   if (t === n){
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// isPower(25)

//#28
// function isPrime(n) {
//   if (n % 2 != 0 & n % 3 != 0) {
//     console.log("prostoe")
//   } else if (n === 2 || n === 3 || n === 1) {
//     console.log("prostoe")
//   } else {
//     console.log("zolotoe")
//   }
// }
// isPrime(3)

//#29
// function digitCount(n) {
//   var s = 1;
//   if (n > 9) {
//     while (n >= 10) {
//       n /= 10;
//       s++;
//     }
//   console.log(s)
// } else {
//   console.log(1)
// }
// }
// digitCount(11)

//#30
// function digitN(n,k) {
//   var s = 1;
//   if (n > 9) {
//     while (n > 9) {
//       n /= 10;
//       s++;
//     }
//   }
//   if (s < k) {
//     console.log(-1)
//   }
// }
// digitN(11,3)

//#34
// function factN(n) {
//   let s = 1;
//   for (var i = 1; i <= n; i++) {
//     s *= i
//   }
//   console.log(s)
// }
// factN(5)

//#36 1 1 2 3 5 8 13 21

// function fibN(n) {
//   let a1 = 1, a2 = 1, s = 1;
//   while (n > 2) {
//     n--;
//     s = a1 + a2;
//     a1 = a2;
//     a2 = s;
//   }
//   console.log(s)
// }
// fibN(7)

//#46
// function nod(a,b) {
//   var s,nok,n = b;
//   s = a - b;
//   n -= s;
//   console.log("Нод = " + n)
//   nok = a * b / n;
//   console.log("Нок = " + nok)
// }
// nod(126,70)

//#52,53
// function vGod(n,m) {
//   if (n % 100 === 0 & n % 400 != 0) {
//       console.log("nevis")
//   } else if(n % 4 === 0) {
//     console.log("vis")
//     var k = 1;
//   } else {
//     console.log("nevis")
//   }
//   if (m % 2 === 1) {
//     console.log("31 days on month")
//   } else {
//       if (m % 2 === 0 & m != 2) {
//         console.log("30 days on month")
//       } else {
//           if (m == 2 & k == 1) {
//             console.log("29 days on month")
//           } else {
//               console.log("28 days on month")
//           }
//       }
//   }
// }
// vGod(2020,2)
