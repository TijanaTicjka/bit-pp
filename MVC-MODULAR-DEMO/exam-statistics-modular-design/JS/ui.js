"use strict";

var uiModule = (function () {
    var subject = document.querySelector("#subject");
    var student = document.querySelector("#name");
    var grade = document.querySelector("#grade");
    var listP = document.querySelector(".result-message-p");
    var listF = document.querySelector(".result-message-f");
    var numberOfPassed = document.querySelector(".number");
    var numberOfFailed = document.querySelector(".number1");
    var procentageOfFailed = document.querySelector(".procentage1");
    var errorMessage = document.querySelector(".error");
    var title = document.querySelector("h2");

    var collectData = function () {
        return {
            subject: subject.value,
            student: student.value,
            grade: grade.value,
        }
    }

    var validateData = function(o) {
        if(o.subject === "Choose subject" || o.student === "" || o.grade === "Grade"){
            var subjectError = "All fields are required!";
            errorMessage.textContent = subjectError;
            return false;
        } else {
          errorMessage.textContent = "";
          return true;
        } 
    }
    var addExamItemPassed = function (studentInfo, mark) {
        var lP = document.createElement("li");
        lP.textContent = "PASSED";
        listP.appendChild(lP);
        lP.classList.add("passed-li");
        var infoS = document.createElement("li");
        var subjectAndName = document.createElement("div");
        subjectAndName.textContent = studentInfo;
        subjectAndName.classList.add("sub-name-p");
        infoS.appendChild(subjectAndName);
        var infoG = document.createElement("div");
        infoG.textContent = mark;
        infoG.classList.add("grade-style-passed")
        listP.appendChild(infoS);
        infoS.appendChild(infoG);
        infoS.style.borderBottom="1px solid gray";
        infoS.style.padding="10px";
        var allLiP = document.getElementsByClassName("passed-li").length;
        numberOfPassed.textContent = allLiP;
        numberOfPassed.classList.add("counterP");
        subject.value = "Choose subject";
        student.value = "";
        grade.value = "Grade";
    }

    var addExamItemFailed = function(studentInfo, mark) {
        var lF = document.createElement("li");
        lF.textContent = "FAILED";
        listF.appendChild(lF);
        lF.classList.add("failed-li");
        var infoS = document.createElement("li")
        var subjectAndName = document.createElement("div");
        subjectAndName.textContent = studentInfo;
        subjectAndName.classList.add("sub-name-f");
        infoS.appendChild(subjectAndName);
        var infoG = document.createElement("div");
        infoG.textContent = mark;
        infoG.classList.add("grade-style-failed")
        listF.appendChild(infoS);
        infoS.appendChild(infoG);
        infoS.style.borderBottom="1px solid gray";
        infoS.style.padding="10px";
        var allLiF = document.getElementsByClassName("failed-li").length;
        numberOfFailed.textContent = allLiF;
        numberOfFailed.classList.add("counterF");
        subject.value = "Choose subject";
        student.value = "";
        grade.value = "Grade";
    }

    var updateStatistic = function() {
        var allLi = document.getElementsByTagName("li").length/2;
        title.textContent = "Total students:" + " " + allLi;
        var allLiF = document.getElementsByClassName("failed-li").length;
        var p = 0;
        if (allLi === 0){
            procentageOfFailed.textContent = "";
            return;
        }
        if (allLiF === 0) {
            allLiF = 1;
            procentageOfFailed.textContent = p.toFixed(2) + " %";
        }else{
            p = (allLiF*100)/allLi;
            procentageOfFailed.textContent = p.toFixed(2) + " %";
        }
        procentageOfFailed.classList.add("procentage2");
    }

    return {
        collectData: collectData,
        validateData: validateData,
        addExamItemPassed: addExamItemPassed,
        addExamItemFailed: addExamItemFailed,
        updateStatistic: updateStatistic,
    }
})()
















