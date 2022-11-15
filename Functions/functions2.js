/*1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false */

/* var input = "Jovana";
var result = "";

if (typeof(input)=== "string") {
    result = true;
} else {
    result = false;
}

console.log(result); */

function checkIsString(input) {
    var result = "";
    if (typeof(input) === "string") {
        result = true; 
    } else {
        result = false;
    }
    return result;
}

var x = checkIsString(13);
console.log(x);

/* 2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " ->true
12 -> false
false -> false */
/* 
var a = "";
var answer = "";

if (typeof(a )=== "string" && a.length === 0) {
    answer = true;
} else {
    answer = false;
}

console.log (answer); */

function isBlankString(a) {
    var answer = "";
    if (typeof(a) === "string" && a.length === 0) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}

console.log(isBlankString(""));

/*3 . Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha";
"Ha", 3 -> "HaHaHa";

/* var somestring$ = "Ha";
var value$ = 3;

var r$ = "";

for (var i = 0; i < 3; i++) {
    r$ += somestring$; 
}

console.log(r$); */

function concantanateString$(somestring$, value$) {
    if (typeof(somestring$) !== "string" || isFinite(value$) === false) {
        console.log("Invalid input");
    }
    var r$ = somestring$;

    for (var i = 1; i < value$; i++) {
        r$ += somestring$;
    }
    return r$;
}

console.log(concantanateString$("Ha", "n"));

/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function countLetter (string, letter) {
    if (typeof(string)!== "string" || typeof (letter)!== "string"){
        var count = "Invalid input";
    }

    for (var i = 0; i < string.length; i++ ) {
        if (string [i] === letter) {
            count += 1;
        }
    }
    return count;
}

console.log(countLetter ("nnnn", "m"));

/* 5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the
function should return -1. */

/* var letter1 = "t";
var string1 = "Myrandomstring";

var position = 0;

for (var i = 0; i < string1.length; i++) {
    if (string1[i] === letter1) {
        position = i;
        break;
    } else {
        position = -1;
    }
}

console.log(position);
 */

function findPosition(string1, letter1) {
    if (typeof(string1)!== "string" || typeof (letter1)!== "string"){
        var position = "Invalid input";
    }

    for (var i = 0; i < string1.length; i++) {
        if (string1[i] === letter1) {
            position = i;
            break;
        } else {
            position = -1;
        }
    }
    return position;
}

console.log(findPosition("My random string", "t"));

/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

/* var letter2 = "a";
var string2 = "TodayIsGreatDay";

var lastPosition = -1;

for (var i= 0; i < string2.length; i++) {
    if (string2[i] === letter2) {
            lastPosition = i;
        }
}

console.log(lastPosition); */

//Find out what is human numeration form in this exercise!

function findLastPosition(string2, letter2) {
    if (typeof(string2)!== "string" || typeof (letter2)!== "string"){
        var lastPosition = "Invalid input";
    }

    var lastPosition = -1;

    for (var i= 0; i < string2.length; i++) {
        if (string2[i] === letter2) {
                lastPosition = i;
            }
    }
    return lastPosition;
}

console.log(findLastPosition("TodayIsGreatDay", 8));

/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
&quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
&quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;] */

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot;*/