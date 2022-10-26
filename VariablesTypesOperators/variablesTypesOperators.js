/* Variable declaration and initialization
1. Create several variables using different letter cases and beginning characters. Check if they still exist if you refer to them in different case - does case matter here? Try to declare a variable starting with number as the first character. */

var a;
a = 13;
var b1;
b1 = 33;
var letter$;
letter$ = "Dolar cours today is";
var _N;
var _N = "";
// Declarating variable with number as the first character is not allowed.

// 2.Save a string (text) describing your current mood in a variable and print it out in console.

var myMood = "I feel hopeful";
console.log(myMood);

// 3. Feel free to play around in the console and get familiar with it.
var a;
a = 13;
console.log(a);

var b1;
b1 = 33;
console.log(b1);

var letter$;
letter$ = "Dolar cours today is";
console.log(letter$);

var _N;
var _N = "";
console.log(_N);

var U;
console.log(U);

/* Arithmetic operators
4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results? */ 
//Because the program executes first operations with "*" and "/" operators.

var num1 = 3;
var num2 = 31;
var num3 = 5;
var num4 = 7;
var num5 = 4;
var num6 = 2;
var num7 = 1.14;

console.log(num1 - num6 - num2);
console.log(num1 * num3 - num4 / num1);
console.log(num5 / num6 - num7 / num1);

// 5. How many grams weight 1.2kg of bananas?

var bananas = 1.2;
var grams = bananas * 1000 + " g";
console.log(grams);

/* 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days… */

var minute = 60;
var lateAna = 5 * minute;
console.log(lateAna + " seconds" );

var lateTom = 30 * minute;
console.log(lateTom + " seconds");

/* 7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it? */

var GB = 1024 ;

var additionalMemory = 4 * GB;
console.log(additionalMemory + " MB");

var KB = additionalMemory * 1024;
var articles = KB / 98;
console.log(articles + " news articles");

// 9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

var a = a * 2;
a *= 2;

var b = b + 3;
b += 3;

var c = c / 5;
c /= 5;

var d = d-7;
d -= 7;

/* 10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
Each variable has to start with a different type of character. Print them all out in the console and check their types. */

var Name = "Tijana";
console.log(Name);
console.log(typeof(Name));

var _age = 33;
console.log(_age);
console.log(typeof(_age));

var $pet = "I don't have cat";
console.log($pet);
console.log(typeof($pet));


/* 11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56 */

var first = "number"; // string
console.log(typeof(first));

var second = true ; // boolean
console.log(typeof(second));

var third = "false"; // string
console.log(typeof(third));

var fourth = 56; // number
console.log(typeof(fourth));

/* Logical operators
12. Check how good you are at guessing the Boolean equivalent of different values using the console. Do you remember how to check for a Boolean equivalent of a value?*/

var equivalent1 = 33;
console.log(!!equivalent1); // true

var equivalent2 = "I am 33 years old"; // true
console.log(!!equivalent2);

var equivalent3 = 0;
console.log(!!equivalent3); // false

var equivalent4 = null; 
console.log(!!equivalent4); // false

var equivalent5 = "";
console.log(!!equivalent5); // false

var equivalent6 = false;
console.log(!!equivalent5); // false

/* 13.Use the console to check the results you think should go in the following table:

p      q        p && q    p || q
true   true     true      true
true   false    false     true
false  true     false     true
false  false    false     false */

var p = true;
var q = true;
console.log(p && q);
console.log(p || q);

var p = true;
var q = false;
console.log(p && q);
console.log(p || q);

var p = false;
var q = true;
console.log(p && q);
console.log(p || q);

var p = false;
var q = false;
console.log(p && q);
console.log(p || q);

/*14. If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120 */

var age = 33;
var check1 = age < 0;
var check2 = age > 120;

console.log(!!check1);
console.log(!!check2);

/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If we store the current speed value in the variable speed. Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not)*/

var speed = 60;
var limits = speed >= 60 && speed <= 120;

console.log(!!(limits));


