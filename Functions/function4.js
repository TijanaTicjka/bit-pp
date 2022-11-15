/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

function checkElement(e, a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            return "Yes";
            break;
        }
    }
    return "No"  
}

var r = checkElement(3, [5, -4.2, 3, 7]);

console.log(r);

/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

function multiplePositiveNum(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = 2*array[i];
        } 
    }
    return array;
}

console.log(multiplePositiveNum([-3, 11, 5, 3.4, -8]));

/* 3. Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

function findMin(array1) {
    var min = array1[0];
    var index = 0;
    for (var i = 0; i < array1.length; i++) {
        if (min > array1[i]) {
            min = array1[i];
            index = i;
        }
    }
    return [min, index];
}

console.log(findMin([4, 2, 2, -1, 6]));

/* 4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

function findSecondMin(array$) {
    var secMin = array$[0];
    var firstMin = array$[1];
    for (var i = 0; i < array$.length; i++) {
        if(array$[i] < secMin) {
            secMin = array$[i];
            if(secMin < firstMin) {
                secMin = firstMin;
            }
        }
    }
    return secMin;
}

console.log(findSecondMin([4, 2, 2, -1, 6]));

/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

function calculateSum(array2) {
    var sum = 0;
    for (var i = 0; i < array2.length; i++) {
        if ( array2[i] > 0) {
            sum += array2[i];
        }
    }
    return sum;
}

console.log(calculateSum([3, 11, -5, -3, 2]));

/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

function isSymetric(array3) {
    var answer = "The array is symetric" ;
    for (var i = 0; i < array3.length; i++) {
        if (array3[i] !== array3[array3.length - 1]-i ) {
            answer = "The array isn't symetric";
        }
        break;
    }
    return answer;
}

console.log(isSymetric ([2, 4, -2, 7, -2, 4, 2]));

console.log(isSymetric ([3, 4, 12, 8]));

/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]    */

function intertwineArrays(ar1, ar2) {
    var ar3 = [];
    for (var i = 0; i < ar1.length; i++) {
        ar3[ar3.length] = ar1[i];
        ar3[ar3.length] = ar2[i]
    }
    return ar3;
}

console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));

/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

function concatenateArrays(array4, array5) {
    var array6 = array4;
    for (var i = 0; i < array5.length; i++) {
        array6[array6.length] = array5[i]
    }
    return array6;
}

console.log(concatenateArrays([4, 5, 6, 2],[3, 8, 11, 9]));

/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function deleteElement(e1, array7) {
    var array8 = [];
    for (var i = 0; i < array7.length; i++) {
        if (array7[i] !== e1) {
            array8[array8.length] = array7[i];
        } 
    }
    return array8;
}

console.log(deleteElement(2, [4, 6, 2, 8, 2, 2]));

/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function insertElement(e2, p, array9) {
    if (p > array9.length) {
        return "Error message"
    }
    var array10 = [];
    array10[p] = e2;
    for ( i = p; i < array9.length; i++) {
        for (var j = 0; j < p ; j++) {
        array10[j] = array9[j];
        }
        array10[i+1] = array9[i];
    }
    return array10;  
}

console.log(insertElement(78, 3, [2, -2, 33, 12, 5, 8]));