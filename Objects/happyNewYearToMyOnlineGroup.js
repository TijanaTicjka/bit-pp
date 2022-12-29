"use strict";

function MemberOfOnlineGroup4(n, m){
    this.name = n;
    this.memory = m; 
};

var life = new MemberOfOnlineGroup4("Dario",["sorrow", "happy"]);

function happy_new_year_2023(your_life) {
    var i = 2022;
    while (i >= 0){
        if (your_life.memory[i] === ("sorrow"|| "pain" || "angry" || "hate" || "envy" || "sadness" || "hopeless")){
            delete your_life.memory[i]; //free memory :);
        } else {
            //keep memory fresh :);
        }
        i--;
    };
    var happiness = "Everything what you think, what you say, and what you do are in harmony.";
    your_life.year2023 = [];
    var date = Math.floor(new Date().getTime()/1000/60/60/24);
    var date2023 = Math.floor(new Date("1 January 2024").getTime()/1000/60/60/24);
    for (var i = date; i < date2023 ; i++){
        your_life.year2023.push(happiness);
    }
    /* never come out of this loop*/
    return your_life;
}

var new_year_wishes_to_every_member_of_online_group4 = happy_new_year_2023(life);
console.log(new_year_wishes_to_every_member_of_online_group4);