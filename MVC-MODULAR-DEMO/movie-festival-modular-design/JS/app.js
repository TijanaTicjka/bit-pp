"use strict";
var mainModule =(function(data,ui) {
    var onCreateMovie = function () {
        var allData = ui.collectAndValidateMovie();
        var o = data.createMovie(allData.title, allData.length, allData.genre);
        ui.createMovie1(o);
        ui.clearMovieInputs();
    }
    var onCreateProgram =function(){
        ui.createProgram1();
       
    }
    var movieButton = document.querySelector("#create-movie");
    var programButton = document.querySelector("#create-program");
    var addedMovie = document.querySelector("#add-movie");
    movieButton.addEventListener("click",onCreateMovie);
    programButton.addEventListener("click", onCreateProgram)
})(dataModule,uiModule)