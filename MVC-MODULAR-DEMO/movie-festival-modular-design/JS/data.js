"use strict";
var dataModule =(function () {
    class Festival{
        constructor(){
            this.listOfAllMovies = [];
            this.listOfAllPrograms = [];
        }
    }
    var createFestival= function(){
        return new Festival();
    }
    class Movie{
        constructor(title,length,genre){
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getCode() {
            var first = this.genre[0].toUpperCase();
            var last = this.genre[this.genre.length-1].toUpperCase();
            return first + last; 
        }
        getInfo() {
            return this.title + " " + this.length + "min" + " " + this.getCode();
        }
    }
    var createMovie = function(title,length,genre){
        return new Movie(title,length,genre);
    }
    class Program {
        constructor(date,movie){
            if (!(movie instanceof Movie)) {
                throw new Error('Invalid movie input!');
            }
            this.date = date;
            this.listOfMovies = [];
        }
        addMovie () {
            this.listOfMovies.push();
        }
        getTotalDuration(){
            var total = 0;
            this.listOfMovies.forEach(function(movie) {
                total += movie.length  //duration;
                return total;
            })
        }
        getNumberOfMovies() {
            return this.listOfMovies.length;
          };
        getProgram(){
            return this.date + ", " + this.getNumberOfMovies() + ", " + this.getTotalDuration() + " min";
        }
    }
    var createProgram = function(date,movie){
        return new Program(date,movie);
    }

    return {
        createFestival:createFestival,
        createMovie: createMovie,
        createProgram: createProgram
    }
    
})()