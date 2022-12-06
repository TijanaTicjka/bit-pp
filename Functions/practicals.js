"use strict"

/* 1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false */

function checkDigit(string) {
   var output = false;
   for (var i = 0; i < string.length; i++) {
    if(string[i] === "5") {
        output = true;
        break;
    }
   }
   return output;
}

var a = checkDigit("1b895abd");
console.log(a);
    
/* 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */

function replaceString(string1) {
    var newString = "";
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] === "J" || string1[i] === "S") {
            newString += "*";
        } else {
            newString += string1[i];
        }
    }
    return newString;
}

var a1 = replaceString("Programming in JS is super interesting!");
console.log(a1);

/* 3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning” */

function insertCharacter(string2, p, c) {
    var newString1 = "";
    for (var i = 1; i < string2.length+1; i++) {
        if(i === p) {
            newString1 += c + " ";
        } else {
            newString1 += string2[i-1];
        }
    }
    return newString1;
}

var a2 = insertCharacter("Goo morning", 4, "d");
console.log(a2);

/* 4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!” */

function deleteCharacter(string3, c1) {
    var newString2 = "";
    for (var i = 0; i < string3.length; i++) {
        if(i === c1) {
            newString2 += string3[i+1];
            i++;
        } else {
            newString2 += string3[i];
        }
    }
    return newString2;
}

var a3 = deleteCharacter("Goodd morning!", 3);
console.log(a3);

/* 5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]  */

function deleteSecond(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[newArray.length] = array[i];
        i++;
    }
    return newArray;
}

var a4 = deleteSecond([3, 5, 1, 8, 90, -4, 23, 1, 67]);
console.log(a4);

/* 6. Write a function that replaces the elements of the given array between two positions with their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67] */

function replaceElements(array1, p1, p2) {
    var newArray1 = [];
    for (var i = 0; i < array1.length; i++) {
        if (i >= p1 && i <= p2) {
            newArray1[i] = array1[i] * 2;
        } else {
            newArray1[i] = array1[i];
        }
    }
    return newArray1;
}

var a5 = replaceElements([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6);
console.log(a5);

/* 7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true */

function checkElements(array$, array$1) {
    var answer = true;
    for (var i = 0; i < array$.length; i++) {
        for (var j = 0; j < array$1.length; j++) {
            if(array$[i] !== array$1[j]) {
                answer = false;
            } else {
                answer = true;
            }
        } 
    }
    return answer;
}

var a6 = checkElements([3, 4, 11, 3], [8, 9, 3, 1, 11, 4, 3]);
console.log(a6);

/* 8.Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’.
Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’] */

// function sortArray(arr) {
//     var newArr = [];
//     var counter = 0;
//     var min = 0;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === "a" || arr[i][j] === "A" ){
//                 counter ++;
//             }
//         }
        
//     } 
//     return newArr
// }

// var a7 = sortArray(["apple", "tea", "amazing", "morning", "JavaScript"]);
// console.log(a7);

/* 9. Write a function that prints out the date of the next day.
Output: 25. 10. 2018. */

/* 10. Write a function that prints out the date of the previous day.
Output: 23. 10. 2018. */

/* 11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
78
111
4
4321 */

function printOnRight(arr1) {
    var max = 0;
    var l = 0;
    var print = [];
    var b = 0;
    for (var i = 0; i < arr1.length; i++) {
        arr1[i] += "";
        if(arr1[i].length > max){
            max = arr1[i].length;
            l = arr1[i]
        }
    }
    for (var i = 0; i < arr1.length; i++){
        arr1[i] += "";
        if(arr1[i].length < max) {
            b = max - arr1[i].length;
            for (var j = 0; j < b; j++) {
                arr1[i] = " " + arr1[i];
            }
            print += arr1[i] + "\n";
        } else {
            print += arr1[i] + "\n";
        }
    }
    return print;
}

var a10 = printOnRight([78, 111, 4, 4321]);
console.log(a10);