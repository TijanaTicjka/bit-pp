var festival = new Festival();

var createMovie = document.querySelector("#create-movie");
var createProgram = document.querySelector("#create-program");
var addedMovie = document.querySelector("#add-movie")
var title = document.querySelector("#title");
var movieLength = document.querySelector("#length");
var genre = document.querySelector("#genre");
var error = document.querySelector("#error");
var movieList = document.querySelector("#movie-list");
var date = document.querySelector("#date");
var errorP = document.querySelector("#error-p");
var pList = document.querySelector("#p-list");
var chooseMovie = document.querySelector("#choose-movie");
var selectProgram = document.querySelector("#select-program");

function createMovie1() {
  var titleMovie = title.value;
  var mLength = movieLength.value;
  var movieGenre = genre.value;
  if (!titleMovie || !mLength || !movieGenre) {
    error.textContent = "Required fields aren't populated";
    return;
  }
  error.textContent = "";
  var movie = new Movie(titleMovie, mLength, movieGenre);
  var option = document.createElement("li");
  var content = movie.getInfo();
  option.textContent = content;
  movieList.appendChild(option);
  var title1 = movie.title;
  var option1 = document.createElement("option");
  option1.textContent = title1;
  chooseMovie.appendChild(option1);
  option1.setAttribute("value",title1);
}


function createProgram1() {
  var date1 = new Program(date.value);
  console.log(date1);
  var newList = date1.addMovie();
  // date1.listOfMovies = newList;
  // console.log(date1.getProgram());

}
createMovie.addEventListener("click", createMovie1);
createProgram.addEventListener('click', createProgram1);


