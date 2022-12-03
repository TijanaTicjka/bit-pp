/* 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! */

var favCoffe = {
    name: "Cappuccino",
    strength: "Medium Roast",
    flavour: "Vanilla",
    milk: "Soy milk",
    sugar: "Brown",
};

/* 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. */

var favMovie = {
    title: "The Notebook",
    actors: ["Rachel McAdams","Ryan Gosling", "James Garner","Gena Rowlands", "James Marsden", "David Thornton"],
    director: "Nick Cassavetes",
    genre: "Drama-Romance",
    popularity: "7.8 stars",
};

/* 3. Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */

function creatProject(d, pL, gR, bs) {
    var project = {
        desecription: d,
        "programming language": pL,
        "git repository" : gR,
        boolenStatus: bs,
        print: function() {
            console.log(project["git repository"]);
        },
        checkLang: function () {
            return project["programming language"] === "JS" 
        },
        checkBoolen: function () {
            return project.boolenStatus;
        },
    }
    return project;
}

var res = creatProject("WheatherForecastApp","JS","pp", true);

console.log(res);

// console.log(res.checkBoolen());
// res.print()

/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients. */

function makeRecipe(n, type, c, l, t, i) {
    var recipe = {
        name: n,
        typeOfCousine: type,
        comlexity: c,
        ingredients:l,
        timeForPreparig: t,
        instruction: i,
        printIncredients: function(){
            console.log(recipe.ingredients);
        },
        checkTime: function () {
            if (recipe.timeForPreparig < "15 minutes") {
                return true;
            } else {
                return false;
            }
        },
        changeCousine: function(newT){
            recipe.typeOfCousine = newT;
        },
        deleteIncredient: function (x) {
            var newList = [];
            for (var i = 0; i < recipe.ingredients.length; i++) {
                if (recipe.ingredients[i]!== x) {
                    newList[newList.length] = recipe.ingredients[i];
                }
            }
            recipe.ingredients = newList;
        },
    }
    return recipe;
}

var meal = makeRecipe("Pasta", "Italian", 3, ["tomato sauce", "garlic", "onion", "fresh basil", "cherry tomatoes", "parmesan"],"20 minutes","Some instraction how to prepera")

meal.deleteIncredient("tomato sauce");
console.log(meal);


