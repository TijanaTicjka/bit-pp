// 1.Whrite a program that calculates the maximum of two given numbers.

function calculateMaximum(a, b) {
    var result = 0;
    if(a > b) {
      result = a;
    } else if (b > a) {
      result = b;
    } else {
        result = "Numbers are equel"
    }
    return result;
}

 var c = calculateMaximum(3,3);

console.log(c);

// 2.Whrite a program that checks if a given number is odd.

function checkIsNumberOdd(x) {
    var answer = "";
    if(x % 2 === 0) {
        answer = "odd";
    }
    return answer;
}

console.log(checkIsNumberOdd(34));

// 3.Whrite a program that checks if a given number is three digit long number.

function isThreeDigitNumber(n) {
    
    if (isFinite(n) === false) {
        console.log("Input must be number");
    }
    var digit = "";
    if (n >= 100 && n <= 999) {
        digit = "This is three digit long number";
    }

    return digit;
    
}

console.log(isThreeDigitNumber(333));

//4.Whrite a program that calculates an arithmetic mean of four numbers.

function calculateArtithmeticOfNumbers(num1, num2, num3, num4) {

/* var num1 = 9;
var num2 = 10;
var num3 = "mmmmm";
var num4 = 15;
var t = (num1 + num2 + num3 + num4)/ 4;
 */

if (isFinite(num1) && isFinite(num2) && isFinite(num3) &&  isFinite(num4) === true /*&& typeof(num1) && typeof(num2) && typeof(num3) && typeof(num4)!== "string"*/) {
    var arithmetic = (num1 + num2 + num3 + num4)/ 4;
} else {
    var arithmetic = "All inputs must be numbers"; 
    }

    return arithmetic;
}

console.log(calculateArtithmeticOfNumbers(1, 2, 9, "mmmm"));

//7. Whrite a program that calculates a number of digits of a given number.

/* var arrayNum = "233";
var digits = arrayNum.length;

console.log(digits); */

function calculateNumberOfDigits(t) {

if (isFinite(t) === false ) {
    var digits = "Input must be number";
    
} else {
    var digits = ("" + t).length;
     
}
return digits;

}

console.log(calculateNumberOfDigits(5)); 
 

/* 8.Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

/* var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
var result = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        result+= 1;
    }
}

console.log(result);
 */

function calculateNumberOfAppearancesInArray(a, e) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            result+= 1;
        }
    }
    return result;

}

console.log(calculateNumberOfAppearancesInArray([44], 4));
//How to make condition for parammetar to be array?

//9. Write a program that calculates the sum of odd elements of a given array.

/* var a1 = [1, 2, 3, 4];
var odd = 0;

for (var i = 0; i < a1.length; i++) {
    if (a1[i] % 2 === 0) {
        odd += a1[i]
    }
}

console.log(odd); */

function checkSumOfOddNumbersInArray(a1) {

    var odd = 0;
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] % 2 === 0) {
            odd += a1[i]
        }
    }
    return odd;
    
}

console.log(checkSumOfOddNumbersInArray([346]));//How to make condition for parammetar to be array?

/* 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A. */
/* 
var some = "Apply"
var num = 0;

for (var i = 0; i < some.length; i++) {
    if (some[i] === "a") {
        num += 1;
    }
    
}

console.log(num); */

function calculateLetterA(some) {
    if (typeof(some) !== "string") {
        console.log("Input must be some string");
    } 
    var num = 0;

    for (var i =0; i < some.length; i++) {
    if (some[i] === "a") {
        num += 1;
       }
    }
    return num;
}

console.log(calculateLetterA("66aA"));

//Modifed program

function calculateLetterAa(some$) {
    if (typeof(some$) !== "string") {
        console.log("Input must be some string");
    } 
    var num$ = 0;

    for (var i =0; i < some$.length; i++) {
    if (some$[i] === "a" || some$[i] === "A") {
        num$ += 1;
       }
    }
    return num$;
}

console.log(calculateLetterAa("66aA"));

/*11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.*/

/* var somestring = "abc";
var value = 4;

var r = "";

for (var i = 0; i < 4; i++) {
    r += somestring; 
}

console.log(r); */

function concantanateString(somestring, value) {
    if (typeof(somestring) !== "string" || isFinite(value) === false) {
        console.log("Invalid input");
    }
        var r = "";

        for (var i = 0; i < value; i++) {
            r += somestring;
        }

        return r;
}

    console.log(concantanateString("ttt", "k"));




