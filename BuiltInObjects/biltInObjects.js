/* Try to use built-in object methods to solve some of the problems here

1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

var duplicatesElement = (function (arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr.push(arr[i]); //newarr[newarr.length]
        newarr.push(arr[i])
    }
    return newarr;
})([2, 4, 7, 11, -2, 1]);

console.log(duplicatesElement);

/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] !*/ 

/* 3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

function checkNumOfElements(b) {
    if (b % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

var isOdd = (function(array, cb) {
    var l = array.length;
    var answer = checkNumOfElements(l);
    return answer;
})([1, 2, 9, 2, 1],checkNumOfElements)

console.log(isOdd);

/* b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

var countNumLessThanMiddle = (function(arr1) {
    var l1 = arr1.length;
    var result = "";
    if (l1 % 2 === 0) {
        result = "Error";
        
    } else {
        var middle = arr1[((l1+1)/2)-1];
        var count = 0;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] < middle) {
                count ++;
            }
        }
        result = count;
    }
    return result;
})([-1, 8.1, 3, 6, 2.3, 44, 2.11, 5]);
console.log(countNumLessThanMiddle);

/* 4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 } */

// var a = [1, 4, -2, 11, 8, 1, -2, 3];
// var b = a.sort(function(a,b) {return b-a;});
// console.log(b);

function Smallest (x, y) {
    this.minValue = x;
    this.minLastIndex = y;
}

var findSmallest =(function(arr2, cb) {
    var str = arr2.join(","); // from array to string, because sort() changes original array;
    //console.log(str);
    //console.log(arr2);
    var arr3 = arr2.sort(function(a,b) {return a-b;});
    var min = arr3[0] + "";
    //console.log(min);
    var t = str.split(","); //back to array;
    //console.log(t);
    var p = t.lastIndexOf(min);
    //console.log(p);
    return new Smallest (min, p);
})([1, 4, -2, 11, 8, 1, -2, 3],Smallest);

console.log(findSmallest);

/* 5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4] */

var findLessThan = (function(a, n) {
    var a1 = [];
    for (var i = 0; i < a.length; i++) {
        if(a[i] < n){
            a1.push(a[i]);
        }
    }
    return a1;
})([2, 3, 8, -2, 11, 4], 6);

console.log(findLessThan);

/* b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’] */

function toCaseInsensitive(someString){
    return someString.toLowerCase();
    
}

var findEllements = (function(array$,cb,string) {
    var newArr = [];
    var e = "";
    var e1 = "";
    for (var i = 0; i < array$.length; i++) {
        e = array$[i];
        e1 = toCaseInsensitive(e);
        if (e1.indexOf(string) === 0) {
            newArr.push(array$[i]);
        }
    }
    return newArr;
})(["JavaScript", "Programming", "fun", "product", "someproduct"],toCaseInsensitive, "pro");

console.log(findEllements);

/* c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it. */

var filterArray = (function(array$1, cb, n) {
    var newArray$1 = [];
    for (var i = 0; i < array$1.length; i++) {
        if(cb(array$1[i], n)){
            newArray$1.push(array$1[i])
        }
    }
    return newArray$1;
})([2, 3, 8, -2, 11, 4], function(e, n){return e < n}, 6);
    
console.log(filterArray);

/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase. */

/* 7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d). */

/* 8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days */

/* 9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds */

function tripTime(departure, arrival, cb) {
    var hours = arrival.h - departure.h;
    var minutes = arrival.m - departure.m;
    var seconds = arrival.s - departure.s;
    // var Time = {
    //     hours: hours,
    //     minutes: minutes,
    //     seconds: seconds
    // }
    var t = new cb(hours,minutes,seconds);
    var result = t.hours + " hours " + t.minutes + " minutes " + t.seconds + " seconds ";
    return result;
}

var departure = {
    h:8,
    m:22,
    s:13
}

var arrival = {
    h:11,
    m:43,
    s:22
}

console.log(tripTime(departure, arrival, function Time (hours,minutes,seconds){
    this.hours = hours,
    this.minutes = minutes,
    this.seconds = seconds
}));

/* 10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space. */

function Points (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

var t = new Points(3, 5, 1);
console.log(t);

/* b. Write a function that calculates the distance between two points in the space. */

function calculateDistance(point1, point2) {
    var dx = point2.x - point1.x;
    var dy = point2.y - point1.y;
    var dz = point2.z - point1.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

var o = distance ({ x: 1, y: 2, z: 3 },{ x: 4, y: 5, z: 6 });
console.log(o);

/* 11.
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function. */

/* 12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array) */