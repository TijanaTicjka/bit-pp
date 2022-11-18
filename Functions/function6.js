/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

function countVowels(somestring) {
    var count = 0;
    var vowels = "aeioEIOU";
    for (var i = 0; i < somestring.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if( somestring[i] === vowels[j]) {
                count += 1;
            } 
        }  
    }
    return count;
}

var a = countVowels("I like JavaScript");
console.log(a);

/* 2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] ->; [‘a’,1,’b’,2,’c’,3] */

/* new[0] = arr1[0];
new[1] = arr2[0];
new[2] = arr1[1];
new[3] = arr2[1]; */

function makeNewArray(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr[newArr.length] = arr1[i];
        newArr[newArr.length] = arr2[i];  
    }
    return newArr;
}

var a1 = makeNewArray(["a","b","c"], [1,2,3])
console.log(a1);

/* 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function rotateList(list, k) {
    var newList = [];
    newList.length = list.length-k;
    for (var j = 0; j < k; j++) {
        for (var i = 0; i < list.length-k; i++) {
        newList[i] = list[k+i];
        } 
        newList[newList.length] = list[j]
    }
    return newList;
}

var a2 = rotateList([1,2,3,4,5,6], 2);
console.log(a2);

// 4. Write a function that takes a number and returns array of its digits.

function makeDigitsArray(num) {
    if (!isFinite(num)) {
        return "Imput must be number"
    }
    num = "" + num;
    var digits = [];
    for (var i = 0; i < num.length; i++) {
        digits[i] = num[i];
    }
    return digits;
}

var a3 = makeDigitsArray(555);
console.log(a3);

// 5. Write a program that prints a multiplication table for numbers up to 12.***

// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

/* 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements. */

function findMaxAndFilter(arr$) {
    var maximum = arr$[0];
    var newArr$ = [];
    for (var i = 0; i < arr$.length; i++) {
        if(isFinite (arr$[i]) && arr$[i] !== null) {
            newArr$[i] = arr$[i];
            if (arr$[i] > maximum) {
                maximum = arr$[i];
            }
        }
    }
    return [maximum, newArr$];   
}

var a6 = findMaxAndFilter ([1, 2, 3, undefined, null, Infinity, NaN, "SomeString"]);
console.log(a6);

/* 8. Write a function to find the maximum and minimum elements. Function returns an array. */

function findMaxMin(array$) {
    var min = array$[0];
    var max = array$[1]; 
    var minMax = [min, max];
    for (i = 0; i < array$.length; i++) {
        if (array$[i] < min) {
            min = array$[i];
        } else if (array$[i] > max) {
            max = array$[i];
        }
    }
    minMax = [min, max];
    return minMax;
}

// 9. Write a function to find the median element of array.

// 10. Write a function to find the element that occurs most frequently.

/* 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

/* 12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters. */// What is dinamic number?

// 13. Write a function to find all the numbers greater than the average.

function findGreater(array){

    var sum = 0;
    var average = 0;
    var greaterNum = [];
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
            average = sum / (i+1);
        }
    if (array[j] > average) {
        greaterNum[j] = array[j];
    } 
    }
    return greaterNum;
}

var a12 = findGreater([5,4,3]);
console.log(a12);

/* 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:

● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40 */

function calculateBMI(weight, height) {
    var result = "";
    if(!isFinite(height) || !isFinite(weight)) {
        result = "Invalid input";
    }
    var BMI = weight/(height*height);

    if (BMI < 15) {
        result = "Starvation";
    } else if (BMI < 17.5) {
        result =" Anorexic"; 
    } else if (BMI < 18.5) {
        result = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 25) {
        result = "Ideal";
    } else if (BMI >= 25 && BMI <= 30) {
        result = "Overweight";
    } else if (BMI >= 30 && BMI <= 40) {
        result = "Obese";
    } else if (BMI >= 40) {
        result = "Morbidly obese";
    }
    return result;
}

var a13 = calculateBMI(53, 1.64);
console.log(a13);

/*15. Write a function that takes a list of strings and prints them, one per line, in a rectangularframe.:
For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets printed as:
*********
* Hello *
* World *
* in *
* a *
* frame *

*********   */
