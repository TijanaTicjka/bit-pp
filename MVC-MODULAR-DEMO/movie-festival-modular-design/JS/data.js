class Festival{
    constructor(){
        this.listOfAllMovies = [];
        this.listOfAllPrograms = [];
    }
}

class Movie{
    constructor(title,length,genre){
        this.title = title;
        this.length = length;//duration
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

class Program {
    constructor(date){
        this.date = new Date(date);
        this.listOfMovies = [];
    }
    addMovie (movie) {
        if (!(movie instanceof Movie)) {
            throw new Error('Invalid movie input!');
        }
        this.listOfMovies.push(movie);
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