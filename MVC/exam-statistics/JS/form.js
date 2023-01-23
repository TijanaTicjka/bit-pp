/* In form.js file:
● write a function that collects all the data from the form
● write a function that validates all collected data
● write a function that updates the given list so it adds the new item at
the end of the list
● write a function that updates the part of the page with the statistics */

function collectDate() {
    var choosenSubject = subject.value;
    var choosenStudent = student.value;
    var finalGrade = grade.value;
    var exam1 = new Exam(choosenSubject,choosenStudent,finalGrade);
    var g = exam1.grade;
    var s = exam1.sub; // var s = exam1.getExamInfo();
    var lP = document.createElement("li");
    var lF = document.createElement("li");
    var test = exam1.hasPassed();
    if (test === "PASSED"){
        lP.textContent = test;
        listP.appendChild(lP);
        lP.classList.add("passed-li");
        var h = document.createElement("hr")
        listP.appendChild(h);
        var infoS = document.createElement("p");
        infoS.textContent = s;
        infoS.style.display="inline";
        var infoG = document.createElement("p");
        infoG.textContent = g;
        infoG.style.display="inline";
        infoG.style.marginLeft = "150px"
        listP.appendChild(infoS);
        listP.appendChild(infoG);
        h = document.createElement("hr")
        listP.appendChild(h);
        var allLiP = document.getElementsByClassName("passed-li").length;
        numberOfPassed.textContent = allLiP;
        numberOfPassed.classList.add("counterP");

    } else {
        lF.textContent = test;
        listF.appendChild(lF);
        lF.classList.add("falled-li");
        var h = document.createElement("hr");
        listF.appendChild(h);
        var infoS = document.createElement("p");
        infoS.textContent = s;
        infoS.style.display="inline";
        var infoG = document.createElement("p");
        infoG.textContent = g;
        infoG.style.display="inline";
        infoG.style.marginLeft="150px";
        infoG.style.color="tomato";
        listF.appendChild(infoS);
        listF.appendChild(infoG);
        h = document.createElement("hr")
        listF.appendChild(h);
        var allLiF = document.getElementsByClassName("falled-li").length;
        numberOfFalled.textContent = allLiF;
        numberOfFalled.classList.add("counterF");
        procentageOfFalled.classList.add("procentageF");
    }
    // var allLi = document.getElementsByTagName("li").length;
    // var p = (allLiF*100)/allLi;
    // procentageOfFalled.textContent = p;
}



