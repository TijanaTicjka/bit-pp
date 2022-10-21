/* P1-(Task 5.) Write a program that compares two numbers and display the
larger. Result should be displayed in the console.*/

var num1=5;
var num2=13;
if(num1>num2) {
    console.log(num1);
} else if (num1<num2) {
    console.log(num2);
}

/* P2-Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd*/

var a=3;
if(a%2===0){
    console.log("even");
} else {
    console.log("odd");
}

var a=4;
if(a%2===0){
    console.log("even");
} else { 
    console.log("odd");
}

var a=9;
if(a%2===0){
    console.log("even");
} else { 
    console.log("odd");
}

/* P3-Write a program to check if the number is divisible by 3 and 5.If it is, print that number. 
Sample numbers: 15, 12 (check one at the time)
Output: 15*/

var b=15;
if(b%3===0 && b%5===0) {
    console.log(b);
}

var b=12;
if(b%3===0 && b%5===0) {
    console.log(b);
}

/* P4-(Task 1.)Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - */

var first=3;
var second=-7;
var third=2;
var product=first*second*third;
var result="";

if(product<0) {
    result="The sign is -";
}
console.log(result);
    
/* P5-(Task 4.)Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | */

var c=10;
if(typeof(c)==="number") {
    if(c%2===0) {
        console.log(c/2);
    } else {
        console.log("X");
    }
}

var c=7;
if(typeof(c)==="number") {
    if(c%2===0) {
        console.log(c/2);
    } else {
        console.log("X");
    }
}

/* P6-(Task 2.)Write a conditional statement to find the largest of five numbers. Display the result in console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */

var d=-5;
var e=-2;
var i=-6;
var f=0;
var g=-1;

if(d>e && d>i && d>f && d>g) {
    console.log(d);
} else if (e>i && e>f && e>g && e>d) {
    console.log(e);
} else if (i>f && i>g && i>d && i>e) {
    console.log(i);
} else if (f>g && f>d && f>e && f>i) {
    console.log(f);
} else if (g>f && g>d && g>e && g>i) {
    console.log(g);
}


/* P7-(Task 3.)Write a conditional statement to sort three numbers.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

var x=0;
var y=-1;
var z=4;

if(x>y && y>z){
    console.log(x,y,z);
} else if (x>z && z>y) {
    console.log(x,z,y);
} else if (y>z && z>x) {
    console.log(y,z,x);
} else if (y>x && x>z) {
    console.log(y,x,z);
} else if( z>x && x>y) {
    console.log(z,x,y);
} else if (z>y && y>x) {
    console.log(z,y,x);
}

/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F */

var c=60; 
var f=0;
var convert="";
if (f=(9*c/5) +32) {
    convert= c +"°C is " + f + "°F"
}
console.log(convert)
c = 60;

/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
Sample Input: 11  Sample Input: 32
Output: 2         Output : 38*/
//output 2? possible if input is 14, not 11)

var number=11;
var test=13;
var difference=number-test;
if(number>13) {
    console.log(2*difference);
} else {
    console.log(difference);
}

var number$=32;
var test$=13;
var difference$=number$-test$;
if(number$>13) {
    console.log(2*difference$);
} else {
    console.log(difference$);
}

/* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17        Output : 48 */

var a$=12;
var b$=5;
var sum=a$+b$;
if(a$===b$) {
    console.log(3*sum);
} else {
    console.log(sum);
}

var a$=8;
var b$=8;
var sum=a$+b$;
if(a$===b$) {
    console.log(3*sum);
} else {
    console.log(sum);
}

/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10 */

var $1=5;
var $2=54;
var $sum=$1+$2;
if($1===50 || $2===50 || $sum===50) {
    console.log("true");
} 

var $1=6;
var $2=50;
var $sum=$1+$2;
if($1===50 || $2===50 || $sum===50) {
    console.log("true");
}

var $1=40;
var $2=10;
var $sum=$1+$2;
if($1===50 || $2===50 || $sum===50) {
    console.log("true");
}

/* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13 Sample Input: 34    Sample Input: 256
Output : -       Output : 20 ⇔ 100  Output Output : 100 ⇔ 400 */

var ab=13;
if(ab>=20 && ab<=100) {
    console.log("20-100");
} else if(ab>=100 && ab<=400) {
    console.log("100-400");
} else {
    console.log("-");
}
var ab=34;
if(ab>=20 && ab<=100) {
    console.log("20-100");
} else if (ab>=100 && ab<=400) {
    console.log("100-400");
} else {
    console.log("-");
}

var ab=256;
if(ab>=20 && ab<=100) {
    console.log("20-100");
} else if (ab>=100 && ab<=400) {
    console.log("100-400");
} else {
    console.log("-");
}

//Example for ternary operator
var a=2;
var b=3;
/*if(a===b) {
    console.log("Numbers are equel");
} else {
    console.log("Numbers aren't equel");
}*/

(a===b)?console.log("Numbers are equel"):console.log("Numbers aren't equel");