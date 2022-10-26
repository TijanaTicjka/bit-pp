/* What is the result of executing each of these lines in the console? Why?
var a; typeof a;
var s = '1s'; s++;
!!"false";
!!undefined;
typeof -Infinity;
10 % "0";
undefined == null;
false === "";
typeof "2E+2";
a = 3e+3; a++;*/

var a;
console.log(typeof a);
//undefind

var s="1s";
console.log(s++);
//NaN

console.log(!!"false");
//true

var b;//checking !!undefind
console.log(!!b);
//false

console.log(typeof -Infinity);
//number

console.log(10% "0");
//NaN

var a;//checking undefind==null
console.log(a==null);
//true

console.log(false==="");
//false

console.log(typeof "2E+2");
//string

var a=3e+3;
console.log(++a);
//3001

