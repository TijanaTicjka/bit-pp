"use strict";

/* IIFE = Immediately Invoked Function Expressions
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4] */

var result = (function (a){
    var e = a[0];
    a[0] = a[a.length-1];
    a[a.length-1] = e;
    return a;
}) ([4, 5, 11, 9]);

console.log(result);

/* 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20 */

var surface = (function(a, b){
    var s = a * b;
    return s;
}
)(4, 5);

console.log(surface);

/* 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
Input: prograMming
Output: progra**ing, 2 */

var res = (function (string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if(string[i] === "m" || string[i] === "M"){
            newString += "*";
        } else {
            newString += string[i];
        }
    }
    return newString;
    
}) ("prograMming");

console.log(res);

/* 4. Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com */

var email = (function (n, s) {
    return n + "." + s + "@gmail.com";
}) ("pera", "peric");

console.log(email);

/* 5. Write a function that returns a function that calculates a decimal value of the given octal number.
Input: 034
Output: 28 */ 

//Does Visual Studio automatically convert octal numbers to digital?

function calculateDecimalValue(octalNumber) {
    var decimalNumber = 0;
    var newNum = 0;
    for (var i = 0; i < octalNumber.length-1; i++) {
        newNum = parseInt(octalNumber[i])
        decimalNumber += newNum*8;
    }
    
    newNum = parseInt(octalNumber[octalNumber.length-1]);
    decimalNumber += newNum;
    return decimalNumber;
}

var f = function (num$) {
    return calculateDecimalValue(num$)
}

console.log(f("034"));

/* 6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! */

function isValidPassword(password,cb, cb1) {
    var answer = "";
    if (password.length >= 6) {
        for (var i = 0; i < password.length; i++) { 
            if (isFinite(password[i])) {
                answer = cb;
            } else {
                answer = cb1;
            }
        }
    } else {
        answer = cb1;
    
    }
    return answer;
}

var p = isValidPassword("JSGuru",function successCallback() {return "Your password is cool"},function errorCallback() {return "Your password is invalid"});
var p1 = p();
console.log(p1);

/* 7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.

Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

function isOdd(e) {
    if (e % 2 !== 0){
        return e;
    }
};
  
function filterElements(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isOdd(arr[i])) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
  
var newElements = filterElements([2, 8, 11, 4, 9, 3], isOdd);
console.log(newElements);
  
  
  
  
  
  
  
  
  
  
  
  
  