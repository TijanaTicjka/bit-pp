"use strict";

/* Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value to the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% */

function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee (name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype.getDate = function () {
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
    return this.salary + this.salary/100 * 10;
}

// Inheritance methods
Employee.prototype = Object.create(Person.prototype);
//Overwrite
Employee.prototype.constructor = Person;

function Developer (name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype.getSpecialization = function() {
    console.log(this.specialization);
}

// Inheritance methods
Developer.prototype = Object.create(Employee.prototype);
//Overwrite
Developer.prototype.constructor = Developer;

function Manager (name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (value) { 
    return this.department = value;
}

// Inheritance methods
Manager.prototype = Object.create(Employee.prototype);
//Overwrite
Manager.prototype.constructor = Manager;

/* Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars */

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
   
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

/* 2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React */

WebApp.prototype.getDate = function () {
    console.log(this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars);
}

WebApp.prototype.reactBased = function () { return this.technologies === "React";}

/* 3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is Android */

MobileApp.prototype.getData = function () {
    console.log(this.name + " " + this. platforms + " " + this.licence + " " + this.stars);
}

MobileApp.prototype.forAndroid = function () { return this.platforms === "Android";}

/* 4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative Commons)
○ like which increases the number of stars by one */

WebApp.prototype.isCCLicence = function () {return this.licence === "CC"};
WebApp.prototype.like = function () {return this.stars + 1};

MobileApp.prototype = Object.create(WebApp.prototype);
MobileApp.prototype.constructor = MobileApp;
    
//var web = new WebApp("BIT", "https://www.bgit.rs/en/","React","CC",3)
//console.log(web);
// var test = web.like();
// console.log(test);
var mob = new MobileApp("KFC", "Android", "CC", 33);
var test = mob.like();
console.log(test);
    
