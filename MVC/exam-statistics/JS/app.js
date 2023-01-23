/* In app.js file:
● Declare all necessary variables for managing passed and failed
exams as well as their statistics.
● Write all code that connects a user behaviour with application logic. */
var subject = document.querySelector("#subject");
var student = document.querySelector("#name");
var grade = document.querySelector("#grade");
var add = document.querySelector("#add");
var listP = document.querySelector(".result-message-p");
var listF = document.querySelector(".result-message-f")
var numberOfPassed = document.querySelector(".number");
var numberOfFalled = document.querySelector(".number1");
var procentageOfFalled = document.querySelector(".procentage1")

add.addEventListener("click",collectDate)