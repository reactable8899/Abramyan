//while
//#1
// var a = process.argv[2];
// a = parseInt(a);
// var b = process.argv[3];
// b = parseInt(b);
// var temp = a;
// while(temp >= 0){
//   temp-=b;
// }
// console.log(temp+b)

//#2
// var a = process.argv[2];
// a = parseInt(a);
// var b = process.argv[3];
// b = parseInt(b);
// var temp = a;
// var i = 0;
// while(temp >= 0){
//   temp-=b;
//   i++;
// }
// console.log(i-1)

//#3
// var a = process.argv[2];
// a = parseFloat(a);
// var b = process.argv[3];
// b = parseFloat(b);
// var temp = a;
// var i = 0;
// var s = 0;
// while(temp >= 0){
//   temp-=b;
//   i++;
//   s += b;
// }
// console.log(i-1)
// console.log(a-s+b)

//#4
// var a = process.argv[2];
// a = parseInt(a);
// var temp = a;
// var s = 1;
// var n = 1;
// while(a > 3){
//   if((a % 3) == 0){
//   a /= 3;
//   s++;
// } else {
//   console.log("false")
//   return 0;
// }
// }
// for(var i = 1; i<=s;i++)
// n*=3;
// if(n == temp){
// console.log("true")
// } else {
//   console.log("false")
// }

//#5
// var a = process.argv[2];
// a = parseInt(a);
// var temp = 0;
// var s = 1;
// while(a > 2){
//   temp=a/2;
//   s++;
//   a-=temp;
//   //console.log(s)
// }
// console.log(s)

//#7
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// while(a > s * s){
//   s++;
// }
// console.log(s)

//#8
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// while(a >= s * s){
//   s++;
//   console.log(s)
// }

//#9
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var k = 0;
// while(a > s){
//   s*=3;
//   k++;
// }
// console.log(k)

//#10
// var a = process.argv[2];
// a = parseInt(a);
// var s = 1;
// var k = 0;
// while(a > s){
//   s*=3;
//   k++;
// }
// console.log(k-1)

//#11
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while(a > s){
//   s+=n;
//   n++;
//   console.log(s + " " + (n-1))
// }

//#12
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while(s <= a){
//   console.log(s)
//   s+=n;
//   n++;
// }

//#13
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while(s < a){
//   s += 1 / n;
//   n++;
//   console.log(s)
// }

//#14
// var a = process.argv[2];
// a = parseInt(a);
// var s = 0;
// var n = 1;
// while(s <= a){
//   console.log(s + " " + n)
//   s += 1 / n;
//   n++;
// }

//#15
// var a = process.argv[2];
// a = parseInt(a);
// var n = 1000;
// var month = 0;
// while(n < 1100){
//   n += n * a / 100;
//   month++;
//   console.log(n + " " + month)
// }

//#16
// var a = process.argv[2];
// a = parseInt(a);
// var n = 10;
// var days = 1;
// while(n < 200){
//   console.log(n+ " "+ days)
//   n += 10 + n * a / 100;
//   days++;
// }

//#17
// var a = process.argv[2];
// a = parseInt(a);
// var n = a;
// while(a != a % 10){
//   a = a % 10;
//   b = n % 100;
//   c = b / 10;
//   d = n / 100;
//   d = parseInt(d)
//   c = parseInt(c)
//   console.log(a + " " + c + " "+d)
// }
