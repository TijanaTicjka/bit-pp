
// Practice call;

// function first(x) {
//     console.log(x,this);
// }

// var dog = {
//     name: "Eli",
//     ages: "2 years"
// }

// first(6);

// first.call(dog, 10);

// Practice call on methods

var dog = {
    name: "Eli",
    ages: "2 years",
    showInfo: function(price) {
        return price + " " + this.name + " " + this.ages;
    }   
}

// var result = dog.showInfo("100 euro");
// console.log(result);

var dog1 = {
    name: "Lusi",
    ages: "7 years"
}

// console.log(dog.showInfo.call(dog1, " 200e euro"));

// Practice call on methods without parametars
var dog = {
    name: "Eli",
    ages: "2 years",
    showInfo: function() {
        return this.name + " " + this.ages;
    }   
}

// var result = dog.showInfo("100 euro");
// console.log(result);

//Practice apply on methods
var dog1 = {
    name: "Lusi",
    ages: "7 years"
}

// console.log(dog.showInfo.call(dog1));

var dog = {
    name: "Eli",
    ages: "2 years",
    showInfo: function(price) {
        return price + " " + this.name + " " + this.ages;
    }   
}

// var result = dog.showInfo("100 euro");
// console.log(result);

var dog1 = {
    name: "Lusi",
    ages: "7 years"
}

// console.log(dog.showInfo.apply(dog1, ["200e euro"]));

//Pactice bind on methods

var dog = {
    name: "Eli",
    ages: "2 years",
    showInfo: function(price) {
        return price + " " + this.name + " " + this.ages;
    }   
}

// var result = dog.showInfo("100 euro");
// console.log(result);

var dog1 = {
    name: "Lusi",
    ages: "7 years"
}

var newDog = dog.showInfo.bind(dog1, "200 euro");
console.log(newDog());