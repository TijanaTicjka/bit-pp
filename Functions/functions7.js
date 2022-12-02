"use strict";

/* 1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner's name, geographic location, job title.
● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids."
Call that function 3 times with 3 different values for the arguments.*/

function tellFortune(numberOfChildern, partnersName, location, jobTitle) {
    var fortune = "You will be a " + jobTitle + " in " + location + " and married to " + partnersName + " with " + numberOfChildern + " kids";
    console.log(fortune);
    //return fortune;
} 

//var a1 = tellFortune(0, "Emre", "Belgrade", "developer");
//console.log(a1);
tellFortune(0, "Emre", "Belgrade", "developer");
tellFortune(1, "Ozcan", "Rome", "law specialist");
tellFortune(2, "Emre Ozcan", "Madrid", "painter");

/* 2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy's age.
● calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years. */

function calculateDogAge(dogAge) {
    var hDogAge = 7 * dogAge;
    console.log("Your doggie is " + hDogAge + " years old in dog years!");
    //return "Your doggie is " + hDogAge + " years old in dog years!";
}

//a2 = calculateDogAge(3);
//console.log(a2);

calculateDogAge(3);
calculateDogAge(1);
calculateDogAge(13.7);

//Bonus

function calculateDogAge(dogAge, rate) {
    var hDogAge = rate*dogAge;
    return "Your doggie is " + hDogAge + " years old in dog years!";
}

var a2$ = calculateDogAge(3,7);
console.log(a2$);

/* 3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calculateSupply(age, amountPerDay) {
    var amount = 0;
    var ageMax = 100;
    for (var i = age; i < 100; i++) {
        amount += amountPerDay*365;
    }
    return "You will need " + amount + " cups of cafee to last you until the ripe old age of " + ageMax; 
}

var a3 = calculateSupply(33, 2.5);
console.log(a3);

// Bonus - What is the function for round number in JS? Math.round()?

function calculateSupply(age, amountPerDay) {
    var amount = 0;
    var ageMax = 100;
    for (var i = age; i < 100; i++) {
        amount += amountPerDay*365;
    }
    return "You will need " + Math.round(amount) + " cups of cafee to last you until the ripe old age of " + ageMax; //Math.round(amount); 
}

var a3$ = calculateSupply(33, 2.5);
console.log(a3$);

/* 4. It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output ""NN°C is NN°F".
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output "NN°F is NN°C" */

function celsiusToFahrenheit(c) {
   var f = (9 * c)/5 + 32;
   return c + " °C is " + f + " °F";
}

var a4 = celsiusToFahrenheit(21);
console.log(a4);

function FahrenheitToCelsius(f$) {
    var c$ = ((f$ -32)*5) / 9;
    return f$ + " °F is " + c$ + " °C";
 }
 
 var a4$ = FahrenheitToCelsius(70);
 console.log(a4$);