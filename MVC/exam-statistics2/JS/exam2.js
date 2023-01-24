"use strict";

class Exam {
    constructor(sub, student, grade){
        if(!sub instanceof Subject){
            throw new Error("Invalid!");
        }
        if(!student instanceof Student){
            throw new Error("Invalid!");
        }
        this.sub = sub;
        this.student = student;
        this.grade = grade;
    }
    getExamInfo(){
       return this.sub + " " + this.student;
    }
    hasPassed(){
        if(this.grade > 5) { 
            return true; 
        } else {
            return false;
        }
    }
}