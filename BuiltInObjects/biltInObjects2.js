/* Try to solve all assignments on a separate branch. Keep in mind that you should try to use built-in
objects and their methods, solo or combined. You should use loops only for the 4 and 9 assignment, all others can be solved using built-in object methods.

1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
12345 -> 54321 */

function reverseNumber(n){
    n += "";
    var n1 = [];
    n1 = n.split("").reverse().join("");
    return parseFloat(n1);
}

var a = reverseNumber(12345);
console.log(a);
console.log(typeof(a));

/* 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw” */ 

function returnInAlphOrder(string) {
    return string.toLowerCase().split("").sort().join("");
}

var a1 = returnInAlphOrder("Webmaster");
console.log(a1);

/* 3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir" */

function alphabetizeWords(string1) {
    var s = string1;
    var s1 = "";
    var arr = [];
    var arr1 = [];
    var arr2 = "";
    var arr3 = "";
    for (var i = 0; i <= s.length; i++) {
        if (s[i] !== " " && i !== s.length) {
            s1+=s[i];
        } else {
            arr.push(s1);
            s1 = s[i];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arr1.push(arr[i][j]);   
        }
        arr1.sort();
        arr2 = arr1.join("");
        arr[i] = arr2;
        arr1 = []; 
    }
    arr3 = arr.join("")
    return arr3; 
}

var a2 = alphabetizeWords("Republic Of Serbia");
console.log(a2); 

/* 4. Write a function to split a string and convert it into an array of words.
"John Snow" -> ["John", "Snow"] */

function splitString(someString){
    var newS = someString.split(" ");
    return newS;
}

var a3 = splitString("John Snow");
console.log(a3);

/* 5. Write a function to convert a string to its abbreviated form.
"John Snow"-> "John S." */

function convertStringToAbbrevForm(str) {
    var s = str.split(" ");
    var abb = ""
    if (s.length > 1) {
        abb = s[0] + " " + s[1][0] + ".";
    }
    return abb;
};

var a4 = convertStringToAbbrevForm("John Snow");
console.log(a4);

/* 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
"0000", "123", "l" -> "0123"
"00000000", "123", "r" -> "12300000" */

function addStringLeftOrRight(str$, d, str$1) {
    var str$$ = "";
    if(d === "l") {
        str$$ = str$.slice(0, (str$.length-str$1.length));
        str$ = str$$ + str$1;
    }else if(d === "r"){
        str$$ = str$.slice(0, (str$.length-str$1.length));
        str$ = str$1 + str$$;
    }else {
        console.log("Direction has to be \"l\" or \"r\"");
    }
    return str$;
}

var a5 = addStringLeftOrRight("0000", "l", "123");
console.log(a5);
var a5$ = addStringLeftOrRight("00000000", "r", "123");
console.log(a5$);

/* 7. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises" */

function capitalizeFirstLetter(str1) {
    var s1 = str1.slice(1,str1.length);
    var first = str1[0];
    first = first.toUpperCase()
    str1 = first + s1;
    return str1;
}

var a6 = capitalizeFirstLetter("js string exercises");
console.log(a6);

/* 8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com" */

function hideEmail(email) {
    var cutedEmail = email.slice(0,email.indexOf("@"));
    var hiddenEmail = email.replace(cutedEmail,"*****" )//"....."
    return hiddenEmail;
}

var a7 = hideEmail("somerandomaddress@example.com");
console.log(a7);

/* 9. Write a program that accepts a string as input and swaps the case of each character. For example, if you input "The Quick Brown Fox" the output should be "tHE qUICK bROWN fOX".
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
"The Quick Brown Fox"-> "tHE qUICK bROWN fOX" */

function swapCharacter(someString1) {
    var letter = "";
    var array = [];
    for (var i = 0; i < someString1.length; i++) {
        letter = someString1[i];
        if (letter.toUpperCase() === letter) {
            letter = letter.toLowerCase();
            array.push(letter);
        } else if (letter.toLowerCase() === letter){
            letter = letter.toUpperCase();
            array.push(letter);
        } else {
            array.push[letter];
        }
    }
    return array.join("");
}

var a8 = swapCharacter("The Quick Brown Fox");
console.log(a8);