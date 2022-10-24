/*1. Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console.For input 1, output should be “Monday”. */

var day = 1;
var resultName = "";

switch (day) {
    case 1:
        resultName = "Monday";
        break;
    case 2:
        resultName = "Tuesday";
        break;
    case 3:
        resultName = "Wendsday";
        break;
    case 4:
        resultName = "Thursday";
        break;
    case 5:
        resultName = "Friday";
        break;
    case 6:
        resultName = "Saturday";
        break;
    case 7:
        resultName = "Sunday";
        break;
}
console.log(resultName);

/* 2. Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be number between 1 and 7". */

var day1 = 10;
var resultName1 = "";

switch (day1) {
    case 1:
        resultName1 = "Monday";
        break;
    case 2:
        resultName1 = "Tuesday";
        break;
    case 3:
        resultName1 = "Wendsday";
        break;
    case 4:
        resultName1 = "Thursday";
        break;
    case 5:
        resultName1 = "Friday";
        break;
    case 6:
        resultName1 = "Saturday";
        break;
    case 7:
        resultName1 = "Sunday";
        break;
    default:
        resultName1 = "Input must be number between 1 and 7";
        break; 
}
console.log(resultName1);

/* 3.Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7 */

var date = 2;
var resultDate = "";

switch (date) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        resultDate = "It's weekday";
        break;
    case 6:
    case 7:
        resultDate = "It's weekend";
        break;
    default:
        resultDate = "Input must be number between 1 and 7";
        break;
}
console.log(resultDate);

/*4.Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12".*/

var month = 2;
var resultMonth = "";

switch (month) {
    case 1:
        resultMonth = "January";
        break;
    case 2:
        resultMonth = "February";
        break;
    case 3:
        resultMonth = "March";
        break;
    case 4:
        resultMonth = "April";
        break;
    case 5:
        resultMonth = "May";
        break;
    case 6:
        resultMonth = "June";
        break;
    case 7:
        resultMonth = "July";
        break;
    case 8:
        resultMonth = "August";
        break;
    case 9:
        resultMonth = "Septemeber";
        break;
    case 10:
        resultMonth = "October";
    case 11:
        resultMonth = "November";
        break;
    case 12:
        resultMonth = "December";
        break;
    default:
        resultMonth = "Input must be a number between 1 and 12";
}
console.log(resultMonth);

/*5. Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.*/

var month1 = 3;
var season = "";

switch (month1) {
    case 12:
    case 1:
    case 2:
        season = "It is winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "It is spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "It is summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "It is autumn";
        break;
    default:
        season = "Input must be a number between 1 and 12"; 
        break;
}
console.log(season);

/* 6.Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job", B - "Pretty good", C - "Passed" , D - "Not so good" F - "Failed" 
Input different from letters A-F outputs a message "Unknown grade" */

var grade = "A";
var message = "";

switch (grade) {
    case "A":
        message = "Good job";
        break;
    case "B":
        message= "Pretty good";
        break;
    case "C":
        message = "Passed";
        break;
    case "D":
        message = "Not so good";
        break;
    case "F":
        message = "Failed";
        break;
    default:
        message = "Unknown grade"
        break;
}
console.log(message);

/*7.Write a program that takes as input a city name and outputs the country where the city is.You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message "Please hoose a different city". */

var city = "Verona";
var country = "";

switch (city) {
    case "Madrid":
    case "Barcelona":
    case "Malaga":
        country = "Spain";
        break;
    case "Istanbul":
    case "Izmir":
    case "Nigde":
        country = "Turkey";
        break;
    case "Rome":
    case "Verona":
    case "Milan":
        country = "Italy";
        break;
    case "Paris":
    case "Nice":
    case "Montreuil":
        country = "France";
        break;
    case "Belgrade":
    case "Vranje":
    case "Leskovac":
        country = "Serbia";
        break;
    default:
        country = "Please choose a different city";
        break;
}
console.log(country);

/* 8.Write a program that takes as input two numbers and a string denoting the operation (“+”, “- ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero. */

var num1 = 6;
var num2 = 2;
var operation = "-";

switch (operation) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2, num2-num1);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2, num2/num1);
        break;
}














