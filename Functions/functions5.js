/* 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function findAndSwitchMinMax(array$) {
    var min = array$[0];
    var max = array$[1]; 
    var pMin = 0;
    var pMax = 1;
    for (i = 0; i < array$.length; i++) {
        if (array$[i] < min) {
            min = array$[i];
            pMin = i;
        } else if (array$[i] > max) {
            max = array$[i];
            pMax = i;
        }
    }
    for (var i = 0; i < array$.length; i++) {
        if (array$[i] === min) {
            array$[i] = max;
            array$[pMax] = min;
        } else if (array$[i] === max) {
            array$[i] = min;
            array$[pMin] = max; 
        }
    }
    return array$;
}

var a1 = findAndSwitchMinMax([1,2,3]);
console.log(a1);

/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20. //Element's value less than 0 or 0.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function makeNewArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray[i] = array[i]/2 + 5;
        } else {
            newArray[i] = 20;
        }
    }
    return newArray; 
}

console.log(makeNewArray([ 3, 500, -2, 149, 53, 414, 1, 19 ]));

//Another possibilete-If element's value after dividing with two and adding 5 is less or zero than change it to 20.
/* function makeNewArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]/2 + 5 > 0) {
            newArray[i] = array[i]/2 + 5;
        } else {
            newArray[i] = 20;
        }
    }
    return newArray; 
}
console.log(makeNewArray([ 3, 500, -2, 149, 53, 414, 1, 19 ])); */

/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ "Micahel&quot", "Anne&quot", "Frank&quot", "Joe", "John" , "David" , "Mark", "Bill" ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam. */

/* 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

5. (skip :))Sort a previously defined array in a descending order and display it in the console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ] */

/* 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000 */

function multipleDiffrenceOddEven() {
    var evenSum = 0;
    var oddSum = 0;
    var r = 0;
    for (var i = 1; i < 1001; i++) {
        if( i % 2 === 0) {
            evenSum = evenSum + i;
        }
    }
    for (var i = 1; i < 501; i++) {
        if(i % 2 !== 0) {
            oddSum = oddSum + i;
        }    
    }
    r = (evenSum - oddSum) *12.5;
    return r;
}   

console.log(multipleDiffrenceOddEven());

/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David" , "Mark", true, "A"]
Output: AnStJoJoDaMa */

/* 8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB */

function printReversedOrder(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        newString = newString + string[(string.length-1)-i];
    }
    return newString;
}
console.log(printReversedOrder("Belgrade Institute of Technology"));

/* 9. Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */

/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input: 17 | 15
Output: true | false */

/* 11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true */

function isPalindrome(someString) {
    var palindrome = true;
    for (var i = 0; i < someString.length; i++) {
        if (someString[i] === someString[(someString.length - 1)-i]) {
            continue;
        } else {
            palindrome = false;
            break;
        }
    }
    return palindrome;
}

console.log(isPalindrome("Geek"));

/* 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9 */