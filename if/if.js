//#1
// var a = process.argv[2];
// if(a>0){
// a++;
// console.log(a)}
// else
// console.log(a)
//#3
// var a = process.argv[2];
// if(a>0){
// a++;
// console.log(a)}
// else if(a<0)
// console.log(a-2)
// else
// console.log(10)
//#4
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// var x=0;
// if(a>0)
// x++;
// if(b>0)
// x++;
// if(c>0)
// x++;
// console.log(x)
//#5
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// var x=0,y=0;
// if(a>0)
// x++;
// else y++;
// if(b>0)
// x++;
// else y++;
// if(c>0)
// x++;
// else y++;
// console.log(x+ " "+y)
//#6
// var a = process.argv[2];
// var b = process.argv[3];
// if(a>b) console.log(a);
// if(b>a) console.log(b);
//#7
// var a = process.argv[2];
// var b = process.argv[3];
// if(a>b) console.log(1)
// if(a<b) console.log(2)
//#10
// var a = process.argv[2];
// var b = process.argv[3];
// a = parseInt(a);
// b = parseInt(b);
// if(a!=b) {
// c = a+b;
// a+=c;
// b+=c;
//   console.log(a+" "+b)
// }
// if(a==b){
//   console.log(0)
// }
//#11
// var a = process.argv[2];
// var b = process.argv[3];
// var x=0;
// a = parseInt(a);
// b = parseInt(b);
// if(a>b) x=b;
// if(a<b) x=a;
// if(a!=b){
// a+=x;
// b+=x;
// }
// else{
// a=0;
// b=0;}
// console.log(a);
// console.log(b);
//#12
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// if(a<b&&a<c) console.log(a);
// if(b<a&&b<c) console.log(b);
// if(c<a&&c<b) console.log(c);
//#13
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// if((a>b&&a<c)||(a<b&&a>c)) console.log(a);
// if((b>a&&b<c)||(b<a&&b>c)) console.log(b);
// if((c>a&&c<b)||(c<a&&c>b)) console.log(c);
//#14
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// a = parseInt(a);
// b = parseInt(b);
// c = parseInt(c);
// if(a<b&&a<c)  var min = a;
// if(a>b&&a>c) var max = a;
// if(b<a&&b<c) var min = b;
// if(b>a&&b>c) var max = b;
// if(c<b&&c<a) var min = c;
// if(c>b&&c>a) var max = c;
// console.log(min);
// console.log(max)
//#16
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// a = parseInt(a);
// b = parseInt(b);
// c = parseInt(c);
// if((a<=b&&a<=c)&&b<=c){
//   a*=2;
//   b*=2;
//   c*=2;
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// else {
//   console.log(-a)
//   console.log(-b)
//   console.log(-c)
// }
//#17
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// if(a<=b&&a<=c&&b<=c){
//   a*=2;
//   b*=2;
//   c*=2;
//   console.log(a + " "+b +" "+c)
// }
// else if(a>=b&&a>=c&&b>=c) {
//   a*=2;
//   b*=2;
//   c*=2;
//   console.log(a + " "+b +" "+c)
// }
// else {
//   console.log(-a + " "+ -b +" "+ -c)
// }
//#18
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// if(((a!=b)&&(a!=c))&&b==c) {console.log(1)
// return 0;}
// if(((b!=a)&&(b!=c))&&a==c) {console.log(2)
// return 0;}
// if((c!=b)&&(c!=a)&&b==a) console.log(3)
//#19
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// var d = process.argv[5];
// if(((a!=b)&&(a!=c)&&(a!=d))&&b==c==d) {console.log(1)
// return 0;}
// if(((b!=a)&&(b!=c)&&(b!=d))&&a==c==d) {console.log(2)
// return 0;}
// if(((c!=b)&&(c!=a)&&(c!=d))&&b==a==d){ console.log(3)
// return 0;}
// if(((d!=a)&&(d!=b)&&(d!=c))&&b==a==c) console.log(4)
//#20
// var a = process.argv[2];
// var b = process.argv[3];
// var c = process.argv[4];
// if((a-b)<=(a-c)) console.log(b);
// if((a-b)>=(a-c)) console.log(c);
//#28
// var a = process.argv[2];
// a = parseInt(a);
// if((a%4)==0)
// console.log("yes")
