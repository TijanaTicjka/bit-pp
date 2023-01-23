class Exam {
    constructor(sub, student, grade){
        this.sub = sub;
        this.student = student;
        this.grade = grade;
    }
    getExamInfo(){
       var s = new Student(this.student);
       var s1 = s.getStudentData()
       return this.sub + " " + s1;
    }
    hasPassed(){
        if(this.grade > 5) { 
            return "PASSED";
        } else {
            return "FALLED"
        }
    }
}