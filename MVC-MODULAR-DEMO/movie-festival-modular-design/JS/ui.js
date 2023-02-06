"use strict";





var uiModule = (function() {
    var title = document.querySelector("#title");
    var movieLength = document.querySelector("#length");
    var genre = document.querySelector("#genre");
    var error = document.querySelector("#error");
    var movieList = document.querySelector("#movie-list");
    var date = document.querySelector("#date");
    var errorP = document.querySelector("#error-p");
    var pList = document.querySelector(".p-list");
    var choosenMovie = document.querySelector("#choose-movie");
    var selectedProgram = document.querySelector("#select-program");
    
    var collectAndValidateMovie = function() {
        var movieTitle = title.value;
        var movieDuration = movieLength.value;
        var movieGenre = genre.value;
        if (!movieTitle || !movieDuration || !movieGenre) {
        error.textContent = "All fields are required!";
        return;
        }
        error.textContent = "";
        return{
            title: movieTitle,
            length: movieDuration,
            genre: movieGenre
        }
    }

    var createMovie1 = function(o){
        var option = document.createElement("li");
        var content = o.getInfo();
        option.textContent = content;
        movieList.appendChild(option);
        var title1 = o.title;
        var option1 = document.createElement("option");
        option1.textContent = title1;
        choosenMovie.appendChild(option1);
        option1.setAttribute("value",title1);
        return o;
    }

    var addMovieToFestival = function (f,m) {
        var l = f.listOfAllMovies.push(m);
        return l.length;
    }
    var clearMovieInputs = function() {
        title.value = "";
        movieLength.value = "";
        genre.value = "genre";
    }

    // var createProgram1 = function() {
    //     var date1 = date.value;
    //     //var movieNumber = document.querySelectorAll("#movie-list li").length;
    //     var duration = movieLength.value;
    //     console.log(duration);
    //     var total = date1 + ", " + movieNumber + " movies" + ", " + "duration: " + duration + " min";
    //     var list = document.createElement("li");
    //     list.textContent = total;
    //     pList.appendChild(list);
    //     var program = document.createElement("option");
    //     program.textContent = total;
    //     selectedProgram.appendChild(program);
    // }
    return {
        collectAndValidateMovie:collectAndValidateMovie,
        createMovie1: createMovie1,
        addMovieToFestival: addMovieToFestival,
        clearMovieInputs: clearMovieInputs,
        //createProgram1: createProgram1,
       }
    })()
    
    
    
    
    // function createProgram1() {
    //   var date1 = new Program(date.value);
    //   console.log(date1);
    //   var newList = date1.addMovie();
    //   // date1.listOfMovies = newList;
    //   // console.log(date1.getProgram());
    
    // }