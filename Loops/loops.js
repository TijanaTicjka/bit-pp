/* 1.Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. */

for (var i = 0; i < 15; i++) {
    if (i % 2 === 0) {
        console.log("even");
    } else {console.log("odd"); 
    }
}

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);

// 3. Write a program to compute the sum and product of an array of integers.

var arr = [1, 2, 3, 4, 5 ]; 
var sum = 0;
var pro = 1; 
for (i = 0; i < arr.length; i++) {
     sum += arr[i]; 
     pro *= arr[i]; 
} 

console.log(sum, pro);

// 4. Write a program which prints the elements of the following array as a single string.

var x = ["1", "A", "B", "c", "r" ,  true, NaN, undefined];

for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
    
}

// 5. Write a program that prints the elements of the following array.

var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
]; 

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);

} 


// 6. Write a program that outputs the sum of squares of the first 20 numbers.

var sum = 0;
for (i = 1; i < 21; i++) {
    sum += i*i;
}

console.log(sum); 

/* 7. Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

David  80
Marko  77
Dany   88
John   95
Thomas 68

The grades are computed as follows :

< 60%  F
< 70%  D
< 80%  C

< 90%  B
< 100% A */

var grade = "";
var marks = [80, 77, 88, 95, 68];
var sum = 0;
var avrMarks = 0;

for (var i=0; i < marks.length; i++) {
    sum += marks[i];
    avrMarks = sum/marks.length;
}

console.log(avrMarks);

if (avrMarks < 60) {
    grade = "F";
    
} else if (avrMarks < 70) {
    grade = "D";

} else if (avrMarks < 80) {
    grade = "C";
} else if (avrMarks < 90) {
    grade = "B";
} else if (avrMarks < 100) {
    grade = "A";
}

console.log(grade);

/* 8.Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// Note: This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself. */

for ( var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    }
} 

//Modified program

for ( var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
}


/* 1.Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

var a = [5, -4.2, 3, 7];
var e = 3;

for (var i = 0; i < a.length; i++) {
    if (a[i]===e){
        console.log("Yes");
    };
} //This solution will show "Yes" every time when program will find number 3 in array.

var a = [5, -4.2, 18, 7];
var e = 3;
var result = "";

for (var i = 0; i < a.length; i++) {
    if (a[i]!==e){
        result = "No";
    };
}
console.log(result);


/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

var array = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        array[i] = 2*array[i];
    } 
}

console.log(array);

/* 3. Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var array1 = [4, 2 ,2 , -1, 6];

var min = array1[0];

for (var i = 0; i < array1.length; i++) {
    if (min > array1[i]) {
        min = array1[i];
    }
    
}
console.log(min);  

/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var arrayL = [4, 2, 2, -1, 6];

var firstL = arrayL[0];

var min1 = arrayL[0];

for (var i = 0; i < arrayL.length; i++) {
    for (var j = 0; j < arrayL.length; j++) {
        if (min1 > arrayL[j]) {
            min1 = arrayL[j];
        }
        
    }

    if (min1 !== arrayL[i] && arrayL[i] < firstL) {
        firstL = arrayL[i];
    }
    
}

console.log(firstL);

    
/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var array3 = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < array3.length; i++) {
    if(array3[i] > 0) {
        sum += array3[i];
    }
    
}

console.log(sum);

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var array = [2, 4, -2, 7, -2, 4, 2];
var answer = ""

for (var i = 0; i < array.length; i++) {
    if (array[i] === array[(array.length-1)-i]) {
        answer = "The array is symetric";
    } else { 
        answer = "The array isn't symetric";
        break;
    }
    
}

console.log(answer);

var array$ = [3, 4, 12, 8];
var answer$ = ""

for (var i = 0; i < array$.length; i++) {
    if (array$[i] === array$[(array$.length-1)-i]) {
        answer$ = "The array is symetric";
    } else { 
        answer$ = "The array isn't symetric";
        break;
    }
    
}

console.log(answer$);


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var arr = [4, 5, 6, 2];
var arr1 = [3, 8, 11, 9, 10];
var arrN = [];

for (var i = 0; i < arr.length; i++) {
    arrN[arrN.length] = arr[i];
    arrN[arrN.length] = arr1[i];
 
} 
console.log(arrN);
        
/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var lSecond = secondArray.length;
var lNew = firstArray.length + secondArray.length
for (var i = firstArray.length; i < lNew; i++) {
    firstArray[i] = secondArray[i-lSecond];
        
}
console.log(firstArray);

/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var n = [];

for (var i = 0; i < a.length; i++) {
    if (a[i]!== e) {
        n[n.length] = a[i];
}
}

console.log(n);


/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

var a = [2, -2, 33, 12, 5, 8];
var p = 3;
var e = 78;
var newarr = [];


for (var i = 0; i < a.length; i++) {
    if (p > a.length) {
        console.log("Error message");
        break;
    } else if (i===p) {
        newarr[newarr.length] = e;
    }
    newarr[newarr.length] = a[i];
    
} 
console.log(newarr);







