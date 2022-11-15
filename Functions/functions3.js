/* 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string" , "JS" -> "JS My random string"
"My random string" , "JS" -> "JS My random string" "10"-> "My random JS string" */

/* var add = "JS"
var someString = "My random string";
var position = 10; */

/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, "", undefined, 47, null]
 */

/* var array = [NaN, 0, 15, false, -22, "", undefined, 47, null]
var newArray = "";

for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i]) === true && (array[i]) !== null ) {
        newArray = newArray + " " + array[i];
    }
}

console.log(newArray);  */

function makeNewString(array) {
    var newString = "";
    for (var i = 0; i < array.length; i++) {
        if(isFinite(array[i]) === true && (array[i]) !== null ) {
            newString = newString + " " + array[i];
        }
    }
    return newString;
}

var t = makeNewString([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(t);

/* 3.Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47] */

/* var array$ = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var newArray$ = [];

for (var i = 0; i < array$.length; i++) {
    if ( (!!array$[i]) !== false ) {
        newArray$.length += 1;
        newArray$ [ newArray$.length - 1] = array$[i];
    }
}

console.log(newArray$);  */

function filterOutFalsy(array$) {
    var newArray$ = [ ];
    for (var i = 0; i < array$.length; i++) {
        if ( (!!array$[i]) !== false ) {
            newArray$.length += 1;
            newArray$ [ newArray$.length -1] = array$[i];
        }
    }
    return newArray$;
}

var t$ = filterOutFalsy ([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(t$); 

/* 4.Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number*/

function reverseNumber(a) {
    if ( isFinite(a) === false || a === null) {
        return "Invalid input"; // var b = "Invalid input";
                                // return b;
    } 
    a = a + "";
    var b = "";// b = "";
    for ( i = a.length - 1; i >= 0; i--) {
        b += a[i]; 
    }
    return (parseFloat(b));
}

var num = reverseNumber(12345);

console.log(num);

//console.log(typeof(num));

/* 5.Write a function to get the last element of an array. Passing a parameter "n" will return the last "n" elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 3-> [0, -2] */

/* var arr = [7, 9, 0, -2];
var n = 3;
var newArr = [];

for ( i = 0; i < n; i++ ) {
    newArr[i] = arr[(arr.length-1)-i];
}

console.log(newArr);  */

function getLastElements(arr, n) {
    var newArr = [];
    for ( i = 0; i < n; i++ ) {
        newArr[i] = arr [(arr.length-1)-i];
    }
    return newArr; 
}

var newArr1 = getLastElements( [3,4,5], 2);
console.log(newArr1);

/* 6. Write a function to create a specified number of elements with pre-filled numeric value array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none" , "none" ]
2 -> [null, null] */

/* var e = 9;
var r = 2;
var arr1 = [];

for (var i = 0; i< r; i++) {
    arr1[i] = e;
}
console.log(arr1); */

function createArray(e, r) {
    if (isFinite(e) === false || isFinite(r) === false) {
        //var arr1 = "Error";
        return "Error";
    }
    var arr1 = [];
    for (var i = 0; i< r; i++) {
        arr1[i] = e;
    }
    return arr1;
}

var arr2 = createArray(0, "j");

console.log(arr2);

/* 7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.*/

/* 8. Write a function to find a word within a string.
&#39;The quick brown fox&#39;, &#39;fox&#39; -&gt; &quot;&#39;fox&#39; was found 1 times&quot;
&#39;aa bb cc dd aa&#39;, &#39;aa&#39; -&gt; &quot;&#39;aa&#39; was found 2 times&quot;*/

