"use strict"

/* 3. Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */

//Task modifed with reserved word this

/* function creatProject(d, pL, gR, bS) {
    return {
        description: d,
        "programming language": pL,
        "git repository" : gR,
        boolenStatus: bS,
        print: function() {
            console.log(this[["git repository"]]);
        },
        checkLang: function () {
            return this[["programming language"]] === "JS" 
        },
        checkBoolen: function () {
            return this.boolenStatus;
        },
    }
}

var res = creatProject("WheatherForecastApp","JS","pp", true);
console.log(res); */

// Task done as Constructor Function

function Project(d, pL, gR, bS) {
    this.description = d,
    this.programmingLanguage = pL,
    this.gitRepository = gR,
    this.boolenStatus = bS,
    this.print = function() {
            console.log(this.gitRepository);
        },
    this.checkLang = function () {
            return this.programmingLanguage === "JS"; 
        },
    this.checkBoolen = function () {
            return this.boolenStatus;
        }
    }

var res = new Project("WheatherForecastApp","JS","pp", true);

console.log(res);

/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients. */

// Task modifed with reserved word this

/* function makeRecipe(n, type, c, l, t, i) {
    return {
        name: n,
        typeOfCousine: type,
        comlexity: c,
        ingredients:l,
        timeForPreparig: t,
        instruction: i,
        printIncredients: function(){
            console.log(this.ingredients);
        },
        checkTime: function () {
            return this.timeForPreparig < 15;
        },
        changeCousine: function(newT){
            this.typeOfCousine = newT;
        },
        deleteIncredient: function (incredient) {
            var newList = [];
            for (var i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i]!== incredient) {
                    newList[newList.length] = this.ingredients[i];
                }
            }
            this.ingredients = newList;
        },
    }
}

var meal = makeRecipe("Pasta", "Italian", 3, ["tomato sauce", "garlic", "onion", "fresh basil", "cherry tomatoes", "parmesan"],20,"Some instraction how to prepera")

meal.deleteIncredient("tomato sauce");
console.log(meal); */

// Task done as Constructor Function

function Recipe(n, type, c, l, t, i) {
    this.name = n,
    this.typeOfCousine = type,
    this.comlexity = c,
    this.ingredients = l,
    this.timeForPreparig = t,
    this.instruction = i,
    this.printIncredients = function(){
        console.log(this.ingredients);
    },
    this.checkTime = function () {
        return this.timeForPreparig < 15;
    },
    this.changeCousine = function(newT){
        this.typeOfCousine = newT;
    },
    this.deleteIncredient = function (incredient) {
        var newList = [];
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i]!== incredient) {
                newList[newList.length] = this.ingredients[i];
            }
        }
        this.ingredients = newList;
    }
}

var meal = new Recipe("Pasta", "Italian", 3, ["tomato sauce", "garlic", "onion", "fresh basil", "cherry tomatoes", "parmesan"],20,"Some instraction how to prepera")

meal.deleteIncredient("tomato sauce");
console.log(meal);

// Checked  how JSON.stingify and JSON.parse work
var mealstr = JSON.stringify(meal);
var mealstr1 = JSON.parse(mealstr);

console.log(mealstr); 
console.log(mealstr1);

